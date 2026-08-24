# Product Design V2 - Platform Experience

## Goal

Transform DeepSeek Harness from an AI runtime toolkit into an enterprise Agent operating platform.

## Product Principles

1. Intent first

Users should start from a business goal, not infrastructure configuration.

2. Progressive complexity

Simple Agent creation first, advanced runtime controls available when needed.

3. Observable execution

Every Agent action, tool call, and workflow transition should be explainable.

4. Secure by default

Permissions and execution policies are part of Agent creation.

## Primary User Journeys

### Create Agent

```
Goal
 -> Agent Template
 -> Model
 -> Tools
 -> Memory
 -> Permissions
 -> Test
 -> Deploy
```

### Automate Workflow

```
Trigger
 -> Planner
 -> Agent Nodes
 -> Tool Nodes
 -> Approval
 -> Result
```

### Debug Execution

```
Execution
 -> Timeline
 -> Reasoning Trace
 -> Tool Calls
 -> Errors
 -> Optimization
```

## Product Surfaces

- Agent Studio
- Workflow Builder
- Execution Center
- Knowledge Center
- Security Center
- Plugin Marketplace

## Design References

The interaction model follows patterns from modern agent platforms:

- visual workflow builders
- execution tracing systems
- developer IDE experiences
- enterprise administration consoles
