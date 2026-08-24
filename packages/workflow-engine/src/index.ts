export type WorkflowNodeType =
  | "agent"
  | "tool"
  | "condition"
  | "human-approval";

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  config?: Record<string, unknown>;
}

export interface WorkflowDefinition {
  id: string;
  nodes: WorkflowNode[];
  edges: Array<{ from: string; to: string }>;
}

export interface WorkflowExecutionContext {
  workflowId: string;
  executionId: string;
  metadata?: Record<string, unknown>;
}

export interface WorkflowExecutor {
  execute(
    definition: WorkflowDefinition,
    context: WorkflowExecutionContext,
  ): Promise<unknown>;
}
