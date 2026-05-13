# 🤝 Contributing Guide

Thank you for contributing to **Vibe Coding: Zero to Hero**! This guide will help you make effective contributions to this community-driven knowledge base.

---

## 📖 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [How Can I Contribute?](#-how-can-i-contribute)
- [Getting Started](#-getting-started)
- [Markdown Standards](#-markdown-standards)
- [Content Guidelines](#-content-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Issue Reporting](#-issue-reporting)
- [Questions?](#-questions)

---

## 🎯 Code of Conduct

Please be respectful and inclusive in all interactions. We welcome contributors of all backgrounds and experience levels.

**Expected behaviors:**
- Use welcoming and inclusive language
- Be respectful of differing viewpoints
- Gracefully accept constructive criticism
- Focus on what's best for the community

**Unacceptable behaviors:**
- Harassment or discrimination
- Trolling or insulting comments
- Publishing others' private information

---

## 👐 How Can I Contribute?

### 1. 📝 Write Content

Add guides, tutorials, or examples to any section:
- Expand existing topics
- Add missing sections
- Create code examples
- Write case studies

### 2. 🎨 Create Visuals

Help make content more accessible:
- Architecture diagrams
- Workflow charts
- Screenshots with annotations
- Infographics

### 3. 🐛 Report Issues

Found problems? Let us know:
- Typos and grammatical errors
- Incorrect or outdated information
- Broken links
- Missing context

### 4. 🔍 Review & Edit

Improve existing content:
- Clarify confusing explanations
- Update outdated information
- Add missing examples
- Improve formatting

### 5. 💡 Suggest Topics

Have ideas for new content?
- Open an issue with your suggestion
- Provide an outline
- Volunteer to write it (optional)

---

## 🚀 Getting Started

### Step 1: Fork the Repository

```bash
# Click "Fork" on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/vibe-coding-zero-to-hero.git
cd vibe-coding-zero-to-hero
```

### Step 2: Create a Branch

```bash
# Create a branch for your changes
git checkout -b feature/add-your-content-name
```

### Step 3: Make Your Changes

Edit existing files or create new ones following our standards below.

### Step 4: Test Locally

Preview your markdown:
- Use a markdown preview extension in VS Code
- Check that links work
- Verify code blocks render correctly

### Step 5: Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a clear message
git commit -m "docs: add guide to prompt engineering templates"
```

### Step 6: Push and Create PR

```bash
# Push to your fork
git push origin feature/add-your-content-name

# Then open a Pull Request on GitHub
```

---

## 📐 Markdown Standards

### File Structure

Each section should have a `README.md` with this structure:

```markdown
# Section Title

Brief introduction (2-3 sentences).

---

## 📖 Table of Contents

- [Subsection 1](#-subsection-1)
- [Subsection 2](#-subsection-2)

---

## 🎯 Subsection 1

Content here...

---

## Next Steps

Links to related sections.
```

### Formatting Rules

#### Headings

Use emoji + descriptive titles:

```markdown
## 🎯 Main Section
### 📋 Subsection
#### ✅ Details
```

#### Code Blocks

Always specify the language:

````markdown
```javascript
// Good example
const greeting = "Hello, Vibe Coder!";
```

```bash
# Command line examples
npm install package-name
```
````

#### Tables

Use tables for comparisons:

```markdown
| Tool | Best For | Pricing |
|------|----------|---------|
| Cursor | Full AI integration | $20/mo |
| VS Code | Flexibility | Free |
```

#### Links

Use relative links for internal references:

```markdown
[Previous Section](../06-ides-editors/)
[Next Section](../08-frontend/)
```

#### Images

Place images in `/assets` folder:

```markdown
![Description](../assets/section-name/image-name.png)
```

---

## ✍️ Content Guidelines

### Writing Style

✅ **Do:**
- Write in clear, simple English
- Use active voice
- Include practical examples
- Explain _why_, not just _what_
- Link to related sections
- Add beginner-friendly explanations

❌ **Don't:**
- Use overly technical jargon without explanation
- Assume prior knowledge
- Write walls of text (use headings!)
- Leave typos or grammatical errors
- Copy-paste from other sources

### Content Quality Checklist

Before submitting, verify:

- [ ] Information is accurate and up-to-date
- [ ] Code examples work as expected
- [ ] All links are functional
- [ ] Headings follow the emoji format
- [ ] Content is original (no plagiarism)
- [ ] Explanations are beginner-friendly
- [ ] No spelling/grammar mistakes
- [ ] Proper attribution for external resources

### Example Quality Levels

**🟢 Excellent:**
- Clear structure with TOC
- Multiple practical examples
- Diagrams where helpful
- Links to resources
- Common pitfalls addressed

**🟡 Good:**
- Clear explanations
- At least one example
- Proper formatting
- No errors

**🔴 Needs Work:**
- Unclear or vague
- No examples
- Poor formatting
- Contains errors

---

## 🔄 Pull Request Process

### Before Submitting

1. Read this guide completely
2. Check for similar existing PRs
3. Ensure your branch is up to date
4. Preview your changes locally

### PR Title Format

Use conventional commits style:

```
docs: add prompt engineering templates
feat: new offline AI setup guide
fix: correct Docker installation steps
chore: reorganize section structure
```

### PR Description

Use our template and include:
- What you changed
- Why it's needed
- Which sections affected
- Any relevant issues

### Review Timeline

- Maintainers will review within 3-5 days
- You may be asked to make revisions
- Once approved, your PR will be merged

### After Merging

- Your contribution becomes part of the project
- You're credited as a contributor
- Feel free to submit more PRs!

---

## 🐛 Issue Reporting

### Before Opening an Issue

1. Search existing issues (avoid duplicates)
2. Check if it's already fixed in main branch
3. Gather relevant information

### Issue Templates

We provide templates for:
- 🐛 Bug Reports
- 🚀 Feature Requests
- 📝 Content Additions

Choose the appropriate template and fill it out completely.

### Good Issue Titles

✅ "Fix broken link in prompt-engineering section"
✅ "Add guide for local LLM setup with Ollama"
✅ "Update React section to include React 19 features"

❌ "Something's wrong"
❌ "Add more stuff"
❌ "Help!"

---

## ❓ Questions?

### Where to Ask

- **General questions**: Open a [Discussion](../../discussions)
- **Specific to contribution**: Comment on related issues/PRs
- **Urgent matters**: Contact maintainers directly

### Resources

- [README.md](../README.md) - Project overview
- [Blueprint.md](../Blueprint.md) - Vision and structure
- [ROADMAP.md](../ROADMAP.md) - Development timeline

---

## 🏆 Recognition

Contributors are recognized in:
- README.md contributors section
- GitHub Contributors page
- Release notes (for major contributions)

**Thank you for making Vibe Coding better for everyone!** 🙏

---

<div align="center">

**Ready to contribute?**

[Fork the Repo](https://github.com/yourusername/vibe-coding-zero-to-hero/fork) · [View Open Issues](../../issues) · [Read the Blueprint](../Blueprint.md)

</div>
