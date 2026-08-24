export interface RuntimeEvent {
  type: string;
  timestamp: number;
  payload?: unknown;
}

export class EventBus {
  private listeners = new Map<string, Array<(event: RuntimeEvent) => void>>();

  subscribe(type: string, handler: (event: RuntimeEvent) => void): void {
    const handlers = this.listeners.get(type) ?? [];
    handlers.push(handler);
    this.listeners.set(type, handlers);
  }

  publish(event: RuntimeEvent): void {
    for (const handler of this.listeners.get(event.type) ?? []) {
      handler(event);
    }
  }
}
