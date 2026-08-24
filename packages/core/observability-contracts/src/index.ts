export interface ExecutionTrace {
  traceId: string;
  taskId: string;
  startedAt: string;
  finishedAt?: string;
  status: "running" | "success" | "failed";
}

export interface AuditEvent {
  event: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

export interface TelemetryCollector {
  trace(trace: ExecutionTrace): Promise<void>;
  audit(event: AuditEvent): Promise<void>;
}
