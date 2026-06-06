import React, { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { icons, LucideProps, X, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { Cluster } from "../types";

interface ClusterModalProps {
  cluster: Cluster | null;
  onClose: () => void;
}

export function ClusterModal({ cluster, onClose }: ClusterModalProps) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (cluster) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [cluster]);

  if (!cluster) return null;

  const IconComponent = (icons as any)[cluster.icon] as React.FC<LucideProps>;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[32px] bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-100 p-6 sm:px-8 bg-yellow-50/50">
            <div className="flex items-center gap-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${cluster.lightColor}`}>
                {IconComponent && <IconComponent className="h-8 w-8" />}
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-800">{cluster.name}</h2>
                <p className="text-sm font-medium text-slate-500 mt-1 line-clamp-1">
                  探索未來的 {cluster.departments.length} 個科系
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <div className="grid gap-10 md:grid-cols-2">
              
              {/* Left Column */}
              <div className="space-y-10">
                {/* Intro */}
                <section>
                  <h3 className="mb-4 text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className={`w-1.5 h-6 rounded-full inline-block ${cluster.color}`} />
                    行業對應
                  </h3>
                  <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {cluster.industries}
                  </p>
                </section>

                {/* Traits */}
                <section>
                  <h3 className="mb-4 text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className={`w-1.5 h-6 rounded-full inline-block ${cluster.color}`} />
                    適合具備以下特質的你
                  </h3>
                  <ul className="space-y-3">
                    {cluster.traits.map((trait, idx) => {
                      const iconColor = cluster.lightColor.split(' ').find(c => c.startsWith('text-')) || 'text-slate-600';
                      return (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 shrink-0 ${iconColor}`}>
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <span className="text-slate-600 font-medium leading-relaxed">{trait}</span>
                      </li>
                      );
                    })}
                  </ul>
                </section>

                {/* Future Paths */}
                <section>
                  <h3 className="mb-4 text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className={`w-1.5 h-6 rounded-full inline-block ${cluster.color}`} />
                    未來進路
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-2xl border-b-4 border-slate-200 border border-t-slate-100 border-x-slate-100 p-5 bg-white shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg ${cluster.lightColor}`}>
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-slate-900">就業發展</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cluster.future.work.map((w, idx) => (
                          <span key={idx} className="inline-block rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border-b-4 border-slate-200 border border-t-slate-100 border-x-slate-100 p-5 bg-white shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`p-2 rounded-lg ${cluster.lightColor}`}>
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <h4 className="font-bold text-slate-800">升學科大系所</h4>
                      </div>
                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {cluster.future.study}
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right Column (Departments) */}
              <div className="space-y-6">
                <h3 className="mb-4 text-lg font-bold text-slate-800 flex items-center gap-2">
                  <span className={`w-1.5 h-6 rounded-full inline-block ${cluster.color}`} />
                  群內科別介紹 ({cluster.departments.length})
                </h3>
                <div className="grid gap-4">
                  {cluster.departments.map((dept, idx) => (
                    <div key={idx} className="rounded-2xl border-b-4 border-slate-200 border border-t-slate-100 border-x-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-slate-800 mb-2">{dept.name}</h4>
                      <p className="text-sm text-slate-500 font-medium mb-4 leading-relaxed">{dept.description}</p>
                      {dept.certificates.length > 0 && (
                        <div className="pt-3 border-t border-slate-50 flex flex-wrap gap-1.5">
                          {dept.certificates.map((cert, cIdx) => (
                            <span key={cIdx} className={`inline-block rounded-lg px-3 py-1 text-xs font-bold ${cluster.lightColor}`}>
                              {cert}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
