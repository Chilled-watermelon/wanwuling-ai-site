const TESTS = {
  work: {
    storageKey: "assessment-work-v1",
    title: "感激和认可的五种语言测试题（工作版）",
    kicker: "Workplace Appreciation",
    pdf: "感激和认可的五种语言测试题（工作版）.pdf",
    intro: "每题选择更能鼓励你、让你感到被重视的一项。",
    labels: {
      A: { name: "肯定的言辞", note: "明确的感谢、赞美和认可会让你更有动力，也更容易感到自己的贡献被看见。" },
      B: { name: "精心的时刻", note: "专注陪伴、耐心倾听和一对一沟通，会让你感到被尊重和被支持。" },
      C: { name: "接受礼物", note: "具体的礼物、票券或用心奖励，会让你感到对方记得你、重视你。" },
      D: { name: "服务的行动", note: "实际帮忙、分担任务和主动支持，会让你在压力中明显感到被托住。" }
    },
    questions: [
      q("我很感激他人在工作或项目上协助我。", "D", "我很感激有人给予我全神贯注的关注。", "B"),
      q("收到我最喜欢品牌的礼品卡真的会鼓励我。", "C", "当有人支持我完成任务时，我感到受到鼓励。", "D"),
      q("有人对我说“谢谢”，感谢我所做的工作，这对我真的很重要。", "A", "有人请我吃午饭，会让我感受到自己对 TA 很重要。", "C"),
      q("我很感激有人送我喜欢的活动门票（如电影票）。", "C", "我很感激同事（经理/团队成员）选择花时间与我单独沟通。", "B"),
      q("当有人口头表扬我时，我会受到激励。", "A", "当周围的人帮助我完成需要做的任务时，我会感到充满活力。", "D"),
      q("当我因工作出色而收到实物奖励（礼品卡、餐饮券）时，我感到自己很重要。", "C", "当有人告诉我多么感激我所做的工作时，我感到自己很重要。", "A"),
      q("当我遇到困难的一天时，身边亲近的人停下来关心我的状况，对我意义重大。", "B", "当我遇到困难的一天时，如果有人帮助我完成正在做的项目或任务，对我意义重大。", "D"),
      q("当他人帮助我在工作/学校完成任务时，会让我高兴起来。", "D", "收到实物礼物（食物、礼品卡）会让我高兴起来。", "C"),
      q("当他人表现出真诚的兴趣并倾听我时，会帮助我在困难任务中坚持下去。", "B", "当有人感谢我所做的工作时，我更可能坚持完成一项困难的任务。", "A"),
      q("当身边的人通过送我礼物来庆祝我的生日时，我感到被重视。", "C", "当人们花时间倾听我的顾虑时，我感到被重视。", "B"),
      q("当我的同事/团队成员帮助我赶上落后的任务时，我会受到鼓励。", "D", "当我能与最亲密的同事/团队成员共度时光时，我会受到鼓励。", "B"),
      q("当与我密切合作的同事在我工作超负荷时帮助我，我感到被支持。", "D", "当我收到朋友或同事送的礼物时，我会情绪高涨。", "C"),
      q("当对我重要的人送我礼物时，我感到被重视。", "C", "当人们耐心倾听我而不打断时，我感到被重视。", "B"),
      q("当我感到压力时，有人帮助我完成事情会降低我的压力水平。", "D", "当我感到压力时，一些鼓励的话语会让我感觉好一些。", "A"),
      q("能够与朋友和同事“一起出去玩”，对我意义重大。", "B", "有人对我所做的工作给予赞美，对我意义重大。", "A"),
      q("当有人给予我实际帮助时，我感到被鼓励。", "D", "他人的善意话语特别能鼓励我。", "A"),
      q("当与我共事的人告诉我做得很好时，我会感到充满活力。", "A", "当我与工作或学校中喜欢的人共度时光时，我会感到充满活力。", "B"),
      q("如果我感到沮丧，一份小礼物（幽默卡片、甜点）可以让我精神振奋。", "C", "如果我感到沮丧，有人主动为我做一件小事会让我精神振奋。", "D"),
      q("与对我重要的人共度时光会给我一种支持感。", "B", "当他人帮助我完成需要完成的项目时，我感到被支持。", "D"),
      q("当有人热情地完成我请求的任务时，会让我高兴起来。", "D", "当有人赞美我“工作出色”时，真的会让我高兴起来。", "A"),
      q("当我遇到困难的一天时，收到同事/同学送的小礼物真的会鼓励我。", "C", "当我遇到困难的一天时，一句赞美真的会鼓励我。", "A"),
      q("如果生活处境真的很艰难，有人花时间倾听并理解我的状况，我会感到被支持。", "B", "如果生活处境真的很艰难，有人送我一份小礼物鼓励我，我会感到被支持。", "C"),
      q("当我能与对我重要的人共度时光时，我会感到充满活力。", "B", "当我经常收到他人的口头鼓励时，我会感到充满活力。", "A"),
      q("当人们花时间精力给我买礼物时，我知道他们重视我。", "C", "公开认可我所取得的成就让我感到自豪。", "A"),
      q("当周围的人认可我的技能和贡献时，我更享受我的工作。", "A", "当团队成员主动帮助我准备大型活动或项目时，我更享受我的工作。", "D"),
      q("当同事/团队成员肯定我的贡献（对我所做的工作给予积极评价）时，我所经历的任何沮丧似乎都会减轻。", "A", "当同事/团队成员花时间与我一起思考我面临的问题时，我所经历的任何沮丧似乎都会减轻。", "B"),
      q("完成一个大型项目后，我喜欢获得一些“休假时间”作为对我努力的奖励。", "C", "完成一个大型项目后，我喜欢与团队一起做些特别的事情来庆祝。", "B"),
      q("当他人与我一起完成项目时，我发现自己对工作感到更加积极。", "D", "当同事/同学主动“倾听”我的顾虑时，我发现自己对工作感到更加积极。", "B"),
      q("如果我感到不被周围的人重视，他人告诉我我对团队有多重要会让我感觉好一些。", "A", "如果我感到不被周围的人重视，收到一张去做有趣事情的礼品卡会让我感觉好一些。", "C"),
      q("当我知道项目完成后会得到我喜欢的活动门票时，我会对工作感到更有活力。", "C", "当我知道如果需要帮助完成项目时他人会在那里支持我，我会对工作感到更有活力。", "D")
    ]
  },
  love: {
    storageKey: "assessment-love-v1",
    title: "爱的五种语言测试题（爱人用）",
    kicker: "Relationship Love Language",
    pdf: "爱的五种语言测试题（爱人用） (2).pdf",
    intro: "每题选择更能让你感受到爱的一项。",
    labels: {
      A: { name: "肯定的言辞", note: "被爱人用语言确认、欣赏和鼓励，会让你更容易感到被爱。" },
      B: { name: "精心的时刻", note: "完整的注意力、一起行动和专心陪伴，对你来说是关系里的高价值表达。" },
      C: { name: "接受礼物", note: "礼物承载了对方的记得、用心和惊喜感，会让你感受到被珍惜。" },
      D: { name: "服务的行动", note: "对方愿意帮你分担、照顾日常和实际行动，会直接转化成爱的感受。" },
      E: { name: "身体的接触", note: "拥抱、牵手、亲吻和亲密触碰，是你感受亲密与安全的重要通道。" }
    },
    questions: [
      q("我的爱人写的爱的短笺让我感觉很好。", "A", "我喜欢爱人给我的拥抱。", "E"),
      q("我喜欢与我的爱人单独呆在一起。", "B", "当我的爱人给我一个温暖的拥抱时，我感受到他/她的支持。", "E"),
      q("从爱人那里收到特别的礼物会让我很开心。", "C", "我喜欢与爱人一道长途旅行。", "B"),
      q("当我的爱人帮着做洗衣服的工作时，我感觉他/她爱我。", "D", "我喜欢我的爱人挨着/贴着我。", "E"),
      q("当我的爱人搂着我时，我感受到他/她的爱。", "E", "我知道我的爱人爱我，因为他/她送礼物给我，让我惊喜。", "C"),
      q("我不管去哪里，都愿意和我的爱人一起去。", "B", "我喜欢牵着我爱人的手。", "E"),
      q("我很珍惜爱人送给我的礼物。", "C", "我喜欢听爱人对我说，他/她爱我。", "A"),
      q("我喜欢我的爱人坐在我旁边专心听我说话。", "B", "我喜欢听爱人告诉我说，我很帅/美。", "A"),
      q("能和爱人呆在一起，会令我很高兴。", "B", "我的爱人送给我的即使是最小的礼物，对我来说都很重要。", "C"),
      q("当爱人告诉我他/她以我为骄傲的时候，我感觉到他/她爱我。", "A", "当爱人为我做饭吃时，我知道他/她爱我。", "D"),
      q("不管做什么，我都喜欢和爱人一起做这些事。", "B", "爱人给我的支持意见让我感觉很好。", "A"),
      q("和爱人对我说的话相比，他/她为我做的那些小事情对我来说更重要。", "D", "我喜欢拥抱我的爱人。", "E"),
      q("爱人送一些我很喜欢的礼物给我，对我来说很重要。", "C", "爱人的赞扬对我来说意义重大。", "A"),
      q("只要是在我爱人身边，就会让我感觉很好。", "B", "我喜欢我的爱人帮我按摩肩背。", "E"),
      q("爱人对我的成就作出的反应让我很受鼓舞。", "A", "爱人若能帮助我做一些他/她很讨厌做的事情，对我来说意义重大。", "D"),
      q("我从来没有厌倦过爱人的亲吻。", "E", "我喜欢我的爱人对我所做的事情表示出真正的兴趣和关注。", "B"),
      q("我指望我的爱人帮助我完成一些任务。", "D", "当我打开爱人送给我的礼物时，我仍然会感到很兴奋。", "C"),
      q("我喜欢我的爱人给我送首饰/衣服等让我看起来更帅/美的礼物。", "C", "我喜欢我的爱人聆听我的想法，而且不会急着作出判断或批评。", "B"),
      q("睡前和醒来时，我喜欢和爱人有亲昵的触碰。", "E", "当我的爱人有时为我跑腿时，我很感谢他/她。", "D"),
      q("当我的爱人主动帮我分担繁重的家务时，我感受到他/她的爱。", "D", "有时我会为爱人送给我的礼物是如此用心而感到惊奇。", "C"),
      q("我喜欢爱人给我他/她全部的注意力。", "B", "保持家里的清洁是一项很重要的服务行动。", "D"),
      q("我期待着看到我的爱人会送什么生日礼物给我。", "C", "我从来没有厌倦过听爱人告诉我，我对他/她有多么重要。", "A"),
      q("我的爱人通过送礼物给我，让我知道他/她爱我。", "C", "我的爱人帮我点外卖/修理家电/装修工作，表达了他/她对我的爱。", "D"),
      q("在我说话时，我的爱人不会打断我，我喜欢这一点。", "B", "我从来没有厌倦过收爱人送给我的礼物。", "C"),
      q("在我累了的时候，我的爱人能够看得出来，而且他/她善于问我他/她能帮着做些什么。", "D", "我们去哪里并不重要，重要的是我只喜欢和我爱人一起去这些地方。", "B"),
      q("我喜欢与我的爱人肢体接触，亲密拥抱和亲吻。", "E", "我喜欢从爱人那里收到礼物，得到惊喜。", "C"),
      q("爱人鼓励的话语给了我信心。", "A", "我喜欢与我的爱人一起看电影。", "B"),
      q("我不敢奢求还有哪些礼物比我爱人送给我的礼物更好。", "C", "我喜欢爱人用手轻抚我的头发或脸颊。", "E"),
      q("对我来说很重要的是，当我的爱人尽管有其他重要事情要做，他/她却来帮助我。", "D", "当爱人告诉我他/她很欣赏我的时候，让我感觉非常好。", "A"),
      q("在我和爱人分开一段时间后，我喜欢拥抱和亲吻他/她。", "E", "我喜欢听到爱人告诉我，他/她相信我。", "A")
    ]
  }
};

