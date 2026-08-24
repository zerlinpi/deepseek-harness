# Security Runtime Design

## Goal

Provide a security boundary for autonomous agents.

## Layers

```
Agent
  |
Security Runtime
  |
Tool Runtime
  |
External Resources
```

## Initial capabilities

- Permission evaluation
- Tool authorization
- Resource policy matching

## Future capabilities

- Process sandbox
- Filesystem isolation
- Network policies
- Audit enforcement
