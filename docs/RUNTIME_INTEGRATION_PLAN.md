# Runtime Integration Plan

## Objective

Connect existing agent-loop, session, context and tools packages with the new platform contracts.

## Integration Order

1. Tool Runtime
   - Replace direct tool invocation with ToolRegistry.
   - Add permission validation before execution.

2. Event Pipeline
   - Emit task lifecycle events.
   - Record tool execution traces.

3. Agent Runtime
   - Move orchestration from CLI layer into runtime services.

4. Workflow Execution
   - Allow multi-step DAG execution.

## Migration Rules

- Existing APIs remain compatible.
- New contracts become dependency boundaries.
- Runtime behavior must be covered by tests before replacing old paths.
