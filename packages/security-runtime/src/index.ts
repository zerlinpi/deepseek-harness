export type PermissionAction =
  | "read"
  | "write"
  | "execute"
  | "network";

export interface SecurityPolicy {
  name: string;
  allowedActions: PermissionAction[];
  resources?: string[];
}

export interface SecurityContext {
  userId?: string;
  agentId?: string;
  policy?: SecurityPolicy;
}

export interface SecurityEnforcer {
  check(action: PermissionAction, resource?: string): boolean;
}
