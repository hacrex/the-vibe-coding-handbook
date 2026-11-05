# 🤝 40 - Community Discussion & Contribution Tooling

> **The handbook is community-driven, but a community needs places to talk and tools to collaborate.** This section covers how to discuss vibe coding with other builders, contribute to the handbook, and use the contribution tooling that keeps the project healthy.
> **Join the conversation. Improve the handbook. Help others learn.**

**Difficulty:** 🟢 Beginner · **Reading time:** ~10 minutes

---

## 📖 Table of Contents

- [Where to Discuss Vibe Coding](#-where-to-discuss-vibe-coding)
- [Community Norms & Etiquette](#-community-norms--etiquette)
- [How to Contribute to the Handbook](#-how-to-contribute-to-the-handbook)
- [Contribution Tooling](#-contribution-tooling)
- [Case Study Contributions](#-case-study-contributions)
- [Video Tutorial Contributions](#-video-tutorial-contributions)
- [Review & Merge Process](#-review--merge-process)
- [Recognition & Badges](#-recognition--badges)
- [Practical Checklist](#-practical-checklist)
- [Key Takeaways](#-key-takeaways)
- [Next Steps](#-next-steps)

---

## 💬 Where to Discuss Vibe Coding

The handbook community gathers in several places. Choose the one that fits your style:

| Platform | Best For | How to join |
|----------|----------|-------------|
| **GitHub Discussions** | Handbook questions, feature requests, meta conversation | `github.com/hacrex/the-vibe-coding-handbook/discussions` |
| **GitHub Issues** | Bug reports, typos, content gaps | `github.com/hacrex/the-vibe-coding-handbook/issues` |
| **Discord** | Real-time chat, quick questions, pair programming | Link in the handbook README (coming soon) |
| **Twitter/X** | Public builds, sharing projects, #vibecoding | Post with #vibecoding and tag the handbook |
| **Reddit** | r/cursor_ai, r/vibecoding, r/LocalLLaMA | Tool-specific communities |

**Tip:** Search before you post. Many questions about models, tools, and error messages have already been answered.

---

## 🤝 Community Norms & Etiquette

Vibe coding attracts beginners and experts alike. Keep discussions welcoming:

- **Assume good intent** — everyone is learning
- **No shaming for using AI** — the handbook embraces AI-assisted development
- **Focus on safety and review** — gently guide others toward testing and security
- **Share failures, not just wins** — a broken deployment teaches more than a perfect one
- **Anonymize before sharing** — remove company names, URLs, and credentials from screenshots and code
- **Credit sources** — if you learned a technique from someone, mention them

---

## 📝 How to Contribute to the Handbook

The handbook lives at `github.com/hacrex/the-vibe-coding-handbook`. Contributions of all sizes are welcome.

### Types of contributions

| Type | Effort | Good for |
|------|--------|----------|
| **Typo fixes** | 5 min | New contributors |
| **Content updates** | 30 min | Keeping sections current |
| **New case studies** | 1–2 hours | Sharing real-world experience |
| **Video walkthroughs** | 2–4 hours | Teaching through demonstration |
| **New sections** | 4+ hours | Expanding coverage |
| **Tooling improvements** | Variable | Scripts, linting, CI |

### Contribution workflow

1. **Fork the repository** — create your own copy
2. **Create a branch** — `git checkout -b your-description`
3. **Make your changes** — edit Markdown, add files
4. **Test locally** — build the site (`node site/build.js`) and check links
5. **Open a Pull Request** — describe what changed and why
6. **Address review feedback** — maintainers may request changes
7. **Merge** — once approved, your contribution goes live

---

## 🛠️ Contribution Tooling

The handbook uses lightweight tooling to keep contributions consistent:

### Build script (`site/build.js`)

Regenerates `site/data.js` from `README.md`, `ROADMAP.md`, and `glossary/terms.md`:

```bash
node site/build.js
```

Run this before submitting PRs that change section structure or add new sections.

### Markdown style guide

- **H1 format:** `# 📖 38 - Section Title` (emoji + number + title)
- **Intro:** one-line blockquote under H1
- **Difficulty badge:** `**Difficulty:** 🟢 Beginner · **Reading time:** ~X minutes`
- **TOC:** `## 📖 Table of Contents` with anchor links
- **Tables:** use pipes with header separator
- **Emoji:** sparingly, for section headers and status badges
- **Last updated:** `*Last updated: November 2026*` under H1

### Link checking

Before opening a PR, verify:
- All internal links resolve (section-to-section, handbook-to-section)
- External links are not broken
- Images render (if any)

### Commit message convention

```
type: description

Examples:
- docs: update model table to November 2026 landscape
- feat: add section 34 community case studies
- fix: correct broken link in section 06 IDEs
- chore: regenerate site data.js
```

---

## 📋 Case Study Contributions

Case studies are the most valued community content (section 34). To contribute:

1. **Fork the repo**
2. **Create a file** at `27-case-studies/contributions/your-story.md`
3. **Use the case study template** from section 34
4. **Anonymize** — remove company names, URLs, credentials
5. **Submit a PR** with label `case-study`

Stories are reviewed for quality, anonymity, and usefulness before merging.

---

## 🎥 Video Tutorial Contributions

Video walkthroughs (section 39) are welcome. To contribute:

1. **Record your screen** building with AI
2. **Narrate decisions** — prompts, accepts, rejections, fixes
3. **Show review** — tests, security scan, deploy
4. **Host on YouTube/Vimeo**
5. **Submit a PR** to `39-video-tutorials/` with the link and summary

---

## 🔍 Review & Merge Process

Every PR goes through maintainer review:

1. **Automated checks** — build script runs, links validated
2. **Maintainer review** — content accuracy, style, safety
3. **Community feedback** — public discussion on the PR
4. **Merge or request changes** — maintainer decides
5. **Deploy** — merged changes build and deploy to the site

**Review timeline:** Most PRs receive initial feedback within 3–5 business days.

---

## 🏅 Recognition & Badges

Contributors are recognized in:

- **README acknowledgments** — top contributors listed
- **Contribution badges** — displayed on your profile if you add them
- **Case study credits** — your name (or handle) on stories you submit
- **Certification roster** — if you complete section 37 levels

To add a contribution badge to your GitHub profile:

```markdown
![Vibe Coding Handbook Contributor](https://img.shields.io/badge/Vibe%20Coding-Contributor-blue)
```

---

## ✅ Practical Checklist

- [ ] Joined at least one community channel (GitHub Discussions, Discord, or Reddit)
- [ ] Read the contribution workflow and style guide
- [ ] Made at least one small contribution (typo fix, link update, or comment)
- [ ] Ran `node site/build.js` locally before submitting a PR
- [ ] Submitted a case study or video walkthrough (optional but encouraged)
- [ ] Reviewed at least one other contributor's PR (pay it forward)

---

## 🔑 Key Takeaways

- **The handbook is community-driven** — your contributions shape it
- **Multiple discussion channels** — choose what fits your style
- **Small contributions matter** — typos, links, and suggestions all help
- **Build before you PR** — run `node site/build.js` to verify
- **Share failures and wins** — both teach the community
- **Review others' work** — it's how the project stays healthy

---

## 🚀 Next Steps

- **Open GitHub Discussions** and introduce yourself
- **Fix a typo or broken link** as your first contribution
- **Submit a case study** from your own AI-built project
- **Read section 41** (ecosystem integrations) to see how the handbook connects to the wider AI tooling ecosystem

---

<center>

*Last updated: November 2026*

</center>