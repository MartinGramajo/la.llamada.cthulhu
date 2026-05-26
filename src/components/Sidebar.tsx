import React, { useState } from 'react';
import { X, Save, Trash2, PenLine, Package, Trophy, CheckSquare, Square, RotateCcw } from 'lucide-react';
import { GameState, InventoryItem } from '../types';
import { cn } from '../lib/utils';

const ENDINGS = [
  { id: "11", title: "Prudencia Académica" },
  { id: "12", title: "La Llave de Plata" },
  { id: "24", title: "Código Marinero" },
  { id: "25", title: "Justicia Estelar" },
  { id: "52", title: "Confinamiento" },
  { id: "57", title: "Linaje de Sangre" },
  { id: "58", title: "El Motín" },
  { id: "64", title: "Ataúd de Hielo" },
  { id: "70", title: "El Banquete" },
  { id: "77", title: "Muros Acolchados" },
  { id: "105", title: "El Salmo Maldito" },
  { id: "107", title: "El Trofeo del Norte" },
  { id: "109", title: "Víctima Propiciatoria" },
  { id: "111", title: "La Sombra de Cthulhu" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  gameState: GameState;
  addNote: (content: string) => void;
  removeNote: (id: string) => void;
  addInventoryItem: (item: InventoryItem) => void;
  removeInventoryItem: (id: string) => void;
  toggleEnding: (id: string) => void;
  resetGame: () => void;
}

export function Sidebar({ 
  isOpen, onClose, gameState, addNote, removeNote, 
  addInventoryItem, removeInventoryItem, toggleEnding, resetGame 
}: SidebarProps) {
  const [activeTab, setActiveTab] = useState<'notes' | 'inventory' | 'finales'>('notes');
  const [newNote, setNewNote] = useState('');
  const [newItemName, setNewItemName] = useState('');

  return (
    <>
      <div className={cn("fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity", isOpen ? "opacity-100" : "opacity-0 pointer-events-none")} onClick={onClose} />
      <div className={cn("fixed top-0 right-0 h-full w-full max-w-sm bg-paper-bg border-l border-paper-border z-50 transform transition-transform duration-300 flex flex-col", isOpen ? "translate-x-0" : "translate-x-full shadow-2xl")}>
        
        <div className="flex items-center justify-between p-4 border-b border-paper-border">
          <h2 className="font-serif text-xl text-ink-accent font-bold">Bitácora</h2>
          <button onClick={onClose} className="p-2 text-ink-light hover:text-ink-main"><X /></button>
        </div>

        <div className="flex border-b border-paper-border overflow-x-auto no-scrollbar">
          <button onClick={() => setActiveTab('notes')} className={cn("flex-1 py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2", activeTab === 'notes' ? "border-ink-accent text-ink-accent" : "border-transparent text-ink-light")}>
            <PenLine className="w-4 h-4" /> NOTAS
          </button>
          <button onClick={() => setActiveTab('inventory')} className={cn("flex-1 py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2", activeTab === 'inventory' ? "border-ink-accent text-ink-accent" : "border-transparent text-ink-light")}>
            <Package className="w-4 h-4" /> OBJETOS
          </button>
          <button onClick={() => setActiveTab('finales')} className={cn("flex-1 py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2", activeTab === 'finales' ? "border-ink-accent text-ink-accent" : "border-transparent text-ink-light")}>
            <Trophy className="w-4 h-4" /> FINALES
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {activeTab === 'notes' && (
            <div className="space-y-4">
              <form onSubmit={(e) => { e.preventDefault(); if(newNote.trim()){ addNote(newNote.trim()); setNewNote(''); } }} className="space-y-2">
                <textarea value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Anota tus hallazgos..." className="w-full bg-paper-card border border-paper-border rounded p-2 text-ink-main font-serif text-sm h-24 shadow-inner" />
                <button type="submit" disabled={!newNote.trim()} className="w-full bg-paper-card border border-paper-border py-2 text-ink-accent font-bold text-xs hover:bg-ink-accent hover:text-white transition-colors">GUARDAR NOTA</button>
              </form>
              {gameState.notes.map(note => (
                <div key={note.id} className="bg-paper-card p-3 rounded border border-paper-border relative group shadow-sm">
                  <p className="text-sm font-serif text-ink-main whitespace-pre-wrap">{note.content}</p>
                  <button onClick={() => removeNote(note.id)} className="absolute top-1 right-1 text-ink-light hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="w-4 h-4"/></button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <form onSubmit={(e) => { e.preventDefault(); if(newItemName.trim()){ addInventoryItem({id: Date.now().toString(), name: newItemName.trim()}); setNewItemName(''); } }} className="space-y-2">
                <input value={newItemName} onChange={(e) => setNewItemName(e.target.value)} placeholder="Nuevo objeto..." className="w-full bg-paper-card border border-paper-border rounded p-2 text-ink-main font-serif text-sm shadow-inner" />
                <button type="submit" disabled={!newItemName.trim()} className="w-full bg-paper-card border border-paper-border py-2 text-ink-accent font-bold text-xs hover:bg-ink-accent hover:text-white transition-colors">GUARDAR OBJETO</button>
              </form>
              {gameState.inventory.map(item => (
                <div key={item.id} className="bg-paper-card p-2 rounded border border-paper-border flex justify-between items-center shadow-sm">
                  <span className="text-sm font-serif text-ink-main">{item.name}</span>
                  <button onClick={() => removeInventoryItem(item.id)} className="text-ink-light hover:text-red-700"><Trash2 className="w-4 h-4"/></button>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'finales' && (
            <div className="space-y-2 animate-in fade-in duration-300">
              <p className="text-[10px] text-ink-light font-serif italic mb-4 text-center uppercase tracking-widest">Registra tus destinos alcanzados</p>
              {ENDINGS.map(ending => {
                const isCompleted = gameState.discoveredEndings?.includes(ending.id);
                return (
                  <button
                    key={ending.id}
                    onClick={() => toggleEnding(ending.id)}
                    className={cn(
                      "w-full flex items-center gap-3 p-3 rounded border transition-all text-left bg-paper-card shadow-sm",
                      isCompleted ? "opacity-50 border-paper-border" : "border-paper-border hover:border-ink-accent/50"
                    )}
                  >
                    {isCompleted ? <CheckSquare className="w-5 h-5 text-ink-accent" /> : <Square className="w-5 h-5 text-ink-light" />}
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold text-ink-light uppercase tracking-tighter">Ref. {ending.id}</span>
                      <span className={cn(
                        "font-serif text-sm transition-all",
                        isCompleted ? "line-through text-ink-light decoration-ink-accent decoration-2" : "text-ink-main"
                      )}>
                        {ending.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-paper-border bg-paper-card/30">
          <button
            onClick={() => { if(window.confirm("¿Reiniciar aventura? Se borrarán notas y objetos.")){ resetGame(); onClose(); } }}
            className="w-full py-3 flex items-center justify-center gap-2 text-red-800 hover:text-red-600 font-bold text-xs border border-red-800/20 rounded-lg hover:bg-red-800/10 transition-all uppercase tracking-widest"
          >
            <RotateCcw className="w-4 h-4" /> REINICIAR AVENTURA
          </button>
        </div>
      </div>
    </>
  );
}