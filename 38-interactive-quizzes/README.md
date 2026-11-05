# 📊 38 - Interactive Quizzes & Certification Track

> **Reading is not the same as knowing.** This section turns the handbook's self-assessment rubrics (section 37) into web-based quizzes you can take in the browser, plus a certification track you can complete at your own pace.
> **Test your knowledge, close the gaps, and certify when you're ready.**

**Difficulty:** 🟡 Intermediate · **Reading time:** ~10 minutes

---

## 📖 Table of Contents

- [How the Interactive Track Works](#-how-the-interactive-track-works)
- [Quiz Structure by Level](#-quiz-structure-by-level)
- [Level 1 — AI-Assisted Builder Quiz](#-level-1-ai-assisted-builder-quiz)
- [Level 2 — AI-Native Developer Quiz](#-level-2-ai-native-developer-quiz)
- [Level 3 — AI Systems Engineer Quiz](#-level-3-ai-systems-engineer-quiz)
- [Taking a Quiz in the Browser](#-taking-a-quiz-in-the-browser)
- [Certification & Badges](#-certification--badges)
- [Practical Checklist](#-practical-checklist)
- [Key Takeaways](#-key-takeaways)
- [Next Steps](#-next-steps)

---

## 🎯 How the Interactive Track Works

The certification track from section 37 has three levels. Each level maps to a browser-based quiz hosted in the handbook's site (`site/lesson.html`). Quizzes are:

- **Multiple choice** — 10 questions per level
- **Scenario-based** — you review agent-generated code and decide whether to ship, refactor, or reject
- **Auto-graded** — immediate feedback with explanations for every answer
- **Retakeable** — take each quiz as many times as you need

**Passing score:** 80% (8/10) per level. You must pass Level 1 before attempting Level 2, and Level 2 before Level 3.

---

## 📝 Quiz Structure by Level

| Level | Questions | Focus | Passing score |
|-------|-----------|-------|---------------|
| Level 1 | 10 | Tool selection, prompting, reading agent output, basic deploy | 8/10 |
| Level 2 | 10 | Spec-driven development, agent pairing, model routing, cost tracking | 8/10 |
| Level 3 | 10 | K8s deployment, governance, incident response, compliance | 8/10 |

Each quiz question includes:
- A realistic scenario (e.g., "An agent generated this Dockerfile — is it safe?")
- 4 answer choices (one correct)
- An explanation of why the correct answer is right
- A link back to the relevant handbook section for review

---

## 1️⃣ Level 1 — AI-Assisted Builder Quiz

**Prerequisites:** Read sections 01–02, 05, 06

**Sample questions:**

1. **You paste a database connection string into an agent prompt so it can "see the schema." Is this safe?**
   - A) Yes, agents keep prompts private
   - B) No — never paste secrets or credentials into agent context ✅
   - C) Only if the agent is open source
   - D) Only if you encrypt the connection string first

2. **An agent generates a full-stack app in one PR touching 40 files. What should you do?**
   - A) Merge it — the agent is usually right
   - B) Reject it and ask for small, reviewable PRs (one feature each) ✅
   - C) Deploy it immediately to test
   - D) Ignore it and rewrite from scratch

3. **Before deploying AI-generated code, what must you do?**
   - A) Trust the agent and ship
   - B) Read, test, and security-scan the code ✅
   - C) Ask the agent to sign a waiver
   - D) Deploy to production first, fix later

4. **Which model tier should you use for everyday coding tasks?**
   - A) Flagship (Claude Opus 5.5 / GPT-6 Astra) for everything
   - B) Mid-tier (Claude Sonnet 5.5 / GPT-6.1 Sol) for everyday coding ✅
   - C) Only local models
   - D) It doesn't matter

---

## 2️⃣ Level 2 — AI-Native Developer Quiz

**Prerequisites:** Level 1 passed; read sections 04, 07, 30, 31, 32

**Sample questions:**

1. **What is the purpose of `AGENTS.md`?**
   - A) To store API keys for agents
   - B) Authoritative project instructions every agent reads before working ✅
   - C) To replace the README
   - D) To configure Kubernetes

2. **Which safety control stops an agent from burning $500 in tokens on a bad run?**
   - A) Spending limits per agent session ✅
   - B) More context window
   - C) Faster model
   - D) No limits — agents self-regulate

