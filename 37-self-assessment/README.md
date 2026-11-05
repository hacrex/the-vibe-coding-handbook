# 📊 37 - Self-Assessment & Certification Track

> **Knowing what you know — and what you don't — is the difference between a vibe coder who ships reliably and one who ships incidents.** This section gives you self-assessment rubrics for every major skill area and a certification track you can work through at your own pace.
> **Self-assess honestly. Certify when you're ready.**

**Difficulty:** 🟡 Intermediate · **Reading time:** ~12 minutes

---

## 📖 Table of Contents

- [Why Self-Assessment Matters](#-why-self-assessment-matters)
- [Skill Rubrics by Chapter](#-skill-rubrics-by-chapter)
- [Overall Vibe Coding Readiness Score](#-overall-vibe-coding-readiness-score)
- [Certification Track](#-certification-track)
- [Level 1 — AI-Assisted Builder](#-level-1-ai-assisted-builder)
- [Level 2 — AI-Native Developer](#-level-2-ai-native-developer)
- [Level 3 — AI Systems Engineer](#-level-3-ai-systems-engineer)
- [How to Use This Track](#-how-to-use-this-track)
- [Practical Checklist](#-practical-checklist)
- [Key Takeaways](#-key-takeaways)
- [Next Steps](#-next-steps)

---

## 🎯 Why Self-Assessment Matters

Sonar's 2026 survey found that **96% of developers do not fully trust AI-generated code**, yet only 48% always check it before committing. The gap between "using AI" and "using AI safely" is where self-assessment lives.

Self-assessment forces you to confront what you actually understand versus what the agent produced for you. Use the rubrics below to rate yourself honestly, then work through the certification track to close the gaps.

---

## 📋 Skill Rubrics by Chapter

Rate yourself 1–5 on each area. **1 = I cannot do this without an agent; 5 = I can explain, debug, and teach it.**

| Chapter | Skill Area | Your score /5 | What "5" looks like |
|---------|-----------|:-------------:|---------------------|
| 01 | What is vibe coding | _/5 | Can explain the practice split (verified vs unverified output) |
| 04 | AI models | _/5 | Can route tasks by model tier (flagship/mid/value) |
| 05 | AI tools | _/5 | Can choose and configure agents for a task |
| 06 | IDEs & editors | _/5 | Can set up Cursor + Claude Code pairing |
| 07 | Prompt engineering | _/5 | Can write specs, not just prompts (see section 30) |
| 14 | Security | _/5 | Can scan PRs, protect secrets, review agent output |
| 15 | Offline vibe coding | _/5 | Can run local models via Ollama |
| 22 | AI agents | _/5 | Can configure MCP, AGENTS.md, subagents |
| 30 | Spec-driven development | _/5 | Can write a compact spec and verify agent output against it |
| 31 | AI cost engineering | _/5 | Can track cost per feature and apply model routing |
| 32 | Agent safety | _/5 | Can enforce checkpoints, spend limits, approval gates |
| 33 | Enterprise governance | _/5 | Can assign owners, enforce guardrails, document compliance |
| 36 | Kubernetes | _/5 | Can deploy, scale, and roll back AI-built workloads |

**Scoring guide:**
- **40–50** = You understand the craft. Ready for Level 2 certification.
- **25–39** = Gaps exist. Study the low-scoring chapters first.
- **Below 25** = Start with sections 01–02 and build fundamentals.

---

## 🏆 Overall Vibe Coding Readiness Score

Answer these five questions honestly:

1. **Can I explain how my AI-generated code works without asking the agent?** (Yes / No)
2. **Do I run tests and security scans before every AI-generated deploy?** (Yes / No)
3. **Do I know my monthly AI token spend and which model tier I'm using for what?** (Yes / No)
4. **Can I roll back an agent-generated production change in one command?** (Yes / No)
5. **Is every AI-generated component owned by a named human?** (Yes / No)

**Score:** 5/5 = Production-ready · 3–4 = Close, tighten guardrails · 0–2 = Do not deploy AI-generated code to production yet

---

## 🎓 Certification Track

Work through the levels in order. Each level has prerequisites, skills to demonstrate, and a capstone task.

---

### Level 1 — AI-Assisted Builder

**Prerequisites:** None

**Skills to demonstrate:**
- [ ] Choose and configure an AI coding tool (Cursor, Copilot, or Claude Code)
- [ ] Write effective prompts using intent-over-implementation
- [ ] Read and understand agent-generated code before accepting it
- [ ] Run tests and fix bugs in AI-generated code
- [ ] Deploy a simple app to a hosting platform (Vercel, Railway, or similar)

**Capstone task:** Build and deploy a small full-stack app (e.g., todo list with auth) using only AI assistance, with tests and a security scan passing.

**Certification:** Self-certify — document your app, the tools used, and the lessons learned in a case study (submit to section 34).

---

### Level 2 — AI-Native Developer

**Prerequisites:** Level 1 complete

**Skills to demonstrate:**
- [ ] Pair an IDE assistant (Cursor/Copilot) with a terminal agent (Claude Code/Codex)
- [ ] Write specs using section 30 workflow (user stories → plan → tasks → verify)
- [ ] Configure `AGENTS.md` and `CLAUDE.md` for a project
- [ ] Enforce model routing (flagship for hard tasks, value tier for routine)
- [ ] Track token spend and apply cost controls (section 31)
- [ ] Enforce agent safety controls (checkpoints, spend limits, sandboxing)

**Capstone task:** Refactor an existing codebase using agents, breaking work into small PRs with human review, tests, and security scans. Document before/after metrics.

**Certification:** Self-certify with a PR history showing reviewed, tested agent work.

---

### Level 3 — AI Systems Engineer

**Prerequisites:** Level 2 complete

**Skills to demonstrate:**
- [ ] Containerize AI-generated apps with security-reviewed Dockerfiles
- [ ] Deploy to Kubernetes with manifests, HPA, and rollback tested
- [ ] Enforce enterprise guardrails (scan every PR, least-privilege agents, secret protection)
- [ ] Assign ownership and maintenance budget for AI-generated components
- [ ] Document compliance mapping (SOC 2, GDPR, HIPAA, PCI, EU AI Act as applicable)
- [ ] Lead a team through an agent-related incident response

**Capstone task:** Deploy an AI-built multi-service application to Kubernetes with monitoring, alerting, feature flags, and a tested rollback procedure. Run an incident drill.

**Certification:** Self-certify with architecture diagrams, deployment manifests, and incident drill notes.

---

## 📝 How to Use This Track

1. **Start with the self-assessment** — identify your weak chapters
2. **Study those chapters** — work through the exercises and examples
3. **Complete Level 1 capstone** — ship something small but complete
4. **Progress to Level 2** — add specs, agents, and cost controls
5. **Reach Level 3** — production Kubernetes, governance, incident response
6. **Contribute a case study** — share what you learned (section 34)

You do not need to complete all levels. Stop where your goals require.

---

## ✅ Practical Checklist

- [ ] Completed self-assessment rubric for all chapters
- [ ] Identified lowest-scoring areas and made a study plan
- [ ] Completed Level 1 capstone (app deployed with tests + security scan)
- [ ] `AGENTS.md` written for at least one project
- [ ] Token spend tracked for at least one month (section 31)
- [ ] Agent safety controls enforced on at least one project (section 32)
- [ ] One AI-generated deployment rolled back successfully (test)
- [ ] Case study drafted and ready to contribute (section 34)

---

## 🔑 Key Takeaways

- **Honest self-assessment closes the gap between using AI and using it safely**
- **Three certification levels:** Builder → Native Developer → Systems Engineer
- **Each level has a capstone** — ship something real to certify
- **Contribute case studies** to help the community learn from your experience
- **Certification is self-paced** — stop where your goals require

---

## 🚀 Next Steps

- **Take the self-assessment** above and note your lowest chapters
- **Read section [34 — Community Case Studies](./34-community-case-studies/)** to submit your own story
- **Read section [35 — Starter Kits & Boilerplates](./35-starter-kits/)** to jumpstart your next project

---

<center>

*Last updated: November 2026*

</center>