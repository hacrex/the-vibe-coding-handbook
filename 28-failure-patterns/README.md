# Failure Patterns: What Goes Wrong with AI-Assisted Development

## Code Quality Issues

### Pattern 1: Silent Bugs
AI generates plausible but incorrect code.
**Fix**: Always write tests before accepting code.

### Pattern 2: Inconsistent Styles
Different sessions produce different patterns.
**Fix**: Create style guide prompts, use linters.

### Pattern 3: Over-Engineering
Simple solutions become unnecessarily complex.
**Fix**: "Keep it simple" in prompts.

## Security Vulnerabilities

### Pattern 4: Injection Flaws
SQL injection, XSS in generated code.
**Fix**: "Write secure code following OWASP guidelines."

### Pattern 5: Hardcoded Secrets
API keys and passwords in source.
**Fix**: Never share secrets in prompts, use env vars.

### Pattern 6: Broken Auth
Weak authentication implementation.
**Fix**: Use established libraries, expert review.

## Process Failures

### Pattern 7: No Testing
Shipping AI code without tests.
**Fix**: Tests are mandatory, not optional.

### Pattern 8: Skipping Review
Direct commit of AI-generated code.
**Fix**: All code requires human review.

### Pattern 9: No Documentation
Code works but nobody understands it.
**Fix**: "Add documentation" in every prompt.

## Team Dynamics

### Pattern 10: Skill Atrophy
Developers lose fundamentals.
**Balance**: Regular no-AI coding sessions.

### Pattern 11: Knowledge Silos
Only one person knows the prompts.
**Fix**: Shared prompt library, knowledge sharing.

## Prevention Strategies

### Technical
- Automated testing (CI/CD)
- Static analysis (linters, security scans)
- Mandatory code review

### Process
- Definition of Done includes tests + docs
- Monthly code quality audits
- Weekly prompt sharing sessions

### Cultural
- Psychological safety for admitting mistakes
- Quality ownership by everyone
- AI as tool, not crutch

---

**Goal**: Augmented intelligence, not artificial replacement.
