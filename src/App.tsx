import React, { useState } from 'react';
import { clustersData } from './data';
import { ClusterCard } from './components/ClusterCard';
import { ClusterModal } from './components/ClusterModal';
import { ClusterBubbleMap } from './components/ClusterBubbleMap';
import { HollandTestModal } from './components/HollandTestModal';
import { FaqAccordion } from './components/FaqAccordion';
import { ClusterCompareModal } from './components/ClusterCompareModal';
import { Cluster } from './types';
import { LayoutGrid, LibraryBig, Sparkles, Menu, X, BarChart3, Mail, BrainCircuit, Scale, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [selectedCluster, setSelectedCluster] = useState<Cluster | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [compareList, setCompareList] = useState<Cluster[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const handleToggleCompare = (e: React.MouseEvent, cluster: Cluster) => {
    e.stopPropagation();
    setCompareList(prev => {
      const exists = prev.find(c => c.id === cluster.id);
      if (exists) {
        return prev.filter(c => c.id !== cluster.id);
      }
      if (prev.length >= 2) {
        return [prev[1], cluster]; // keep max 2
      }
      return [...prev, cluster];
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-yellow-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-6 lg:py-8 relative z-10 w-full gap-4">
        <div className="flex items-center space-x-4 w-full lg:w-auto justify-between lg:justify-start">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200 shrink-0">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">TW會考落點分析</h1>
              <p className="text-slate-500 font-medium text-xs sm:text-sm">未來職人：高職群科指南</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-3 text-slate-700 bg-white shadow-sm border border-slate-100 rounded-2xl hover:bg-slate-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-bold tracking-widest flex items-center gap-2"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 font-bold text-slate-600 uppercase tracking-widest text-xs">
          <button className="text-indigo-600 border-b-4 border-indigo-600 pb-1 focus:outline-none">科系介紹</button>
          <a href="https://tyctw.github.io/spare/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors pb-1 flex items-center gap-1"><BarChart3 className="w-4 h-4"/> 落點分析</a>
          <a href="https://tyctw.github.io/shared/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors pb-1 flex items-center gap-1"><Sparkles className="w-4 h-4"/> 學長姐經驗</a>
          <button onClick={() => setIsTestOpen(true)} className="px-5 py-2.5 bg-rose-500 text-white rounded-full flex items-center gap-2 hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-200 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 focus:ring-offset-yellow-50">
            <BrainCircuit className="w-4 h-4"/>  Holland 職涯測驗
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-yellow-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=3150&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
           <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 shadow-lg shadow-indigo-200/50 mb-4 transform hover:scale-105 transition-transform cursor-default">
              <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-300 animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest uppercase text-white shadow-sm">2026 (115) 國中會考志願選填專區</span>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              歡迎使用<br className="sm:hidden" />
              <a href="https://tyctw.github.io/spare/" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer" title="前往 TW會考落點分析 進行精準預測">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-b-4 border-transparent hover:border-pink-500 transition-colors pb-1">
                  TW會考落點
                </span>
              </a>
            </h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 font-extrabold tracking-tight mt-6">
              探索你的未來方向
              <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">
                115 高職十五學群導覽
              </span>
            </h3>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              專為 115 年國中會考後考生設計，結合TW會考落點大數據分析，找到最適合你的技職科系。
              無論你具有什麼特質與興趣，總有一個學群能讓你發光發熱。
            </p>
            
            <div className="pt-4">
              <button onClick={() => setIsTestOpen(true)} className="px-8 py-4 bg-slate-900 text-white font-black rounded-full hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto focus:outline-none focus:ring-4 focus:ring-slate-900/20">
                <BrainCircuit className="w-6 h-6 text-rose-400" />
                11 分鐘免費 Holland 職涯測驗
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <ClusterBubbleMap />
        
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200">
            <LayoutGrid className="h-8 w-8" />
          </div>
          <h3 className="text-3xl font-black tracking-tight text-slate-800">全部學群</h3>
          <span className="ml-auto flex items-center gap-1.5 rounded-full bg-slate-800 px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold tracking-widest uppercase text-white shadow-md">
            <LibraryBig className="h-4 w-4" /> 15 組分類
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clustersData.map((cluster, index) => (
            <div key={cluster.id} className="contents">
              <ClusterCard
                cluster={cluster}
                isCompared={compareList.some(c => c.id === cluster.id)}
                onCompareToggle={(e) => handleToggleCompare(e, cluster)}
                onClick={() => setSelectedCluster(cluster)}
              />
            </div>
          ))}
        </div>
        
        {/* Floating Compare Action Bar */}
        <AnimatePresence>
          {compareList.length > 0 && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] max-w-sm sm:max-w-md bg-slate-900 rounded-full shadow-2xl p-2 sm:p-3 flex items-center justify-between border border-slate-700 backdrop-blur-md bg-slate-900/90"
            >
              <div className="flex items-center gap-3 px-4">
                <div className="relative flex -space-x-3">
                  {compareList.map((cluster, i) => (
                    <div key={cluster.id} className={`w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold ${cluster.color.replace('bg-', 'text-bg-').replace('text-bg-', 'bg-')} text-white z-${20-i*10}`}>
                      {cluster.name[0]}
                    </div>
                  ))}
                  {compareList.length < 2 && (
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-slate-500 z-0">
                      ?
                    </div>
                  )}
                </div>
                <div className="text-white font-bold text-sm tracking-widest hidden sm:block">
                  <span className={compareList.length === 2 ? 'text-emerald-400' : 'text-slate-400'}>
                    {compareList.length}/2
                  </span> 已選擇
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  disabled={compareList.length === 0}
                  className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-widest transition-colors flex items-center gap-2"
                >
                  <Scale className="w-4 h-4" />
                  開始比較
                </button>
                <button
                  onClick={() => setCompareList([])}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  title="清空"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats & Call to Action */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between bg-slate-900 rounded-[2rem] p-8 lg:p-10 text-white gap-8 shadow-2xl">
          <div className="flex flex-wrap sm:flex-nowrap gap-8 lg:gap-12 justify-center lg:justify-start w-full lg:w-auto">
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">科大升學率</p>
              <p className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">89.2%</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">專業證照取得率</p>
              <p className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400">3.5<span className="text-lg font-bold text-slate-300 ml-1">張/人</span></p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-2">產業實習媒合率</p>
              <p className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">92.5%</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0 justify-center">
            <p className="text-sm lg:text-base font-medium text-slate-300">猶豫不決？來聽聽學長姐怎麼說</p>
            <a 
              href="https://tyctw.github.io/shared/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-yellow-400 hover:shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-yellow-400/50 block text-center"
            >
              觀看錄取分享
            </a>
          </div>
        </div>

        {/* FAQ Section (SEO optimization for long-tail keywords) */}
        <FaqAccordion />
      </main>

      {/* Background Decor */}
      <div className="fixed bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-100 to-transparent pointer-events-none -z-10" />

      {/* Footer Section */}
      <footer className="border-t border-slate-200/60 bg-white/50 backdrop-blur-sm relative z-10 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} TW會考落點分析. All rights reserved.
          </p>
          <a 
            href="mailto:tyctw.analyze@gmail.com"
            className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <Mail className="h-4 w-4" />
            聯絡我們: tyctw.analyze@gmail.com
          </a>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedCluster && (
          <ClusterModal
            cluster={selectedCluster}
            onClose={() => setSelectedCluster(null)}
          />
        )}
        
        {isTestOpen && (
          <HollandTestModal 
            onClose={() => setIsTestOpen(false)} 
          />
        )}

        {isCompareModalOpen && (
          <ClusterCompareModal
            clusters={compareList}
            onClose={() => setIsCompareModalOpen(false)}
            onRemove={(id) => setCompareList(prev => prev.filter(c => c.id !== id))}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-sm bg-yellow-50 h-full shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-indigo-100/50 bg-white shadow-sm z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                    <BarChart3 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-black text-slate-800">導覽選單</h2>
                </div>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6 flex flex-col gap-4 overflow-y-auto">
                {/* Sidebar Ad Slot */}
                <button 
                  className="p-4 rounded-[1.25rem] text-left text-indigo-600 font-bold bg-indigo-50 border border-indigo-200 hover:bg-indigo-100 transition-colors focus:outline-none"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <span className="flex items-center gap-2">
                    <LibraryBig className="h-5 w-5" />
                    高職科系介紹
                  </span>
                </button>
                <button 
                  className="p-4 rounded-[1.25rem] text-left text-white font-bold bg-rose-500 border border-rose-600 shadow-md shadow-rose-200 hover:bg-rose-600 transition-colors focus:outline-none flex items-center justify-between"
                  onClick={() => {
                    setIsSidebarOpen(false);
                    setIsTestOpen(true);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5" />
                    Holland 職涯測驗
                  </span>
                </button>
                <a 
                  href="https://tyctw.github.io/spare/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-[1.25rem] text-slate-700 font-bold bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md hover:text-indigo-600 transition-all flex items-center justify-between group focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-slate-400 group-hover:text-indigo-500" />
                    會考落點分析
                  </span>
                  <span className="text-slate-300 group-hover:text-indigo-400 transition-colors">↗</span>
                </a>
                <a 
                  href="https://tyctw.github.io/shared/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-[1.25rem] text-slate-700 font-bold bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md hover:text-indigo-600 transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-slate-400 group-hover:text-indigo-500" />
                    歷年錄取分享
                  </span>
                  <span className="text-slate-300 group-hover:text-indigo-400 transition-colors">↗</span>
                </a>
                <a 
                  href="https://tyctw.github.io/kaoke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-[1.25rem] text-slate-700 font-bold bg-white border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md hover:text-indigo-600 transition-all flex items-center justify-between group"
                >
                  <span className="flex items-center gap-2">
                    <LayoutGrid className="h-5 w-5 text-slate-400 group-hover:text-indigo-500" />
                    職業科考科介紹
                  </span>
                  <span className="text-slate-300 group-hover:text-indigo-400 transition-colors">↗</span>
                </a>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
