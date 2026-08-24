export type MemoryScope = "session" | "user" | "project";

export interface MemoryEntry {
  id: string;
  scope: MemoryScope;
  content: string;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export interface MemoryStore {
  save(entry: MemoryEntry): Promise<void>;
  search(query: string, scope?: MemoryScope): Promise<MemoryEntry[]>;
  delete(id: string): Promise<void>;
}
