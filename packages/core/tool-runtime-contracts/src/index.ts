export interface ToolDefinition {
  name: string;
  description: string;
  inputSchema: unknown;
  permissions?: string[];
}

export interface ToolExecutionContext {
  taskId: string;
  sessionId?: string;
  metadata?: Record<string, unknown>;
}

export interface ToolExecutionRequest {
  tool: ToolDefinition;
  input: unknown;
  context: ToolExecutionContext;
}

export interface ToolExecutionResult {
  success: boolean;
  output?: unknown;
  error?: string;
}

export interface ToolRegistry {
  register(tool: ToolDefinition): void;
  get(name: string): ToolDefinition | undefined;
  list(): ToolDefinition[];
}
