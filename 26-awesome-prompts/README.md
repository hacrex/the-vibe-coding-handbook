# Awesome Prompts for Vibe Coding

A comprehensive collection of reusable, battle-tested prompts for AI-assisted software development.

---

## Table of Contents

- [How to Use These Prompts](#how-to-use-these-prompts)
- [Frontend Development Prompts](#frontend-development-prompts)
- [Backend Development Prompts](#backend-development-prompts)
- [Database & API Prompts](#database--api-prompts)
- [DevOps & Deployment Prompts](#devops--deployment-prompts)
- [Debugging & Testing Prompts](#debugging--testing-prompts)
- [Security & Code Review Prompts](#security--code-review-prompts)
- [Architecture & Design Prompts](#architecture--design-prompts)
- [Refactoring & Optimization Prompts](#refactoring--optimization-prompts)
- [Documentation Prompts](#documentation-prompts)
- [Learning & Explanation Prompts](#learning--explanation-prompts)
- [AI Agent & Workflow Prompts](#ai-agent--workflow-prompts)
- [Prompt Engineering Tips](#prompt-engineering-tips)

---

## How to Use These Prompts

### Best Practices

1. **Copy and customize** - Replace bracketed placeholders with your specifics
2. **Add context** - Include relevant files, error messages, or code snippets
3. **Iterate** - Refine prompts based on results
4. **Save variations** - Keep what works for your workflow
5. **Combine prompts** - Chain multiple prompts for complex tasks

### Prompt Structure Template

```markdown
Role: [Who should the AI act as?]
Task: [What do you want accomplished?]
Context: [Relevant background information]
Requirements: [Specific constraints or needs]
Format: [How should output be structured?]
Examples: [Optional: Show desired pattern]
```

---

## Frontend Development Prompts

### React Component Generation

```markdown
You are a senior React developer specializing in modern patterns and best practices.

Create a [COMPONENT_NAME] component with the following requirements:

Features:
- [LIST_KEY_FEATURES]
- Support for dark/light mode
- Responsive design (mobile-first)
- Accessibility (ARIA labels, keyboard navigation)
- TypeScript with proper types
- Tailwind CSS for styling

Technical Requirements:
- Use React hooks (useState, useEffect, useMemo, etc.)
- Implement proper error boundaries
- Add loading states and skeleton screens
- Include prop validation with TypeScript interfaces
- Follow component composition patterns

Output:
1. Component file with full implementation
2. Types/interfaces file
3. Storybook story for documentation
4. Unit test examples with Jest/React Testing Library

Please explain your design decisions and any trade-offs considered.
```

---

### UI from Description

```markdown
You are an expert UI/UX designer and frontend developer.

Convert this description into a complete React + Tailwind CSS implementation:

Description:
"[DETAILED_DESCRIPTION_OF_UI]"

Requirements:
- Modern, clean design aesthetic
- Consistent spacing using Tailwind's spacing scale
- Proper color contrast for accessibility
- Smooth animations and transitions
- Mobile-responsive layout
- Reusable component structure

Include:
- Complete component hierarchy
- All necessary state management
- Event handlers for interactivity
- Sample data for demonstration
- Comments explaining complex logic

Provide the full code ready to copy-paste into a Next.js 14 project.
```

---

### State Management Setup

```markdown
You are a React architecture specialist with deep expertise in state management.

Design a state management solution for a [APP_TYPE] application with these requirements:

Application Needs:
- [LIST_STATE_REQUIREMENTS]
- Real-time updates
- Offline support consideration
- Complex user interactions
- Multiple data sources

Evaluate and recommend approach:
1. Context API + useReducer
2. Zustand
3. Redux Toolkit
4. Jotai/Recoil
5. React Query + local state

For your recommended approach:
- Provide complete setup code
- Show folder structure
- Include example slices/stores
- Demonstrate usage in components
- Explain when to use each pattern
- Address performance considerations

Include migration guide if coming from [CURRENT_SOLUTION].
```

---

### Next.js App Router Setup

```markdown
You are a Next.js expert specializing in App Router architecture.

Create a complete Next.js 14+ project structure with App Router including:

Required Pages/Routes:
- [LIST_ROUTES]
- Authentication flow (login, signup, password reset)
- Dashboard with widgets
- Settings pages
- Public landing pages

Implement:
- Layout hierarchy with nested layouts
- Server Components vs Client Components strategy
- Loading states and Suspense boundaries
- Error handling with error.tsx files
- Metadata generation for SEO
- API routes with Route Handlers
- Middleware for auth and redirects

Also provide:
- Environment configuration
- TypeScript setup with path aliases
- ESLint and Prettier configuration
- Docker configuration for deployment
- CI/CD pipeline suggestion

Explain the reasoning behind your architectural choices.
```

---

## Backend Development Prompts

### REST API Design

```markdown
You are a senior backend architect with 10+ years of API design experience.

Design a production-ready REST API for [APPLICATION_DOMAIN] with these requirements:

Resources:
- [LIST_RESOURCES_AND_RELATIONSHIPS]

Requirements:
- RESTful conventions (proper HTTP methods, status codes)
- JWT authentication with refresh tokens
- Role-based authorization
- Rate limiting and throttling
- Request validation
- Pagination, filtering, and sorting
- Versioning strategy
- Comprehensive error handling
- API documentation (OpenAPI/Swagger)

Tech Stack:
- [NODE_JS_EXPRESS/FASTAPI/GO/GSPRING_BOOT]
- [POSTGRESQL/MONGODB]
- Redis for caching
- Message queue for async tasks

Deliverables:
1. API endpoint specification table
2. Database schema design
3. Project structure
4. Implementation of core endpoints
5. Authentication middleware
6. Error handling system
7. Rate limiting implementation
8. Sample API documentation

Include security best practices and common pitfalls to avoid.
```

---

### Microservices Architecture

```markdown
You are a distributed systems architect specializing in microservices.

Design a microservices architecture for [SYSTEM_DESCRIPTION] with these considerations:

Services to Identify:
- Based on domain-driven design
- Bounded contexts
- Data ownership per service
- Communication patterns

Address:
- Service discovery
- API Gateway pattern
- Inter-service communication (sync vs async)
- Database per service vs shared database
- Event sourcing and CQRS if applicable
- Distributed tracing
- Circuit breakers and resilience
- Data consistency strategies

For each service, provide:
- Responsibilities and boundaries
- Technology recommendations
- Database choice
- API contracts
- Dependencies on other services

Also include:
- Deployment strategy (Kubernetes, Docker Swarm)
- Monitoring and observability setup
- CI/CD pipeline design
- Testing strategy (contract testing, integration tests)

Create a visual architecture diagram description I can render with Mermaid.
```

---

### Authentication System

```markdown
You are a security-focused backend engineer specializing in authentication systems.

Build a complete authentication system with these requirements:

Authentication Methods:
- Email/password with bcrypt
- OAuth 2.0 (Google, GitHub, Microsoft)
- Magic link / passwordless option
- MFA with TOTP (authenticator apps)
- Session management

Security Features:
- Password strength validation
- Account lockout after failed attempts
- CSRF protection
- CORS configuration
- Secure cookie settings
- Token rotation
- Device fingerprinting
- Suspicious activity detection

Implementation Details:
- [LANGUAGE_FRAMEWORK]
- [DATABASE]
- Redis for session storage
- Email service integration

Provide:
1. Database schema for users, sessions, OAuth accounts
2. Complete registration flow
3. Login/logout implementation
4. Password reset flow
5. OAuth integration code
6. MFA setup and verification
7. Protected route middleware
8. Token refresh mechanism

Include security audit checklist and OWASP compliance notes.
```

---

## Database & API Prompts

### Database Schema Design

```markdown
You are a database architect with expertise in [POSTGRESQL/MYSQL/MONGODB].

Design a database schema for [APPLICATION_DESCRIPTION] with these requirements:

Entities:
- [LIST_ENTITIES_AND_RELATIONSHIPS]

Requirements:
- Normalized design (3NF) where appropriate
- Proper indexing strategy
- Foreign key constraints
- Soft deletes where needed
- Audit columns (created_at, updated_at, deleted_at)
- Partitioning strategy for large tables
- Migration scripts

Also consider:
- Read vs write patterns
- Query performance
- Future scaling needs
- Backup and recovery
- Data archiving strategy

Deliverables:
1. ERD description (for Mermaid rendering)
2. SQL DDL statements
3. Index creation scripts
4. Sample queries for common operations
5. Migration up/down scripts
6. Seeding data for development

Explain trade-offs in your design decisions.
```

---

### SQL Query Optimization

```markdown
You are a database performance specialist with deep SQL optimization expertise.

Optimize these queries for [DATABASE_TYPE]:

Current Query:
```sql
[PASTE_SLOW_QUERY]
```

Table Schema:
```sql
[PASTE_RELEVANT_SCHEMA]
```

Current Performance:
- Execution time: [X seconds]
- Rows examined: [X rows]

Requirements:
- Reduce execution time to under [X ms]
- Maintain same result set
- Consider index additions
- Evaluate query rewrites

Provide:
1. EXPLAIN ANALYZE breakdown
2. Identified bottlenecks
3. Optimized query version
4. Recommended indexes with CREATE INDEX statements
5. Alternative query approaches
6. Configuration tuning suggestions

Explain why each optimization helps performance.
```

---

### Redis Caching Strategy

```markdown
You are a caching specialist with expertise in Redis architecture.

Design a caching strategy for [APPLICATION_TYPE] with these requirements:

Cache Scenarios:
- [LIST_DATA_TO_CACHE]
- User sessions
- API responses
- Database query results
- Computed values
- Rate limit counters

Requirements:
- Cache invalidation strategy
- TTL policies
- Cache-aside vs write-through
- Eviction policies
- Memory optimization

Provide:
1. Redis data structure choices for each use case
2. Key naming conventions
3. Implementation code examples
4. Invalidation triggers
5. Monitoring metrics
6. Failure handling (cache stampede prevention)

Include common caching anti-patterns and how to avoid them.
```

---

## DevOps & Deployment Prompts

### Docker Configuration

```markdown
You are a DevOps engineer specializing in containerization.

Create Docker configurations for [APPLICATION_TYPE] with these requirements:

Application Stack:
- [LANGUAGE_FRAMEWORK]
- [DATABASE]
- [ADDITIONAL_SERVICES]

Requirements:
- Multi-stage builds for optimization
- Minimal base images (Alpine/distroless)
- Non-root user for security
- Health checks
- Proper signal handling
- Volume mounts for persistence
- Environment variable configuration
- .dockerignore file

Deliverables:
1. Production Dockerfile
2. Development Dockerfile
3. docker-compose.yml for local development
4. docker-compose.prod.yml for production
5. Build and run scripts
6. Security scanning integration

Explain best practices for each decision.
```

---

### Kubernetes Manifests

```markdown
You are a Kubernetes administrator with production experience at scale.

Create Kubernetes manifests for deploying [APPLICATION] with these requirements:

Deployment Needs:
- [NUMBER] replicas with HPA
- Rolling updates with zero downtime
- Resource limits and requests
- Liveness and readiness probes
- ConfigMaps and Secrets
- Persistent storage
- Service exposure (ClusterIP/LoadBalancer/Ingress)
- Network policies

Additional Resources:
- Ingress controller configuration
- TLS certificate management
- Horizontal Pod Autoscaler
- PodDisruptionBudget
- ServiceAccount and RBAC

Provide:
1. Complete manifest files (YAML)
2. Helm chart structure (optional)
3. Kustomize overlays for environments
4. Deployment commands
5. Monitoring setup (Prometheus annotations)
6. Logging configuration

Include troubleshooting guide for common issues.
```

---

### CI/CD Pipeline

```markdown
You are a DevOps engineer specializing in CI/CD automation.

Design a CI/CD pipeline for [APPLICATION_TYPE] using [GITHUB_ACTIONS/GITLAB_CI] with these requirements:

Pipeline Stages:
1. Code checkout and dependency installation
2. Linting and code quality checks
3. Unit tests with coverage reporting
4. Integration tests
5. Security scanning (SAST, dependency check)
6. Container image build and scan
7. Push to registry
8. Deploy to staging
9. E2E tests
10. Manual approval gate
11. Deploy to production
12. Post-deployment verification

Requirements:
- Parallel job execution where possible
- Caching for speed optimization
- Environment-specific configurations
- Secret management
- Rollback capability
- Deployment notifications

Provide:
1. Complete pipeline configuration
2. Required secrets list
3. Environment setup instructions
4. Testing strategies
5. Monitoring integration
6. Rollback procedures

Include examples for both feature branch and main branch workflows.
```

---

### Infrastructure as Code (Terraform)

```markdown
You are a cloud infrastructure architect specializing in Terraform.

Create Terraform configurations for deploying [INFRASTRUCTURE] on [AWS/AZURE/GCP] with these requirements:

Infrastructure Components:
- VPC/networking setup
- Compute instances (EC2/VMs)
- Load balancers
- Database (RDS/Cloud SQL)
- Object storage (S3/Blob)
- CDN configuration
- IAM roles and policies

Requirements:
- Modular structure for reusability
- State management (remote backend)
- Environment separation (dev/staging/prod)
- Variable definitions
- Output values

Deliverables:
1. Directory structure
2. Main configuration files
3. Variables and outputs
4. Module definitions
5. Backend configuration
6. Example terraform.tfvars

Include best practices for state management and team collaboration.
```

---

## Debugging & Testing Prompts

### Error Diagnosis

```markdown
You are an expert debugger with deep knowledge of [LANGUAGE_FRAMEWORK].

Help me diagnose and fix this error:

Error Message:
```
[PASTE_FULL_ERROR_MESSAGE_WITH_STACK_TRACE]
```

Code Context:
```[LANGUAGE]
[PASTE_RELEVANT_CODE]
```

Environment:
- OS: [YOUR_OS]
- Runtime version: [VERSION]
- Package versions: [KEY_PACKAGES]
- Recent changes: [WHAT_CHANGED]

What I've Tried:
- [LIST_ATTEMPTED_SOLUTIONS]

Please:
1. Explain what this error means
2. Identify the root cause
3. Provide step-by-step fix
4. Suggest how to prevent similar issues
5. Recommend debugging tools for future

Ask me clarifying questions if you need more information.
```

---

### Test Case Generation

```markdown
You are a QA engineer specializing in test automation.

Generate comprehensive test cases for [FEATURE_OR_COMPONENT] with these requirements:

Feature Description:
[DESCRIBE_WHAT_IT_DOES]

Function Signatures/API Endpoints:
```[LANGUAGE]
[PROVIDE_CODE_OR_SPECIFICATION]
```

Test Requirements:
- Unit tests for all functions
- Edge cases and boundary conditions
- Error handling scenarios
- Integration tests
- Performance tests

Testing Framework:
- [JEST/PYTEST/JUNIT/etc]
- Coverage requirements: [X%]

Provide:
1. Complete test suite
2. Test data fixtures
3. Mock implementations
4. Setup and teardown code
5. Coverage report configuration

Explain testing strategy and what each test validates.
```

---

### Performance Profiling

```markdown
You are a performance engineer specializing in application profiling.

Help me identify and fix performance bottlenecks in [APPLICATION]:

Symptoms:
- [DESCRIBE_PERFORMANCE_ISSUES]
- Slow page loads (>3s)
- High memory usage
- CPU spikes

Current Metrics:
- Response times: [VALUES]
- Throughput: [REQUESTS/SECOND]
- Error rate: [PERCENTAGE]

Profiling Data (if available):
```
[PASTE_PROFILER_OUTPUT]
```

Please:
1. Analyze potential causes
2. Recommend profiling tools
3. Provide optimization strategies
4. Suggest architectural improvements
5. Create performance testing plan

Prioritize fixes by impact and effort.
```

---

## Security & Code Review Prompts

### Security Audit

```markdown
You are a security engineer performing a comprehensive code review.

Audit this code for security vulnerabilities:

Code to Review:
```[LANGUAGE]
[PASTE_CODE]
```

Application Context:
- [APPLICATION_TYPE]
- Handles sensitive data: Yes/No
- User authentication: Yes/No

Check for:
- OWASP Top 10 vulnerabilities
- Injection attacks (SQL, XSS, command)
- Authentication flaws
- Authorization issues
- Sensitive data exposure
- Hardcoded secrets
- Improper error handling

For each finding:
1. Describe the vulnerability
2. Rate severity (Low/Medium/High/Critical)
3. Provide proof of concept exploit
4. Offer specific remediation steps
5. Reference OWASP or CWE IDs

Provide overall security score and prioritized action items.
```

---

### Code Quality Review

```markdown
You are a senior engineer conducting a thorough code review.

Review this pull request for quality, maintainability, and best practices:

PR Description:
[DESCRIBE_CHANGES]

Files Changed:
```diff
[PASTE_DIFF_OR_CODE]
```

Review Criteria:
- Code clarity and readability
- Adherence to style guides
- Proper error handling
- Test coverage
- Performance implications
- Security considerations
- Documentation completeness
- Architectural alignment

For each comment:
1. Line reference
2. Issue description
3. Severity (nitpick/suggestion/concern/blocker)
4. Specific recommendation
5. Example code if helpful

Also provide:
- Overall assessment
- Must-fix items before merge
- Nice-to-have improvements

Be constructive and explain the "why" behind suggestions.
```

---

### Dependency Security Scan

```markdown
You are a security specialist focusing on supply chain security.

Analyze these dependencies for security risks:

Package List:
```json
[PASTE_PACKAGE.JSON/REQUIREMENTS.TXT/ETC]
```

Assessment Needed:
1. Known CVEs in direct dependencies
2. Known CVEs in transitive dependencies
3. Outdated packages with security fixes
4. Unmaintained or suspicious packages
5. License compliance issues

Provide:
1. Vulnerability report with severity ratings
2. Upgrade recommendations with commands
3. Alternative packages for problematic dependencies
4. Automated scanning tool recommendations
5. Dependency update strategy

Include commands to update safely and verify compatibility.
```

---

## Architecture & Design Prompts

### System Design Interview

```markdown
You are a staff engineer conducting a system design interview preparation session.

Help me design [SYSTEM_TYPE] that can handle [SCALE_REQUIREMENTS] with these constraints:

Requirements:
- [NUMBER] daily active users
- [NUMBER] requests per second at peak
- [DATA_VOLUME] data storage
- Latency requirements: [X ms] p99
- Availability: [99.XX%]

Functional Requirements:
- [LIST_CORE_FEATURES]

Non-Functional Requirements:
- Scalability
- Reliability
- Maintainability
- Security
- Cost-effectiveness

Walk me through:
1. Requirements clarification
2. Back-of-envelope calculations
3. High-level architecture
4. Data model design
5. API design
6. Scaling strategy
7. Bottleneck identification
8. Trade-off discussions

Provide a Mermaid diagram description and explain each component choice.
```

---

### Architecture Decision Record

```markdown
You are a principal engineer documenting architectural decisions.

Create an Architecture Decision Record (ADR) for: [DECISION_TITLE]

Context:
- [DESCRIBE_SITUATION_AND_PROBLEM]
- Current state
- Constraints
- Stakeholders

Decision Drivers:
- [LIST_FORCES_AND_REQUIREMENTS]

Considered Options:
1. [OPTION_1]
2. [OPTION_2]
3. [OPTION_3]

For each option, analyze:
- Pros
- Cons
- Effort estimate
- Risk level
- Alignment with drivers

Decision:
[CHOSEN_OPTION]

Consequences:
- What becomes easier
- What becomes harder
- Migration path
- Rollback strategy

Provide:
1. Complete ADR in standard format
2. Visual comparison of options
3. Implementation roadmap
4. Success metrics

Use markdown format suitable for git repository.
```

---

### Technology Selection

```markdown
You are a technology strategist helping choose the right tools.

Recommend technologies for [PROJECT_TYPE] with these requirements:

Project Context:
- [DESCRIBE_PROJECT]
- Team size: [NUMBER]
- Timeline: [DURATION]
- Budget: [CONSTRAINTS]
- Existing tech stack: [CURRENT_TOOLS]

Requirements:
- [FUNCTIONAL_REQUIREMENTS]
- Performance needs
- Scalability expectations
- Team expertise
- Hiring considerations

Evaluate options for:
- Backend framework
- Frontend framework
- Database
- Cloud platform
- DevOps tools

For each category:
1. List top 3 options
2. Compare features
3. Assess learning curve
4. Estimate costs
5. Check community health

Provide final recommendation matrix with justification.
Include migration strategy if changing from current stack.
```

---

## Refactoring & Optimization Prompts

### Legacy Code Refactoring

```markdown
You are a refactoring specialist improving legacy code quality.

Help me refactor this legacy code to modern standards:

Legacy Code:
```[LANGUAGE]
[PASTE_CODE]
```

Issues Identified:
- [LIST_PROBLEMS]
- God classes/functions
- Tight coupling
- No tests
- Outdated patterns
- Poor naming
- Duplication

Target State:
- Clean architecture principles
- SOLID design
- Comprehensive test coverage
- Modern language features
- Improved readability
- Better error handling

Approach:
1. Identify refactoring opportunities
2. Prioritize by risk and value
3. Create incremental refactoring plan
4. Ensure test safety net
5. Maintain backward compatibility

Provide:
- Before/after code comparisons
- Step-by-step refactoring guide
- Test strategy
- Risk mitigation

Explain each refactoring pattern used.
```

---

### Performance Optimization

```markdown
You are a performance optimization expert.

Optimize this code for better performance:

Current Code:
```[LANGUAGE]
[PASTE_CODE]
```

Performance Profile:
- Current execution time: [X]
- Target execution time: [Y]
- Bottleneck location: [IF_KNOWN]

Constraints:
- Must maintain correctness
- Cannot change external APIs
- Backward compatibility required

Optimization Strategies to Consider:
- Algorithm improvements
- Data structure changes
- Caching
- Parallelization
- Lazy loading
- Query optimization
- Memory management

Provide:
1. Analysis of current performance
2. Specific optimizations with code
3. Expected improvement for each
4. Trade-offs discussion
5. Testing strategy to verify improvements

Benchmark before and after if possible.
```

---

### Code Simplification

```markdown
You are a code craftsmanship expert specializing in simplicity.

Simplify this overly complex code:

Complex Code:
```[LANGUAGE]
[PASTE_CODE]
```

Problems:
- Too many nested conditions
- Complex logic
- Hard to understand
- Difficult to modify
- Over-engineered

Goals:
- Reduce cognitive load
- Improve readability
- Maintain functionality
- Preserve tests
- Follow YAGNI principle

Apply:
- Extract method/function
- Replace conditional with polymorphism
- Remove duplication
- Simplify boolean logic
- Eliminate unnecessary abstractions
- Clear naming

Provide:
- Simplified version
- Explanation of changes
- Complexity metrics before/after
- Readability improvements

Keep the code obvious and straightforward.
```

---

## Documentation Prompts

### API Documentation

```markdown
You are a technical writer creating API documentation.

Generate comprehensive API documentation for [API_NAME]:

API Details:
- Base URL: [URL]
- Authentication: [METHOD]
- Version: [VERSION]

Endpoints to Document:
```
[LIST_ENDPOINTS_WITH_METHODS_PATHS]
```

For Each Endpoint, Include:
1. Endpoint description
2. HTTP method and path
3. Authentication requirements
4. Request headers
5. Path parameters
6. Query parameters
7. Request body schema with examples
8. Response schema with examples
9. Error responses
10. Rate limiting info
11. Code examples in [LANGUAGES]

Additional Sections:
- Getting started guide
- Authentication guide
- Error handling guide
- Rate limiting policy
- Versioning policy
- Changelog

Format as OpenAPI 3.0 specification and human-readable markdown.
```

---

### README Generation

```markdown
You are a technical writer creating project READMEs.

Generate a compelling README.md for [PROJECT_NAME]:

Project Info:
- Name: [PROJECT_NAME]
- Description: [ONE_LINE_DESCRIPTION]
- Key Features: [LIST_FEATURES]
- Tech Stack: [TECHNOLOGIES]
- Installation: [STEPS]
- Usage: [EXAMPLES]
- Contributing: [GUIDELINES]
- License: [TYPE]

Structure:
1. Project title and badge section
2. Brief description
3. Features list
4. Demo/screenshots section
5. Quick start guide
6. Detailed installation
7. Usage examples
8. Configuration options
9. API reference (if applicable)
10. Contributing guidelines
11. Code of conduct
12. License
13. Acknowledgments

Make it:
- Visually appealing with emojis
- Easy to scan
- Action-oriented
- Beginner-friendly

Include copy-paste commands and code examples.
```

---

### Technical Blog Post

```markdown
You are a technical content creator writing a blog post.

Write a detailed technical blog post about [TOPIC]:

Target Audience:
- [SKILL_LEVEL] developers
- Familiar with: [PREREQUISITES]
- Want to learn: [LEARNING_OBJECTIVES]

Key Points to Cover:
- [OUTLINE_MAIN_SECTIONS]
- Problem statement
- Solution approach
- Implementation details
- Best practices
- Common pitfalls
- Real-world examples

Writing Style:
- Conversational but professional
- Code-heavy with explanations
- Visual descriptions for diagrams
- Step-by-step tutorials
- Practical takeaways

Structure:
1. Engaging introduction with hook
2. Problem explanation
3. Solution overview
4. Deep dive implementation
5. Examples and demos
6. Performance considerations
7. Alternatives and trade-offs
8. Conclusion with summary
9. Call to action
10. Resources for further learning

Include code blocks, command examples, and description of visuals to create.
Target length: [WORD_COUNT] words.
```

---

## Learning & Explanation Prompts

### Concept Explanation

```markdown
You are a patient teacher explaining [CONCEPT] to a [SKILL_LEVEL] developer.

Explain [CONCEPT] covering:

1. What it is (simple definition)
2. Why it matters (use cases and benefits)
3. How it works (mental model)
4. Key terminology
5. Common patterns
6. Real-world analogies
7. Code examples from basic to advanced
8. Common mistakes and how to avoid them
9. When to use it (and when not to)
10. Related concepts

Use:
- Simple language initially, then add complexity
- Visual descriptions and diagrams
- Analogies to familiar concepts
- Progressive disclosure
- Interactive examples if possible
- Quiz questions to check understanding

Adapt explanation based on my questions and confusion points.
```

---

### Code Walkthrough

```markdown
You are a senior developer doing a code walkthrough.

Explain this codebase line by line:

Code:
```[LANGUAGE]
[PASTE_CODE]
```

For Each Section:
1. What this part does (purpose)
2. How it works (mechanism)
3. Why written this way (rationale)
4. Key patterns used
5. Potential improvements
6. Common variations

Also Explain:
- Overall architecture
- Data flow
- Control flow
- Dependencies
- Entry and exit points
- Error handling strategy
- Testing approach

Use beginner-friendly language but don't oversimplify.
Point out clever tricks and potential gotchas.
```

---

### Technology Comparison

```markdown
You are a technology analyst comparing [TECHNOLOGY_A] vs [TECHNOLOGY_B].

Compare these technologies for [USE_CASE]:

Comparison Criteria:
1. Performance
2. Ease of use
3. Learning curve
4. Community support
5. Documentation quality
6. Ecosystem and libraries
7. Corporate backing
8. Long-term viability
9. Hiring market
10. Cost (licensing, infrastructure)

For Each Technology:
- History and background
- Core philosophy
- Strengths
- Weaknesses
- Ideal use cases
- Poor fit scenarios
- Notable users/case studies
- Recent developments

Provide:
- Feature comparison table
- Code examples showing differences
- Migration considerations
- Decision framework
- Personal recommendation with reasoning

Be objective and acknowledge biases.
```

---

## AI Agent & Workflow Prompts

### Autonomous Task Execution

```markdown
You are an autonomous AI agent capable of executing complex tasks.

Task: [DESCRIBE_HIGH_LEVEL_GOAL]

Your Capabilities:
- File system access
- Terminal command execution
- Web browsing
- Code editing
- Testing
- Git operations

Approach:
1. Break down task into subtasks
2. Plan execution order
3. Execute step by step
4. Verify each step
5. Handle errors gracefully
6. Report progress
7. Ask for clarification when stuck

Before Starting:
- Confirm understanding of task
- Outline your plan
- Identify potential risks
- Estimate time required

During Execution:
- Show commands before running
- Display file changes
- Explain decisions
- Pause for confirmation on risky operations

After Completion:
- Summarize what was done
- Show final state
- Provide next steps
- Note any limitations

Proceed only after I confirm the plan.
```

---

### Multi-Agent Collaboration

```markdown
You are coordinating multiple AI agents for a complex project.

Project: [DESCRIBE_PROJECT]

Agent Roles:
1. Architect Agent - System design
2. Developer Agent - Code implementation
3. Tester Agent - Quality assurance
4. DevOps Agent - Deployment
5. Documentation Agent - Writing

Workflow:
1. Architect creates design document
2. Developer implements based on design
3. Tester creates and runs tests
4. DevOps sets up deployment pipeline
5. Documentation agent writes docs

Coordination Rules:
- Each agent reviews previous agent's work
- Blockers are escalated immediately
- Regular sync points
- Shared context maintained
- Version control for all artifacts

Facilitate:
- Handoffs between agents
- Conflict resolution
- Progress tracking
- Quality gates

Provide status updates after each phase.
```

---

### Prompt Chain Orchestration

```markdown
You are orchestrating a chain of specialized prompts.

Goal: [COMPLEX_OBJECTIVE]

Prompt Chain:
1. Research Prompt → Gather information
2. Analysis Prompt → Identify patterns
3. Design Prompt → Create solution
4. Implementation Prompt → Write code
5. Review Prompt → Quality check
6. Test Prompt → Generate tests
7. Deploy Prompt → Setup deployment

For Each Step:
- Pass context from previous step
- Validate output quality
- Iterate if needed
- Document decisions

Error Handling:
- Detect low-quality outputs
- Retry with refined prompts
- Escalate persistent issues
- Maintain audit trail

Execute the chain and provide consolidated results.
Flag any concerns or deviations from requirements.
```

---

## Prompt Engineering Tips

### Writing Effective Prompts

```markdown
Principles for Better Prompts:

1. Be Specific
   ❌ "Write code"
   ✅ "Write a Python function that validates email addresses using regex"

2. Provide Context
   ❌ "Fix this bug"
   ✅ "This React component throws 'Cannot read property of undefined' 
       when the user logs out. Here's the code and error..."

3. Set Constraints
   ✅ "Use only built-in JavaScript methods, no external libraries"
   ✅ "Keep the function under 20 lines"
   ✅ "Follow functional programming principles"

4. Define Output Format
   ✅ "Provide the answer as a JSON object with keys: explanation, code, tests"
   ✅ "Show a comparison table with columns: Option, Pros, Cons, Recommendation"

5. Use Examples
   ✅ "Like this example: [EXAMPLE]"
   ✅ "Similar to how [POPULAR_LIBRARY] handles it"

6. Assign Roles
   ✅ "Act as a senior [ROLE] with 10 years of experience"
   ✅ "You are a strict code reviewer focused on security"

7. Chain Thoughts
   ✅ "Think step by step:"
   ✅ "First analyze the problem, then propose solutions, then implement"

8. Iterate and Refine
   - Start broad, then narrow down
   - Ask follow-up questions
   - Provide feedback on outputs
```

---

### Advanced Prompt Techniques

```markdown
1. Few-Shot Learning
   Provide 2-3 examples of desired input/output pattern

2. Chain of Thought
   Ask AI to show reasoning before final answer

3. Self-Correction
   "Review your answer for errors before finalizing"

4. Perspective Taking
   "Argue for X, then argue against X, then synthesize"

5. Constraint Satisfaction
   List hard constraints vs nice-to-haves

6. Meta-Prompting
   "What prompt would get the best result for X?"

7. Decomposition
   "Break this into 5 smaller tasks and solve each"

8. Verification
   "How would you test that this is correct?"

9. Temperature Control
   Lower (0.2-0.5) for factual, Higher (0.7-0.9) for creative

10. System Messages
    Set behavior and constraints upfront
```

---

### Common Prompt Mistakes

```markdown
❌ Too Vague
   "Make it better"
   ✅ "Improve performance by reducing time complexity from O(n²) to O(n log n)"

❌ Missing Context
   "Why doesn't this work?"
   ✅ "This Python script should do X but throws Y error. Environment: Python 3.9, macOS"

❌ Unrealistic Expectations
   "Build a production-ready app in one prompt"
   ✅ "Start with the authentication module, we'll iterate from there"

❌ No Constraints
   "Write a function"
   ✅ "Write a pure function, no side effects, with TypeScript types"

❌ Ignoring Iteration
   Accepting first output without refinement
   ✅ "Good start, now optimize for readability and add error handling"

❌ Over-complicating
   Massive prompts with conflicting requirements
   ✅ "Let's solve the core problem first, then add features incrementally"
```

---

## Quick Reference Cards

### Frontend Prompt Shortcuts

```
/component     → Generate React component
/ui            → Create UI from description
/state         → Design state management
/route         → Set up routing
/style         → Apply Tailwind/CSS
/test          → Write component tests
/optimize      → Improve performance
/a11y          → Fix accessibility
```

### Backend Prompt Shortcuts

```
/api           → Design REST/GraphQL API
/auth          → Implement authentication
/db            → Design database schema
/query         → Optimize SQL query
/cache         → Add caching layer
/queue         → Setup job queue
/microservice  → Design service architecture
/deploy        → Create deployment config
```

### DevOps Prompt Shortcuts

```
/docker        → Write Dockerfile
/k8s           → Generate Kubernetes manifests
/ci            → Setup CI/CD pipeline
/iac           → Create Terraform configs
/monitor       → Design monitoring stack
/security      → Security hardening
/backup        → Backup strategy
/scale         → Scaling plan
```

### Debugging Prompt Shortcuts

```
/error         → Diagnose error message
/test          → Generate test cases
/profile       → Performance profiling
/memory        → Memory leak investigation
/slow          → Find bottlenecks
/crash         → Crash analysis
/race          → Race condition detection
/log           → Logging strategy
```

---

## Additional Resources

- [OpenAI Prompt Engineering Guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompting Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [Learn Prompting](https://learnprompting.org)
- [Prompt Engineering Institute](https://www.promptengineering.org)
- [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)

---

## Contributing

Have a great prompt to share? Please contribute!

1. Test your prompt thoroughly
2. Document use cases
3. Show example inputs/outputs
4. Note which models work best
5. Submit via pull request

---

*Last Updated: 2024 | Community-Maintained Collection*
