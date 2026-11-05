# 🎬 39 - Video Tutorials & Walkthroughs

> **Some concepts click faster when you watch someone build.** This section curates video tutorials and walkthroughs for every major handbook topic, from your first AI-generated app to Kubernetes deployment.
> **Watch, code along, and pause to review the generated code.**

**Difficulty:** 🟢 Beginner · **Reading time:** ~8 minutes

---

## 📖 Table of Contents

- [Why Video Matters for Vibe Coding](#-why-video-matters-for-vibe-coding)
- [Recommended Video Topics by Level](#-recommended-video-topics-by-level)
- [Level 1 Walkthroughs — First Steps](#-level-1-walkthroughs--first-steps)
- [Level 2 Walkthroughs — Agent Workflows](#-level-2-walkthroughs--agent-workflows)
- [Level 3 Walkthroughs — Production & K8s](#-level-3-walkthroughs--production--k8s)
- [How to Use Video Tutorials Effectively](#-how-to-use-video-tutorials-effectively)
- [Creating Your Own Walkthroughs](#-creating-your-own-walkthroughs)
- [Practical Checklist](#-practical-checklist)
- [Key Takeaways](#-key-takeaways)
- [Next Steps](#-next-steps)

---

## 🎯 Why Video Matters for Vibe Coding

Reading a spec or a README is one thing; watching an experienced builder direct an agent, review the output, catch a bug, and fix it is another. Video captures the **tacit knowledge** of vibe coding:

- How to phrase a prompt when the agent gets it wrong
- When to accept an edit and when to reject it
- How to read agent-generated code quickly
- What a good (and bad) agent session looks like

**The rule:** never just copy what you see in a video. Pause, read the generated code, and understand it before you run it.

---

## 📺 Recommended Video Topics by Level

| Level | Topics | Suggested format |
|-------|--------|-----------------|
| Level 1 | First AI-generated app, Cursor setup, deploying to Vercel | 10–20 min screen recordings |
| Level 2 | Spec-driven development, Claude Code pairing, model routing, cost tracking | 20–40 min deep dives |
| Level 3 | K8s deployment, canary rollouts, incident response, security hardening | 30–60 min production walkthroughs |

---

## 1️⃣ Level 1 Walkthroughs — First Steps

**Topic: "My First AI-Generated App"**

Build and deploy a simple full-stack app (todo list with auth) in one sitting:

1. **Choose your stack** — Next.js + Tailwind + Supabase (or your preference)
2. **Prompt the agent** — "Create a todo app with user authentication, task creation, and completion toggling"
3. **Review the output** — read the auth flow, database schema, and route handlers
4. **Write tests** — add tests for the critical paths before deploying
5. **Security scan** — run SAST and secret scanning
6. **Deploy** — one-command deploy to Vercel or similar

**What to watch for in videos:**
- How the creator phrases the initial prompt
- Whether they read the generated code or just accept it
- How they handle errors and agent mistakes
- The deploy command and any configuration needed

---

## 2️⃣ Level 2 Walkthroughs — Agent Workflows

**Topic: "Spec-Driven Refactor with Claude Code + Cursor"**

Demonstrate the winning 2026 pattern:

1. **Write a spec** — user stories, acceptance criteria, constraints
2. **Break into tasks** — small, reviewable units
3. **Cursor for daily edits** — feature work, UI refinements
4. **Claude Code for heavy lifting** — multi-file refactoring, migrations
5. **Small PRs** — one feature per PR, human review on each
6. **Track cost** — token spend per session, model routing

**Topic: "Model Routing in Practice"**

Show when to use each tier:
- Flagship (Opus 5.5 / Astra / Argon) — hard multi-file work
- Mid-tier (Sonnet 5.5 / Sol) — everyday coding
- Value tier (Haiku / Luna / Terra) — repetitive, high-volume steps

---

## 3️⃣ Level 3 Walkthroughs — Production & K8s

**Topic: "Deploy an AI-Built App to Kubernetes"**

End-to-end production deployment:

1. **Containerize** — write and review a Dockerfile (non-root, no secrets)
2. **K8s manifests** — Deployment, Service, HPA, probes
3. **Canary rollout** — deploy to 10%, monitor, expand or roll back
4. **Monitoring** — error rate, latency, pod restarts
5. **Rollback drill** — intentionally break a release, then `kubectl rollout undo`

**Topic: "AI-Related Incident Response"**

Simulate and respond to:
- A credential leaked via agent context
- An unreviewed agent PR that introduces a bug
- A runaway agent session burning tokens

---

## 🧠 How to Use Video Tutorials Effectively

| Do | Don't |
|----|-------|
| Pause and read every line of generated code | Copy-paste without reading |
| Code along, then modify the project on your own | Follow exactly without experimenting |
| Take notes on agent mistakes and fixes | Assume the video shows best practices |
| Test the deployed app yourself | Trust that "it works in the video" |
| Run security scans on what you build | Skip testing because the video didn't show it |

**The 20-minute rule:** if a video promises to build an app in 20 minutes, expect to spend 2–3 hours reviewing, testing, and securing it before it's production-ready.

---

## 🎥 Creating Your Own Walkthroughs

The handbook welcomes community-contributed video walkthroughs. To contribute:

1. **Pick a topic** from the recommended list or propose your own
2. **Record your screen** as you build with AI (Loom, OBS, or similar)
3. **Narrate your decisions** — why you prompted that way, why you accepted or rejected edits
4. **Show the review process** — tests, security scan, deploy, rollback
5. **Upload and link** — host on YouTube/Vimeo and submit a PR to `39-video-tutorials/` with the link and a summary

**What we look for:**
- Honest mistakes and recoveries (not just perfect takes)
- Explicit security and testing steps
- Clear explanations of agent behavior
- Anonymized repositories (no real credentials or company data)

---

## ✅ Practical Checklist

- [ ] Watched at least one Level 1 walkthrough and coded along
- [ ] Deployed a simple app following a video guide
- [ ] Watched at least one Level 2 walkthrough (agent pairing or model routing)
- [ ] Completed a spec-driven task following the video pattern
- [ ] Watched at least one Level 3 walkthrough (K8s or incident response)
- [ ] Performed a rollback drill after watching the K8s video
- [ ] Recorded and submitted your own walkthrough (optional but encouraged)

---

## 🔑 Key Takeaways

- **Video shows the tacit knowledge** — prompting, reviewing, fixing — that text can't capture
- **Never copy-paste without reading** — even from a trusted creator
- **Expect 2–3× the video time** for review, testing, and security
- **Community walkthroughs** are welcome — show your mistakes, not just your wins
- **Use video to learn, then build on your own** — don't become dependent on tutorials

---

## 🚀 Next Steps

- **Pick a walkthrough topic** and code along this week
- **Read section 38** (interactive quizzes) to test what you learned from videos
- **Read section 36** (Kubernetes deployment) if you're preparing for Level 3 walkthroughs

---

<center>

*Last updated: November 2026*

</center>