function q(firstText, firstCode, secondText, secondCode) {
  return {
    options: [
      { text: firstText, code: firstCode },
      { text: secondText, code: secondCode }
    ]
  };
}

const testId = document.body.dataset.test;
const app = document.querySelector("#quiz-app");

if (testId && app && TESTS[testId]) {
  initQuiz(TESTS[testId]);
}

console.info("彩蛋：作者 姜昊");

function initQuiz(test) {
  const state = loadState(test);
  renderQuiz(test, state);
}

function loadState(test) {
  try {
    const saved = JSON.parse(localStorage.getItem(test.storageKey) || "null");
    if (saved && Array.isArray(saved.answers)) {
      return {
        current: Number.isInteger(saved.current) ? saved.current : 0,
        answers: saved.answers.slice(0, test.questions.length)
      };
    }
  } catch (error) {
    localStorage.removeItem(test.storageKey);
  }
  return {
    current: 0,
    answers: Array(test.questions.length).fill(null)
  };
}

function saveState(test, state) {
  localStorage.setItem(test.storageKey, JSON.stringify(state));
}

function renderQuiz(test, state) {
  const completed = answeredCount(state.answers);
  const total = test.questions.length;
  const current = clamp(state.current, 0, total - 1);
  state.current = current;
  const currentAnswer = state.answers[current];
  const question = test.questions[current];

  app.innerHTML = `
    <section class="quiz-intro" aria-labelledby="quiz-title">
      <div>
        <p class="question-kicker">${test.kicker}</p>
        <h1 id="quiz-title">${test.title}</h1>
      </div>
      <div class="quiz-meta" aria-label="测试信息">
        <span>${total} 题</span>
        <span>已完成 ${completed}/${total}</span>
        <span>${Object.keys(test.labels).length} 类结果</span>
      </div>
    </section>

    <section class="progress-panel" aria-label="答题进度">
      <div class="progress-head">
        <span>第 ${current + 1} 题 / ${total}</span>
        <span>${completionText(completed, total)}</span>
      </div>
      <div class="progress-track" aria-hidden="true"><i style="width: ${(completed / total) * 100}%"></i></div>
      <div class="question-jump">
        ${state.answers.map((answer, index) => `
          <button
            type="button"
          class="${isAnswered(answer) ? "is-done" : ""} ${index === current ? "is-current" : ""}"
            data-jump="${index}"
            aria-label="跳到第 ${index + 1} 题"
          ></button>
        `).join("")}
      </div>
    </section>

    <section class="question-shell">
      <article class="question-block">
        <div class="question-title">
          <h2>第 ${current + 1} 题</h2>
          <span>${test.intro}</span>
        </div>
        <div class="option-list">
          ${question.options.map((option, index) => `
            <button
              class="option-tile ${currentAnswer === index ? "is-selected" : ""}"
              type="button"
              data-answer="${index}"
              aria-pressed="${currentAnswer === index}"
            >
              <span class="option-index">Option ${index + 1}</span>
              <span class="option-text">${option.text}</span>
            </button>
          `).join("")}
        </div>
      </article>

      <aside class="side-panel" aria-label="实时计分">
        <div class="mini-report">
          <strong>${livePrimary(test, state)}</strong>
          <span>${completed ? "当前领先语言会随着后续选择变化。" : "完成第一题后开始生成实时分布。"}</span>
        </div>
        <div class="count-list">
          ${renderMiniCounts(test, state)}
        </div>
      </aside>
    </section>

    <section class="actions" aria-label="答题操作">
      <div class="action-group">
        <button class="btn" type="button" data-prev ${current === 0 ? "disabled" : ""}>上一题</button>
        <button class="btn" type="button" data-next ${current === total - 1 ? "disabled" : ""}>下一题</button>
      </div>
      <div class="action-group">
        <button class="btn btn-danger" type="button" data-reset>重新开始</button>
        <button class="btn btn-primary" type="button" data-result ${completed < total ? "disabled" : ""}>查看结果</button>
      </div>
      <div class="hint" role="status">${completed < total ? `还差 ${total - completed} 题完成` : "已完成全部题目"}</div>
    </section>
  `;

  bindQuizEvents(test, state);
}

