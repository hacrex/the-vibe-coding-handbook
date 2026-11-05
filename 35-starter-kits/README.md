# 🧩 35 - Starter Kits & Boilerplates

> **Do not start from a blank repo. Start from a battle-tested starter kit that already has AI guardrails, tests, security scanning, and deployment configured.**
> **Boilerplates turn vibe coding from a weekend experiment into a shippable product — faster.**

**Difficulty:** 🟡 Intermediate · **Reading time:** ~14 minutes

---

## 📖 Table of Contents

- [Why Starter Kits Exist](#-why-starter-kits-exist)
- [What a Good AI-Native Starter Includes](#-what-a-good-ai-native-starter-includes)
- [Recommended Starter Kits by Stack](#-recommended-starter-kits-by-stack)
- [The Vibe Coding Starter Template](#-the-vibe-coding-starter-template)
- [Customizing a Starter Kit](#-customizing-a-starter-kit)
- [AI-Specific Boilerplate Files](#-ai-specific-boilerplate-files)
- [Deployment-Ready Checklist](#-deployment-ready-checklist)
- [Practical Checklist](#-practical-checklist)
- [Key Takeaways](#-key-takeaways)
- [Next Steps](#-next-steps)

---

## 🎯 Why Starter Kits Exist

Blank repos are the enemy of speed. Every time you start a vibe-coding project, you face the same decisions: folder structure, test setup, CI/CD, secret management, agent instructions, deployment configuration. A starter kit makes those decisions once so you can focus on your product.

In 2026, the best starter kits are **AI-native** — they assume an agent will be writing, reviewing, and deploying code alongside you. They include `AGENTS.md`, security scanning, test scaffolding, and one-command deployment out of the box.

---

## 🧩 What a Good AI-Native Starter Includes

| Component | Why it matters |
|-----------|---------------|
| `AGENTS.md` / `CLAUDE.md` | Authoritative instructions every agent reads before working |
| `.cursor/rules/` or `.github/copilot-instructions.md` | Tool-specific agent rules |
| Test scaffolding (Vitest, Playwright, pytest) | Tests written alongside implementation |
| Security scanning (SAST, secrets, dependencies) | Block merges on critical findings |
| Feature flags | Disable AI-built features without redeploying |
| One-command deploy | `vercel deploy` / `fly deploy` / `docker compose up` |
| Rollback procedure | Documented `git revert` + deployment rollback |
| `.gitignore` for secrets | `.env`, `*.key`, `secrets.json` never committed |

---

## 📦 Recommended Starter Kits by Stack

| Stack | Starter Kit | Best For | AI-Native Features |
|-------|-------------|----------|-------------------|
| React + Next.js | [shadcn/ui](https://ui.shadcn.com) + Next.js | Frontend-heavy apps | Tailwind, component generation ready |
| Next.js + AI | [Vercel AI SDK starter](https://vercel.com/templates) | AI chat apps | Streaming UI, tool use built in |
| Full-stack TypeScript | [T3 Stack](https://create.t3.gg) | Type-safe apps | tRPC, Prisma, NextAuth |
| Python + FastAPI | [FastAPI template](https://fastapi.tiangolo.com/) | Backend APIs | Auto-docs, pytest scaffolding |
| Go | [Go kit](https://github.com/go-kit/kit) | Microservices | Modular, testable |
| Full-stack AI-native | [Lovable / Replit templates](https://lovable.dev) | Non-developers | One-click deploy, agent-configured |

> These are starting points, not mandates. Pick the one closest to your stack, then add the AI-specific boilerplate below.

---

## 🏗️ The Vibe Coding Starter Template

Copy this structure into your new project:

```
my-app/
├── .github/
│   └── copilot-instructions.md   # GitHub Copilot agent rules
├── .cursor/
│   └── rules/
│       └── project.mdc           # Cursor agent rules
├── AGENTS.md                     # Cross-tool agent instructions (REQUIRED)
├── CLAUDE.md                     # Claude Code instructions
├── .env.example                  # Copy to .env, never commit .env
├── .gitignore                    # Excludes .env, node_modules, dist
├── .github/workflows/
│   └── ci.yml                    # Tests + security scan on every PR
├── tests/                        # Test scaffolding
├── src/
│   ├── lib/
│   ├── components/               # or routes/, services/, etc.
│   └── main.tsx / main.py        # Entry point
├── README.md                     # Human-readable project docs
├── package.json / pyproject.toml # Dependencies + scripts
└── docker-compose.yml            # Local dev environment
```

**`AGENTS.md` example:**

```
# Project: My App

## Stack
- Frontend: React + TypeScript + Tailwind
- Backend: Node.js + Express
- Database: PostgreSQL

## Agent Rules
- Always write tests alongside implementation
- Never commit secrets or credentials
- Run `npm test` before marking a task complete
- All changes on feature branches; PR required for main
- Security scan on every PR (GitHub CodeQL)

## Context
- Authentication: JWT in httpOnly cookies
- API style: REST, JSON
- Deploy: Vercel (frontend), Railway (backend)
```

---

## ✏️ Customizing a Starter Kit

1. **Clone or generate** from your chosen starter
2. **Replace `AGENTS.md`** with your project's stack, rules, and deploy targets
3. **Add `.env.example`** with all required env vars (no real values)
4. **Configure CI** to run tests + security scan on every PR
5. **Set up feature flags** for any AI-built customer-facing feature
6. **Document the rollback procedure** in README

---

## 🤖 AI-Specific Boilerplate Files

### `.github/copilot-instructions.md`

```
You are a coding assistant for this project.
- Follow the stack defined in AGENTS.md
- Write tests for every new feature
- Never suggest committing secrets
- Prefer small, focused changes over large refactors
```

### `.cursor/rules/project.mdc`

```
# Project rules
- TypeScript strict mode required
- All PRs need human review before merge
- Tests must pass before commit
- Security scan blocks merge on critical findings
```

### `tests/ai-generated.test.ts` (example)

```
import { describe, it, expect } from 'vitest'

describe('AI-generated feature', () => {
  it('handles edge cases gracefully', () => {
    // Write this test BEFORE trusting generated code
  })
})
```

---

## 🚀 Deployment-Ready Checklist

- [ ] Starter kit cloned and dependencies installed
- [ ] `AGENTS.md` updated with your stack and rules
- [ ] `.env.example` created; `.env` in `.gitignore`
- [ ] CI workflow runs tests + security scan on PR
- [ ] Feature flags configured for AI-built features
- [ ] One-command deploy tested (`vercel deploy` or equivalent)
- [ ] Rollback procedure documented and tested
- [ ] Monitoring/alerting configured for production

---

## ✅ Practical Checklist

Before you start building on a starter kit:

- [ ] Chose a starter matching your stack
- [ ] `AGENTS.md` written and committed
- [ ] Secret management planned (`.env` + secret manager)
- [ ] Test scaffolding in place
- [ ] Security scanning enabled on PRs
- [ ] Deploy target selected and tested
- [ ] Rollback procedure documented
- [ ] Feature flags ready for AI-built features

---

## 🔑 Key Takeaways

- **Start from a starter kit, not a blank repo** — saves hours of setup
- **AI-native starters include `AGENTS.md`, tests, security scanning, and deploy config**
- **Customize `AGENTS.md` first** — it is the document every agent reads
- **Never commit secrets** — use `.env.example` + secret manager
- **Deploy early and often** — one-command deploy makes iteration cheap

---

## 🚀 Next Steps

- **Read section [36 — Kubernetes Deployment for Vibe-Coded Apps](./36-kubernetes-deployment/)** for production container orchestration
- **Read section [34 — Community Case Studies](./34-community-case-studies/)** for real-world starter-kit success and failure stories
- **Read section [31 — AI Cost Engineering](./31-ai-cost-engineering/)** to budget your starter kit's token usage

---

<center>

*Last updated: November 2026*

</center>