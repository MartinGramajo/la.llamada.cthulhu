import { useState, useEffect } from 'react';
import localforage from 'localforage';
import { GameState, InventoryItem, Note } from '../types';
import { getStoryNode } from '../data/story';

const STORAGE_KEY = 'cthulhu-game-state';

const defaultState: GameState = {
  currentNodeId: 'intro', // Configurado para arrancar en Intro
  inventory: [],
  notes: [],
  visitedNodes: ['intro'],
  discoveredEndings: [] 
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function loadState() {
      try {
        const savedState = await localforage.getItem<GameState>(STORAGE_KEY);
        if (savedState) {
          setGameState(savedState);
        }
      } catch (e) {
        console.error('Failed to load state', e);
      } finally {
        setIsLoaded(true);
      }
    }
    loadState();
  }, []);

  const saveState = async (newState: GameState) => {
    try {
      await localforage.setItem(STORAGE_KEY, newState);
    } catch (e) {
      console.error('Failed to save state', e);
    }
  };

  const goToNode = (nodeId: string) => {
    const targetNode = getStoryNode(nodeId);
    const isInterlude = targetNode?.isInterlude;

    const newState = {
      ...gameState,
      currentNodeId: nodeId,
      visitedNodes: isInterlude ? gameState.visitedNodes : [...new Set([...gameState.visitedNodes, nodeId])]
    };
    
    setGameState(newState);
    saveState(newState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleEnding = (endingId: string) => {
    const currentEndings = gameState.discoveredEndings || [];
    const updatedEndings = currentEndings.includes(endingId)
      ? currentEndings.filter(id => id !== endingId)
      : [...currentEndings, endingId];

    const newState = { ...gameState, discoveredEndings: updatedEndings };
    setGameState(newState);
    saveState(newState);
  };

  const addNote = (content: string) => {
    const newNote: Note = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      content,
      timestamp: Date.now()
    };
    const newState = { ...gameState, notes: [...gameState.notes, newNote] };
    setGameState(newState);
    saveState(newState);
  };

  const removeNote = (noteId: string) => {
    const newState = { ...gameState, notes: gameState.notes.filter(n => n.id !== noteId) };
    setGameState(newState);
    saveState(newState);
  };

  const addInventoryItem = (item: InventoryItem) => {
    if (!gameState.inventory.find(i => i.id === item.id)) {
      const newState = { ...gameState, inventory: [...gameState.inventory, item] };
      setGameState(newState);
      saveState(newState);
    }
  };

  const removeInventoryItem = (itemId: string) => {
    const newState = { ...gameState, inventory: gameState.inventory.filter(i => i.id !== itemId) };
    setGameState(newState);
    saveState(newState);
  };

  const resetGame = () => {
    setGameState(defaultState);
    saveState(defaultState);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    gameState,
    isLoaded,
    goToNode,
    addNote,
    removeNote,
    addInventoryItem,
    removeInventoryItem,
    toggleEnding,
    resetGame
  };
}