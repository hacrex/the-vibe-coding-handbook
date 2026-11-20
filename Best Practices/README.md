# Best Practices

General operating-system security recommendations for development and production environments.

## Baseline controls

- Keep the operating system, firmware, browsers, runtimes, and package managers patched.
- Use standard user accounts for daily work and require elevation only for administrative tasks.
- Enable full-disk encryption, a host firewall, automatic screen locking, and secure boot where supported.
- Prefer phishing-resistant MFA, unique credentials, and a password manager; never commit secrets.
- Remove unused services, packages, accounts, startup items, and open ports.
- Back up important data using an encrypted, tested, and offline-capable backup strategy.
- Verify downloads with trusted sources and signatures or checksums before installation.
- Apply least privilege to files, processes, containers, CI runners, cloud identities, and API tokens.

## Development workstation checklist

Before shipping AI-assisted code, review dependency changes, generated files, permissions, network calls, error handling, logging, and secret exposure. Run tests and security scanners in a clean environment, and review the final diff manually.

For incident-specific guidance, see [Threat Modeling](../Threat-Modeling/), [Monitoring and Logging](../Monitoring-and-Logging/), and [Incident Response](../Incident-Response/).
