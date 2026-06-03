export interface Personality {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  traits: string[];
  warning: string;
}

export interface Option {
  text: string;
  type: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const personalities: Personality[] = [
  {
    id: 'dajujuan',
    name: '大大卷超人',
    emoji: '🦸',
    tagline: '卷不是负担，是呼吸',
    description: '你的日历上礼拜六和礼拜一没有区别——反正都在工作。你不需要老板push，你push老板。大厂少了你，发电站都得减产。同事看到你的飞书在线时长会怀疑你是不是住在公司。也许你真的该在工位下面放张床。',
    traits: ['自驱狂魔', '工时榜第一', '同事看到都累', '周末=加班'],
    warning: '⚠️ 你的身体可能已经在暗地里计划罢工了。'
  },
  {
    id: 'huangdi',
    name: '一心做皇帝',
    emoji: '👑',
    tagline: '每一步都在往上看',
    description: '工作对你来说不是工作，是棋局。你知道谁要升了、谁要凉了、谁值得站队。你的述职报告读起来像登基宣言。在坐上那个位置之前，先忍忍这些笨蛋同事——反正以后他们得叫你老板。',
    traits: ['精通站队', '述职=登基', '棋手思维', '永远向上看'],
    warning: '⚠️ 小心有一天爬上去发现上面没人了，身边也没有。'
  },
  {
    id: 'gouqie',
    name: '苟且偷生',
    emoji: '🦥',
    tagline: '工资照发就行',
    description: '你的核心KPI是——别被裁。用20%的精力完成工作，用80%的精力让自己看起来很忙。你对得起工资，工资对得起你，扯平。说实话，你可能是全公司最清醒的那个人——这只是一份工。',
    traits: ['摸鱼大师', '精神已离职', '低调隐身', '性价比拉满'],
    warning: '⚠️ 再这样下去你会变成公司里最快乐的人——这很危险。'
  },
  {
    id: 'zhandouji',
    name: '战斗机',
    emoji: '⚔️',
    tagline: '不是我挑事，是你逻辑有漏洞',
    description: '你不是故意惹事——但话不说清楚你浑身难受。开会时火力全开，把隔壁组怼到说不出话是你的日常。你觉得自己在捍卫真理，别人觉得你在捍卫血压。但说真的，你哪次说错了？',
    traits: ['火力全开', '逻辑碾压', '不服就干', '怼人=呼吸'],
    warning: '⚠️ 你赢了一场会议，但可能输了一桌午饭。没人敢跟你吃饭了。'
  },
  {
    id: 'wuchuang',
    name: '误闯天家',
    emoji: '🐣',
    tagline: '我只是来上班的，你们怎么都在演',
    description: '你搞不清谁跟谁一队，也不想去搞清。你认真做完自己的事，准时下班，周末发猫片。大厂里的宫斗跟你有什么关系？你只是一只路过的小可爱。最大的烦恼是今天食堂的菜又咸了。',
    traits: ['职场笨蛋美人', '状况外选手', '认真但天真', '准时下班'],
    warning: '⚠️ 你可能不知道有人在背后搞你——但不知道也好，快乐就完事了。'
  },
  {
    id: 'xipin',
    name: '已读不回细品大师',
    emoji: '🧘',
    tagline: '每条消息都值得被细品',
    description: '每条消息背后都有深意，而你，是深谙此道的品鉴家。从不秒回不是因为你忙——是因为你在品。品透了再决定回不回、怎么回。大厂里最危险的人就是你：信息全在你这里，但从不外泄。',
    traits: ['从不秒回', '信息黑洞', '深谙生存守则', '稳如老狗'],
    warning: '⚠️ 你的老板可能已经在发疯了。但你已读了他的消息，正在品。不急。'
  }
];

export const questions: Question[] = [
  {
    id: 1,
    text: '周一早上刚坐下，老板在群里发了条"有空吗？"——你？',
    options: [
      { text: '秒回"随时有空"，已经开始往老板工位走了', type: 'dajujuan' },
      { text: '先琢磨老板最近在盯什么、为什么是今天，再编辑好措辞回复', type: 'huangdi' },
      { text: '看到了。但不回。先泡杯咖啡，品一品这句话的上下文', type: 'xipin' },
      { text: '心里一紧，先假装没看到，去茶水间接了杯水', type: 'gouqie' },
    ]
  },
  {
    id: 2,
    text: '开会时两个同事为一个方案吵起来了——你？',
    options: [
      { text: '直接加入讨论，指出双方各自的问题并提出第三种方案', type: 'zhandouji' },
      { text: '低头假装记笔记，其实在画圈——打得赢就打，打不赢跟我没关系', type: 'gouqie' },
      { text: '观察谁更占理、老板的眼神偏向谁，会后单独找对人', type: 'huangdi' },
      { text: '在心里疯狂吐槽，然后给同桌同事发了条"打起来打起来.jpg"', type: 'wuchuang' },
    ]
  },
  {
    id: 3,
    text: '周五下午5:45，老板说"快速对一下下周计划"——你会？',
    options: [
      { text: '打开飞书文档逐条过，顺便把周末的待办也排了进去', type: 'dajujuan' },
      { text: '快速扫一眼内容，不主动发言，能溜就溜', type: 'gouqie' },
      { text: '直接指出计划里有三个不合理的地方', type: 'zhandouji' },
      { text: '已读了消息。但人已经在地铁上了，信号不好等下周一再说', type: 'xipin' },
    ]
  },
  {
    id: 4,
    text: '同事被老板当众批评了——你？',
    options: [
      { text: '觉得老板批得有道理，换成自己也会这么说', type: 'zhandouji' },
      { text: '默默记下：不是他被批的原因，而是老板今天情绪不好的原因', type: 'xipin' },
      { text: '记下谁被批了、为什么，默默更新了自己的职场情报库', type: 'huangdi' },
      { text: '觉得同事好惨，偷偷给他桌位放了包零食', type: 'wuchuang' },
    ]
  },
  {
    id: 5,
    text: '一个新项目需要有人牵头——你？',
    options: [
      { text: '主动举手——这活舍我其谁', type: 'dajujuan' },
      { text: '先不表态，观察谁举手了、领导更倾向谁', type: 'xipin' },
      { text: '举手了，因为这是个在关键人物面前露脸的机会', type: 'huangdi' },
      { text: '低头祈祷不要点自己的名', type: 'gouqie' },
    ]
  },
  {
    id: 6,
    text: '老板说了句"我不是针对你"——你觉得接下来？',
    options: [
      { text: '安静听完，记下反馈点，回去默默列改进清单', type: 'dajujuan' },
      { text: '微笑点头，内心逐条反驳——你说得不对，但我不想说了', type: 'zhandouji' },
      { text: '表面认真听，心里已经在盘算这场对话对自己有没有实际损失', type: 'huangdi' },
      { text: '一脸茫然——啊？是不是我哪里做错了？真的不知道', type: 'wuchuang' },
    ]
  },
  {
    id: 7,
    text: '听到隔壁组有人要离职了——你的第一反应是？',
    options: [
      { text: '去了解下是跳槽还是被裁，顺便推演下对自己团队的影响', type: 'huangdi' },
      { text: '有点羡慕，但先品一品这信息背后有没有更大的风暴', type: 'xipin' },
      { text: '啊？原来他也在我们公司？一直不知道', type: 'wuchuang' },
      { text: '少一个人分蛋糕，说明我比自己想的有竞争力', type: 'zhandouji' },
    ]
  },
  {
    id: 8,
    text: '老板在会上说"明年我们要做到行业第一"——你？',
    options: [
      { text: '在心里拆解达成路径，越想越觉得有坑，直接开口问了三连', type: 'zhandouji' },
      { text: '分析这个目标实现后对自己的职级和薪资有什么拉动', type: 'huangdi' },
      { text: '又是一个饼。行吧你说什么就是什么。', type: 'gouqie' },
      { text: '"请问现在的市场份额具体是多少？有对标数据支撑这个目标吗？"', type: 'zhandouji' },
    ]
  },
  {
    id: 9,
    text: '一个没有任何deadline的周三下午——你在做什么？',
    options: [
      { text: '趁没人找，把积压的三个优化方案全写了', type: 'dajujuan' },
      { text: '提前准备下个月的述职素材，好内容都是没压力时磨出来的', type: 'huangdi' },
      { text: '戴着耳机摸鱼，看看外面天气，思考人生的意义', type: 'gouqie' },
      { text: '什么也不干，但什么都不干本身就是一种选择——品一壶茶，品一个下午', type: 'xipin' },
    ]
  },
  {
    id: 10,
    text: '同事在群里分享了一个好消息——你的反应？',
    options: [
      { text: '表面恭喜，然后用这个消息校准自己的职场情报图', type: 'huangdi' },
      { text: '看到了。在心里点了个赞，但不需要我出场回复', type: 'xipin' },
      { text: '比当事人还激动，第一个刷屏恭喜，狂发表情包', type: 'wuchuang' },
      { text: '恭喜完了之后立刻开始想：这个好消息跟我有什么关系', type: 'dajujuan' },
    ]
  },
  {
    id: 11,
    text: '被拉进一个跨部门新项目群——你进群后做的第一件事？',
    options: [
      { text: '不说话，先把每个人的历史发言品一遍，理清关系网再说', type: 'xipin' },
      { text: '快速扫群成员，判断谁能拍板、谁会捣乱、谁只是背景', type: 'huangdi' },
      { text: '发了个"来了来了👋"然后设成免打扰', type: 'wuchuang' },
      { text: '立刻扫了一遍项目文档，直接@了三个可能的坑等着大家讨论', type: 'zhandouji' },
    ]
  },
  {
    id: 12,
    text: '同事让你帮忙做个东西，说"很快的，就几分钟"——你？',
    options: [
      { text: '一口答应——顺便帮他把相关的东西也顺手优化了', type: 'dajujuan' },
      { text: '"我手上堆了三个需求，你先走流程排期吧"', type: 'gouqie' },
      { text: '"这个边界有点模糊吧？要不先对齐一下归哪个组"', type: 'zhandouji' },
      { text: '已读。不回。几天后对方再问的时候说"啊我忘了不好意思"', type: 'xipin' },
    ]
  },
  {
    id: 13,
    text: '公司通知要写年终总结了——你？',
    options: [
      { text: '精心打磨，把每个项目的数据和影响力写到你老板可以直接拿去汇报的程度', type: 'dajujuan' },
      { text: '把全年的工作重新叙事化包装，读起来像一份内部晋升推荐信', type: 'huangdi' },
      { text: '把12个月的周报复制粘贴调了下顺序，花了十分钟', type: 'gouqie' },
      { text: '最后一天才写的，写到一半开始回忆这一年自己到底干了什么', type: 'wuchuang' },
    ]
  },
  {
    id: 14,
    text: '你的飞书/钉钉/企业微信签名是？',
    options: [
      { text: '"有任何事随时找我，凌晨也行"', type: 'dajujuan' },
      { text: '一片空白——签名本身就是一种表达', type: 'xipin' },
      { text: '改成了猫的表情包，昨天是狗', type: 'wuchuang' },
      { text: '"麻烦看完文档再找我，提升沟通效率"', type: 'zhandouji' },
    ]
  },
  {
    id: 15,
    text: '同事发了段60秒语音——你？',
    options: [
      { text: '转换了文字，但不急着回——先看看群里其他人怎么说', type: 'xipin' },
      { text: '转了文字。已读。先品一下对方为什么选择发语音而不是打字', type: 'xipin' },
      { text: '懒得转文字，回了个"收到，了解"', type: 'gouqie' },
      { text: '回了一段65秒的语音——让他也体验一下', type: 'zhandouji' },
    ]
  },
  {
    id: 16,
    text: '公司团建被拉去玩一个很土的游戏——你的反应？',
    options: [
      { text: '全情投入，不但要赢还要拿全场MVP', type: 'dajujuan' },
      { text: '表面笑嘻嘻积极参与，私下跟信得过的同事默默吐槽', type: 'huangdi' },
      { text: '"这游戏设计有瑕疵，为什么不用更公平的积分规则"', type: 'zhandouji' },
      { text: '觉得土但莫名觉得挺好玩的，玩得比谁都开心', type: 'wuchuang' },
    ]
  },
  {
    id: 17,
    text: '老板在群里@你问一个事情的进度——你？',
    options: [
      { text: '立刻回复详细进度+预计完成时间+潜在风险+备选方案', type: 'dajujuan' },
      { text: '看到了@但先不回复。需要斟酌措辞——进度说早了显得很空，说晚了显得在拖', type: 'xipin' },
      { text: '一慌，因为那个事基本还没开始做', type: 'gouqie' },
      { text: '老实说"还在做，有几个地方需要再想想"，从不包装', type: 'wuchuang' },
    ]
  },
  {
    id: 18,
    text: '你发现团队流程里有个明显不合理的地方——你会？',
    options: [
      { text: '直接在大群里指出来，附上你的改进方案，坐等讨论', type: 'zhandouji' },
      { text: '默默改进了，把成果写进周报/述职里', type: 'dajujuan' },
      { text: '觉得不合理但轮不到自己去说——又不会多给我钱', type: 'gouqie' },
      { text: '私下找leader聊了聊，用温和的方式表达了想法', type: 'huangdi' },
    ]
  },
  {
    id: 19,
    text: '一个跟你关系一般的同事突然约你一起吃饭——你？',
    options: [
      { text: '痛快答应——多一个朋友多条路', type: 'dajujuan' },
      { text: '答应，在心里分析：想让我站队？在打探信息？还是真的要跑路了？', type: 'huangdi' },
      { text: '去了，就是单纯吃个饭聊聊天，没想那么多', type: 'wuchuang' },
      { text: '委婉拒绝——不想欠人情，也不想被卷入任何事', type: 'xipin' },
    ]
  },
  {
    id: 20,
    text: '给大厂打工生活配一句内心独白——你选？',
    options: [
      { text: '"再多做一点，离目标就更近一点。"', type: 'dajujuan' },
      { text: '"这个位置，过两年就是我的。"', type: 'huangdi' },
      { text: '"又活过了一天，工资到手，关机下班。"', type: 'gouqie' },
      { text: '"他们到底在卷什么啊？今晚吃啥好呢。"', type: 'wuchuang' },
    ]
  }
];

export function calculateResult(answers: Record<number, number>): Personality {
  const scores: Record<string, number> = {};

  for (const [questionId, optionIndex] of Object.entries(answers)) {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (!question) continue;
    const option = question.options[optionIndex];
    if (!option) continue;
    scores[option.type] = (scores[option.type] || 0) + 1;
  }

  let maxType = '';
  let maxScore = -1;
  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore) {
      maxScore = score;
      maxType = type;
    }
  }

  return personalities.find(p => p.id === maxType) || personalities[0];
}
