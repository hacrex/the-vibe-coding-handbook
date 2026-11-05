# AI Models for Vibe Coding

A comprehensive guide to AI models for software development, including frontier models, open-source models, coding-specific models, and how to choose the right model for each task.

> **Last updated: November 2026** — reflects the current model lineup (Claude 5.5/Fable 5.1, GPT-6, Gemini 4, Kimi K3, GLM-5.3, DeepSeek V4), current pricing, and November 2026 benchmarks.

---

## Table of Contents

1. [Model Types](#model-types)
2. [Frontier Models](#frontier-models)
3. [Open Source Models](#open-source-models)
4. [Coding-Specific Models](#coding-specific-models)
5. [Key Concepts](#key-concepts)
6. [How to Choose Models](#how-to-choose-models)
7. [Comparison Tables](#comparison-tables)
8. [Local Model Setup](#local-model-setup)
9. [Cost Analysis](#cost-analysis)
10. [Best Practices](#best-practices)

---

## Model Types

AI models for software development fall into three main categories:

### 1. Frontier Models

Large-scale proprietary models from major AI labs with state-of-the-art capabilities:

- **GPT series** (OpenAI)
- **Claude series** (Anthropic)
- **Gemini series** (Google)
- **Grok series** (xAI)

These models offer:
- Largest context windows (1M tokens is now standard on flagships)
- Best reasoning capabilities
- Strongest general knowledge
- Highest cost per token
- API-only access (no local deployment)

### 2. Open Source Models

Publicly available models that can be run locally or self-hosted:

- **Kimi series** (Moonshot AI)
- **GLM series** (Z.ai)
- **DeepSeek series** (DeepSeek)
- **Qwen series** (Alibaba)
- **Mistral series** (Mistral AI)
- **Llama series** (Meta)
- **Gemma series** (Google)

Benefits:
- Free to use
- Can run locally for privacy
- Customizable and fine-tunable
- No API costs after hardware investment
- Community-driven improvements

### 3. Coding-Specific Models

Models with a strong focus on code generation and understanding (note: in 2026, general-purpose flagships top the coding leaderboards — see [Coding-Specific Models](#coding-specific-models) below):

- **DeepSeek V4.1 Flash / V4 Pro**
- **Qwen3.8 / Qwen3.8 Max** (Alibaba)
- **Codestral** (Mistral)
- **Kimi K3** (Moonshot AI)
- **GLM-5.3** (Z.ai)

Specialized for:
- Code completion
- Bug fixing
- Code translation
- Documentation generation
- Test case generation

---

## Frontier Models

### GPT Series (OpenAI)

#### GPT-6 Astra / GPT-6.1 Sol / GPT-6.1 Terra / GPT-6 Luna

**Context Window:** ~1M tokens  
**Best For:** Complex reasoning, multi-file agentic coding, general programming

**The 2026 GPT-6 lineup:**
- **GPT-6 Astra** — $10/1M input, $50/1M output: flagship for complex reasoning and coding
- **GPT-6.1 Sol** — ~$2-4/$10-20: near-Astra performance at substantially lower cost
- **GPT-6.1 Terra** — $2/$10: best value for everyday coding
- **GPT-6 Luna** — $0.10/$0.50: fast, high-volume tasks

**Strengths:**
- Excellent code generation across all languages
- Strong multi-step reasoning for large changesets
- Good at explaining complex concepts
- Wide tool integration ecosystem
- Reliable API with good uptime

**Weaknesses:**
- Astra pricing adds up quickly at scale
- Rate limits on free tier
- Cannot run locally
- Occasional knowledge cutoff issues

**Best Use Cases:**
- Architecture design discussions
- Complex algorithm implementation
- Code review and optimization
- Learning new technologies

**A Note on "Reasoning Models":**
Extended thinking is now built into the GPT-6 and Claude families — there is no separate reasoning-model tier to pick. You choose a capability tier (flagship, everyday, or fast/value) and the model reasons as deeply as the task requires.

### Claude Series (Anthropic)

#### Claude Opus 5.5 / Claude Sonnet 5.5 / Claude Fable 5.1 / Claude Haiku 5.5

**Context Window:** 1M tokens  
**Best For:** Long-running agentic coding, codebase-wide refactoring, documentation

**The 2026 Claude lineup:**
- **Claude Opus 5.5** — $4/1M input, $20/1M output: flagship, best for long-running agentic coding
- **Claude Sonnet 5.5** — $2/$10: everyday coding workhorse
- **Claude Fable 5.1** — $10/$50: hardest reasoning and long-horizon work
- **Claude Haiku 5.5** — $0.10/$0.50: high-volume, latency-sensitive tasks

**Strengths:**
- #1 on the BenchLeader coding index (Opus 5.5 at 80.9, November 2026)
- Best Terminal-bench 4.0 results (Sonnet 5.5 at 70.6%)
- 1M context for full repository understanding
- Excellent at following instructions
- Strong security awareness
- Great for legacy code modernization

**Weaknesses:**
- Opus/Fable pricing is premium
- Slower than Haiku-tier models for simple tasks
- Anthropic-only ecosystem (no open weights)

**Best Use Cases:**
- Full repository analysis
- Large-scale refactoring projects
- Technical documentation
- Security audits

### Gemini Series (Google)

#### Gemini 4 Argon / Gemini 4 Carbon

**Context Window:** 1M tokens  
**Best For:** Real-world software engineering, massive context processing, multimodal tasks

**The 2026 Gemini lineup:**
- **Gemini 4 Argon** — ~$2/1M input, ~$10/1M output (introductory): flagship built for real-world software engineering
- **Gemini 4 Carbon** — $8/$8: high coding score (75.2 on BenchLeader)
- **Gemini Flash family** — ~$0.75/$3.75: fast and cheap

**Strengths:**
- Best DeepSWE v1.1 result of any model (Argon 77.9%)
- 1M context, native multimodal understanding
- Good integration with Google Cloud and Antigravity
- Competitive pricing

**Weaknesses:**
- Argon pricing is introductory and may rise
- API availability varies by region
- Ecosystem less mature than Anthropic/OpenAI for coding agents

### Grok Series (xAI)

**Best For:** Real-time information, unconventional problem-solving

**Strengths:**
- Access to real-time X/Twitter data
- Less restricted responses
- Competitive coding performance in recent releases

**Weaknesses:**
- Coding is not the primary focus
- Smaller coding ecosystem than Claude/GPT/Gemini
- Variable code quality on large refactors

---

## Open Source Models

### Kimi Series (Moonshot AI)

#### Kimi K3

**Context Window:** 1M+ tokens  
**Pricing:** $3/1M input, $15/1M output  
**Best For:** Long-context agentic coding on an open-weight model

**Strengths:**
- 1M+ context window handles entire repositories
- Strong agentic/tool-use performance
- Open weights (self-hostable, API available)
- Competitive with proprietary mid-tier models

### GLM Series (Z.ai)

#### GLM-5.3

**Context Window:** 1M tokens  
**Pricing:** $1.40/1M input, $4.40/1M output  
**Best For:** High-quality coding at a fraction of flagship cost

**Strengths:**
- Excellent coding performance for the price
- 1M context
- Open weights with commercial-friendly licensing
- Strong community tooling and quantization support

### DeepSeek Series

#### DeepSeek V4 Pro / DeepSeek V4.1 Flash

**Context Window:** 1M tokens  
**Pricing:** V4 Pro $0.66/$1.98, V4.1 Flash $0.15/$0.60 per 1M tokens  
**Best For:** Cost-sensitive, high-volume coding

**Strengths:**
- Mixture of Experts architecture (efficient inference)
- Near-zero cost for individual developers
- Excellent math and coding capabilities
- Open weights plus a cheap hosted API

**Performance:**
- Competitive with mid-tier proprietary models on coding benchmarks
- Faster inference due to MoE architecture
- Best value tier for production use

### Qwen Series (Alibaba)

#### Qwen3.8 / Qwen3.8 Max

**Context Window:** 1M tokens  
**Best For:** Coding tasks, multilingual support, local deployment

**Strengths:**
- Excellent coding capabilities across the Qwen3.8 family
- Strong multilingual support
- Multiple sizes (small variants run on consumer GPUs)
- Efficient inference and good quantization support

### Mistral Series (Mistral AI)

#### Mistral Large 4

**Context Window:** 1M-class  
**Best For:** European deployments, efficient inference

**Strengths:**
- Excellent efficiency (MoE architecture)
- Strong European language support
- Commercial-friendly licensing
- Good coding capabilities

### Llama Series (Meta)

**Best For:** General purpose, local deployment, community fine-tunes

**Strengths:**
- Multiple size options across generations
- Huge community ecosystem and fine-tunes
- Runs on consumer hardware (smaller variants)
- Commercial use allowed

### Gemma Series (Google)

**Best For:** Lightweight applications, on-device experiments

**Strengths:**
- Google's open model offering
- Good performance per parameter
- Easy to fine-tune
- Strong safety training

---

## Coding-Specific Models

### The 2026 Reality: Flagships Lead

Dedicated code models no longer top the leaderboards — general-purpose flagships do. Claude Opus 5.5 (80.9) and Gemini 4 Carbon (75.2) top the BenchLeader coding index, and everyday models like Claude Sonnet 5.5 (72.7) outperform yesterday's code specialists. Pick a model by capability tier, not by the "coder" label.

What remains genuinely specialized:

### DeepSeek V4.1 Flash / V4 Pro

**Context Window:** 1M tokens  
**Pricing:** $0.15/$0.60 (Flash), $0.66/$1.98 (Pro) per 1M tokens

**Capabilities:**
- High-throughput code generation
- Bug fixing and refactoring
- Code explanation and test generation
- 1M context for large files and repos

**Performance:**
- Near-frontier coding at the lowest price tier
- MoE architecture keeps inference fast and cheap
- Excellent value for self-hosting or API use

### Qwen3.8 / Qwen3.8 Max (Alibaba)

**Strengths:**
- Full-stack development and API design
- Database queries and DevOps scripts
- Strong TypeScript/JavaScript and Python support
- Multiple sizes, from local to Max-tier API

### Codestral (Mistral)

**Specialties:**
- Code completion
- Fill-in-the-middle (FIM)
- 80+ programming languages

**Performance:**
- Fast inference
- Excellent IDE integration
- Commercial use allowed

### Kimi K3 & GLM-5.3

**Strengths:**
- Open-weight models strong enough for agentic coding workflows
- 1M context windows
- Cheap to self-host or call via API
- Good alternatives when you need open weights for compliance

---

## Key Concepts

### Context Window

The maximum number of tokens a model can process in a single request.

**Why it matters:**
- Larger context = more code can be analyzed at once
- Full file or repository understanding
- Better consistency across long conversations

**Typical sizes (2026):**
- Small/fast models: 128K-256K tokens
- Mid-tier models: 256K-512K tokens
- Flagship models: 1M tokens (now standard)
- Long-context tiers: 1M+ tokens (Kimi K3, all Claude/GPT/Gemini flagships)

**Token estimation:**
- 1 token ≈ 4 characters English
- 1 token ≈ 0.75 words
- 100 lines of code ≈ 500-1000 tokens

### Reasoning vs Completion

**Completion Models:**
- Predict next token based on pattern
- Fast but may lack deep understanding
- Good for autocomplete, simple tasks

**Reasoning Models:**
- Chain-of-thought processing
- Better for complex problems
- Slower but more accurate
- Examples: Claude Fable 5.1, Claude Opus 5.5, GPT-6 Astra (extended thinking)

### Inference Methods

**Cloud API:**
- Pros: No setup, always latest version, scalable
- Cons: Cost, latency, privacy concerns

**Local Inference:**
- Pros: Privacy, no ongoing cost, customizable
- Cons: Hardware investment, setup complexity

**Quantization:**
- Reduces model precision (FP16 → INT8 → INT4)
- Smaller memory footprint
- Slight quality trade-off
- Enables larger models on consumer hardware

### Latency Considerations

**Time to First Token (TTFT):**
- Cloud APIs: 200ms-2s
- Local small models: 50ms-500ms
- Local large models: 1s-5s

**Tokens per Second:**
- Cloud APIs: 50-200 tokens/sec
- Local RTX 4090: 20-100 tokens/sec (depends on model)
- Local CPU: 2-20 tokens/sec

### Hallucination Patterns

Common in AI code generation:

1. **Non-existent APIs:** Making up library functions
2. **Wrong imports:** Importing from wrong packages
3. **Outdated syntax:** Using deprecated patterns
4. **Logic errors:** Code runs but wrong behavior
5. **Security vulnerabilities:** Missing auth checks, SQL injection

**Mitigation strategies:**
- Always review generated code
- Run tests immediately
- Use AI for scaffolding, not final code
- Cross-reference with documentation
- Sonar's 2026 survey (1,149 professionals) found 96% don't fully trust AI-generated code — yet only 48% always check it before committing. Be in the other 48%.

### Tool Usage

Modern models can use external tools:

- **Code execution:** Run code to verify outputs
- **Web search:** Look up current documentation
- **File operations:** Read/write project files
- **Terminal commands:** Execute shell commands
- **API calls:** Interact with external services

### RAG (Retrieval-Augmented Generation)

Enhance models with your codebase:

1. Index your codebase in vector database
2. Retrieve relevant snippets for context
3. Include in model prompt
4. Get contextually-aware responses

**Tools:**
- Chroma, Pinecone, Weaviate (vector DBs)
- LangChain, LlamaIndex (orchestration)

### Multimodal Capabilities

Some models can process:
- Code screenshots → Working code
- Architecture diagrams → Implementation plan
- Error screenshots → Debugging help
- UI mockups → Frontend code

---

## How to Choose Models

### The 2026 Routing Rule

Vendors now ship the same three tiers, so the choice pattern is simple:

- **Complex multi-file / agentic work** → flagship tier (Claude Opus 5.5, Claude Fable 5.1, GPT-6 Astra, Gemini 4 Argon)
- **Everyday coding** → mid tier (Claude Sonnet 5.5, GPT-6.1 Sol, Gemini 4 Flash)
- **Long-context, volume, or cost-sensitive work** → value tier (Claude Haiku 5.5, GPT-6.1 Terra, GPT-6 Luna, DeepSeek V4.1 Flash, GLM-5.3)

### For Frontend Development

**Recommended:** Claude Sonnet 5.5, GPT-6.1 Terra, Gemini 4 Argon

**Tasks:**
- Component generation → Any coding model
- Tailwind CSS → Claude (excellent CSS understanding)
- React patterns → GPT-6.1 Sol or Claude Sonnet 5.5
- Animations → GPT-6.1 Terra (creative solutions)
- Accessibility → Claude (strong guidelines knowledge)

**Local Alternative:** GLM-5.3, Qwen3.8 (open weights)

### For Backend Development

**Recommended:** Claude Sonnet 5.5, DeepSeek V4 Pro, GPT-6.1 Terra

**Tasks:**
- API design → Claude (clean architecture)
- Database queries → GPT-6.1 Terra or DeepSeek
- Authentication → Claude (security-focused)
- Microservices → GPT-6 Astra (system design)
- Performance optimization → DeepSeek V4 Pro

**Local Alternative:** DeepSeek V4 Pro, GLM-5.3

### For DevOps & Infrastructure

**Recommended:** GPT-6.1 Sol, Claude Sonnet 5.5, Mistral Large 4

**Tasks:**
- Docker files → Any coding model
- Kubernetes manifests → GPT-6.1 Sol (complex YAML)
- Terraform → Claude (structured configs)
- CI/CD pipelines → GPT-6.1 Terra
- Monitoring setup → Claude Sonnet 5.5

**Local Alternative:** GLM-5.3, Qwen3.8

### For Security Audits

**Recommended:** Claude Opus 5.5, GPT-6 Astra

**Tasks:**
- Vulnerability scanning → Claude Opus 5.5 (thorough analysis)
- Penetration testing plans → GPT-6 Astra
- Security best practices → Claude
- Compliance checking → GPT-6.1 Sol

**Note:** Always combine with automated security tools

### For Learning & Education

**Recommended:** GPT-6.1 Terra, Claude Sonnet 5.5, Claude Haiku 5.5

**Tasks:**
- Concept explanations → GPT-6.1 Terra (clear teaching)
- Code walkthroughs → Claude (detailed)
- Practice problems → Any model
- Quick questions → Claude Haiku 5.5 / GPT-6 Luna (fast, cheap)

### For Production Systems

**Considerations:**
- Reliability > cutting-edge
- Consistent outputs
- Good error handling
- SLA guarantees

**Recommended:** GPT-6.1 Sol, Claude Sonnet 5.5, DeepSeek V4.1 Flash (cost-effective)

### For Privacy-Sensitive Projects

**Options:**
1. Local models (Ollama, LM Studio)
2. Self-hosted open-weight models on private infrastructure
3. Enterprise agreements with data protection

**Recommended Local (open weights):**
- GLM-5.3 (best quality/size balance)
- DeepSeek V4.1 Flash (fast, lightweight)
- Qwen3.8 (multiple sizes, multilingual)
- Kimi K3 (long context, if hardware allows)

---

## Comparison Tables

### Overall Capability Comparison

| Model | Coding Quality | Reasoning | Speed | Context | Cost | Local |
|-------|---------------|-----------|-------|---------|------|-------|
| Claude Opus 5.5 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1M | $$ | ❌ |
| Claude Sonnet 5.5 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $ | ❌ |
| Claude Fable 5.1 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | 1M | $$$ | ❌ |
| Claude Haiku 5.5 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 1M | $ | ❌ |
| GPT-6 Astra | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 1M | $$$ | ❌ |
| GPT-6.1 Sol | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $$ | ❌ |
| GPT-6.1 Terra | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $ | ❌ |
| GPT-6 Luna | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 1M | $ | ❌ |
| Gemini 4 Argon | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $ | ❌ |
| Gemini 4 Carbon | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $$ | ❌ |
| Kimi K3 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M+ | $$ | ✅ |
| GLM-5.3 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $ | ✅ |
| DeepSeek V4 Pro | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $ | ✅ |
| DeepSeek V4.1 Flash | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 1M | $ | ✅ |
| Qwen3.8 Max | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M | $ | ✅ |
| Mistral Large 4 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 1M-class | $$ | ✅ |

*Local = open weights available for self-hosting (hardware costs apply)*

### Coding Benchmark Scores

**BenchLeader Coding Index (November 5, 2026):**

| Rank | Model | Score |
|------|-------|-------|
| #1 | Claude Opus 5.5 | 80.9 |
| #2 | Gemini 4 Carbon | 75.2 |
| #3 | Claude Sonnet 5.5 | 72.7 |
| #4 | GPT-6.1 Sol | 72.1 |

**Terminal-bench 4.0 (agentic terminal coding):**

| Model | Score |
|-------|-------|
| Claude Sonnet 5.5 | 70.6% |
| Claude Opus 5.5 | 66.4% |
| GPT-6 Astra | 57.9% |

**DeepSWE v1.1 (real-world software engineering):**

| Model | Score |
|-------|-------|
| Gemini 4 Argon | 77.9% |
| Claude Opus 5.5 | 74.2% |

*Benchmarks evolve rapidly — re-check leaderboards before committing to a model*

### Cost Comparison (per 1M tokens)

| Model | Input | Output | Monthly 10M tokens* |
|-------|-------|--------|-------------------|
| Claude Opus 5.5 | $4 | $20 | $120 |
| Claude Sonnet 5.5 | $2 | $10 | $60 |
| Claude Fable 5.1 | $10 | $50 | $300 |
| Claude Haiku 5.5 | $0.10 | $0.50 | $3 |
| GPT-6 Astra | $10 | $50 | $300 |
| GPT-6.1 Sol | ~$2-4 | ~$10-20 | ~$60-120 |
| GPT-6.1 Terra | $2 | $10 | $60 |
| GPT-6 Luna | $0.10 | $0.50 | $3 |
| Gemini 4 Argon | ~$2 | ~$10 | ~$60 |
| Gemini 4 Carbon | $8 | $8 | $80 |
| Gemini Flash | ~$0.75 | ~$3.75 | ~$23 |
| Kimi K3 | $3 | $15 | $90 |
| GLM-5.3 | $1.40 | $4.40 | $29 |
| DeepSeek V4 Pro | $0.66 | $1.98 | $13 |
| DeepSeek V4.1 Flash | $0.15 | $0.60 | $4 |

*Assumes a 50/50 input/output token mix; local models: ~$0.02-0.10 per 1M tokens (electricity only)

### Hardware Requirements for Local Models

| Model Class | VRAM (4-bit) | VRAM (8-bit) | RAM (CPU) | Min GPU |
|-------------|-------------|-------------|-----------|---------|
| Small (3-8B) | 3-6GB | 5-10GB | 8-16GB | None / GTX 1660 |
| Mid (14-32B) | 10-20GB | 18-36GB | 32-48GB | RTX 3090 |
| Large (70B) | 42GB | 80GB | 96GB | 2x RTX 3090 |
| MoE flagship (open-weight, e.g. GLM-5.3, Kimi K3) | 48GB+* | 90GB+ | 128GB+ | 2x RTX 4090 |

*MoE models require less VRAM for inference than parameter count suggests

---

## Local Model Setup

### Ollama Installation

**macOS:**
```bash
brew install ollama
ollama serve
```

**Linux:**
```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama serve
```

**Windows:**
Download from https://ollama.com/download

**Pull Models:**
```bash
ollama pull glm-5.3
ollama pull deepseek-v4.1-flash
ollama pull qwen3.8
ollama pull codestral
```

**Run Models:**
```bash
ollama run glm-5.3
ollama run deepseek-v4.1-flash "Explain async/await in JavaScript"
```

### LM Studio

**Features:**
- User-friendly GUI
- Model library built-in
- Chat interface
- Local API server
- No command line needed

**Setup:**
1. Download from https://lmstudio.ai
2. Install and launch
3. Search and download models
4. Start chatting or enable local API

### Continue.dev (VS Code Extension)

**Setup:**
1. Install Continue extension in VS Code
2. Configure models (cloud + local):

```json
{
  "models": [
    {
      "title": "Claude Sonnet 5.5",
      "provider": "anthropic",
      "model": "claude-sonnet-5-5",
      "apiKey": "YOUR_KEY"
    },
    {
      "title": "GPT-6.1 Terra",
      "provider": "openai",
      "model": "gpt-6.1-terra"
    },
    {
      "title": "GLM-5.3 (local)",
      "provider": "ollama",
      "model": "glm-5.3",
      "apiBase": "http://localhost:11434"
    }
  ]
}
```

3. Use Cmd/Ctrl + L to chat with code context

### vLLM (Production Deployment)

**High-performance serving:**

```bash
pip install vllm

python -m vllm.entrypoints.api_server \
    --model deepseek-ai/DeepSeek-V4.1-Flash \
    --tensor-parallel-size 2 \
    --max-model-len 1048576
```

---

## Cost Analysis

### Monthly Usage Scenarios

**Casual Developer (1M tokens/month):**
- GPT-6.1 Terra: ~$6/month
- Claude Sonnet 5.5: ~$6/month
- Local model: ~$0.10/month (electricity)

**Active Developer (10M tokens/month):**
- Claude Sonnet 5.5: ~$60/month
- GPT-6.1 Terra: ~$60/month
- GPT-6 Astra (flagship-only workflow): ~$300/month
- DeepSeek V4.1 Flash API: ~$4/month
- Local model: ~$1/month

**Team of 5 (50M tokens/month):**
- Claude Sonnet 5.5: ~$300/month
- Claude Opus 5.5 (agentic-heavy): ~$600/month
- GPT-6 Astra (flagship-only): ~$1,500/month
- DeepSeek V4.1 Flash API: ~$20/month
- Local setup: ~$500 one-time hardware + ~$5/month

**Enterprise (500M tokens/month):**
- Negotiate custom API pricing
- Consider self-hosting open-weight models (GLM-5.3, DeepSeek V4)
- Hybrid approach (cloud for peak, local for baseline)

**⚠️ Watch token-based pricing:** Gartner (June 2026) warned that token-based pricing makes costs unpredictable — without budgets and routing rules, AI coding spend could exceed the average developer's salary by 2028. Route simple work to value-tier models and reserve flagships for hard problems.

### ROI Calculation

**Time Savings:**
- Average developer: $50-100/hour
- AI assists 2-5x productivity
- 10 hours saved/week = $2000-4000/month value

**Conclusion:** Even expensive flagship usage pays for itself — but only if you route everyday work to mid-tier and value-tier models

---

## Best Practices

### Model Selection Guidelines

1. **Start with mid-tier models** (Claude Sonnet 5.5, GPT-6.1 Sol, Gemini 4 Argon)
2. **Use specialized tiers for specific tasks:**
   - Quick autocomplete → Small local model / Claude Haiku 5.5 / GPT-6 Luna
   - Complex multi-file agentic work → Claude Opus 5.5 / GPT-6 Astra / Claude Fable 5.1
   - Code review → Claude Sonnet 5.5
   - Learning → GPT-6.1 Terra

3. **Implement fallback strategies:**
   - Primary: Claude Sonnet 5.5
   - Fallback: GPT-6.1 Sol
   - Emergency: Local model (GLM-5.3 / DeepSeek V4.1 Flash)

4. **Monitor usage and costs:**
   - Set monthly budgets (token pricing scales fast)
   - Track token consumption
   - Optimize prompts to reduce tokens

### Prompt Optimization

**Reduce token usage:**
- Be concise in requests
- Remove unnecessary context
- Use abbreviations where clear
- Reference files instead of pasting

**Improve quality:**
- Provide clear examples
- Specify constraints upfront
- Include error cases to handle
- Define output format

### Security Considerations

**Never share with cloud models:**
- API keys and secrets
- Proprietary algorithms
- Customer PII data
- Security vulnerabilities (before patching)

**Use local models for:**
- Sensitive codebases
- Government/defense projects
- Healthcare data (HIPAA)
- Financial systems

### Keeping Models Updated

**Stay informed:**
- Follow model release announcements
- Test new models on benchmark tasks
- Monitor community feedback
- Check for security updates

**Evaluation workflow:**
1. Create test suite of typical tasks
2. Run on new model versions
3. Compare quality/speed/cost
4. Update if significant improvement

---

## Quick Reference

### Best Overall Models

| Category | Model |
|----------|-------|
| Best Code Quality | Claude Opus 5.5 |
| Best Agentic / Long-Running Coding | Claude Opus 5.5 / Claude Fable 5.1 |
| Best Reasoning | Claude Fable 5.1 / GPT-6 Astra |
| Best Everyday Coding | Claude Sonnet 5.5 |
| Best Value | GPT-6.1 Terra / DeepSeek V4.1 Flash |
| Best Open-Weight | Kimi K3 / GLM-5.3 |
| Best Context | 1M is standard — Claude Sonnet 5.5 / Gemini 4 Argon |
| Best for Learning | GPT-6.1 Terra |
| Best for Production | Claude Sonnet 5.5 / GPT-6.1 Sol |
| Best for Privacy | GLM-5.3 (self-hosted) |
| Best High-Volume / Low-Latency | Claude Haiku 5.5 / GPT-6 Luna |

### Recommended Starter Setup

**Beginner:**
- Primary: ChatGPT free tier / Claude free tier
- Backup: GPT-6.1 Terra or Claude Haiku 5.5 (cheap API)
- Local: GLM-5.3 via Ollama

**Intermediate:**
- Primary: Claude Sonnet 5.5 (via Pro/Max subscription or API)
- Backup: GPT-6.1 Sol
- Local: DeepSeek V4.1 Flash via Ollama

**Advanced:**
- Primary: Claude Opus 5.5 for complex agentic tasks
- Secondary: Claude Sonnet 5.5 for daily work
- Long-horizon reasoning: Claude Fable 5.1 or GPT-6 Astra
- Local: GLM-5.3 or Kimi K3 (open weights)
- Value/volume: DeepSeek V4.1 Flash or Qwen3.8 Max

---

## Resources

### Model Repositories

- Hugging Face: https://huggingface.co/models
- Ollama Library: https://ollama.com/library
- LM Studio Models: Built-in
- Replicate: https://replicate.com/explore

### Benchmark Sites

- BenchLeader (coding index): https://benchleader.ai
- Terminal-bench (agentic coding): https://terminal-bench.io
- LMArena (Chatbot Arena): https://lmarena.ai
- SWE-bench / DeepSWE: https://www.swebench.com
- Artificial Analysis: https://artificialanalysis.ai

### Community Resources

- r/LocalLLaMA (Reddit)
- Hugging Face Discord
- Ollama Discord
- Model-specific GitHub discussions

---

*Last updated: November 2026*
