export interface RuntimeEvent<T = unknown> {
  type: string;
  timestamp: number;
  payload: T;
  correlationId?: string;
}

export interface EventPublisher {
  publish<T>(event: RuntimeEvent<T>): Promise<void>;
}

export interface EventSubscriber {
  subscribe(
    type: string,
    handler: (event: RuntimeEvent) => Promise<void>
  ): void;
}
