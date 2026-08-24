# Runtime Adapter Migration

## Goal

Move existing agent, session and tool implementations into the new runtime architecture without breaking current behavior.

## Migration flow

Existing implementation

```
core agent-loop
core session
core tools
```

is wrapped by:

```
runtime-adapters
        |
        v
runtime container
        |
        v
new execution pipeline
```

## Order

1. Session adapter
2. Tool adapter
3. Agent loop adapter
4. Workflow execution adapter
5. Remove duplicate runtime paths
