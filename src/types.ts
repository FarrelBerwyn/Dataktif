export interface NavItem {
  name: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
}

export interface PlatformFeature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  bullets: string[];
  metrics?: { label: string; value: string };
  badge?: string;
}

export interface WorkflowNodeItem {
  id: string;
  label: string;
  type: 'trigger' | 'agent' | 'knowledge' | 'decision' | 'api' | 'human' | 'action';
  status: 'idle' | 'running' | 'success' | 'warning' | 'error';
  duration?: string;
  detail: string;
  icon: string;
}

export interface AgentTemplate {
  id: string;
  name: string;
  category: 'Sales' | 'Finance' | 'Operations' | 'Customer Service' | 'Research' | 'HR' | 'Legal' | 'Analytics';
  description: string;
  rating: number;
  usageCount: number;
  integrations: string[];
  capabilities: string[];
  latency: string;
  costEstimate: string;
}

export interface IntegrationItem {
  id: string;
  name: string;
  category: 'CRM' | 'Communication' | 'Database' | 'Cloud' | 'Productivity' | 'Finance' | 'ERP' | 'Indonesia/SEA';
  description: string;
  iconName: string;
  status: 'Connected' | 'Ready' | 'Coming Soon';
  isRegional?: boolean;
}

export interface ModelProvider {
  id: string;
  name: string;
  family: string;
  latencyMs: number;
  costPer1kTokens: number;
  reasoningScore: number;
  contextWindow: string;
  bestFor: string;
  isRecommended?: boolean;
}

export interface TraceStep {
  id: string;
  name: string;
  type: string;
  durationMs: number;
  status: 'success' | 'running' | 'pending';
  tokens: number;
  costIdr: number;
  details: string;
}

export interface IndustrySolution {
  id: string;
  industry: string;
  name?: string;
  tagline?: string;
  description?: string;
  icon: string;
  headline: string;
  challenge: string;
  solution: string;
  useCases: string[];
  metrics: string;
  metric?: { value: string; label: string };
}

export interface GeneratedArchitecture {
  goal: string;
  detectedEntities: string[];
  recommendedNodes: {
    title: string;
    type: string;
    role: string;
    latency: string;
  }[];
  modelSelected: string;
  estimatedCostPerRun: string;
  securityRating: string;
}
