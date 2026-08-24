export interface PluginManifest {
  name: string;
  version: string;
  permissions: string[];
}

export interface AgentPlugin {
  manifest: PluginManifest;
  initialize(): Promise<void>;
}
