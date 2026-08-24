# Design System Component Library

## Core Components

## Agent Card

Purpose: summarize Agent identity and runtime state.

Fields:

- Name
- Model
- Capabilities
- Permissions
- Status

States:

- Idle
- Running
- Waiting
- Failed
- Completed

## Workflow Node

Purpose: represent executable units in the workflow canvas.

Types:

- Agent
- Tool
- Condition
- Approval
- API

## Execution Timeline

Purpose: make Agent execution understandable.

Displays:

- events
- duration
- tool calls
- failures
- outputs

## Permission Badge

Purpose: expose security boundaries visually.

Permissions:

- READ
- WRITE
- EXECUTE
- NETWORK

## Console Layout

```
Sidebar
 |
 + Dashboard
 + Agents
 + Workflows
 + Executions
 + Knowledge
 + Security
 + Marketplace
```

The design system prioritizes clarity over feature density.
