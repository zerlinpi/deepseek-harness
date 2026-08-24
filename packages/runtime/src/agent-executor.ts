import type { ExecutionContext } from './execution-context';

export interface AgentExecutor {
  execute(context: ExecutionContext, input: unknown): Promise<unknown>;
}

export class DefaultAgentExecutor implements AgentExecutor {
  async execute(_context: ExecutionContext, input: unknown): Promise<unknown> {
    return input;
  }
}
