'use client';

import { useState, useRef, useCallback } from 'react';
import { toPng } from 'html-to-image';
import { questions, calculateResult } from '@/lib/data';
import type { Personality } from '@/lib/data';

type Stage = 'start' | 'quiz' | 'result';

const floatingEmojis = ['🔥', '📊', '🤝', '🎯', '🚽', '🛡️', '📝', '🍵', '🤪', '🧘', '💀', '👀', '🤡', '🫠'];

export default function Home() {
  const [stage, setStage] = useState<Stage>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<Personality | null>(null);
  const [sharing, setSharing] = useState(false);
  const resultCardRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setStage('quiz');
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption(null);
    setResult(null);
  };

  const handleAnswer = (optionIndex: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optionIndex);

    const newAnswers = { ...answers, [questions[currentQuestion].id]: optionIndex };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
      } else {
        const res = calculateResult(newAnswers);
        setResult(res);
        setStage('result');
        setSelectedOption(null);
      }
    }, 400);
  };

  const handleRetry = () => {
    setStage('start');
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption(null);
    setResult(null);
  };

  const handleShare = useCallback(async () => {
    if (!resultCardRef.current) return;
    setSharing(true);
    try {
      const dataUrl = await toPng(resultCardRef.current, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: '#FFE135',
      });
      const link = document.createElement('a');
      link.download = `我是${result?.name || '大厂人'}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      alert('截图失败了，试试直接截图吧！');
    } finally {
      setSharing(false);
    }
  }, [result]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-neon-yellow flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-6 text-5xl opacity-20 rotate-12 select-none">💼</div>
        <div className="absolute top-20 right-8 text-6xl opacity-20 -rotate-12 select-none">☕</div>
        <div className="absolute bottom-20 left-10 text-4xl opacity-20 rotate-45 select-none">📱</div>
        <div className="absolute bottom-32 right-6 text-5xl opacity-20 -rotate-6 select-none">💻</div>
      </div>

      {stage === 'start' && (
        <div className="flex flex-col items-center gap-8 w-full max-w-lg relative z-10">
          {/* Floating emojis */}
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {floatingEmojis.slice(0, 10).map((emoji, i) => (
              <span
                key={i}
                className="text-3xl select-none animate-float"
                style={{ animationDelay: `${i * 0.25}s`, animationDuration: `${2.5 + (i % 3) * 0.5}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>

          <h1 className="font-display text-7xl md:text-8xl text-brutal-black leading-none text-center">
            WHICH
            <br />
            <span className="text-neon-pink">BIG TECH</span>
            <br />
            WORKER
            <br />
            ARE YOU?
          </h1>

          <h2 className="text-2xl md:text-3xl font-extrabold text-brutal-black text-center -mt-2">
            测测你是哪种<span className="text-neon-purple">大厂人</span>
          </h2>

          <p className="text-base text-brutal-black/70 text-center max-w-sm">
            20道题 · 10种人格 · 如有雷同那你也是大厂人
          </p>

          <button
            onClick={handleStart}
            className="bg-neon-pink text-white font-extrabold text-2xl px-12 py-5 rounded-xl brutal-border brutal-shadow-lg
                       hover:bg-neon-pink/90 active:translate-x-1 active:translate-y-1 active:shadow-none
                       transition-all cursor-pointer select-none"
          >
            开始测试 🔥
          </button>
        </div>
      )}

      {stage === 'quiz' && q && (
        <div className="w-full max-w-lg relative z-10 animate-pop-in" key={currentQuestion}>
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="font-display text-3xl text-brutal-black">
                Q{currentQuestion + 1}
              </span>
              <span className="text-sm font-bold text-brutal-black/50">
                {currentQuestion + 1}/{questions.length}
              </span>
            </div>
            <div className="w-full h-3 bg-white brutal-border rounded-full overflow-hidden">
              <div
                className="h-full bg-neon-pink transition-all duration-500 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white brutal-border brutal-shadow-lg p-6 md:p-8 rounded-xl mb-6">
            <p className="text-lg md:text-xl font-bold text-brutal-black leading-relaxed">
              {q.text}
            </p>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {q.options.map((option, i) => {
              const labels = ['A', 'B', 'C', 'D'];
              const colors = [
                'bg-neon-pink hover:bg-neon-pink/90',
                'bg-neon-cyan hover:bg-neon-cyan/90',
                'bg-neon-purple hover:bg-neon-purple/90',
                'bg-neon-orange hover:bg-neon-orange/90',
              ];
              const isSelected = selectedOption === i;

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={selectedOption !== null}
                  className={`flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl brutal-border brutal-shadow-sm
                              text-left text-white font-bold cursor-pointer select-none
                              transition-all ${colors[i]}
                              ${isSelected ? 'translate-x-1 translate-y-1 shadow-none opacity-80' : 'hover:-translate-y-0.5'}
                              ${selectedOption !== null && !isSelected ? 'opacity-50' : ''}`}
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-lg font-display">
                    {labels[i]}
                  </span>
                  <span className="text-sm md:text-base leading-snug">{option.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {stage === 'result' && result && (
        <div className="flex flex-col items-center gap-6 w-full max-w-lg relative z-10 animate-pop-in">
          {/* Shareable result card */}
          <div
            ref={resultCardRef}
            className="w-full bg-white brutal-border brutal-shadow-lg rounded-xl overflow-hidden"
          >
            {/* Card header */}
            <div className="bg-brutal-black p-6 text-center">
              <div className="text-7xl mb-3">{result.emoji}</div>
              <div className="font-display text-2xl text-neon-yellow mb-1">
                YOUR BIG TECH SPIRIT ANIMAL
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                {result.name}
              </h2>
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col gap-4">
              <p className="text-xl font-bold text-neon-pink text-center italic">
                「{result.tagline}」
              </p>

              <p className="text-base text-brutal-black/80 leading-relaxed">
                {result.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {result.traits.map((trait, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-neon-yellow brutal-border brutal-shadow-sm text-sm font-bold text-brutal-black rounded-lg"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              <div className="bg-neon-pink/10 brutal-border rounded-lg p-3 text-sm font-bold text-neon-pink">
                {result.warning}
              </div>

              {/* Fake footer for the card aesthetic */}
              <div className="flex justify-between items-center pt-3 border-t-[3px] border-brutal-black">
                <span className="text-xs font-bold text-brutal-black/40">
                  BIGTECHTEST.VERCEL.APP
                </span>
                <span className="text-xs font-bold text-brutal-black/40">
                  测测你是哪种大厂人
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              onClick={handleShare}
              disabled={sharing}
              className="flex-1 bg-neon-pink text-white font-extrabold text-lg px-6 py-4 rounded-xl brutal-border brutal-shadow
                         hover:bg-neon-pink/90 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                         transition-all cursor-pointer select-none disabled:opacity-50"
            >
              {sharing ? '生成中...' : '📸 保存结果卡片'}
            </button>
            <button
              onClick={handleRetry}
              className="flex-1 bg-white text-brutal-black font-extrabold text-lg px-6 py-4 rounded-xl brutal-border brutal-shadow
                         hover:bg-gray-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none
                         transition-all cursor-pointer select-none"
            >
              🔄 再测一次
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
