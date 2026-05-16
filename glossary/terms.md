# Vibe Coding Glossary

## A

### AI-Assisted Development
- **What people say:** "Letting AI write your code"
- **What it actually means:** A collaborative workflow where developers describe intent, review AI-generated code, refine outputs, and maintain architectural control while leveraging AI for productivity
- **Why it matters:** You stay in control while building faster

### Agent
- **What people say:** "An autonomous AI that does everything"
- **What it actually means:** An AI system that can perceive its environment, make decisions, and take actions to achieve goals. In practice: LLM + tools + execution loop
- **Common tools:** API calls, file operations, web search, code execution

### Autoregressive
- **What people say:** "The AI generates one word at a time"
- **What it actually means:** A model that predicts the next token conditioned on all previous tokens. All major code-generation models (GPT, Claude, etc.) are autoregressive
- **Why it matters:** Understanding this helps you write better prompts and anticipate AI behavior

## B

### Backlog
- **What people say:** "Your to-do list"
- **What it actually means:** A prioritized list of features, bugs, and tasks that need to be completed. AI can help you break down large items into actionable steps
- **Best practice:** Keep it organized; AI works better with clear, structured requirements

### Build
- **What people say:** "Compiling your code"
- **What it actually means:** The process of converting source code into executable artifacts. Modern builds often include linting, testing, bundling, and optimization
- **AI role:** AI can help debug build errors and optimize build configurations

## C

### Context Window
- **What people say:** "How much the AI can remember"
- **What it actually means:** The maximum number of tokens (words, code, etc.) an AI model can process in a single interaction. Larger context = more information the AI can consider
- **Typical sizes:** 8K-200K tokens depending on the model

### Code Review
- **What people say:** "Checking if the code works"
- **What it actually means:** Systematic examination of code for correctness, security, performance, and maintainability. AI can assist but human judgment is essential
- **AI limitation:** AI may miss subtle bugs or architectural issues

### CI/CD
- **What people say:** "Automatic deployment"
- **What it actually means:** Continuous Integration (automated testing on every change) + Continuous Deployment (automated release to production). AI can help write pipelines and debug failures
- **Popular tools:** GitHub Actions, GitLab CI, Jenkins, CircleCI

## D

### Debugging
- **What people say:** "Fixing bugs"
- **What it actually means:** The systematic process of identifying, isolating, and resolving errors in software. AI can suggest fixes but understanding root causes is your job
- **Pro tip:** Learn to read error messages; AI explains them better when you understand the problem

### Docker
- **What people say:** "Containers for apps"
- **What it actually means:** A platform for developing, shipping, and running applications in isolated environments called containers. Ensures consistency across development and production
- **AI role:** AI can help write Dockerfiles and troubleshoot container issues

### Deployment
- **What people say:** "Putting your app online"
- **What it actually means:** The process of making your application available to users. Includes hosting, configuration, scaling, and monitoring
- **Common platforms:** Vercel, Netlify, AWS, GCP, Azure, Railway

## E

### Environment
- **What people say:** "Where your code runs"
- **What it actually means:** The complete setup including OS, dependencies, configuration, and runtime. Proper environment management prevents "works on my machine" problems
- **Best practice:** Use virtual environments, containers, or environment files

### Editor
- **What people say:** "Where you write code"
- **What it actually means:** Software for writing and editing code. Modern editors (VS Code, Cursor, Zed) integrate AI assistants directly
- **AI integration:** Inline completions, chat interfaces, refactoring tools

## F

### Frontend
- **What people say:** "The part users see"
- **What it actually means:** Client-side code that runs in browsers or apps. Includes HTML, CSS, JavaScript, and frameworks like React, Vue, Svelte
- **AI strength:** Excellent at generating UI components, styling, and responsive layouts

### Framework
- **What people say:** "A library for building apps"
- **What it actually means:** A structured foundation with predefined patterns and tools for building applications. Provides conventions that speed up development
- **Examples:** Next.js, FastAPI, Django, Express, Spring Boot

## G

### Git
- **What people say:** "Version control"
- **What it actually means:** A distributed version control system that tracks changes in source code. Essential for collaboration and maintaining code history
- **AI role:** AI can help write commit messages, explain diffs, and resolve merge conflicts

