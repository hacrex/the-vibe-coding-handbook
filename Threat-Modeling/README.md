# Threat Modeling

Examples of lightweight threat models for common server deployments. Use these as starting points, then adapt the trust boundaries, assets, and controls to the actual system.

## Public web application

**Assets:** user data, sessions, credentials, payment records, source code, and deployment credentials.

**Threats:** credential stuffing, injection, broken access control, SSRF, malicious uploads, dependency compromise, data exfiltration, and denial of service.

**Controls:** MFA for operators, secure session cookies, input validation, authorization tests, dependency pinning, secret management, rate limits, WAF or API gateway controls, isolated uploads, audit logs, and tested backups.

## API with a database

**Assets:** database records, API tokens, service identities, and availability.

**Threats:** over-permissive endpoints, tenant isolation failures, leaked tokens, SQL or NoSQL injection, replay, and unbounded queries.

**Controls:** explicit authorization policy, parameterized queries, schema validation, token rotation, short-lived credentials, pagination limits, request IDs, encryption in transit and at rest, and database network isolation.

## Containerized service

**Assets:** container image, node credentials, runtime secrets, host kernel, and orchestration control plane.

**Threats:** vulnerable images, poisoned dependencies, container escape, excessive capabilities, exposed dashboards, and supply-chain tampering.

**Controls:** minimal signed images, reproducible builds, SBOMs, vulnerability scanning, rootless containers where practical, read-only filesystems, dropped capabilities, network policies, admission controls, and protected cluster credentials.

## AI-assisted application

**Assets:** prompts, retrieved documents, tools, model credentials, user data, and generated code.

**Threats:** prompt injection, data poisoning, sensitive-data disclosure, unsafe tool calls, model supply-chain risk, and unreviewed generated changes.

**Controls:** treat model output as untrusted, isolate tools, enforce allowlists and budgets, redact sensitive context, validate retrieved content, require human approval for high-impact actions, and log decisions without storing secrets.
