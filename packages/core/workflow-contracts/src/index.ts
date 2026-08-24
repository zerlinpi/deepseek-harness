export type WorkflowNodeType =
  | 'agent'
  | 'tool'
  | 'condition'
  | 'human-approval';

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  config: Record<string, unknown>;
}

export interface WorkflowEdge {
  from: string;
  to: string;
  condition?: string;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}

export interface WorkflowExecutionContext {
  workflowId: string;
  executionId: string;
  variables: Record<string, unknown>;
}
