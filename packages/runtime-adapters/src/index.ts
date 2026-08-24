export interface LegacyAgentAdapter {
  name: string;
  initialize(): Promise<void>;
  execute(input: unknown): Promise<unknown>;
}

export interface SessionAdapter {
  createSession(metadata?: Record<string, unknown>): Promise<string>;
  getSession(id: string): Promise<unknown | undefined>;
}

export interface ToolAdapter {
  listTools(): Promise<unknown[]>;
  executeTool(name: string, input: unknown): Promise<unknown>;
}

export class RuntimeAdapterRegistry {
  private adapters = new Map<string, unknown>();

  register(name: string, adapter: unknown): void {
    this.adapters.set(name, adapter);
  }

  get(name: string): unknown | undefined {
    return this.adapters.get(name);
  }
}
