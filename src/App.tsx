import React, { useState } from "react";
import { useGameState } from "./hooks/useGameState";
import { useTheme } from "./hooks/useTheme";
import { getStoryNode } from "./data/story";
import { Backpack, ArrowLeft, Sun, Moon, Hash } from "lucide-react"; // Añadido Hash
import { Sidebar } from "./components/Sidebar";

export default function App() {
  const {
    gameState,
    isLoaded,
    goToNode,
    addNote,
    removeNote,
    addInventoryItem,
    removeInventoryItem,
    resetGame,
    toggleEnding,
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
    <div className="min-h-screen flex flex-col font-sans selection:bg-ink-accent/20 bg-paper-bg">
      <header className="sticky top-0 z-40 border-b border-paper-border bg-paper-bg/90 backdrop-blur-md px-4 py-3 flex items-center justify-between shadow-sm">
        <h1 className="text-xl text-center font-bold font-serif text-ink-accent tracking-wider uppercase">
          La Llamada de Cthulhu
        </h1>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-paper-card text-ink-light transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-full hover:bg-paper-card text-ink-light transition-colors"
          >
            <Backpack className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-2xl w-full mx-auto p-6 md:p-8 space-y-8 pb-32">
        {/* INDICADOR DE PÁGINA (Arriba a la derecha) */}
        {!currentNode.isInterlude && (
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-paper-card border border-paper-border text-ink-accent font-serif font-bold text-xs shadow-sm ring-1 ring-black/5">
              <span className="font-bold text-xl ">
                # {gameState.currentNodeId.toUpperCase()}
              </span>
            </div>
          </div>
        )}

        {currentNode.isInterlude ? (
          <div className="flex flex-col items-center space-y-8 animate-in fade-in duration-1000">
            {currentNode.imageUrl && (
              <div className="w-full relative rounded-lg overflow-hidden border border-paper-border shadow-md">
                <img
                  src={currentNode.imageUrl}
                  alt="Ilustración"
                  className="w-full h-auto object-cover max-h-[100vh]"
                />
              </div>
            )}
            <div className="space-y-6 text-center max-w-lg">
              {currentNode.text.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-xl leading-relaxed text-ink-main font-serif italic"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {currentNode.nextPageId && (
              <button
                onClick={() => goToNode(currentNode.nextPageId!)}
                className="px-8 py-3 rounded border border-ink-accent text-ink-accent hover:bg-ink-accent hover:text-white transition-all font-serif font-bold tracking-widest"
              >
                CONTINUAR
              </button>
            )}
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <div className="space-y-6">
              {currentNode.text.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-lg leading-relaxed text-ink-main font-serif"
                >
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
                    className="w-full text-left p-4 rounded-lg border border-paper-border bg-paper-card/50 hover:bg-paper-card transition-all text-ink-accent hover:text-ink-main font-medium group flex items-center justify-between"
                  >
                    <span>{choice.text}</span>
                    <ArrowLeft className="w-5 h-5 transform rotate-180" />
                  </button>
                ))
              ) : (
                <div className="text-center pt-8">
                  <button
                    onClick={resetGame}
                    className="px-6 py-3 rounded border border-ink-accent/30 text-ink-accent hover:bg-ink-accent hover:text-white font-serif font-bold tracking-widest"
                  >
                    VOLVER A EMPEZAR
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        gameState={gameState}
        addNote={addNote}
        removeNote={removeNote}
        addInventoryItem={addInventoryItem}
        removeInventoryItem={removeInventoryItem}
        toggleEnding={toggleEnding}
        resetGame={resetGame}
      />
    </div>
  );
}
