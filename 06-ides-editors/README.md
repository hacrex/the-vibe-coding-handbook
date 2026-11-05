# IDEs and Editors for Vibe Coding

A comprehensive guide to code editors and IDEs optimized for AI-assisted development, including traditional editors with AI extensions, native AI-first IDEs, and terminal coding agents.

---

## Table of Contents

1. [Editor Categories](#editor-categories)
2. [Traditional Editors with AI](#traditional-editors-with-ai)
3. [AI-Native IDEs](#ai-native-ides)
4. [Terminal Coding Agents](#terminal-coding-agents)
5. [VS Code Setup](#vs-code-setup)
6. [Cursor IDE](#cursor-ide)
7. [Devin Desktop (formerly Windsurf)](#devin-desktop-formerly-windsurf)
8. [Zed Editor](#zed-editor)
9. [Kiro](#kiro)
10. [Google Antigravity 2.0](#google-antigravity-20)
11. [Neovim AI Setup](#neovim-ai-setup)
12. [JetBrains IDEs](#jetbrains-ides)
13. [Editor Comparison](#editor-comparison)
14. [Workflow Recommendations](#workflow-recommendations)

---

## Editor Categories

### Traditional Editors + AI Extensions

Established editors enhanced with AI capabilities through extensions:

- **VS Code** + Copilot/Continue/Cline/Claude Code CLI
- **Neovim** + copilot.lua/Continue/terminal agents
- **Sublime Text** + AI plugins
- **JetBrains IDEs** + JetBrains AI Assistant / Copilot plugin

**Pros:**
- Mature ecosystems
- Extensive plugin libraries
- Familiar workflows
- Strong debugging tools
- Excellent version control integration

**Cons:**
- AI features feel added-on
- May require multiple extensions
- Context awareness varies by extension

### AI-Native IDEs

Built from ground up with AI as core feature:

- **Cursor** (Composer 2.5, parallel cloud agents, Bugbot review)
- **Devin Desktop** (formerly Windsurf — local + cloud agent delegation)
- **Zed** (with AI features)
- **Kiro** (spec-driven development: specs → design → tasks)
- **Google Antigravity 2.0** (agent-first platform with multi-agent orchestration)

**Pros:**
- Deep AI integration
- Better context understanding
- Streamlined AI workflows
- Built-in model access
- Optimized UX for AI pairing

**Cons:**
- Newer, less mature
- Smaller plugin ecosystems
- Potential vendor lock-in
- Subscription costs

---

## Traditional Editors with AI

### Visual Studio Code

**Market Share:** ~70% of developers  
**Best For:** Most use cases, best ecosystem

**AI Extensions:**

1. **GitHub Copilot** - Official GitHub AI pair programmer ($10–$39/mo)
2. **Continue** - Open-source AI assistant (bring-your-own-key, any model)
3. **Cline** - Autonomous coding agent with approval-at-each-step (open-source)
4. **Tabnine** - AI autocomplete
5. **Sourcegraph Cody** - Codebase-aware AI

*(Codeium was renamed Windsurf, then Devin Desktop — see the Devin Desktop section. Remove any standalone Codeium references from your setup.)*

**Setup Priority:**

1. Install VS Code Insiders (latest features)
2. Add Continue extension (open-source flexibility) or Copilot
3. Configure for local models (Ollama) via Continue
4. Install terminal agents (Claude Code / Codex) for heavy autonomous work
5. Set up keybindings for AI actions

### Neovim

**Best For:** Terminal lovers, minimalists, performance

**AI Plugins:**

1. **copilot.lua** - GitHub Copilot integration
2. **continue.nvim** - Continue.dev port
3. **ai.nvim** - Chat with AI in editor
4. **ollama.nvim** - Local model access

**Configuration Example:**

```lua
-- copilot.lua setup
require('copilot').setup({
  panel = { enabled = false },
  suggestion = { enabled = true },
  filetypes = {
    python = true,
    javascript = true,
    typescript = true,
  },
})

-- Keybinding for AI chat
vim.keymap.set('n', '<leader>ai', ':Continue<CR>')
```

**Alternative: skip plugins entirely and run Claude Code or Codex in a terminal pane alongside Neovim.** This is the 2026 power-user pattern: editor for editing, terminal agent for autonomous multi-file work.

### JetBrains IDEs

**Products:** IntelliJ IDEA, WebStorm, PyCharm, GoLand, etc.  
**Best For:** Enterprise development, specific languages

**AI Features:**

1. **JetBrains AI Assistant** - Official AI integration
2. **GitHub Copilot** - Available via plugin
3. **Code With Me** - Collaborative development

**Strengths:**

- Deep language understanding
- Refactoring tools
- Database integration
- Profiling and debugging
- Enterprise support

---

## AI-Native IDEs

### Cursor

**Website:** https://cursor.com  
**Pricing:** Free tier + $20/month Pro  
**Best For:** General development, best overall AI IDE

**Key Features:**

- **Chat with Codebase:** Ask questions about your entire project
- **Tab to Complete:** Intelligent code completion
- **Cmd+K:** Edit code with AI instructions
- **Composer 2.5:** Multi-file editing and parallel agents
- **Agent Mode:** Autonomous task completion
- **Bugbot:** AI code review on pull requests
- **Model Choice:** Switch between Claude Sonnet 5.5, Claude Opus 5.5, GPT-6 Sol/Terra, custom models
- **.cursor/rules / `AGENTS.md`:** Team standards that agents follow

**Setup:**

1. Download from cursor.com
2. Import VS Code settings (automatic)
3. Install VS Code extensions (compatible)
4. Configure API keys or use included quota
5. Add `AGENTS.md` to your project root for shared agent instructions

**Workflows:**

**Code Generation:**
```
Cmd+K → "Create a React component for user profile card
with avatar, name, bio, and social links"
```

**Debugging:**
```
Select error → Cmd+K → "Fix this TypeScript error
and explain what went wrong"
```

**Refactoring:**
```
Select function → Cmd+K → "Refactor this to use async/await
and add proper error handling"
```

**Pro Tips:**

- Use `@files` to reference specific files in chat
- Enable "Always apply edits without review" only for non-critical code
- Use Composer for multi-file changes
- Set up custom rules for your team's style via `.cursor/rules` or `AGENTS.md`
- Pair Cursor with **Claude Code** (terminal agent) for heavy autonomous work — this is the winning 2026 combination

---

## Terminal Coding Agents

Terminal agents inspect your repository, modify multiple files, run commands and tests, and prepare changes for your review. They're essential for heavy autonomous work that goes beyond in-editor autocomplete.

### Claude Code

**Website:** https://claude.com/code  
**Pricing:** $20–$200/month tiered by usage  
**Best For:** Deep repository work, long-running agentic tasks, terminal-first developers

Claude Code is Anthropic's coding agent. It reads your codebase, edits files, runs tests, and works through multi-step tasks and migrations from the terminal, VS Code, JetBrains, web, mobile, GitHub, or Slack.

**Core concepts:** `CLAUDE.md` project instructions, skills (reusable capabilities), hooks (lifecycle automation), subagents (parallel independent work), MCP (tools and context). Route hard multi-file work to Claude Code with Opus 5.5; use Sonnet 5.5 for everyday edits.

**Usage:**
```bash
# Start a session in your repo
claude

# With a specific task
claude "Refactor the authentication module and add unit tests"

# Resume a previous session
claude --resume <session-id>
```

### OpenAI Codex

**Website:** https://openai.com/codex  
**Pricing:** Bundled with ChatGPT plans, or API usage  
**Best For:** Teams already on the OpenAI stack, delegated tasks, parallel agent work

Codex is OpenAI's coding agent — available in the ChatGPT desktop app, the Codex CLI, an IDE extension, web, and mobile, with cloud tasks, GitHub code review, and Slack/Linear integrations. It uses `AGENTS.md` for project instructions.

**Usage:**
```bash
# Codex CLI
codex "Add user settings page with profile form and password change"

# Cloud task (delegated, returns a PR)
codex --cloud "Investigate the login timeout bug"
```

### Google Antigravity 2.0

**Website:** https://antigravity.google  
**Pricing:** Free tier / Google AI Pro ~$20/mo / AI Ultra $100/mo  
**Best For:** Multi-agent orchestration, browser-based testing, agent-first workflows

Antigravity is Google's agent-first development platform, launched at I/O May 2026. It replaces the Gemini CLI. You orchestrate multiple agents (with a built-in Chromium browser for testing), schedule background tasks, and use the Antigravity CLI (Go) plus a public SDK for hosting custom agents on third-party infrastructure.

**Usage:**
```bash
# Antigravity CLI
antigravity agent spawn "Build the checkout flow"
```

**Differentiators:** multi-agent orchestration, dynamic subagents, scheduled background tasks, built-in browser, model picker (Gemini + Claude + open weights on free plan).

---

## Devin Desktop (formerly Windsurf)

**Website:** https://devin.ai  
**Pricing:** Free tier + paid plans  
**Best For:** Cursor-like editing plus local and cloud agent delegation

Windsurf was renamed **Devin Desktop** on June 2, 2026 (Codeium as a standalone brand is defunct). It pairs a VS Code-compatible editor with an agent command center and runs Devin Local, Devin Cloud, and third-party agents such as Codex and Claude Agent.

**Key features:** agent command center, worktrees, cloud handoffs (delegate heavy work and get a PR back), `AGENTS.md` support, `windsurf/` → `.devin/` rules migration.

**Setup:**

1. Download from https://devin.ai
2. Sign in (formerly Codeium account — migrate if you have an existing Codeium login)
3. Import VS Code settings

**Usage:**
```
# Quick question
Cmd+L → "What does this function do?"

# Generate code
Type comment → Tab to complete

# Fix bug
Select code → Cmd+K → "Fix the null pointer issue"

# Delegate to cloud agent
Cmd+Shift+D → "Investigate the checkout timeout and open a PR"
```

---

## Zed Editor

**Website:** https://zed.dev  
**Pricing:** Free (open source)  
**Best For:** Performance enthusiasts, Rust developers

**Key Features:**

- **Blazing Fast:** GPU-accelerated rendering
- **Built-in AI:** Native AI integration
- **Collaboration:** Real-time pair programming
- **Extensions:** Growing ecosystem
- **Rust-based:** High performance

**AI Setup:**

```json
// settings.json
{
  "ai": {
    "provider": "ollama",
    "model": "deepseek-v4-flash",
    "auto_complete": true
  }
}
```

**Strengths:**

- Fastest editor available
- Clean, minimal UI
- Good Vim mode
- Native AI support
- Active development

**Weaknesses:**

- macOS/Linux only (Windows beta)
- Smaller extension ecosystem
- Newer, less stable

---

## Kiro

**Website:** https://kiro.dev (AWS)  
**Pricing:** $20–$40/month  
**Best For:** Teams that want specifications before code

Kiro is the only mainstream agentic IDE with **first-class spec-driven development**: write specs → generate design → break into tasks → let the agent implement one task at a time, checking each against the spec. It includes steering files, hooks, and parallel Specs.

**Differentiator:** specs are first-class citizens, not afterthoughts. See the `30-spec-driven-development` chapter for the full workflow.

**Usage:**
```
# Create a spec
kiro spec create "User booking system"

# Generate design from spec
kiro design from-spec booking-spec.md

# Implement tasks one at a time
kiro task implement --next
```

---

## Google Antigravity 2.0

*(See the Terminal Coding Agents section for setup.)*

Antigravity 2.0 launched at Google I/O May 2026 as an **agent-first development platform**: Antigravity IDE, CLI, SDK, and extensions. It combines multi-agent orchestration with a built-in Chromium browser so agents can test your app in a real browser. On the free plan it runs Gemini models plus Anthropic and open-weight models; paid tiers (Google AI Pro ~$20/mo, AI Ultra $100/mo) raise quotas.

**When to choose Antigravity:** browser-based testing matters, you want multi-agent orchestration out of the box, or you want the lowest barrier to entry (free tier).

**When to be cautious:** Google has rewritten quota rules multiple times (notably in May 2026) — free-tier evaluations today may not hold next month.

---

## VS Code Setup

### Essential AI Extensions

**1. Continue (Recommended)**
```json
// settings.json
{
  "continue.models": [
    {
      "title": "Ollama",
      "provider": "ollama",
      "model": "deepseek-v4-flash"
    },
    {
      "title": "Claude",
      "provider": "anthropic",
      "model": "claude-sonnet-5-5",
      "apiKey": "YOUR_KEY"
    }
  ]
}
```

**Keyboard Shortcuts:**
```json
// keybindings.json
[
  {
    "key": "cmd+l",
    "command": "continue.continueGUIView.focus"
  },
  {
    "key": "cmd+i",
    "command": "continue.inlineEdit"
  }
]
```

**2. GitHub Copilot**
```bash
# Install via Extensions panel
# Sign in with GitHub account
# Free for students, OSS maintainers
# $10/month otherwise
```

**3. Cline (Autonomous Agent)**
```json
// settings.json
{
  "cline.apiKey": "YOUR_ANTHROPIC_KEY",
  "cline.model": "claude-sonnet-5-5",
  "cline.autoApprove": false
}
```

### Recommended Extension Stack

**Core AI:**
- Continue (main AI interface)
- GitHub Copilot (autocomplete)

**Enhanced Features:**
- Error Lens (inline errors)
- GitLens (git supercharged)
- Thunder Client (API testing)
- Docker (container management)
- Remote - SSH (remote development)

**Language Specific:**
- ESLint + Prettier (JavaScript/TypeScript)
- Python (ms-python.python)
- Rust Analyzer (rust-lang.rust-analyzer)
- Go (golang.go)

### Settings Optimization

```json
{
  "editor.quickSuggestions": {
    "other": "on",
    "comments": "off",
    "strings": "off"
  },
  "editor.inlineSuggest.enabled": true,
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": false,
    "scminput": false
  },
  "continue.allowAnonymous": false,
  "continue.telemetry": "off"
}
```

---

## Cursor IDE

### Deep Dive Setup

**Installation:**

1. Download from https://cursor.com
2. Choose import VS Code settings (recommended)
3. Install on top of existing VS Code setup

**Model Configuration:**
```json
// settings.json
{
  "cursor.ai.model": "claude-sonnet-5-5",
  "cursor.ai.fastModel": "gpt-6-1-terra",
  "cursor.ai.customModels": [
    {
      "name": "Local DeepSeek",
      "provider": "ollama",
      "model": "deepseek-v4-flash",
      "baseUrl": "http://localhost:11434"
    }
  ]
}
```

### Key Workflows

**1. Chat with Codebase**
```
Cmd+L → "@workspace How does authentication work
in this project?"
```

**2. Inline Edits**
```
Select code → Cmd+K → "Add input validation
and error handling"
```

**3. Multi-file Changes**
```
Cmd+Shift+A (Composer) →
"Add user settings page with:
- Profile form
- Password change
- Notification preferences
Update routes, components, and API endpoints"
```

**4. Debug with AI**
```
Select error → Right-click → "Explain with AI"
or
Cmd+L → "Why is this test failing?"
```

**5. Generate Tests**
```
Select function → Cmd+K →
"Generate comprehensive unit tests
including edge cases"
```

### Cursor Rules

Create `.cursor/rules` file (or add `AGENTS.md` at repo root) for team standards:

```
# Code Style
- Always use TypeScript strict mode
- Prefer functional components with hooks
- Use async/await over promises
- Add JSDoc comments for public APIs

# Testing
- Write tests for all new features
- Aim for 80%+ coverage

# Security
- Never commit API keys
- Validate all user inputs
- Use parameterized queries
```

### Pro Tips

1. **Use @ references:**
   - `@file.py` - Reference specific file
   - `@folder/` - Reference directory
   - `@docs` - Reference documentation

2. **Composer for large changes:**
   - Break down complex tasks
   - Review changes before applying
   - Use version control frequently

3. **Agent mode:**
   - Enable for routine tasks
   - Disable for critical code
   - Always review final output

4. **Keyboard efficiency:**
   - `Cmd+L` - Open chat
   - `Cmd+K` - Inline edit
   - `Cmd+Shift+A` - Composer
   - `Cmd+Enter` - Accept suggestion

---

## Neovim AI Setup

### Minimal Configuration

**Using lazy.nvim:**

```lua
-- copilot.lua
return {
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
    build = ":Copilot auth",
    opts = {
      suggestion = { enabled = true },
      panel = { enabled = false },
    },
  },
  {
    "ContinuumHQ/continue",
    lazy = false,
    config = function()
      require("continue").setup({
        models = {
          {
            title = "Ollama",
            provider = "ollama",
            model = "deepseek-v4-flash",
          },
        },
      })
    end,
  },
}
```

### Keybindings

```lua
-- Continue.nvim mappings
vim.keymap.set('n', '<leader>cc', ':ContinueChat<CR>', 
  { desc = 'Continue Chat' })
vim.keymap.set('v', '<leader>ce', ':ContinueEdit<CR>', 
  { desc = 'Continue Edit' })
vim.keymap.set('n', '<leader>ca', ':ContinueAccept<CR>', 
  { desc = 'Continue Accept' })

-- Copilot mappings
vim.keymap.set('i', '<C-j>', 'copilot#accept("\<CR>")', 
  { expr = true, replace_keycodes = false })
```

### Workflow

**Terminal-centric AI coding:**

1. Open file in Neovim
2. `<leader>cc` to open chat
3. Ask for implementation
4. Review suggestions inline
5. `<leader>ca` to accept

**Power-user pattern:** run Claude Code or Codex in a terminal pane (`tmux` split) alongside Neovim — editor for precise edits, terminal agent for autonomous multi-file work.

---

## JetBrains IDEs

### AI Assistant Setup

**Enable AI Features:**

1. Settings → Tools → AI Assistant
2. Sign in with JetBrains account
3. Enable features:
   - Code completion
   - Chat
   - Documentation generation
   - Commit message generation

**Usage Examples:**

**Chat:**
```
Alt+Enter → AI Assistant →
"Generate a Spring Boot controller for user management"
```

**Documentation:**
```
Select class → Alt+Enter →
"Generate JavaDoc"
```

**Refactoring:**
```
Select code → Right-click →
"Refactor with AI" → "Extract method"
```

### Best Use Cases

**Enterprise Development:**

- Large codebases
- Team collaboration
- Database integration
- Microservices
- Legacy code modernization

---

## Editor Comparison

### Feature Matrix

| Feature | VS Code | Cursor | Devin Desktop | Zed | Neovim | Claude Code | Codex | Antigravity | Kiro |
|---------|---------|--------|---------------|-----|--------|-------------|-------|-------------|------|
| AI Quality | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Speed | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Extensions | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | N/A | N/A | N/A | N/A |
| Free Tier | ✅ | Limited | ✅ | ✅ | ✅ | Trial | Trial | ✅ | Trial |
| Local Models | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Learning Curve | Low | Low | Low | Medium | High | Medium | Medium | Medium | Medium |
| Best For | Everyone | AI-first feature work | Local+cloud delegation | Performance | Terminal | Deep repo work | OpenAI-stack teams | Multi-agent orchestration | Spec-driven teams |

### Pricing Comparison

| Editor / Agent | Free Tier | Pro Tier | Enterprise |
|----------------|-----------|----------|------------|
| VS Code | ✅ Full | N/A | N/A |
| Cursor | 50 msgs/mo | $20/mo | Custom |
| Devin Desktop | ✅ Limited | Paid plans | Teams |
| Zed | ✅ Full | N/A | N/A |
| Neovim | ✅ Full | N/A | N/A |
| JetBrains | 30 days | $8–20/mo | $30–50/mo |
| Claude Code | Trial | $20–200/mo | Contact |
| Codex | Trial (ChatGPT) | ChatGPT plans | Contact |
| Antigravity | ✅ Free tier | Google AI Pro ~$20/mo | AI Ultra $100/mo |
| Kiro | Trial | $20–40/mo | Contact |

---

## Workflow Recommendations

### Beginner Setup

**Recommended:** VS Code + Continue + Ollama

```bash
# 1. Install VS Code
# 2. Install Continue extension
# 3. Install Ollama
brew install ollama  # macOS
curl -fsSL https://ollama.com/install.sh | sh  # Linux

# 4. Pull model
ollama pull deepseek-v4-flash

# 5. Configure Continue
# Open ~/.continue/config.json
```

**config.json:**
```json
{
  "models": [
    {
      "title": "DeepSeek V4 Flash",
      "provider": "ollama",
      "model": "deepseek-v4-flash"
    }
  ],
  "tabAutocompleteModel": {
    "title": "DeepSeek V4 Flash",
    "provider": "ollama",
    "model": "deepseek-v4-flash"
  }
}
```

### Intermediate Setup

**Recommended:** Cursor Pro + Local Fallback

```bash
# 1. Subscribe to Cursor Pro ($20/mo)
# 2. Set primary model: Claude Sonnet 5.5
# 3. Configure local fallback:

# settings.json
{
  "cursor.ai.model": "claude-sonnet-5-5",
  "cursor.ai.fallbackModel": {
    "provider": "ollama",
    "model": "deepseek-v4-flash"
  }
}

# 4. Install Ollama for offline work
ollama pull deepseek-v4-flash
```

### Advanced/Team Setup

**Recommended:** Mixed approach — IDE assistant + terminal agent (the winning 2026 pattern)

```yaml
# Team Configuration
primary_ide: Cursor Pro
terminal_agent: Claude Code
local_models: Ollama cluster (deepseek-v4-flash, glm-5.3)
ci_cd: GitHub Actions + AI review
code_quality: Automated AI review + Bugbot
security: Local models for sensitive code; scan every PR
```

**Team Rules (`.cursor/rules` or `AGENTS.md`):**
```
# Team Standards
- TypeScript strict mode required
- All PRs reviewed by AI first, then human
- Test coverage > 80%
- Security scan before merge
- Document public APIs
- Agents need human approval before production changes
```

### Specialized Workflows

**Frontend Development:**
```
Primary: Cursor + Claude Sonnet 5.5
Tasks:
- Component generation
- Tailwind CSS
- State management
- Testing

Setup:
- v0.dev for UI inspiration
- Cursor for implementation
- Playwright for E2E tests
```

**Backend Development:**
```
Primary: Cursor + Claude Sonnet 5.5
Tasks:
- API design
- Database schemas
- Authentication
- Deployment configs

Setup:
- Cursor with multiple models
- Local DeepSeek for quick tasks
- Claude Opus 5.5 for complex architecture
```

**DevOps:**
```
Primary: VS Code + Cline (agent) or Claude Code
Tasks:
- Infrastructure as Code
- CI/CD pipelines
- Monitoring setup
- Security hardening

Setup:
- Cline / Claude Code for autonomous work
- Terraform/Ansible extensions
- Kubernetes tools
```

**Spec-Driven Team:**
```
Primary: Kiro
Tasks: Specs → design → tasks → agent implementation

Setup:
- Kiro Pro ($20–40/mo)
- AGENTS.md for cross-tool consistency
- Human review at each task boundary
```

---

## Quick Start Guides

### 5-Minute Setup (VS Code)

```bash
# 1. Install VS Code
# 2. Install Continue extension
# 3. Install Ollama
# 4. Pull model
ollama pull deepseek-v4-flash

# 5. Start coding!
# Cmd+L to chat
# Cmd+I to inline edit
```

### 15-Minute Setup (Cursor)

```bash
# 1. Download Cursor
# 2. Import VS Code settings
# 3. Sign up for free tier
# 4. Configure preferred model (Claude Sonnet 5.5)
# 5. Try workflows:
#    - Cmd+L: Chat
#    - Cmd+K: Edit
#    - @workspace: Codebase questions
```

### Power User Setup (1 hour)

```bash
# 1. Install Cursor Pro
# 2. Install Claude Code terminal agent
# 3. Set up Ollama with multiple models
ollama pull deepseek-v4-flash
ollama pull glm-5.3
ollama pull kimi-k3

# 4. Configure Cursor rules
# 5. Set up keyboard shortcuts
# 6. Create workflow templates
# 7. Test with real project
# 8. Pair Cursor with Claude Code for autonomous work
```

---

## Resources

### Extension Links

- Continue: https://continue.dev
- GitHub Copilot: https://github.com/features/copilot
- Cline: https://cline.bot
- Claude Code: https://claude.com/code
- OpenAI Codex: https://openai.com/codex
- Kiro: https://kiro.dev
- Antigravity: https://antigravity.google
- Devin Desktop: https://devin.ai

### IDE Downloads

- Cursor: https://cursor.com
- Devin Desktop: https://devin.ai
- Zed: https://zed.dev
- VS Code: https://code.visualstudio.com

### Communities

- r/cursor_ai (Reddit)
- Continue Discord
- Zed Discord
- VS Code Slack
- Anthropic Claude Code community

---

*Last updated: November 2026*