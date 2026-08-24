# Product Design Benchmark

## Product Positioning

DeepSeek Harness should evolve from an AI execution library into an Agent Operating Platform.

Reference directions:

- OpenHands: autonomous software engineering workflow
- Aider: developer-first coding interaction
- Langflow: visual agent and workflow composition
- n8n: automation orchestration model

## Core UX Principles

### 1. Agent as Product Entity

Users should manage Agents as first-class objects.

Agent profile:

- Name
- Purpose
- Model configuration
- Tools
- Permissions
- Memory
- Workflow capability

### 2. Execution Transparency

Every task should expose:

- Planning steps
- Tool calls
- Runtime events
- Token usage
- Errors
- Final output

### 3. Workflow First

The primary user experience should move from chat-only interaction to workflow composition.

Flow:

Requirement → Plan → Agent Execution → Tool Calls → Review → Result

### 4. Enterprise Control

Required surfaces:

- Agent management
- Permission management
- Execution history
- Audit logs
- Cost analytics

## Recommended Product Modules

```
Console
 ├── Agent Studio
 ├── Workflow Builder
 ├── Tool Marketplace
 ├── Knowledge Center
 ├── Execution Monitor
 └── Security Center
```

## UI Direction

The interface should combine:

- VS Code style developer workflow
- Langflow style visual orchestration
- n8n style automation canvas
- Enterprise admin console patterns
