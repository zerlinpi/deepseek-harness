export type AgentId = string;
export type SessionId = string;
export type ToolId = string;

export interface AgentTask {
  id: string;
  input: string;
  sessionId?: SessionId;
  metadata?: Record<string, unknown>;
}

export interface AgentState {
  agentId: AgentId;
  sessionId: SessionId;
  status: 'idle' | 'running' | 'waiting' | 'completed' | 'failed';
  memory: Record<string, unknown>;
}

export interface ToolExecutionRequest {
  toolId: ToolId;
  input: unknown;
  permissions?: string[];
}

export interface ToolExecutionResult {
  success: boolean;
  output?: unknown;
  error?: string;
  traceId?: string;
}

export interface AgentRuntime {
  createTask(task: AgentTask): Promise<AgentState>;
  executeTool(request: ToolExecutionRequest): Promise<ToolExecutionResult>;
}
