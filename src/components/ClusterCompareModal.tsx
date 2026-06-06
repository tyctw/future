import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ChevronRight, Scale } from "lucide-react";
import { Cluster } from "../types";
import { icons, LucideProps } from "lucide-react";

interface ClusterCompareModalProps {
  clusters: Cluster[];
  onClose: () => void;
  onRemove: (id: string) => void;
}

export function ClusterCompareModal({ clusters, onClose, onRemove }: ClusterCompareModalProps) {
  if (clusters.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative flex flex-col w-full max-w-6xl max-h-[95vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden"
      >
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 md:px-10 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-rose-200">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-800">學群比較分析</h2>
              <p className="text-sm font-medium text-slate-500">比較學群特性與科系發展</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-50">
          <div className="grid md:grid-cols-2 gap-8 relative items-start">
            {/* Splitter on Desktop */}
            <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-slate-200 transform -translate-x-1/2"></div>
            
            {clusters.map((cluster) => {
              const IconComponent = (icons as any)[cluster.icon] as React.FC<LucideProps>;
              return (
                <div key={cluster.id} className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 relative">
                  <button 
                    onClick={() => onRemove(cluster.id)}
                    className="absolute top-6 right-6 p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
                    title="移除比較"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl ${cluster.lightColor}`}>
                      {IconComponent && <IconComponent className="w-8 h-8" />}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">{cluster.name}</h3>
                      <p className="text-sm font-bold text-slate-400 mt-0.5">{cluster.industries.split('、')[0]}等領域</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 relative inline-block">
                        學習特質
                        <span className={`absolute bottom-0 left-0 w-full h-1 ${cluster.color} opacity-20 rounded-full -z-10`}></span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cluster.traits.map((trait, i) => (
                           <span key={i} className="text-sm text-slate-600 font-medium bg-slate-50 px-3 py-1 rounded-full">{trait}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">涵蓋科系</h4>
                      <div className="flex flex-wrap gap-2">
                        {cluster.departments.map((dept, i) => (
                          <span key={i} className="px-3 py-1.5 bg-slate-50 text-slate-600 hover:text-slate-900 font-bold text-sm rounded-lg border border-slate-100 transition-colors">
                            {dept.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">未來出路</h4>
                      <div className="space-y-2">
                        {cluster.future.work.slice(0, 5).map((career, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className={`w-4 h-4 ${cluster.color.replace('bg-', 'text-')}`} />
                            <span className="text-slate-700 font-medium">{career}</span>
                          </div>
                        ))}
                        {cluster.future.work.length > 5 && (
                          <div className="text-sm font-bold text-slate-400 ml-6">+ {cluster.future.work.length - 5} 個相關職業</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {clusters.length === 1 && (
              <div className="bg-slate-100/50 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-12 text-slate-400 h-full min-h-[400px]">
                <Scale className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-bold text-center">請在首頁選擇<br/>第二個學群進行比較</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