3. **You need to refactor across 10 files. What's the right approach?**
   - A) One giant agent prompt
   - B) Break into small tasks, verify each against a spec ✅
   - C) Skip tests — refactoring doesn't change behavior
   - D) Deploy after each file without review

4. **Gartner warned AI coding costs could exceed average developer salaries by what year?**
   - A) 2027
   - B) 2028 ✅
   - C) 2030
   - D) Never

---

## 3️⃣ Level 3 — AI Systems Engineer Quiz

**Prerequisites:** Level 2 passed; read sections 14, 33, 36

**Sample questions:**

1. **An AI-generated deployment causes a production incident. What do you do first?**
   - A) Debug in production
   - B) Roll back immediately, then investigate ✅
   - C) Ask the agent to fix it live
   - D) Wait for the agent to notice

2. **Which security hardening is required for AI-built container workloads?**
   - A) Run as root for simplicity
   - B) Run as non-root with resource limits ✅
   - C) No limits — AI needs freedom
   - D) Hardcode secrets in the Dockerfile

3. **What does an HPA (HorizontalPodAutoscaler) do?**
   - A) Scales replicas based on CPU/memory metrics ✅
   - B) Writes Kubernetes manifests
   - C) Replaces the need for tests
   - D) Deploys to production automatically

4. **Which compliance framework requires disclosure of AI use in high-risk systems?**
   - A) SOC 2 only
   - B) EU AI Act ✅
   - C) PCI DSS only
   - D) None of the above

---

## 🌐 Taking a Quiz in the Browser

Quizzes are served from the handbook site:

1. Open the handbook site (`https://vibingcode.dev` or your local clone)
2. Navigate to **Catalog** → select the level you want
3. Click **Start Quiz** — 10 questions, auto-graded
4. Review explanations for any missed questions
5. Retake until you score 8/10

**Quiz URLs (when deployed):**
- Level 1: `/lesson.html?path=phases/38-self-assessment/quiz-level-1`
- Level 2: `/lesson.html?path=phases/38-self-assessment/quiz-level-2`
- Level 3: `/lesson.html?path=phases/38-self-assessment/quiz-level-3`

> The quiz frontend is part of Phase 7's interactive build. Until it's deployed, use the self-assessment rubrics in section 37 to score yourself manually.

---

## 🏆 Certification & Badges

| Level | Badge | What it means |
|-------|-------|---------------|
| Level 1 | 🏗️ AI-Assisted Builder | Can ship small AI-built apps safely |
| Level 2 | 🧠 AI-Native Developer | Can run spec-driven agent workflows with cost controls |
| Level 3 | 🚀 AI Systems Engineer | Can deploy and operate AI-built production systems |

**How to certify:**
1. Pass the quiz for a level (80%+)
2. Complete the capstone task for that level (section 37)
3. Document your work — app URL, PR history, case study
4. Self-certify by adding your name to the public certification roster (submit a PR to `38-interactive-quizzes/certified/`)

Certification is self-paced and free. There is no expiry, but we recommend re-taking quizzes annually as the AI landscape changes.

---

## ✅ Practical Checklist

- [ ] Read section 37 (self-assessment rubrics) first
- [ ] Score yourself on all 13 chapter areas
- [ ] Take Level 1 quiz; retake until 8/10
- [ ] Complete Level 1 capstone (deploy small app with tests + security scan)
- [ ] Take Level 2 quiz; complete Level 2 capstone (spec-driven refactor)
- [ ] Take Level 3 quiz; complete Level 3 capstone (K8s deploy + incident drill)
- [ ] Submit a case study to section 34
- [ ] Add yourself to the certification roster

---

## 🔑 Key Takeaways

- **Reading ≠ knowing** — quizzes test whether you can apply the concepts
- **Three levels** map to increasing responsibility: builder → developer → systems engineer
- **80% passing score** with scenario-based questions and explanations
- **Certification is self-paced and free** — complete capstone tasks to certify
- **Re-take annually** — the AI landscape changes fast

---

## 🚀 Next Steps

- **Take the Level 1 self-assessment** in section 37 to find your starting point
- **Read section 34** (case studies) to see real examples of each level in practice
- **Read section 35** (starter kits) to jumpstart your capstone project

---

<center>

*Last updated: November 2026*

</center>