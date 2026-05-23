import React, { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import { useTheme } from './hooks/useTheme';
import { getStoryNode } from './data/story';
import { BookOpen, Backpack, Menu, X, ArrowLeft, Plus, Sun, Moon } from 'lucide-react';
import { cn } from './lib/utils';
import { Sidebar } from './components/Sidebar';

export default function App() {
  const { 
    gameState, 
    isLoaded, 
    goToNode, 
    addNote, 
    removeNote, 
    addInventoryItem, 
    removeInventoryItem,
    resetGame
  } = useGameState();

  const { theme, toggleTheme } = useTheme();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-paper-bg text-ink-light font-serif">
        Despertando horrores...
      </div>
    );
  }

  const currentNode = getStoryNode(gameState.currentNodeId);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-ink-accent/20">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-paper-border bg-paper-bg/90 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-sm">
        <h1 className="text-xl font-bold font-serif text-ink-accent tracking-wider">
          La Llamada de Cthulhu
        </h1>
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-paper-card text-ink-light hover:text-ink-main transition-colors"
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-full hover:bg-paper-card text-ink-light hover:text-ink-main transition-colors"
            aria-label="Abrir mochila y notas"
          >
            <Backpack className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-2xl w-full mx-auto p-6 md:p-8 space-y-8 pb-32">
        {currentNode.isInterlude ? (
          <div className="flex flex-col items-center space-y-8 animate-in fade-in duration-1000">
            {currentNode.imageUrl && (
              <div className="w-full relative rounded-lg overflow-hidden border border-paper-border shadow-md">
                <img 
                  src={currentNode.imageUrl} 
                  alt="Ilustración interludio" 
                  className="w-full h-auto object-cover max-h-[100vh]"
                />
              </div>
            )}
            <div className="space-y-6 text-center max-w-lg">
              {currentNode.text.map((paragraph, idx) => (
                <p key={idx} className="text-xl leading-relaxed text-ink-main font-serif italic">
                  {paragraph}
                </p>
              ))}
            </div>
            {currentNode.nextPageId && (
              <div className="pt-8">
                <button
                  onClick={() => goToNode(currentNode.nextPageId!)}
                  className="px-8 py-3 rounded border border-ink-accent text-ink-accent hover:bg-ink-accent hover:text-white transition-all font-serif font-bold tracking-widest shadow-sm"
                >
                  CONTINUAR
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {currentNode.text.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-ink-main font-serif">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-8 space-y-4">
              {currentNode.choices.length > 0 ? (
                currentNode.choices.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToNode(choice.toId)}
                    className="w-full text-left p-4 rounded-lg border border-paper-border bg-paper-card/50 hover:bg-paper-card hover:shadow-md transition-all text-ink-accent hover:text-ink-main font-medium group flex items-center justify-between"
                  >
                    <span>{choice.text}</span>
                    <ArrowLeft className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity transform rotate-180" />
                  </button>
                ))
              ) : (
                <div className="text-center pt-8">
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 rounded border border-ink-accent/30 text-ink-accent hover:bg-ink-accent hover:text-white transition-colors font-serif font-bold tracking-widest shadow-sm"
                  >
                    VOLVER A EMPEZAR (Limpiar Mente)
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Sidebar Overlay */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
        gameState={gameState}
        addNote={addNote}
        removeNote={removeNote}
        addInventoryItem={addInventoryItem}
        removeInventoryItem={removeInventoryItem}
      />
    </div>
  );
}
