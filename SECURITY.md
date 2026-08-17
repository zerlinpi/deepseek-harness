# Security Policy

## Supported Versions

Security fixes are applied to the latest published `dsh` release line and to the current `master` branch. Older prerelease or development snapshots may not receive backported fixes.

## Reporting a Vulnerability

Please do not open a public GitHub issue for suspected security vulnerabilities.

Use GitHub's private vulnerability reporting flow from the repository **Security** tab when it is available. Include enough detail for maintainers to reproduce and assess the issue:

- affected package, component, and version or commit;
- impact and realistic attack scenario;
- minimal reproduction or proof of concept;
- required configuration, privileges, or environment assumptions;
- suggested remediation, if known.

Avoid including real credentials, API keys, tokens, private model inputs, or other sensitive production data in reports or reproductions.

## Scope

Reports are especially useful when they involve:

- command execution or sandbox escapes;
- path traversal or unintended filesystem access;
- credential or secret exposure;
- unsafe handling of tool calls or untrusted model output;
- dependency or build-chain compromise;
- authentication or authorization bypasses in supported interfaces.

General bugs, feature requests, and documentation issues should continue to use the normal public issue workflow.

## Disclosure

Please allow maintainers a reasonable opportunity to investigate and prepare a fix before public disclosure. Once remediation is available, maintainers can coordinate publication of the advisory and any required upgrade guidance.
