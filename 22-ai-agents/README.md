# AI Agents with AI Assistance

*Last updated: November 2026*

AI agents represent the next evolution of AI assistance - autonomous systems that can plan, execute tasks, and make decisions with minimal human intervention.

## Table of Contents

- [What are AI Agents?](#what-are-ai-agents)
- [Agent Architectures](#agent-architectures)
- [Building Blocks](#building-blocks)
- [Popular Frameworks](#popular-frameworks)
- [Coding Agents in 2026](#coding-agents-in-2026)
- [Agent Standards & Protocols](#agent-standards--protocols)
- [Use Cases](#use-cases)
- [Memory Systems](#memory-systems)
- [Tool Integration](#tool-integration)
- [Multi-Agent Systems](#multi-agent-systems)
- [Long-Running Agent Safety](#long-running-agent-safety)
- [Evaluation & Testing](#evaluation--testing)
- [Failure Modes of Autonomous Runs](#failure-modes-of-autonomous-runs)
- [Ethics & Safety](#ethics--safety)
- [Prompts for Agent Development](#prompts-for-agent-development)
- [Practice Projects](#practice-projects)

## What are AI Agents?

AI agents are systems that:
- **Perceive** their environment through inputs
- **Reason** about goals and constraints
- **Act** by executing tasks and tools
- **Learn** from feedback and outcomes

### Types of Agents

| Type | Capability | Complexity |
|------|-----------|------------|
| Simple Reflex | React to current state | Low |
| Model-Based | Maintain internal state | Medium |
| Goal-Based | Plan to achieve goals | High |
| Utility-Based | Optimize outcomes | Very High |
| Learning | Improve over time | Highest |

## Agent Architectures

### ReAct (Reasoning + Acting)

```
Prompt: "Create a ReAct agent that can:
1. Research topics using web search
2. Summarize findings
3. Cite sources
4. Answer follow-up questions

Include thought-action-observation loops."
```

### Plan-and-Execute

```
Prompt: "Design an agent that plans a travel itinerary:
1. Break down into subtasks
2. Execute each step
3. Handle failures gracefully
4. Adjust plan based on results"
```

### Tree of Thoughts

```
Prompt: "Implement Tree of Thoughts for complex problem solving:
1. Generate multiple solution paths
2. Evaluate each branch
3. Backtrack when needed
4. Converge on best solution"
```

## Building Blocks

### Perception Module

```python
# Prompt: Create input processing for agent
- Text parsing and understanding
- Image recognition integration
- Audio transcription
- Structured data extraction
```

### Reasoning Engine

```python
# Prompt: Design reasoning component
- Chain-of-thought prompting
- Logical inference
- Constraint satisfaction
- Decision trees
```

### Action Executor

```python
# Prompt: Build action execution system
- API calls
- File operations
- Database queries
- External tool integration
```

## Popular Frameworks

### LangChain

```
Prompt: "Build a LangChain agent with:
- Chat model (GPT-4/Claude)
- Memory (conversation buffer)
- Tools (search, calculator, custom)
- Output parser
- Error handling"
```

### AutoGen

```
Prompt: "Create multi-agent conversation in AutoGen:
- User proxy agent
- Assistant agent
- Custom agent for specific task
- Termination conditions
- Human-in-the-loop"
```

### LlamaIndex

```
Prompt: "Set up LlamaIndex for RAG agent:
- Document loading
- Index creation
- Query engine
- Response synthesis
- Source tracking"
```

### Where Frameworks Fit in 2026

Note on the landscape: in 2026, most real coding-agent work happens in **agent harnesses** - Claude Code, Codex, Antigravity, Cursor, Cline, OpenCode - rather than in raw orchestration frameworks. A harness ships the agent loop, tool use, permissions, and file editing a coding agent needs out of the box. The frameworks above remain relevant for building **custom domain agents** (support, research, data pipelines) that need their own orchestration, retrieval, and tool graphs.

## Coding Agents in 2026

The shift from autocomplete to agents is the biggest change in AI-assisted development since the chat interface itself:

- **Autocomplete** suggested the next line.
- **Agents** inspect a repository, modify several files, run commands, run tests, and prepare changes for review.

This is not a projection - it is the default workflow now. GitHub reported merging **1M+ coding-agent pull requests between May and September 2025**.

### Anatomy of an Agent Run

1. **Inspect** - read the repository, locate relevant files, build a mental model of the codebase
2. **Plan** - break the task into steps, often written to a plan or spec file
3. **Edit** - change several files in one pass
4. **Verify** - run builds, linters, and tests; revise output when they fail
5. **Present** - stage a diff or pull request for human review

### The Dominant Tools

| Tool | Shape in 2026 |
|------|---------------|
| **Claude Code** | Terminal, IDE, web, and mobile; CLAUDE.md, skills, hooks, subagents, MCP |
| **OpenAI Codex** | CLI + desktop command center + cloud tasks |
| **Google Antigravity 2.0** | Multi-agent orchestration, built-in browser, scheduled background tasks, CLI, SDK - launched at I/O in May 2026 |
| **Cursor** | Composer 2.5, parallel cloud agents |
| **GitHub Copilot** | Agent mode + background agents |
| **Kiro** | Spec-driven development |
| **Devin Desktop** | Local work with cloud delegation |

Open-source alternatives worth knowing: **Cline**, **OpenHands**, **aider**, and **OpenCode** - all running the same inspect → edit → test → review loop with your choice of models.

### What Made the Difference

- **Repository-scale context** - agents read the whole codebase, not just the open file
- **Real tool use** - shell, tests, linters, and git are first-class actions
- **Persistence** - runs continue across minutes or hours, locally or in the cloud
- **Review-first output** - the deliverable is a diff to approve, not code silently merged

## Agent Standards & Protocols

As coding agents multiplied, a small set of standards emerged so instructions and tools travel between them.

### MCP (Model Context Protocol)

MCP is the standard way to give agents **tools and context**. An MCP server exposes resources and actions (databases, issue trackers, browsers, internal APIs) in a single format that any MCP-capable agent can use - build the integration once and reuse it across Claude Code, Cursor, Codex, and the rest, instead of a bespoke connector per tool.

### AGENTS.md

**AGENTS.md** is the cross-tool standard for project instructions: one file at the repository root telling any agent how the project builds, tests, and should be modified. It is read by **Cursor, Codex, Copilot, OpenCode, Cline, Antigravity, and Devin Desktop**, making it the closest thing to a universal "read this first" file.

### CLAUDE.md

**CLAUDE.md** is Claude Code's project memory - commands, conventions, and warnings loaded at the start of every session. Teams commonly keep AGENTS.md as the shared source of truth and let CLAUDE.md reference or extend it.

### Skills, Hooks, and Subagents

| Mechanism | What it is | When to use it |
|-----------|-----------|----------------|
| **Skills** | Reusable capability packages - a folder of instructions and resources loaded on demand | Repeatable workflows: "how we release", "how we write migration scripts" |
| **Hooks** | Deterministic lifecycle automation - scripts that run on fixed events (session start, tool use, stop) | Non-negotiable checks: formatting, secret scanning, blocking dangerous commands |
| **Subagents** | Focused agents with their own context windows, spawned to fan out on parallel independent work | Broad research, large searches, independent areas of the repo |

The pattern to remember: **AGENTS.md says who you are, MCP says what you can touch, skills say how to do recurring jobs, hooks enforce the rules, and subagents multiply throughput.**

## Use Cases

### Customer Support Agent

```
Capabilities:
- Understand customer queries
- Access knowledge base
- Process refunds
- Escalate complex issues
- Learn from interactions
```

### Research Assistant

```
Capabilities:
- Literature search
- Paper summarization
- Citation management
- Hypothesis generation
- Experiment planning
```

### Code Development Agent

```
Capabilities:
- Understand requirements
- Write code
- Run tests
- Debug issues
- Refactor improvements
```

## Memory Systems

### Short-term Memory

```
Prompt: "Implement conversation memory:
- Store last N messages
- Context window management
- Important information extraction
- Summarization for long conversations"
```

### Long-term Memory

```
Prompt: "Design vector database memory:
- Embedding generation
- Similarity search
- Memory consolidation
- Forgetting mechanism"
```

### Episodic Memory

```
Prompt: "Create experience storage:
- Task outcomes
- Success/failure patterns
- Lesson learning
- Transfer to new situations"
```

## Tool Integration

### API Tools

```
Prompt: "Create tool definitions for:
- Weather API
- Stock prices
- News search
- Email sending
- Calendar management

Include error handling and rate limiting."
```

### Custom Tools

```
Prompt: "Build custom tools for e-commerce:
- Product search
- Inventory check
- Order placement
- Tracking updates
- Return processing"
```

## Multi-Agent Systems

### Collaborative Agents

```
Prompt: "Design team of agents for software development:
- Product Manager agent
- Developer agent
- Tester agent
- DevOps agent

Define communication protocols and handoffs."
```

### Competitive Agents

```
Prompt: "Create debate system with:
- Proponent agent
- Opponent agent
- Judge agent
- Evidence gathering
- Argument evaluation"
```

### Multi-Agent Orchestration in Practice

The 2026 reality of multi-agent development looks less like a debate club and more like a well-run team:

- **Parallel subagents and worktrees** - each subagent gets its own context (and usually its own git worktree) so it can edit a different area of the repo without clobbering others
- **Orchestrator-worker** - one agent decomposes the task, dispatches focused subagents, and merges their results
- **Reviewer-implementer** - one agent writes the change, a second reviews it against the spec before anything reaches a human
- **Command-center models** - Google Antigravity 2.0 presents multi-agent runs as a command center (task board, built-in browser, scheduled background tasks), and OpenAI Codex ships a multi-agent desktop app where local and cloud agents run side by side

**When not to use multiple agents:** watch for shared context loss (each subagent only sees its slice, so cross-cutting decisions drift) and conflicting edits (two agents touching the same files produce merge conflicts and duplicated work). For small, tightly coupled tasks, a single agent with a good plan beats a swarm.

## Long-Running Agent Safety

Agents can already work across a repo, run tests, and revise their own output. Longer runs complete bigger tasks - but they also give mistakes more time to spread. A wrong assumption five minutes into a two-hour task wastes tokens and touches many files before anyone notices.

### Required Controls

| Control | What it does |
|---------|--------------|
| **Checkpoints** | Periodic review points that reveal whether the work is on track before it goes further |
| **Spending limits** | Hard caps on token and tool usage that stop runaway sessions |
| **Isolated environments** | Sandboxed containers and preview environments that protect production |
| **Reversible changes** | Git branches and snapshots so bad output can be rolled back, not defended |
| **Human approval** | Explicit sign-off before sensitive actions: deploys, migrations, purchases, deleting data |

### The Cost Angle

Token-based pricing makes runaway agent sessions expensive: an agent looping on a failing test can burn through budget faster than a human notices the problem. Gartner has warned that **AI coding costs could exceed average developer salaries by 2028**. Treat spending limits and checkpoints as first-class safety features, not optional niceties - that is how teams keep long runs affordable as well as safe.

## Evaluation & Testing

### Performance Metrics

```
Prompt: "Define KPIs for agent evaluation:
- Task completion rate
- Time to completion
- Resource usage
- User satisfaction
- Error recovery rate"
```

### Testing Strategies

```
Prompt: "Create test suite for agent:
- Unit tests for components
- Integration tests for workflows
- Edge case handling
- Adversarial testing
- A/B testing framework"
```

### Evaluating Agent Output

Agent-generated code often **looks** correct while hiding real problems:

- **Sonar (2026):** 61% of respondents say AI often produces code that looks correct but is unreliable, and 96% don't fully trust AI code.
- **CodeRabbit (470 open-source PRs):** AI-associated PRs carry roughly **1.7x more issues** than human-only PRs.

Verification strategies that hold up in practice:

1. **Diff review** - a human reads what actually changed, not just the agent's summary
2. **Tests against the spec** - verify the stated requirements, not merely that the suite is green
3. **Human approval before merge** - no agent pushes straight to main
4. **Automated scanning on every PR** - linters, type checks, SAST, and secret scanning run regardless of who wrote the code

## Failure Modes of Autonomous Runs

Long autonomous runs fail in characteristic ways. Knowing the patterns makes them cheaper to catch:

| Failure mode | Symptom | Mitigation |
|--------------|---------|------------|
| **Context drift** | Agent forgets early constraints as the context window fills | Restate goals at checkpoints; compact or summarize older context; keep task briefs short |
| **Goal drift** | Optimizes a proxy metric instead of the actual objective | Write explicit success criteria up front; test against the spec, not the agent's summary |
| **Silent scope creep** | Agent "improves" unrelated files while solving the task | Constrain the file list; flag unrelated changes during diff review |
| **Credential leaks** | Secrets pasted into code, logs, or commits | Sandboxed environments, scoped and short-lived credentials, secret scanning in hooks |
| **Duplicated work across subagents** | Parallel agents solving the same problem or editing the same files | Clear ownership boundaries, one worktree per agent, orchestrator assigns areas |

Most of these are cheapest to catch at a checkpoint - which is why the controls in [Long-Running Agent Safety](#long-running-agent-safety) and the checks in [Evaluation & Testing](#evaluation--testing) belong in the same workflow as the run itself.

## Ethics & Safety

### Guardrails

```
Prompt: "Implement safety measures:
- Input validation
- Output filtering
- Harmful content detection
- Privacy protection
- Rate limiting"
```

### Transparency

```
Prompt: "Add explainability features:
- Decision logging
- Confidence scores
- Uncertainty communication
- Audit trails"
```

## Prompts for Agent Development

### Agent Creation

```
Prompt: "Create an agent specification:
- Role and persona
- Capabilities and limitations
- Available tools
- Memory requirements
- Success criteria
- Failure handling"
```

### Debugging Agents

```
Prompt: "Debug this agent behavior:
'Agent gets stuck in loop when searching for information'

Provide:
1. Root cause analysis
2. Fix strategies
3. Prevention mechanisms"
```

## Practice Projects

### Beginner

1. **Weather Bot**: Fetch and report weather
2. **Calculator Agent**: Solve math problems with tools
3. **Quote Finder**: Search and return inspirational quotes

### Intermediate

4. **Travel Planner**: Complete trip planning agent
5. **News Summarizer**: Daily brief with sources
6. **Personal Researcher**: Academic paper assistant

### Advanced

7. **Full-stack Developer Agent**: Build complete apps
8. **Business Analyst Agent**: Market research and reporting
9. **Healthcare Assistant**: Symptom checker with disclaimers

---

## Conclusion

AI agents automate complex workflows but require careful design for reliability and safety. In 2026 that means treating coding agents as capable teammates with guardrails: standard project instructions (AGENTS.md, MCP), checkpoints and spending limits on long runs, and verification of every diff before merge. Start simple, iterate based on feedback, and always include human oversight for critical decisions.
