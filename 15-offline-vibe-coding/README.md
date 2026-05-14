# 🤖 15 - Offline Vibe Coding

> **Run AI models locally for private, offline development without cloud dependencies.**  
> This guide covers Ollama, LM Studio, Open WebUI, local models, and complete offline AI workflows.

---

## 📖 Table of Contents

- [Why Offline Vibe Coding?](#why-offline-vibe-coding)
- [Benefits of Local AI](#benefits-of-local-ai)
- [Ollama Setup Guide](#ollama-setup-guide)
- [LM Studio Guide](#lm-studio-guide)
- [Open WebUI Installation](#open-webui-installation)
- [Best Local Models](#best-local-models)
- [IDE Integration](#ide-integration)
- [Offline Agent Workflows](#offline-agent-workflows)
- [Performance Optimization](#performance-optimization)
- [Privacy & Security](#privacy--security)
- [Troubleshooting](#troubleshooting)
- [Next Steps](#next-steps)

---

## 🎯 Why Offline Vibe Coding?

Offline vibe coding means running AI models on your local hardware instead of relying on cloud APIs like Claude or ChatGPT.

### When to Go Offline

| Scenario | Cloud AI | Local AI |
|----------|----------|----------|
| **Privacy-sensitive code** | ❌ Risk | ✅ Perfect |
| **No internet connection** | ❌ Won't work | ✅ Works |
| **High volume usage** | 💰 Expensive | ✅ Free after setup |
| **Custom fine-tuning** | ❌ Limited | ✅ Full control |
| **Latency critical** | 🌐 Network delay | ✅ Instant |
| **Learning/experimentation** | 💰 Cost adds up | ✅ Unlimited |

---

## ✨ Benefits of Local AI

### 1. **Complete Privacy**
Your codebase never leaves your machine. Critical for:
- Proprietary algorithms
- Customer data handling
- Security-sensitive projects
- NDAs and compliance requirements

### 2. **No Usage Limits**
Cloud services have rate limits and costs:
```
Cloud AI (Claude Pro): $20/month → ~1000 messages
Local AI: One-time hardware cost → Unlimited messages
```

### 3. **Customization**
- Fine-tune models on your codebase
- Create custom system prompts
- Modify model behavior
- Build specialized agents

### 4. **Offline Capability**
Work from anywhere:
- Airplanes ✈️
- Remote locations 🏔️
- Network outages ⚡

### 5. **Lower Long-term Cost**
```
Break-even calculation:
RTX 4060 Ti 16GB: $400
Monthly cloud AI: $20-200
Break-even: 2-20 months
After that: Pure savings!
```

---

## 🦙 Ollama Setup Guide

### What is Ollama?

Ollama is the easiest way to run LLMs locally. It handles:
- Model downloading
- Quantization
- GPU acceleration
- API server
- Simple CLI interface

### Installation

#### macOS
```bash
brew install ollama
# Or download from https://ollama.ai
```

#### Windows
```powershell
# Download installer from https://ollama.ai/download
# Run OllamaSetup.exe
```

#### Linux
```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

### Verify Installation
```bash
ollama --version
ollama list
```

### Pull Your First Model
```bash
# Start with a small, fast model
ollama pull llama3.2:3b

# Medium-sized general purpose
ollama pull llama3.2:7b

# Coding specialist
ollama pull codellama:7b

# Large powerful model (needs 16GB+ VRAM)
ollama pull llama3.2:14b
```

### Running Models
```bash
# Interactive chat
ollama run llama3.2:7b

# One-shot query
ollama run llama3.2:7b "Explain quantum computing in 3 sentences"

# With system prompt
ollama run llama3.2:7b "You are a senior Python developer. Review this code:" 

# Pass code via stdin
cat main.py | ollama run llama3.2:7b "Find bugs in this code"
```

### Ollama API Server
```bash
# Start server (runs on http://localhost:11434)
ollama serve

# API usage
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2:7b",
  "prompt": "Hello!",
  "stream": false
}'
```

### Popular Models for Coding

| Model | Size | Min RAM | Speed | Quality | Best For |
|-------|------|---------|-------|---------|----------|
| **Phi-3-mini** | 3.8B | 4GB | ⚡⚡⚡ | ⭐⭐⭐ | Quick tasks |
| **Llama 3.2 3B** | 3B | 4GB | ⚡⚡⚡ | ⭐⭐⭐ | General use |
| **Llama 3.2 7B** | 7B | 8GB | ⚡⚡ | ⭐⭐⭐⭐ | Balanced |
| **CodeLlama 7B** | 7B | 8GB | ⚡⚡ | ⭐⭐⭐⭐ | Code generation |
| **DeepSeek Coder 6.7B** | 6.7B | 8GB | ⚡⚡ | ⭐⭐⭐⭐⭐ | Best coding |
| **Qwen 2.5 Coder 7B** | 7B | 8GB | ⚡⚡ | ⭐⭐⭐⭐⭐ | Excellent |
| **Llama 3.2 14B** | 14B | 16GB | ⚡ | ⭐⭐⭐⭐⭐ | Complex tasks |
| **Mistral Large** | 123B | 64GB+ | 🐌 | ⭐⭐⭐⭐⭐⭐ | Maximum power |

### Model Management
```bash
# List downloaded models
ollama list

# Show model info
ollama show llama3.2:7b

# Delete a model
ollama rm llama3.2:7b

# Copy a model
ollama cp llama3.2:7b my-coding-model

# Export to GGUF format
ollama cp llama3.2:7b /path/to/export.gguf
```

### Custom Modelfiles
Create customized versions:
```dockerfile
FROM llama3.2:7b

SYSTEM """
You are an expert software developer specializing in Python and JavaScript.
Always provide clean, production-ready code with comments.
Explain your reasoning step-by-step.
"""

PARAMETER temperature 0.7
PARAMETER top_p 0.9
```

Build it:
```bash
ollama create my-dev-assistant -f ./Modelfile
```

---

## 💻 LM Studio Guide

### What is LM Studio?

LM Studio is a user-friendly GUI for running local LLMs with:
- Beautiful interface
- Model discovery built-in
- No command line needed
- Cross-platform support

### Installation

1. Download from https://lmstudio.ai/
2. Install for your OS (Windows/Mac/Linux)
3. Launch the application

### Downloading Models

1. Click **"Discover"** tab
2. Search for models (e.g., "llama", "codellama")
3. Choose quantization level:
   - Q4_K_M: Good balance (recommended)
   - Q5_K_M: Better quality, larger size
   - Q8_0: Best quality, maximum size
4. Click Download

### Chat Interface

1. Go to **"Chat"** tab
2. Load your model from dropdown
3. Set system prompt in settings
4. Start chatting!

### Features

- **Multiple model comparison**: Run side-by-side chats
- **Presets**: Save different configurations
- **Local API server**: Expose as OpenAI-compatible endpoint
- **Vision models**: Support for image analysis
- **Context customization**: Adjust context window size

### Local API Server

LM Studio can act as an OpenAI drop-in replacement:

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:1234/v1",
    api_key="not-needed"
)

response = client.chat.completions.create(
    model="local-model",
    messages=[
        {"role": "system", "content": "You are a coding assistant"},
        {"role": "user", "content": "Write a Python function to sort a list"}
    ]
)

print(response.choices[0].message.content)
```

---

## 🌐 Open WebUI Installation

### What is Open WebUI?

Open WebUI provides a ChatGPT-like interface for local models with:
- Beautiful web UI
- Conversation history
- Multiple model support
- RAG capabilities
- User management

### Docker Installation (Recommended)

```bash
docker run -d \
  -p 3000:8080 \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main
```

Access at: http://localhost:3000

### Direct Installation

```bash
pip install open-webui
open-webui serve
```

### Connect to Ollama

1. Open WebUI auto-detects Ollama on localhost:11434
2. If not, go to Settings → Connections
3. Add Ollama URL: http://host.docker.internal:11434 (Docker)
4. Refresh models

### Features

- **Chat Interface**: ChatGPT-like experience
- **Document Upload**: RAG with PDFs, text files
- **Web Search**: Enable internet access
- **Image Generation**: DALL-E integration
- **Voice Input/Output**: Speech-to-text support
- **Multi-user**: Role-based access control
- **Model Switching**: Easy model selection

---

## 🏆 Best Local Models for Coding

### Top Recommendations (2024)

#### 1. **DeepSeek Coder V2** ⭐⭐⭐⭐⭐
- Sizes: 1.3B, 6.7B, 16B, 33B
- Strengths: Best overall coding performance
- Languages: 338 programming languages
- Context: Up to 128K tokens

```bash
ollama pull deepseek-coder:6.7b
```

#### 2. **Qwen 2.5 Coder** ⭐⭐⭐⭐⭐
- Sizes: 1.5B, 7B, 14B, 32B
- Strengths: Excellent code understanding
- Special: Strong in competitive programming

```bash
ollama pull qwen2.5-coder:7b
```

#### 3. **CodeLlama** ⭐⭐⭐⭐
- Sizes: 7B, 13B, 34B, 70B
- Strengths: Meta's official coding model
- Variants: Python, Instruct, Base

```bash
ollama pull codellama:7b-instruct
```

#### 4. **Llama 3.2** ⭐⭐⭐⭐
- Sizes: 1B, 3B, 7B, 14B
- Strengths: General purpose, good coding
- Best for: Mixed coding + explanation tasks

```bash
ollama pull llama3.2:7b
```

#### 5. **Phi-3 Mini** ⭐⭐⭐
- Size: 3.8B
- Strengths: Fastest, runs everywhere
- Best for: Quick tasks, low-end hardware

```bash
ollama pull phi3:mini
```

### Model Selection Guide

| Hardware | Recommended Model | Expected Speed |
|----------|------------------|----------------|
| **4GB RAM** | Phi-3-mini, TinyLlama | 30-50 tokens/s |
| **8GB RAM** | Llama 3.2 7B, DeepSeek 6.7B | 20-40 tokens/s |
| **16GB RAM** | Llama 3.2 14B, Qwen 14B | 10-25 tokens/s |
| **24GB VRAM** | Mixtral 8x7B, CodeLlama 34B | 5-15 tokens/s |
| **32GB+ RAM** | Llama 3 70B (quantized) | 2-5 tokens/s |

---

## 🔧 IDE Integration

### VS Code + Continue Extension

Continue is the best open-source AI extension for VS Code.

#### Installation
```bash
# In VS Code Extensions
Search: "Continue"
Install: Continue - Edit code with AI
```

#### Configure for Local AI
`.continue/config.json`:
```json
{
  "models": [
    {
      "title": "Ollama",
      "provider": "ollama",
      "model": "llama3.2:7b"
    },
    {
      "title": "LM Studio",
      "provider": "openai",
      "apiBase": "http://localhost:1234/v1",
      "model": "local-model"
    }
  ],
  "tabAutocompleteModel": {
    "title": "Autocomplete",
    "provider": "ollama",
    "model": "deepseek-coder:6.7b"
  }
}
```

#### Features
- **Tab Autocomplete**: Inline code suggestions
- **Chat Sidebar**: Ask questions about code
- **Edit Commands**: Select code → Cmd+I → Describe change
- **Code Review**: Automatic PR reviews
- **Documentation**: Generate docs from code

### Cursor IDE with Local Models

Cursor now supports local models via Ollama:

1. Settings → AI → Advanced
2. Enable "Use Ollama"
3. Set model name
4. Enjoy AI features with local models!

### Neovim + Copilot.lua

For terminal enthusiasts:
```lua
require('copilot').setup({
  servers = {
    {
      url = "http://localhost:11434",
      model = "deepseek-coder:6.7b"
    }
  }
})
```

---

## 🤖 Offline Agent Workflows

### Building Autonomous Agents

With local models, you can build agents that:
- Access your file system
- Run commands
- Make API calls
- Work completely offline

### Example: Code Review Agent

Create `agent.py`:
```python
from ollama import chat
import subprocess

def review_code(file_path):
    # Read the code
    with open(file_path, 'r') as f:
        code = f.read()
    
    # Prompt for review
    prompt = f"""Review this code for:
1. Bugs and errors
2. Security vulnerabilities  
3. Performance issues
4. Code style problems
5. Suggestions for improvement

Code:
{code}

Provide actionable feedback with examples."""

    # Get AI review
    response = chat(model='llama3.2:7b', messages=[
        {'role': 'user', 'content': prompt}
    ])
    
    return response['message']['content']

# Usage
review = review_code('main.py')
print(review)
```

### Example: Automated Refactoring

```python
def refactor_file(file_path):
    with open(file_path, 'r') as f:
        code = f.read()
    
    prompt = f"""Refactor this code to:
- Improve readability
- Follow SOLID principles
- Add type hints
- Extract functions if too long
- Add error handling

Code:
{code}

Return only the refactored code, no explanations."""

    response = chat(model='codellama:7b', messages=[
        {'role': 'user', 'content': prompt}
    ])
    
    # Write back
    with open(file_path, 'w') as f:
        f.write(response['message']['content'])
```

### Multi-Agent Systems

Create specialized agents:
```python
agents = {
    'architect': 'llama3.2:14b',  # High-level design
    'coder': 'deepseek-coder:6.7b',  # Implementation
    'reviewer': 'qwen2.5-coder:7b',  # Code review
    'tester': 'codellama:7b'  # Test generation
}

def build_feature(requirement):
    # Architect designs
    design = agents['architect'].generate(f"Design: {requirement}")
    
    # Coder implements
    code = agents['coder'].generate(f"Implement: {design}")
    
    # Reviewer checks
    feedback = agents['reviewer'].generate(f"Review: {code}")
    
    # Tester creates tests
    tests = agents['tester'].generate(f"Test this: {code}")
    
    return {
        'design': design,
        'code': code,
        'feedback': feedback,
        'tests': tests
    }
```

---

## ⚡ Performance Optimization

### Speed Up Inference

#### 1. Use Quantized Models
```bash
# Q4 quantization (recommended)
ollama pull llama3.2:7b-q4_K_M

# Q3 for speed
ollama pull llama3.2:7b-q3_K_M

# Q5 for quality
ollama pull llama3.2:7b-q5_K_M
```

#### 2. GPU Acceleration
Ensure GPU is being used:
```bash
# Check during inference
nvidia-smi  # Should show ollama process
```

#### 3. Reduce Context Length
```bash
ollama run llama3.2:7b "/set parameter num_ctx 2048"
# Default is 4096, reduce for speed
```

#### 4. Batch Requests
Instead of multiple calls:
```python
# Bad: Sequential
for question in questions:
    ask(question)

# Good: Batch
ask_all(questions)
```

### Memory Management

#### Monitor Usage
```bash
# Linux
watch -n 1 nvidia-smi

# macOS
sudo powermetrics --samplers gpu_power -i 1000
```

#### Free Memory
```bash
# Stop Ollama
ollama serve  # Ctrl+C

# Clear GPU cache
echo 3 | sudo tee /proc/sys/vm/drop_caches
```

### Benchmark Your Setup

```python
import time
from ollama import chat

def benchmark(model_name, prompt="Write a quicksort implementation"):
    start = time.time()
    response = chat(model=model_name, messages=[
        {'role': 'user', 'content': prompt}
    ])
    end = time.time()
    
    tokens = len(response['message']['content'].split())
    speed = tokens / (end - start)
    
    print(f"{model_name}: {speed:.1f} tokens/s")
    return speed

# Test different models
benchmark('phi3:mini')
benchmark('llama3.2:7b')
benchmark('deepseek-coder:6.7b')
```

---

## 🔒 Privacy & Security

### Advantages Over Cloud

| Aspect | Cloud AI | Local AI |
|--------|----------|----------|
| **Data transmission** | ❌ Sent over internet | ✅ Stays local |
| **Training on your data** | ❌ Possible | ✅ Never |
| **Logging** | ❌ Provider logs | ✅ No logs |
| **Compliance** | ⚠️ Depends on provider | ✅ Full control |
| **Air-gapped** | ❌ Impossible | ✅ Possible |

### Security Best Practices

#### 1. Firewall Configuration
```bash
# Only allow localhost access
sudo ufw deny 11434
sudo ufw allow from 127.0.0.1 to any port 11434
```

#### 2. Model Verification
```bash
# Verify SHA256 checksums
sha256sum ~/.ollama/models/*
# Compare with official hashes
```

#### 3. Isolated Environment
```bash
# Run in container
docker run --gpus all -p 127.0.0.1:11434:11434 ollama/ollama
```

#### 4. Audit Logs
Enable logging:
```bash
OLLAMA_DEBUG=1 ollama serve
```

---

## 🐛 Troubleshooting

### Common Issues

#### Problem: Model loads slowly
**Solutions:**
- Use smaller quantization (Q4 instead of Q8)
- Close other applications
- Upgrade RAM
- Use faster SSD

#### Problem: Out of memory
**Solutions:**
```bash
# Reduce context
ollama run llama3.2:7b "/set parameter num_ctx 1024"

# Use smaller model
ollama pull phi3:mini

# Close other GPU applications
```

#### Problem: Slow token generation
**Solutions:**
- Ensure GPU is being used (`nvidia-smi`)
- Try different model (some are optimized better)
- Update Ollama to latest version
- Check thermal throttling

#### Problem: Ollama won't start
**Solutions:**
```bash
# Check if port is in use
lsof -i :11434

# Kill existing process
killall ollama

# Restart service
sudo systemctl restart ollama
```

#### Problem: Poor code quality
**Solutions:**
- Use coding-specific models (DeepSeek, CodeLlama)
- Improve your prompts
- Increase temperature slightly (0.7-0.8)
- Provide more context in prompts

### Getting Help

- **Ollama Docs**: https://ollama.ai/docs
- **GitHub Issues**: https://github.com/ollama/ollama/issues
- **Discord**: https://discord.gg/ollama
- **Reddit**: r/Ollama

---

## 🎯 Next Steps

Now that you have local AI setup:

1. ✅ **Practice**: Use local models for daily coding tasks
2. ✅ **Integrate**: Set up Continue extension in VS Code
3. ✅ **Experiment**: Try different models for different tasks
4. ✅ **Optimize**: Benchmark and tune for your hardware
5. ✅ **Build**: Create custom agents for your workflow

### Continue Your Journey:
- 📚 Read [22-AI Agents](../22-ai-agents/) for advanced agent patterns
- 🔧 Explore [24-Automation](../24-automation/) for workflow automation
- 📖 Check [05-AI Tools](../05-ai-tools/) for tool comparisons
- 💡 Browse [26-Awesome Prompts](../26-awesome-prompts/) for prompt examples

---

> **💡 Pro Tip**: Start with a small model (3-7B) for speed, use larger models (14B+) only when needed. Most coding tasks work great with 7B models!

---

<div align="center">

**Ready to code offline?**  
➡️ [Next: Open Source Projects](../16-open-source-projects/) ⬅️

[⬆️ Back to Introduction](../00-introduction/)

Made with ❤️ by the Vibe Coding Community

</div>
