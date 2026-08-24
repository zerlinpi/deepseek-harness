export interface ExecutionContext {
  sessionId: string;
  metadata?: Record<string, unknown>;
}

export interface RuntimeContainer {
  initialize(): Promise<void>;
  execute<T>(task: () => Promise<T>): Promise<T>;
  shutdown(): Promise<void>;
}

export class DefaultRuntimeContainer implements RuntimeContainer {
  private initialized = false;

  async initialize(): Promise<void> {
    this.initialized = true;
  }

  async execute<T>(task: () => Promise<T>): Promise<T> {
    if (!this.initialized) {
      throw new Error("Runtime container is not initialized");
    }

    return task();
  }

  async shutdown(): Promise<void> {
    this.initialized = false;
  }
}
