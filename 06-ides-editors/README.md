# IDEs and Editors for Vibe Coding

A comprehensive guide to code editors and IDEs optimized for AI-assisted development, including traditional editors with AI extensions and native AI-first IDEs.

---

## Table of Contents

1. [Editor Categories](#editor-categories)
2. [Traditional Editors with AI](#traditional-editors-with-ai)
3. [AI-Native IDEs](#ai-native-ides)
4. [VS Code Setup](#vs-code-setup)
5. [Cursor IDE](#cursor-ide)
6. [Windsurf IDE](#windsurf-ide)
7. [Zed Editor](#zed-editor)
8. [Neovim AI Setup](#neovim-ai-setup)
9. [JetBrains IDEs](#jetbrains-ides)
10. [Editor Comparison](#editor-comparison)
11. [Workflow Recommendations](#workflow-recommendations)

---

## Editor Categories

### Traditional Editors + AI Extensions

Established editors enhanced with AI capabilities through extensions:

- **VS Code** + Continue/Copilot/Cline
- **Neovim** + Copilot.lua/Continue
- **Sublime Text** + AI plugins
- **JetBrains IDEs** + AI Assistant

**Pros:**
- Mature ecosystems
- Extensive plugin libraries
- Familiar workflows
- Strong debugging tools
- Excellent version control integration

**Cons:**
- AI features feel added-on
- May require multiple extensions
- Context awareness varies

### AI-Native IDEs

Built from ground up with AI as core feature:

- **Cursor**
- **Windsurf**
- **Zed** (with AI features)
- **Kiro**
- **Dyad**
- **Antigravity**
- **OpenCode**

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
1. **GitHub Copilot** - Official GitHub AI pair programmer
2. **Continue** - Open-source AI assistant
3. **Cline** - Autonomous coding agent
4. **Roo Code** - Advanced AI coding
5. **Codeium** - Free alternative to Copilot
6. **Tabnine** - AI autocomplete
7. **Sourcegraph Cody** - Codebase-aware AI

**Setup Priority:**
1. Install VS Code Insiders (latest features)
2. Add Continue extension (open-source flexibility)
3. Configure for local models (Ollama)
4. Set up keybindings for AI actions

### Neovim

**Best For:** Terminal lovers, minimalists, performance

**AI Plugins:**
1. **copilot.lua** - GitHub Copilot integration
2. **continue.nvim** - Continue.dev port
3. **ai.nvim** - Chat with AI in editor
4. **chatgpt.nvim** - OpenAI integration
5. **ollama.nvim** - Local model access

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
- **Composer:** Multi-file editing
- **Agent Mode:** Autonomous task completion
- **Model Choice:** Switch between Claude, GPT-4, custom models

**Setup:**
1. Download from cursor.com
2. Import VS Code settings (automatic)
3. Install VS Code extensions (compatible)
4. Configure API keys or use included quota

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
- Use @files to reference specific files in chat
- Enable "Always apply edits without review" for speed
- Use Composer for multi-file changes
- Set up custom rules for your team's style

### Windsurf

**Website:** https://codeium.com/windsurf  
**Pricing:** Free with Codeium account  
**Best For:** Fast AI assistance, free tier

**Key Features:**
- **Flow:** Conversational AI assistant
- **Super-complete:** Advanced autocomplete
- **Chat:** Contextual code chat
- **Edit:** In-place code modification
- **Free Tier:** Generous free usage

**Strengths:**
- Completely free for individuals
- Fast response times
- Good code quality
- Simple setup
- VS Code compatible

**Limitations:**
- Less advanced than Cursor
- Smaller context window
- Fewer power features

### Zed

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
    "model": "qwen2.5-coder:32b",
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
      "model": "qwen2.5-coder:32b"
    },
    {
      "title": "Claude",
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022",
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
  "cline.model": "claude-3-5-sonnet-20241022",
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
  "cursor.ai.model": "claude-3-5-sonnet",
  "cursor.ai.fastModel": "gpt-4o-mini",
  "cursor.ai.customModels": [
    {
      "name": "Local Qwen",
      "provider": "ollama",
      "model": "qwen2.5-coder:32b",
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

Create `.cursor/rules` file for team standards:

```
# Code Style
- Always use TypeScript strict mode
- Prefer functional components with hooks
- Use async/await over promises
- Add JSDoc comments for public APIs

# Testing
- Write tests for all new features
- Use Jest and React Testing Library
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

## Windsurf

### Setup Guide

**Installation:**
1. Download from https://codeium.com/windsurf
2. Sign in with Codeium account (free)
3. Import VS Code settings

**Features Overview:**

**Flow (Chat):**
- Context-aware conversations
- Codebase understanding
- File references
- Edit suggestions

**Super-complete:**
- Advanced autocomplete
- Multi-line predictions
- Cross-file awareness

**Edit:**
- In-place modifications
- Natural language instructions
- Preview changes

### Best Practices

**For Free Users:**
- Windsurf is best free AI IDE option
- No usage limits for individuals
- Good quality for most tasks

**Workflows:**
```
# Quick question
Cmd+L → "What does this function do?"

# Generate code
Type comment → Tab to complete

# Fix bug
Select code → Cmd+K → "Fix the null pointer issue"
```

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
            model = "qwen2.5-coder:32b",
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

| Feature | VS Code | Cursor | Windsurf | Zed | Neovim |
|---------|---------|--------|----------|-----|--------|
| AI Quality | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Speed | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Extensions | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Free Tier | ✅ | Limited | ✅ Full | ✅ | ✅ |
| Local Models | ✅ | ✅ | ❌ | ✅ | ✅ |
| Learning Curve | Low | Low | Low | Medium | High |
| Best For | Everyone | AI-first | Free users | Performance | Terminal |

### Pricing Comparison

| Editor | Free Tier | Pro Tier | Enterprise |
|--------|-----------|----------|------------|
| VS Code | ✅ Full | N/A | N/A |
| Cursor | 50 msgs/mo | $20/mo | Custom |
| Windsurf | ✅ Full | N/A | Teams |
| Zed | ✅ Full | N/A | N/A |
| Neovim | ✅ Full | N/A | N/A |
| JetBrains | 30 days | $8-20/mo | $30-50/mo |

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
ollama pull qwen2.5-coder:7b

# 5. Configure Continue
# Open ~/.continue/config.json
```

**config.json:**
```json
{
  "models": [
    {
      "title": "Qwen Coder",
      "provider": "ollama",
      "model": "qwen2.5-coder:7b"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Qwen Coder",
    "provider": "ollama",
    "model": "qwen2.5-coder:7b"
  }
}
```

### Intermediate Setup

**Recommended:** Cursor Pro + Local Fallback

```bash
# 1. Subscribe to Cursor Pro ($20/mo)
# 2. Set primary model: Claude 3.5 Sonnet
# 3. Configure local fallback:

# settings.json
{
  "cursor.ai.model": "claude-3-5-sonnet",
  "cursor.ai.fallbackModel": {
    "provider": "ollama",
    "model": "qwen2.5-coder:32b"
  }
}

# 4. Install Ollama for offline work
ollama pull qwen2.5-coder:32b
```

### Advanced/Team Setup

**Recommended:** Mixed approach

```yaml
# Team Configuration
primary_ide: Cursor Pro
backup_ide: VS Code + Continue
local_models: Ollama cluster
ci_cd: GitHub Actions + AI review
code_quality: Automated AI review
security: Local models for sensitive code
```

**Team Rules (.cursor/rules):**
```
# Team Standards
- TypeScript strict mode required
- All PRs reviewed by AI first
- Test coverage > 80%
- Security scan before merge
- Document public APIs
```

### Specialized Workflows

**Frontend Development:**
```
Primary: Cursor + Claude 3.5 Sonnet
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
Primary: VS Code + Continue + GPT-4o
Tasks:
- API design
- Database schemas
- Authentication
- Deployment configs

Setup:
- Continue with multiple models
- Local Qwen for quick tasks
- GPT-4o for complex architecture
```

**DevOps:**
```
Primary: VS Code + Cline (agent)
Tasks:
- Infrastructure as Code
- CI/CD pipelines
- Monitoring setup
- Security hardening

Setup:
- Cline for autonomous work
- Terraform/Ansible extensions
- Kubernetes tools
```

---

## Quick Start Guides

### 5-Minute Setup (VS Code)

```bash
# 1. Install VS Code
# 2. Install Continue extension
# 3. Install Ollama
# 4. Pull model
ollama pull phi3:mini

# 5. Start coding!
# Cmd+L to chat
# Cmd+I to inline edit
```

### 15-Minute Setup (Cursor)

```bash
# 1. Download Cursor
# 2. Import VS Code settings
# 3. Sign up for free tier
# 4. Configure preferred model
# 5. Try workflows:
#    - Cmd+L: Chat
#    - Cmd+K: Edit
#    - @workspace: Codebase questions
```

### Power User Setup (1 hour)

```bash
# 1. Install Cursor Pro
# 2. Set up Ollama with multiple models
ollama pull qwen2.5-coder:32b
ollama pull llama3.1:70b
ollama pull deepseek-coder-v2

# 3. Configure Cursor rules
# 4. Set up keyboard shortcuts
# 5. Create workflow templates
# 6. Test with real project
```

---

## Resources

### Extension Links

- Continue: https://continue.dev
- GitHub Copilot: https://github.com/features/copilot
- Cline: https://cline.bot
- Roo Code: https://roocode.com

### IDE Downloads

- Cursor: https://cursor.com
- Windsurf: https://codeium.com/windsurf
- Zed: https://zed.dev
- VS Code: https://code.visualstudio.com

### Communities

- r/cursor_ai (Reddit)
- Continue Discord
- Zed Discord
- VS Code Slack

---

*Last updated: December 2024*
