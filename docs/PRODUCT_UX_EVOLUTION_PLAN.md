# Product UX Evolution Plan

## Product Direction

DeepSeek Harness should evolve from an AI runtime library into an Agent Operating Platform.

Reference product patterns:

- OpenHands: autonomous software engineering workflow
- Langflow: visual agent composition
- n8n: automation workflow experience
- LangSmith: execution tracing and observability

## Core User Journeys

### 1. Create Agent

User flow:

```
Create Agent
 -> Select Model
 -> Configure Instructions
 -> Attach Tools
 -> Configure Memory
 -> Define Permissions
 -> Test
```

### 2. Build Workflow

Workflow canvas should support:

- Agent nodes
- Tool nodes
- Condition nodes
- Human approval nodes
- API nodes

### 3. Observe Execution

Every execution should expose:

- timeline
- reasoning steps metadata
- tool calls
- latency
- token usage
- failures

## UX Principles

1. Make agent behavior observable.
2. Make permissions explicit.
3. Separate configuration from execution.
4. Treat workflows as reusable assets.
5. Design for enterprise collaboration.

## Product Modules

```
Console
├── Agent Studio
├── Workflow Builder
├── Execution Center
├── Knowledge Center
├── Tool Marketplace
├── Security Center
└── Administration
```
