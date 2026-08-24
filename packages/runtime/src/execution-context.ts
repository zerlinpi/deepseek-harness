export interface ExecutionContext {
  taskId: string;
  sessionId?: string;
  metadata: Record<string, unknown>;
}

export function createExecutionContext(
  taskId: string,
  metadata: Record<string, unknown> = {},
): ExecutionContext {
  return {
    taskId,
    metadata,
  };
}
