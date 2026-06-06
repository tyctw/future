import React from "react";
import { icons, LucideProps, Scale } from "lucide-react";
import { Cluster } from "../types";

interface ClusterCardProps {
  key?: string | number;
  cluster: Cluster;
  isCompared?: boolean;
  onCompareToggle?: (e: React.MouseEvent) => void;
  onClick: () => void;
}

export function ClusterCard({ cluster, isCompared = false, onCompareToggle, onClick }: ClusterCardProps) {
  const IconComponent = (icons as any)[cluster.icon] as React.FC<LucideProps>;

  const getCardColorClasses = (bgClass: string) => {
    const map: Record<string, string> = {
      'bg-orange-500': 'border-orange-500 shadow-orange-100 focus:ring-orange-500',
      'bg-red-500': 'border-red-500 shadow-red-100 focus:ring-red-500',
      'bg-blue-600': 'border-blue-500 shadow-blue-100 focus:ring-blue-600',
      'bg-emerald-500': 'border-emerald-500 shadow-emerald-100 focus:ring-emerald-500',
      'bg-stone-500': 'border-stone-500 shadow-stone-100 focus:ring-stone-500',
      'bg-indigo-500': 'border-indigo-500 shadow-indigo-100 focus:ring-indigo-500',
      'bg-purple-500': 'border-purple-500 shadow-purple-100 focus:ring-purple-500',
      'bg-pink-500': 'border-pink-500 shadow-pink-100 focus:ring-pink-500',
      'bg-lime-600': 'border-lime-500 shadow-lime-100 focus:ring-lime-600',
      'bg-amber-500': 'border-amber-500 shadow-amber-100 focus:ring-amber-500',
      'bg-fuchsia-500': 'border-fuchsia-500 shadow-fuchsia-100 focus:ring-fuchsia-500',
      'bg-teal-500': 'border-teal-500 shadow-teal-100 focus:ring-teal-500',
      'bg-cyan-600': 'border-cyan-500 shadow-cyan-100 focus:ring-cyan-600',
      'bg-sky-500': 'border-sky-500 shadow-sky-100 focus:ring-sky-500',
      'bg-yellow-500': 'border-yellow-500 shadow-yellow-100 focus:ring-yellow-500',
    };
    return map[bgClass] || 'border-slate-500 shadow-slate-100 focus:ring-slate-500';
  };

  const dynamicClasses = getCardColorClasses(cluster.color);

  return (
    <button
      id={cluster.id}
      onClick={onClick}
      className={`group relative flex flex-col items-start justify-between rounded-[32px] p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 text-left overflow-hidden border-b-8 border ${isCompared ? 'bg-indigo-50 border-indigo-400' : 'bg-white border-slate-100'} ${dynamicClasses}`}
    >
      {onCompareToggle && (
        <div 
          onClick={onCompareToggle}
          className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all ${isCompared ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-300' : 'bg-slate-100 text-slate-400 hover:bg-indigo-100 hover:text-indigo-600'} `}
          title={isCompared ? "取消比較" : "加入比較"}
        >
          <Scale className="w-5 h-5" />
        </div>
      )}

      <div 
        className="absolute -right-6 -top-6 rounded-full opacity-0 transition-opacity group-hover:opacity-10 blur-2xl pointer-events-none"
        style={{ width: '150px', height: '150px', backgroundColor: 'currentColor' }}
      ></div>

      <div className="flex w-full items-center justify-between">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cluster.lightColor}`}>
          {IconComponent && <IconComponent className="h-8 w-8" />}
        </div>
        {!onCompareToggle && (
          <div className="flex -space-x-2">
            {[...Array(Math.min(cluster.departments.length, 3))].map((_, i) => (
              <div key={i} className={`h-2.5 w-2.5 rounded-full border border-white ${cluster.color}`} style={{ opacity: 1 - i * 0.2 }} />
            ))}
            {cluster.departments.length > 3 && (
              <span className="pl-3 text-xs font-bold text-slate-400">+{cluster.departments.length - 3} 科</span>
            )}
          </div>
        )}
      </div>

      <div className="mt-8 space-y-2 pr-2">
        <h3 className="text-xl font-bold tracking-tight text-slate-800 group-hover:text-indigo-900 transition-colors">
          {cluster.name}
        </h3>
        <p className="line-clamp-2 text-sm text-slate-500 font-medium h-10">
          {cluster.industries}
        </p>
      </div>

    </button>
  );
}
