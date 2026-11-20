# Monitoring and Logging

Security monitoring should make important events visible, actionable, and privacy-aware. Collect only what is needed, protect logs from tampering, and define retention before deploying.

## Minimum telemetry

- Authentication successes and failures, MFA changes, password resets, and privilege changes.
- Process, service, firewall, DNS, proxy, endpoint, database, and cloud control-plane events.
- Application request IDs, authorization failures, validation failures, unusual volume, and deployment events.
- File-integrity changes for critical configuration and startup locations.

Centralize time using synchronized clocks, restrict log access, encrypt logs in transit and at rest, alert on pipeline failure, and test that alerts reach an owner. Never log passwords, API keys, session tokens, or full sensitive payloads.

## Ransomware, malware, and adware

Maintain offline or immutable backups and test restoration. Alert on mass file rewrites, suspicious encryption tools, disabled security services, unusual archive creation, unsigned binaries, persistence changes, browser extension installation, and endpoint protection tampering. Quarantine affected systems, preserve evidence, rotate exposed credentials, and do not reconnect restored hosts until the entry point is understood.

Adware and unwanted browser changes often arrive through bundled installers, malicious extensions, or deceptive notifications. Remove untrusted extensions, reset notification permissions, restore known-good browser settings, and review the originating download and account activity.

## Browser hardening

For Chrome, Firefox, Brave, and Edge: keep the browser current, use a supported profile, remove unused extensions, block third-party tracking where practical, restrict notifications, avoid saved credentials on shared systems, and use separate profiles for sensitive administration. Enterprises should manage extension allowlists and browser policy centrally.

## Port security

Default-deny inbound traffic. Inventory listeners, bind services to private interfaces when possible, restrict administration to a VPN or approved source ranges, use host and network firewalls, and review cloud security groups regularly. Monitor unexpected listeners and repeated connection attempts; closing an unused port is preferable to merely hiding it.

Related guidance: [Best Practices](../Best%20Practices/), [Threat Modeling](../Threat-Modeling/), and [Incident Response](../Incident-Response/).