### Generative AI
- **What people say:** "AI that creates things"
- **What it actually means:** AI systems that generate new content (text, code, images) based on patterns learned from training data. Works by predicting what comes next
- **Limitation:** Can hallucinate; always verify outputs

## H

### Hallucination
- **What people say:** "AI making things up"
- **What it actually means:** When an AI generates plausible-sounding but incorrect or fabricated information. Common with obscure APIs, recent events, or specific facts
- **Defense:** Verify critical information; use AI for patterns, not facts

### Hosting
- **What people say:** "Where your site lives"
- **What it actually means:** Infrastructure that serves your application to users. Choices affect performance, cost, scalability, and maintenance
- **Options:** Static hosts (Vercel, Netlify), VPS (DigitalOcean), cloud (AWS, GCP), PaaS (Railway, Render)

## I

### IDE
- **What people say:** "Code editor on steroids"
- **What it actually means:** Integrated Development Environment - combines editor, debugger, build tools, and more. Modern IDEs integrate AI assistants
- **Popular choices:** VS Code, JetBrains suite, Cursor, Zed

### Inference
- **What people say:** "Running the AI model"
- **What it actually means:** Using a trained AI model to generate predictions or outputs. Different from training; typically faster and less resource-intensive
- **Cost factor:** Inference costs money per token; optimize prompts to reduce usage

## J

### JavaScript
- **What people say:** "The language of the web"
- **What it actually means:** A versatile programming language that runs in browsers and servers (Node.js). Dominant in frontend, growing in backend
- **AI support:** Excellent; most AI coding tools are heavily trained on JavaScript

### JSON
- **What people say:** "Data format"
- **What it actually means:** JavaScript Object Notation - a lightweight data interchange format. Easy for humans and machines to read/write
- **AI strength:** AI excels at generating and parsing JSON structures

## K

### Knowledge Base
- **What people say:** "Documentation"
- **What it actually means:** A centralized repository of information about a product, system, or domain. Essential for onboarding and reference
- **AI role:** AI can help organize, search, and update documentation

## L

### LLM
- **What people say:** "The AI"
- **What it actually means:** Large Language Model - a neural network trained on vast text data to understand and generate human language. Powers AI coding assistants
- **Popular models:** GPT-4, Claude, Llama, Mistral

### Latency
- **What people say:** "How fast it responds"
- **What it actually means:** The delay between a request and response. Critical for user experience; affected by network, server, and processing time
- **AI impact:** AI-generated code should consider latency implications

### Library
- **What people say:** "Reusable code"
- **What it actually means:** A collection of pre-written functions and classes you can use in your projects. Saves time and reduces errors
- **AI benefit:** AI knows popular libraries and can suggest appropriate ones

## M

### Model
- **What people say:** "The AI brain"
- **What it actually means:** A trained neural network that can perform specific tasks. Different models excel at different things (code, text, images)
- **Selection:** Choose based on task, cost, speed, and accuracy needs

### Middleware
- **What people say:** "Code between request and response"
- **What it actually means:** Functions that execute during the request-response cycle. Used for authentication, logging, validation, etc.
- **AI role:** AI can generate common middleware patterns

## N

### Node.js
- **What people say:** "JavaScript on the server"
- **What it actually means:** A runtime environment that executes JavaScript outside the browser. Enables full-stack JavaScript development
- **Ecosystem:** npm has millions of packages; AI can help navigate them

### Neural Network
- **What people say:** "AI that learns"
- **What it actually means:** A computing system inspired by biological brains, composed of interconnected nodes (neurons) that process information
- **Relevance:** Understanding basics helps you work better with AI tools

## O

### Open Source
- **What people say:** "Free software"
- **What it actually means:** Software with source code available for anyone to inspect, modify, and enhance. Built by communities
- **AI connection:** Many AI tools are open source; contributing helps everyone

### Optimization
- **What people say:** "Making it faster"
- **What it actually means:** Improving code performance, reducing resource usage, or enhancing efficiency. Can apply to speed, memory, cost, or energy
- **AI assistance:** AI can suggest optimizations but measure before/after

## P