function bindQuizEvents(test, state) {
  app.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.answers[state.current] = Number(button.dataset.answer);
      saveState(test, state);
      renderQuiz(test, state);
    });
  });

  app.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => {
      state.current = Number(button.dataset.jump);
      saveState(test, state);
      renderQuiz(test, state);
    });
  });

  const prev = app.querySelector("[data-prev]");
  const next = app.querySelector("[data-next]");
  const result = app.querySelector("[data-result]");
  const reset = app.querySelector("[data-reset]");

  prev?.addEventListener("click", () => {
    state.current = Math.max(0, state.current - 1);
    saveState(test, state);
    renderQuiz(test, state);
  });

  next?.addEventListener("click", () => {
    state.current = Math.min(test.questions.length - 1, state.current + 1);
    saveState(test, state);
    renderQuiz(test, state);
  });

  result?.addEventListener("click", () => {
    if (answeredCount(state.answers) === test.questions.length) {
      renderResult(test, state);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  reset?.addEventListener("click", () => {
    const ok = confirm("确定要清空这份测试的所有选择吗？");
    if (!ok) return;
    localStorage.removeItem(test.storageKey);
    renderQuiz(test, {
      current: 0,
      answers: Array(test.questions.length).fill(null)
    });
  });
}

function getScores(test, state) {
  const scores = Object.fromEntries(Object.keys(test.labels).map((code) => [code, 0]));
  state.answers.forEach((answer, index) => {
    if (answer === null || answer === undefined) return;
    const code = test.questions[index].options[answer].code;
    scores[code] += 1;
  });
  return scores;
}

function sortedScores(test, state) {
  const scores = getScores(test, state);
  return Object.entries(scores)
    .map(([code, score]) => ({ code, score, ...test.labels[code] }))
    .sort((a, b) => b.score - a.score || a.code.localeCompare(b.code));
}

function livePrimary(test, state) {
  const completed = answeredCount(state.answers);
  if (!completed) return "实时结果";
  const top = sortedScores(test, state)[0];
  return `${top.name} 暂时领先`;
}

function renderMiniCounts(test, state) {
  const completed = Math.max(1, answeredCount(state.answers));
  return Object.entries(getScores(test, state)).map(([code, score]) => `
    <div class="count-row">
      <strong>${code}</strong>
      <span class="bar"><i style="width: ${(score / completed) * 100}%"></i></span>
      <span>${score}</span>
    </div>
  `).join("");
}

function renderResult(test, state) {
  const total = test.questions.length;
  const sorted = sortedScores(test, state);
  const primary = sorted[0];
  const secondary = sorted[1] || sorted[0];

  app.innerHTML = `
    <section class="result-view">
      <div class="result-hero">
        <p class="question-kicker">${test.kicker}</p>
        <h1 class="result-title">你的主要语言是：${primary.name}</h1>
        <p class="result-lede">${primary.note}</p>
        <div class="result-badges">
          <div class="badge-line"><span>主要语言</span><strong>${primary.code} · ${primary.name}</strong></div>
          <div class="badge-line"><span>次要语言</span><strong>${secondary.code} · ${secondary.name}</strong></div>
          <div class="badge-line"><span>完成题数</span><strong>${total}/${total}</strong></div>
        </div>
      </div>

      <div class="result-panel">
        <div class="score-list">
          ${sorted.map((item) => `
            <div class="score-row">
              <span class="score-letter">${item.code}</span>
              <span>
                <span class="score-name">
                  <span>${item.name}</span>
                  <span>${Math.round((item.score / total) * 100)}%</span>
                </span>
                <span class="score-bar"><i style="width: ${(item.score / total) * 100}%"></i></span>
              </span>
              <span class="score-value">${item.score}</span>
            </div>
          `).join("")}
        </div>

        <p class="insight">${secondary.name === primary.name ? "这份结果非常集中，说明你对某一种表达方式的偏好很明确。" : `次要语言是“${secondary.name}”。如果要让这份结果更好地服务关系或团队沟通，可以把主要语言和次要语言一起看。`}</p>

        <section class="actions" aria-label="结果操作">
          <div class="action-group">
            <button class="btn" type="button" data-back>返回答题</button>
            <button class="btn btn-danger" type="button" data-reset-result>重新开始</button>
          </div>
          <div class="action-group">
            <button class="btn" type="button" data-copy>复制结果</button>
            <button class="btn btn-primary" type="button" data-download>导出结果</button>
          </div>
          <div class="toast" role="status"></div>
        </section>
      </div>
    </section>
  `;

  bindResultEvents(test, state, sorted);
}

function bindResultEvents(test, state, sorted) {
  const toast = app.querySelector(".toast");
  app.querySelector("[data-back]")?.addEventListener("click", () => renderQuiz(test, state));
  app.querySelector("[data-reset-result]")?.addEventListener("click", () => {
    const ok = confirm("确定要清空这份测试的所有选择吗？");
    if (!ok) return;
    localStorage.removeItem(test.storageKey);
    renderQuiz(test, {
      current: 0,
      answers: Array(test.questions.length).fill(null)
    });
  });
  app.querySelector("[data-copy]")?.addEventListener("click", async () => {
    const text = resultText(test, sorted);
    try {
      await navigator.clipboard.writeText(text);
      toast.textContent = "结果已复制";
    } catch (error) {
      toast.textContent = "浏览器未开放复制权限，可使用导出结果";
    }
  });
  app.querySelector("[data-download]")?.addEventListener("click", () => {
    const blob = new Blob([resultText(test, sorted)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${test.title}-结果.txt`;
    link.click();
    URL.revokeObjectURL(url);
    toast.textContent = "结果已导出";
  });
}

function resultText(test, sorted) {
  const lines = [
    test.title,
    "",
    `主要语言：${sorted[0].code} ${sorted[0].name}（${sorted[0].score} 分）`,
    `次要语言：${sorted[1].code} ${sorted[1].name}（${sorted[1].score} 分）`,
    "",
    "完整分布：",
    ...sorted.map((item) => `${item.code} ${item.name}: ${item.score}`)
  ];
  return lines.join("\n");
}

function completionText(completed, total) {
  if (!completed) return "尚未开始";
  if (completed === total) return "可以查看结果";
  return `完成度 ${Math.round((completed / total) * 100)}%`;
}

function answeredCount(answers) {
  return answers.filter(isAnswered).length;
}

function isAnswered(answer) {
  return answer !== null && answer !== undefined;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
