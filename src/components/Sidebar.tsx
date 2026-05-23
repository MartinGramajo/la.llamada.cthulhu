import React, { useState } from 'react';
import { X, Save, Trash2, PenLine, Package } from 'lucide-react';
import { GameState, InventoryItem } from '../types';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  gameState: GameState;
  addNote: (content: string) => void;
  removeNote: (id: string) => void;
  addInventoryItem: (item: InventoryItem) => void;
  removeInventoryItem: (id: string) => void;
}

export function Sidebar({ isOpen, onClose, gameState, addNote, removeNote, addInventoryItem, removeInventoryItem }: SidebarProps) {
  const [activeTab, setActiveTab] = useState<'notes' | 'inventory'>('notes');
  const [newNote, setNewNote] = useState('');
  const [newItemName, setNewItemName] = useState('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      addNote(newNote.trim());
      setNewNote('');
    }
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim()) {
      addInventoryItem({
        id: Date.now().toString(36) + Math.random().toString(36).substring(2),
        name: newItemName.trim()
      });
      setNewItemName('');
    }
  };

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )} 
        onClick={onClose}
      />
      <div className={cn(
        "fixed top-0 right-0 h-full w-full max-w-sm bg-paper-bg border-l border-paper-border z-50 transform transition-transform duration-300 ease-out flex flex-col shadow-2xl",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b border-paper-border">
          <h2 className="font-serif text-xl text-ink-accent font-bold">Bitácora</h2>
          <button onClick={onClose} className="p-2 text-ink-light hover:text-ink-main rounded-full hover:bg-paper-card transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex border-b border-paper-border">
          <button 
            onClick={() => setActiveTab('notes')}
            className={cn(
              "flex-1 py-3 px-4 font-medium text-sm flex items-center justify-center gap-2 border-b-2 transition-colors",
              activeTab === 'notes' ? "border-ink-accent text-ink-accent" : "border-transparent text-ink-light hover:text-ink-main"
            )}
          >
            <PenLine className="w-4 h-4" /> Notas
          </button>
          <button 
            onClick={() => setActiveTab('inventory')}
            className={cn(
              "flex-1 py-3 px-4 font-medium text-sm flex items-center justify-center gap-2 border-b-2 transition-colors",
              activeTab === 'inventory' ? "border-ink-accent text-ink-accent" : "border-transparent text-ink-light hover:text-ink-main"
            )}
          >
            <Package className="w-4 h-4" /> Objetos
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {activeTab === 'notes' ? (
            <>
              <form onSubmit={handleAddNote} className="space-y-3">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Anota tus hallazgos, pero cuida tu cordura..."
                  className="w-full bg-paper-card border border-paper-border rounded-lg p-3 text-ink-main placeholder:text-ink-light font-serif focus:outline-none focus:ring-1 focus:ring-ink-accent resize-none h-24 shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={!newNote.trim()}
                  className="w-full bg-paper-card text-ink-accent hover:text-white font-medium py-2 rounded-lg border border-paper-border hover:bg-ink-accent hover:border-ink-accent disabled:opacity-50 disabled:hover:bg-paper-card disabled:hover:text-ink-accent disabled:hover:border-paper-border disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                >
                  <Save className="w-4 h-4" /> Guardar Nota
                </button>
              </form>

              <div className="space-y-4 pt-4">
                {gameState.notes.length === 0 ? (
                  <p className="text-ink-light italic text-center font-serif">Aún no hay anotaciones.</p>
                ) : (
                  gameState.notes.map(note => (
                    <div key={note.id} className="bg-paper-card p-4 rounded-lg border border-paper-border relative group shadow-sm">
                      <p className="text-ink-main font-serif whitespace-pre-wrap leading-relaxed">{note.content}</p>
                      <button 
                        onClick={() => removeNote(note.id)}
                        className="absolute top-2 right-2 p-1.5 text-ink-light hover:text-red-600 hover:bg-paper-bg rounded opacity-100 md:opacity-0 group-hover:opacity-100 transition-all"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </>
          ) : (
            <>
              <form onSubmit={handleAddItem} className="space-y-3">
                <input
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="¿Qué artefacto has encontrado?"
                  className="w-full bg-paper-card border border-paper-border rounded-lg px-3 py-2 text-ink-main placeholder:text-ink-light font-serif focus:outline-none focus:ring-1 focus:ring-ink-accent shadow-inner"
                />
                <button 
                  type="submit"
                  disabled={!newItemName.trim()}
                  className="w-full bg-paper-card text-ink-accent hover:text-white font-medium py-2 rounded-lg border border-paper-border hover:bg-ink-accent hover:border-ink-accent disabled:opacity-50 disabled:hover:bg-paper-card disabled:hover:text-ink-accent disabled:hover:border-paper-border disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                >
                  <Save className="w-4 h-4" /> Guardar Objeto
                </button>
              </form>

              <div className="space-y-3 pt-4">
                {gameState.inventory.length === 0 ? (
                  <p className="text-ink-light italic text-center font-serif">Tu mochila está vacía.</p>
                ) : (
                  gameState.inventory.map(item => (
                    <div key={item.id} className="bg-paper-card p-3 rounded-lg border border-paper-border flex items-center justify-between group shadow-sm">
                      <span className="text-ink-main font-serif font-medium flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-ink-accent/70" />
                        {item.name}
                      </span>
                      <button 
                        onClick={() => removeInventoryItem(item.id)}
                        className="p-1.5 text-ink-light hover:text-red-600 hover:bg-paper-bg rounded opacity-100 md:opacity-0 group-hover:opacity-100 transition-all"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
