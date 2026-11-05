# 📖 34 - Community Case Studies & Failure Analyses

> **The best way to learn vibe coding is not from a tutorial — it is from someone who shipped it, broke it, and fixed it.**
> **Real-world case studies show what works, what fails, and how teams recover when AI-generated code meets production.**

**Difficulty:** 🟡 Intermediate · **Reading time:** ~12 minutes

---

## 📖 Table of Contents

- [Why Case Studies Matter](#-why-case-studies-matter)
- [Success Story: Solo Builder Ships an MVP in a Weekend](#-success-story-solo-builder-ships-an-mvp-in-a-weekend)
- [Success Story: Professional Team Adopts Agents at Scale](#-success-story-professional-team-adopts-agents-at-scale)
- [Failure Story: The Unreviewed Booking System](#-failure-story-the-unreviewed-booking-system)
- [Failure Story: Credential Leak via Agent Context](#-failure-story-credential-leak-via-agent-context)
- [Failure Story: AI Slop Accumulation](#-failure-story-ai-slop-accumulation)
- [Common Patterns Across Stories](#-common-patterns-across-stories)
- [How to Contribute Your Own Case Study](#-how-to-contribute-your-own-case-study)
- [Case Study Template](#-case-study-template)
- [Practical Checklist](#-practical-checklist)
- [Key Takeaways](#-key-takeaways)
- [Next Steps](#-next-steps)

---

## 🎯 Why Case Studies Matter

Vibe coding sits between two extremes: hype ("AI builds everything") and fear ("AI writes insecure code"). Both are incomplete. Real projects live in the middle — they ship fast, they break, and teams learn by reviewing what happened.

This section collects anonymized, real-world case studies from the community. Each one follows the same structure: **what was built, how AI was used, what went right, what went wrong, and the lessons learned.**

> Contribute your own story using the template at the end of this chapter. Community-contributed case studies are the heart of Phase 6.

---

## ✅ Success Story: Solo Builder Ships an MVP in a Weekend

**The project:** A local walking-group website to list walks, record attendance, and share photos.

**How AI was used:** The builder (not a developer) used Replit Agent to generate the full-stack app from a natural-language description, then Cursor + Claude Sonnet 5.5 to refine the UI and fix bugs.

**What went right:**
- Working MVP in ~8 hours with zero prior coding experience
- Authentication, database, and photo upload all generated and wired up
- Deployed on the same day via the platform's one-click hosting

**What went wrong:**
- The builder could not explain how authentication worked when asked
- No tests were written; a date-handling bug caused duplicate attendance records
- No security scan was run before sharing the link with group members

**Lessons learned:**
- Ship fast, but add tests before inviting real users
- Run a security scan on anything that handles personal data
- Ask the agent to explain critical logic until you understand it

**Outcome:** The site is live for 50+ group members; the builder is now learning to read the generated code section by section.

---

## ✅ Success Story: Professional Team Adopts Agents at Scale

**The project:** A mid-sized e-commerce platform migrating legacy checkout logic to a new service.

**How AI was used:** The engineering team used Claude Code (terminal agent) with Opus 5.5 for multi-file refactoring, paired with Cursor for daily feature work. Every agent-produced change went through a PR with a human reviewer.

**What went right:**
- 40% reduction in time to implement checkout features
- Agents handled boilerplate, test generation, and API wiring
- Zero production incidents during the migration
- Every agent session logged in an audit trail

**What went wrong:**
- Initial agent sessions created overly large PRs (20+ files) that were hard to review
- Team had to adopt a "small PRs only" rule mid-project

**Lessons learned:**
- Pair an IDE assistant (Cursor) with a terminal agent (Claude Code) — the winning 2026 pattern
- Break agent work into small, reviewable PRs (one feature per PR)
- Maintain an agent audit log for compliance and debugging

**Outcome:** Migration completed 6 weeks ahead of schedule with full test coverage and zero incidents.

---

## ❌ Failure Story: The Unreviewed Booking System

**The project:** A small business appointment booking system.

**How AI was used:** The owner prompted an agent to build the full system, accepted all changes without review, and deployed immediately.

**What went wrong:**
- The booking system accepted conflicting reservations (double-booked time slots)
- Input validation was missing, allowing invalid dates and times
- No authentication — anyone could view or cancel any appointment
- The owner could not explain or fix the bugs when customers complained

**Root cause:** Pure vibe coding — accepting agent output on "vibes" without reading, testing, or reviewing.

**Lessons learned:**
- Never deploy AI-generated code without human review and testing
- Authentication and validation are not optional — specify them explicitly
- If you cannot explain how a feature works, do not ship it

**Outcome:** The system was taken offline and rebuilt with a professional developer, tests, and security review.

---

## ❌ Failure Story: Credential Leak via Agent Context

**The project:** An internal dashboard connecting to a production database.

**How AI was used:** A developer pasted a database connection string (with credentials) into an agent prompt to "help the agent understand the schema."

**What went wrong:**
- The credential was sent to the model provider's servers and logged
- The same agent session had write access to the repository
- The credential was later committed accidentally in agent-generated config

**Root cause:** Treating agent prompts as private when they are not — and giving agents write access without secret hygiene.

**Lessons learned:**
- Never paste secrets, API keys, or credentials into agent context
- Use secret managers and reference secret names, not values
- Rotate any credential that may have been exposed to an agent

**Outcome:** Database credentials rotated, repository scanned for secrets, agent access revoked and re-scoped to read-only.

---

## ❌ Failure Story: AI Slop Accumulation

**The project:** A customer-support portal built over 6 months with continuous AI generation.

**How AI was used:** The team prompted agents for every new feature, never refactored, and never wrote tests for generated code.

**What went wrong:**
- 60% of the codebase was copy-pasted blocks with minor variations
- Refactoring dropped to under 5% of changed lines (GitClear pattern)
- Bugs increased over time as slop piled on slop
- Onboarding new developers took weeks because no one understood the system

**Root cause:** Optimizing for generation speed, ignoring maintainability.

**Lessons learned:**
- Refactor AI output aggressively — treat it as a first draft
- Require tests before any generated code merges
- Budget maintenance time (2–3× generation time) for every AI component

**Outcome:** The team paused feature work for 4 weeks to refactor, add tests, and establish review standards.

---

## 🔄 Common Patterns Across Stories

| Pattern | Success stories | Failure stories |
|---------|-----------------|-----------------|
| Human review | Every change reviewed | None or minimal |
| Tests written | Yes | No |
| Security scan | Yes | No |
| Can explain the code | Yes | No |
| Small PRs | Yes | Large, unreviewable diffs |
| Secret hygiene | Yes | Credentials in prompts |
| Maintenance budgeted | Yes | No |

**The clear signal:** teams that review, test, and understand what ships succeed. Teams that accept output on vibes fail.

---

## 🤝 How to Contribute Your Own Case Study

This handbook is community-driven. We welcome anonymized case studies from anyone who has used AI to build software — solo builders, professional teams, startups, and enterprises.

**To contribute:**

1. Fork the repository
2. Create a file at `27-case-studies/contributions/your-story.md`
3. Use the template below
4. Submit a Pull Request with the label `case-study`

Stories are reviewed for quality and anonymized before merging (remove company names, URLs, and credentials).

---

## 📋 Case Study Template

```markdown
# Case Study: [Project Name]

## The Project
One sentence describing what was built.

## How AI Was Used
Which tools, models, and agents were used, and for what tasks.

## What Went Right
- Bullet points of successes

## What Went Wrong
- Bullet points of failures, bugs, or incidents

## Root Cause
Why things went wrong (e.g., no review, missing tests, credentials in prompts)

## Lessons Learned
Actionable takeaways for other builders

## Outcome
Current status of the project

## Anonymization
Confirm no real company names, URLs, or credentials are included
```

---

## ✅ Practical Checklist

Before you ship your next AI-built project:

- [ ] Every agent-produced change has a human reviewer
- [ ] Tests exist for all critical functionality
- [ ] Security scan passed on the codebase
- [ ] No secrets or credentials in agent context
- [ ] You can explain how the core features work
- [ ] Agent work is on feature branches, not directly on main
- [ ] Rollback plan is tested (one command to revert)
- [ ] Maintenance owner is assigned

---

## 🔑 Key Takeaways

- **Review, test, and understand** — or do not ship
- **Success patterns** are repeatable: small PRs, tests first, security scan, secret hygiene
- **Failure patterns** are also repeatable: unreviewed output, credentials in prompts, no maintenance budget
- **Community case studies** are how we all learn faster — contribute yours

---

## 🚀 Next Steps

- **Read section [35 — Starter Kits & Boilerplates](./35-starter-kits/)** to start your next project with guardrails pre-configured
- **Read section [14 — Security](./14-security/)** for secure coding practices with AI
- **Read section [32 — AI Agent Safety & Governance](./32-agent-safety-governance/)** for session-level agent controls

---

<center>

*Last updated: November 2026*

</center>