### Prompt
- **What people say:** "What you type to AI"
- **What it actually means:** The input you give an AI system to get desired output. Quality of prompt directly affects quality of response
- **Skill:** Prompt engineering is learnable; clarity and context matter

### Prompt Engineering
- **What people say:** "Talking to AI properly"
- **What it actually means:** The craft of designing inputs that elicit optimal AI responses. Includes providing context, examples, constraints, and clear objectives
- **Key insight:** Treat AI as a junior developer - be specific and provide examples

### Production
- **What people say:** "The real thing"
- **What it actually means:** The live environment where your application serves real users. Requires reliability, monitoring, and quick issue resolution
- **AI caution:** Test AI-generated code thoroughly before production

### Python
- **What people say:** "Easy programming language"
- **What it actually means:** A high-level, interpreted language known for readability. Dominant in AI/ML, data science, scripting, and backend development
- **AI strength:** Most AI coding tools excel at Python

## R

### Refactoring
- **What people say:** "Cleaning up code"
- **What it actually means:** Restructuring existing code without changing its external behavior. Improves readability, maintainability, and performance
- **AI superpower:** Excellent at suggesting and performing refactors

### Repository
- **What people say:** "Your project folder"
- **What it actually means:** A storage location for your code, typically managed by Git. Contains code, history, branches, and collaboration features
- **Best practice:** Clear structure and documentation help AI understand your project

### REST API
- **What people say:** "Web service"
- **What it actually means:** An architectural style for designing networked applications using HTTP requests. Standard way for services to communicate
- **AI capability:** AI can generate API endpoints and client code

## S

### Stack
- **What people say:** "Your tech choices"
- **What it actually means:** The combination of technologies used to build an application (frontend, backend, database, infrastructure)
- **Common stacks:** MERN, LAMP, JAMstack, T3

### Security
- **What people say:** "Keeping hackers out"
- **What it actually means:** Practices and technologies that protect systems, data, and users from threats. Must be built in, not added later
- **AI warning:** Never trust AI with security-critical code without expert review

### SQL
- **What people say:** "Database language"
- **What it actually means:** Structured Query Language - used to manage and query relational databases. Essential for data-driven applications
- **AI strength:** Very good at writing and explaining SQL queries

### Testing
- **What people say:** "Making sure it works"
- **What it actually means:** Systematic verification that code behaves as expected. Includes unit tests, integration tests, end-to-end tests
- **AI role:** AI can generate test cases but you define what to test

## T

### Token
- **What people say:** "AI words"
- **What it actually means:** The basic unit of text for AI models. Roughly 4 characters or 0.75 words. Models have limits on tokens they can process
- **Cost impact:** More tokens = higher costs; be concise

### TypeScript
- **What people say:** "JavaScript with types"
- **What it actually means:** A superset of JavaScript that adds static typing. Catches errors at compile-time rather than runtime
- **AI benefit:** Type annotations help AI understand your intentions

## U

### UI/UX
- **What people say:** "How it looks and feels"
- **What it actually means:** User Interface (visual elements) + User Experience (overall interaction). Critical for user adoption and satisfaction
- **AI strength:** Great at generating UI components; UX requires human empathy

### Unit Test
- **What people say:** "Small test"
- **What it actually means:** A test that verifies a single function or component works correctly in isolation. Fast and reliable
- **AI capability:** AI excels at generating unit tests from code

## V

### Version Control
- **What people say:** "Tracking changes"
- **What it actually means:** Systems that record changes to files over time. Enables collaboration, rollback, and experimentation
- **Standard:** Git is the universal standard; learn it well

### Vibe Coding
- **What people say:** "AI-assisted development"
- **What it actually means:** A methodology where developers collaborate with AI to design, build, debug, and deploy software faster while maintaining quality
- **Core principle:** AI amplifies human capability; fundamentals still matter

## W

### Workflow
- **What people say:** "How you work"
- **What it actually means:** Your repeatable process for accomplishing tasks. Good workflows leverage AI at appropriate stages
- **Optimization:** Continuously refine your workflow as AI tools evolve

## Z

### Zero-Shot
- **What people say:** "No examples needed"
- **What it actually means:** Getting AI to perform a task without providing examples. Relies on the model's general knowledge
- **When to use:** For common tasks; provide examples for complex or specific needs
