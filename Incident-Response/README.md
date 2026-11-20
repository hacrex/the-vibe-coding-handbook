# Incident Response

Use these playbooks as a starting point. Adapt them to your organization, preserve evidence, document decisions, and involve legal, privacy, security, and communications owners when required.

## Suspected credential leak

1. Confirm the exposed credential and scope without reposting it.
2. Revoke or rotate it immediately, including dependent tokens and sessions.
3. Identify access during the exposure window from audit logs.
4. Preserve the commit, build, or host evidence and remove the secret from future history where appropriate.
5. Notify affected owners, update secret-scanning rules, and record follow-up actions.

## Ransomware or malware

1. Isolate affected hosts without destroying volatile evidence.
2. Disable compromised accounts and suspicious access paths.
3. Preserve endpoint, identity, network, and process telemetry.
4. Identify patient zero, persistence, lateral movement, and affected backups.
5. Eradicate, patch, restore from known-good backups, and monitor closely before reconnecting.

## Web application compromise

1. Activate the incident owner and capture current deployment, logs, and configuration.
2. Contain through a safe rollback, feature flag, access restriction, or temporary shutdown.
3. Rotate application, database, cloud, and CI credentials that may be exposed.
4. Determine affected records, requests, tenants, and time range.
5. Patch the root cause, verify with tests and scans, communicate impact, and document lessons learned.

## AI tool or prompt-injection incident

1. Stop autonomous actions and revoke tool credentials if misuse is suspected.
2. Preserve prompts, retrieved documents, tool calls, approvals, and outputs with sensitive values redacted.
3. Identify whether untrusted content crossed a trust boundary or caused an external side effect.
4. Review affected data and actions, then add validation, allowlists, isolation, and human approval gates.
5. Re-enable automation gradually with tighter monitoring and a documented residual-risk decision.
