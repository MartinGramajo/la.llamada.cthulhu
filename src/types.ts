export interface Choice {
  text: string;
  toId: string;
}

export interface StoryNode {
  id: string;
  title?: string;
  text: string[];
  choices: Choice[];
  isInterlude?: boolean;
  imageUrl?: string;
  nextPageId?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  description?: string;
}

export interface Note {
  id: string;
  content: string;
  timestamp: number;
}

export interface GameState {
  currentNodeId: string;
  inventory: InventoryItem[];
  notes: Note[];
  visitedNodes: string[];
}
