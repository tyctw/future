import React from "react";
import { clustersData } from "../data";
import { icons, LucideProps } from "lucide-react";
import { motion } from "motion/react";

export function ClusterBubbleMap() {
  const scrollToCluster = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full py-8 mb-8 overflow-hidden">
      <div className="text-center mb-6">
        <h3 className="text-xl font-black text-slate-800 tracking-wide">快速學群導航</h3>
        <p className="text-sm text-slate-500 mt-1 font-medium">點擊泡泡快速前往對應學群</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
        {clustersData.map((cluster, index) => {
          const IconComponent = (icons as any)[cluster.icon] as React.FC<LucideProps>;
          return (
            <motion.button
              key={cluster.id}
              onClick={() => scrollToCluster(cluster.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-3 focus:outline-none"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg border-2 border-white flex items-center justify-center transition-all ${cluster.color} text-white group-hover:shadow-xl group-hover:ring-4 ring-offset-2 ring-slate-100 ${cluster.color.replace('bg-', 'group-hover:ring-')}`}>
                {IconComponent && <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />}
              </div>
              <span className="font-bold text-slate-700 group-hover:text-slate-900 text-sm whitespace-nowrap bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100">
                {cluster.name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
