# 07 Prompt Engineering for Software Development

Master the art of communicating with AI to build better software faster. This section teaches prompting techniques specifically for coding, debugging, architecture, and deployment.

---

## 📖 Table of Contents

- [Why Prompt Engineering Matters](#-why-prompt-engineering-matters)
- [Core Prompting Principles](#-core-prompting-principles)
- [Prompt Types by Category](#-prompt-types-by-category)
- [Reusable Prompt Templates](#-reusable-prompt-templates)
- [Advanced Techniques](#-advanced-techniques)
- [Common Mistakes](#-common-mistakes)
- [Practice Exercises](#-practice-exercises)

---

## 🎯 Why Prompt Engineering Matters

Good prompts = Better code = Faster development

| Bad Prompt | Good Prompt |
|------------|-------------|
| "Build a login system" | "Build a secure JWT authentication system with Express.js, bcrypt password hashing, rate limiting, and PostgreSQL storage" |
| "Fix this error" | "Analyze this stack trace, identify the root cause, and provide 3 possible solutions with pros/cons" |
| "Make it faster" | "Optimize this database query for 10K+ records. Add indexing strategy and explain the performance improvement" |

---

## 🧠 Core Prompting Principles

### 1. Be Specific and Detailed

❌ **Vague:**
```
Create an API
```

✅ **Specific:**
```
Create a RESTful API with Node.js and Express that:
- Handles user registration and login
- Uses JWT for authentication
- Validates input with Joi schema
- Returns proper HTTP status codes
- Includes error handling middleware
- Has rate limiting (100 requests/hour)
```

### 2. Provide Context

Always include:
- **Tech stack** you're using
- **Current state** of your project
- **Constraints** (time, budget, performance)
- **Goals** (what success looks like)

Example:
```
Context: Building a SaaS dashboard for small businesses
Stack: Next.js 14, TypeScript, TailwindCSS, Supabase
Goal: Create a responsive analytics dashboard
Constraint: Must load in under 2 seconds
```

### 3. Use Role Prompting

Assign the AI a specific role:

```
You are a senior backend engineer with 10 years of experience 
in building scalable microservices. Review this architecture 
and identify potential bottlenecks.
```

```
You are a security expert specializing in web application 
security. Audit this code for OWASP Top 10 vulnerabilities.
```

### 4. Iterate and Refine

First prompt → Get output → Refine → Better output

```
Initial: "Create a React component for a button"

Refinement: "Make it accessible with ARIA labels"

Further: "Add loading state and disabled state variants"

Final: "Convert to TypeScript with proper prop types"
```

### 5. Ask for Explanations

Don't just accept code—understand it:

```
Explain this code line by line like I'm a junior developer.
What are the potential edge cases?
How would you test this?
```

---

## 📋 Prompt Types by Category

### Architecture Prompts

Use when designing systems:

```
Design a scalable architecture for a food delivery app with:
- Real-time order tracking
- Payment processing
- Driver dispatch system
- Customer notifications

Include:
- System components diagram
- Database schema
- API endpoints
- Caching strategy
- Scaling considerations
```

### Frontend Prompts

For UI/component development:

```
Build a responsive navigation component with:
- Mobile hamburger menu
- Dropdown submenus
- Active state highlighting
- Keyboard navigation
- WCAG 2.1 AA accessibility

Tech: React, TypeScript, TailwindCSS, Framer Motion
```

### Backend Prompts

For API/server development:

```
Create a production-ready Express.js API endpoint for file uploads:
- Accept multipart/form-data
- Validate file type (images only)
- Limit size to 5MB
- Store in S3 with CloudFront
- Generate thumbnails
- Return CDN URL

Include error handling and logging.
```

### Debugging Prompts

When something breaks:

```
I'm getting this error: [paste error]

Here's my code: [paste code]

Here's what I've tried:
1. Cleared node_modules
2. Checked environment variables
3. Verified database connection

Please:
1. Identify the root cause
2. Explain why it's happening
3. Provide step-by-step fix
4. Suggest how to prevent this in future
```

### Optimization Prompts

For improving performance:

```
Profile and optimize this React component:
[paste code]

Current issues:
- Slow re-renders
- Large bundle size
- Poor Lighthouse score

Suggest:
- Memoization strategies
- Code splitting approach
- Performance improvements
- Before/after metrics
```

### Security Prompts

For security reviews:

```
Audit this authentication flow for security vulnerabilities:
[paste code]

Check for:
- Password storage
- Session management
- CSRF protection
- XSS prevention
- Rate limiting
- Token security

Provide severity ratings and fixes.
```

### Testing Prompts

For generating tests:

```
Write comprehensive tests for this function:
[paste code]

Include:
- Unit tests with Jest
- Edge cases
- Error scenarios
- Integration test example
- Mock external dependencies

Target 90%+ code coverage.
```

### Documentation Prompts

For creating docs:

```
Generate documentation for this API:
[paste code/endpoints]

Format:
- Overview
- Authentication requirements
- Endpoint details with examples
- Request/response schemas
- Error codes
- Rate limits

Style: OpenAPI/Swagger compatible
```

---

## 🔧 Reusable Prompt Templates

Copy and customize these templates:

### Template 1: New Feature Development

```markdown
# Feature Request

## Context
Project: [project name/description]
Stack: [technologies used]
Current State: [what exists now]

## Requirements
Build a [feature name] that:
- [requirement 1]
- [requirement 2]
- [requirement 3]

## Constraints
- Time: [deadline]
- Performance: [requirements]
- Compatibility: [browsers/platforms]

## Deliverables
- [ ] Working code
- [ ] Tests
- [ ] Documentation
- [ ] Deployment instructions

## Success Criteria
[how you'll know it's working]
```

### Template 2: Code Review

```markdown
# Code Review Request

## Code
[paste code or link to PR]

## What I Need
- [ ] Bug identification
- [ ] Performance analysis
- [ ] Security review
- [ ] Best practices check
- [ ] Refactoring suggestions

## Context
- Purpose: [what this code does]
- Concerns: [specific worries]
- Constraints: [limitations]

## Priority Areas
1. [most important concern]
2. [second concern]
3. [third concern]
```

### Template 3: Learning/Understanding

```markdown
# Learning Request

## Topic
I want to understand: [concept/technology]

## Current Level
Beginner / Intermediate / Advanced

## Learning Style
- [ ] Conceptual explanations first
- [ ] Hands-on examples first
- [ ] Compare with what I know: [familiar tech]

## Goals
After learning this, I want to: [build what?]

## Format
Please provide:
- High-level overview
- Key concepts explained simply
- Practical examples
- Common pitfalls
- Resources for deeper learning
```

### Template 4: Problem Solving

```markdown
# Problem Solving

## The Problem
[describe what's broken/not working]

## Expected Behavior
[what should happen]

## Actual Behavior
[what actually happens]

## Environment
- OS: [operating system]
- Runtime: [Node version, etc.]
- Dependencies: [relevant packages]

## Steps Taken
1. [troubleshooting step 1]
2. [troubleshooting step 2]
3. [troubleshooting step 3]

## Logs/Errors
[paste relevant output]

## Hypothesis
I think the issue might be: [your theory]
```

### Template 5: Project Planning

```markdown
# Project Planning

## Project Vision
Build a [type of application] for [target users] that [value proposition]

## Features (MVP)
1. [core feature 1]
2. [core feature 2]
3. [core feature 3]

## Technical Requirements
- Stack preference: [preferred technologies]
- Must support: [scale/users/features]
- Must integrate with: [third-party services]

## Timeline
- MVP: [weeks/months]
- Full launch: [timeline]

## Deliverables Needed
- Architecture design
- Database schema
- API specification
- Component hierarchy
- Development roadmap
```

---

## 🚀 Advanced Techniques

### Chain-of-Thought Prompting

Ask AI to think step-by-step:

```
Let's solve this problem step by step:

1. First, analyze the requirements
2. Then, identify potential challenges
3. Next, propose multiple solutions
4. Finally, recommend the best approach with justification
```

### Few-Shot Learning

Provide examples:

```
Here are examples of good commit messages:

feat(auth): add JWT token refresh endpoint
fix(api): resolve null pointer in user service
docs(readme): update installation instructions

Now write a commit message for: [your changes]
```

### Constraint-Based Prompting

Set clear boundaries:

```
Write a database migration script with these constraints:
- Must be reversible (have down() method)
- Zero downtime deployment compatible
- No table locks longer than 5 seconds
- Backwards compatible with current code
- Include rollback instructions
```

### Comparative Analysis

Ask for comparisons:

```
Compare these approaches for state management:
1. Redux Toolkit
2. Zustand
3. React Context + useReducer
4. Jotai

For each, provide:
- Bundle size impact
- Learning curve
- DevTools support
- TypeScript integration
- Best use cases
- When NOT to use

Then recommend one for my dashboard app with 50+ components.
```

### Iterative Refinement

Progressive improvement:

```
Round 1: "Create a basic todo app"
Round 2: "Add user authentication"
Round 3: "Implement real-time sync with WebSockets"
Round 4: "Add offline support with Service Workers"
Round 5: "Optimize for mobile with PWA features"
```

### Meta-Prompting

Ask AI to help you prompt better:

```
I want to build [X] but I'm not sure how to ask.

Help me create the perfect prompt by asking me questions about:
- My requirements
- My constraints
- My technical stack
- My goals

Then generate the optimal prompt for me to use.
```

---

## ⚠️ Common Mistakes

### 1. Too Vague

❌ "Make a website"
✅ "Build a portfolio website with Next.js, featuring a projects gallery, blog section, and contact form"

### 2. Missing Context

❌ "This doesn't work, fix it"
✅ "Getting TypeError: Cannot read property 'map' of undefined in this React component when API returns empty array"

### 3. Ignoring Security

❌ "Store user passwords"
✅ "Store user passwords securely using bcrypt with salt rounds, never store plain text"

### 4. Not Testing

❌ Just accepting code without verification
✅ "Show me how to test this, including edge cases"

### 5. Blind Trust

❌ Assuming AI code is perfect
✅ "Review this AI-generated code for bugs, security issues, and performance problems"

### 6. Overcomplicating

❌ 500-word prompt with every detail
✅ Clear, structured prompt with key requirements

### 7. No Iteration

❌ One prompt, one attempt, give up
✅ Iterate, refine, ask follow-ups

---

## 💪 Practice Exercises

### Exercise 1: Improve These Prompts

Make these prompts better:

1. "Build login"
2. "My app is slow"
3. "Write tests"
4. "Deploy to server"

<details>
<summary>Solutions</summary>

1. "Build a secure login system with email/password, OAuth (Google/GitHub), 2FA option, session management, and password reset flow"
2. "My React dashboard takes 8 seconds to load with 1000 items. Profile performance, identify bottlenecks, suggest optimizations with virtual scrolling, lazy loading, and memoization"
3. "Write Jest unit tests for this payment processing function covering success, failure, edge cases, and mocking the Stripe API"
4. "Deploy this Dockerized Node.js app to AWS ECS with load balancer, auto-scaling, health checks, and CloudWatch monitoring"

</details>

### Exercise 2: Create Your Template

Based on your current project, create a custom prompt template following the structures above.

### Exercise 3: Debug with AI

Take a real bug you've encountered and practice writing a debugging prompt using the template provided.

---

## 📊 Prompt Quality Checklist

Before sending your prompt, verify:

- [ ] **Clear objective**: What do you want?
- [ ] **Sufficient context**: Tech stack, current state, constraints
- [ ] **Specific requirements**: Features, performance, security needs
- [ ] **Expected format**: Code, explanation, diagram, comparison?
- [ ] **Examples provided**: If applicable
- [ ] **Success criteria**: How will you evaluate the output?

---

## 🔗 Additional Resources

- [Prompt Engineering Guide](https://www.promptingguide.ai)
- [OpenAI Prompt Best Practices](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Prompting Guide](https://docs.anthropic.com/claude/docs/introduction-to-prompt-design)

---

## Next Steps

1. ✅ Practice with the templates above
2. 📖 Move to [08-frontend](../08-frontend/) for React/Next.js specifics
3. 🔧 Check [26-awesome-prompts](../26-awesome-prompts/) for more examples
4. 🏗️ Apply learnings in [16-open-source-projects](../16-open-source-projects/)

---

<div align="center">

**💡 Remember:** The quality of your output depends on the quality of your input. Invest time in crafting good prompts!

</div>
