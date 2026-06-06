import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, BrainCircuit, Target, CheckCircle2, Award, ChevronRight, Activity } from 'lucide-react';
import { RiasecType, situationalQuestions, scaleQuestions, riasecResults } from '../data/holland';
import { ClusterCard } from './ClusterCard';
import { clustersData } from '../data';

interface HollandTestModalProps {
  onClose: () => void;
}

type TestStep = 'intro' | 'situational' | 'scale' | 'calculating' | 'result';

export function HollandTestModal({ onClose }: HollandTestModalProps) {
  const [step, setStep] = useState<TestStep>('intro');
  const [scores, setScores] = useState<Record<RiasecType, number>>({
    R: 0, I: 0, A: 0, S: 0, E: 0, C: 0,
  });
  
  const [sitStep, setSitStep] = useState(0);
  const [scaleStep, setScaleStep] = useState(0);

  const startTest = () => setStep('situational');

  const handleSituationalAnswer = (type: RiasecType) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 3 })); // Situational has higher weight
    if (sitStep < situationalQuestions.length - 1) {
      setSitStep(prev => prev + 1);
    } else {
      setStep('scale');
    }
  };

  const handleScaleAnswer = (type: RiasecType, score: number) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + score }));
    if (scaleStep < scaleQuestions.length - 1) {
      setScaleStep(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setStep('calculating');
    setTimeout(() => {
      setStep('result');
    }, 2000);
  };

  // Intro View
  const renderIntro = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 md:p-10 rounded-[2rem] border border-indigo-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BrainCircuit className="w-48 h-48 text-indigo-900" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 mb-6 relative z-10 leading-snug">
            「每個人都是天才。<br className="hidden md:block"/>但如果你用爬樹的能力評斷一條魚，<br/>牠將終其一生覺得自己是個笨蛋。」
          </h2>
          <p className="text-slate-500 font-bold tracking-widest uppercase text-sm relative z-10">
            – 愛因斯坦 (Albert Einstein)
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded-full bg-rose-500 inline-block"/>
              職涯測驗：Holland 職業興趣理論
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              美國約翰‧霍普金斯大學心理學教授 John Holland 於 1959 年提出。他認為個人人格特質與其所選擇職業之間的適配程度會影響成就與滿意度。
              來自專業心理學理論，只要透過測驗掌握興趣、價值觀、特質等面向，就能找到最適合自己發展的高職群科方向。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-rose-100 text-rose-500 rounded-xl shrink-0"><Target className="w-5 h-5"/></div>
              <div>
                <h4 className="font-bold text-slate-800">快速探索</h4>
                <p className="text-sm text-slate-500 mt-1">11 分鐘，免費探索學涯及職涯潛力</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-blue-100 text-blue-500 rounded-xl shrink-0"><BrainCircuit className="w-5 h-5"/></div>
              <div>
                <h4 className="font-bold text-slate-800">理論為本</h4>
                <p className="text-sm text-slate-500 mt-1">將人格特質與未來職業興趣完美結合</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-emerald-100 text-emerald-500 rounded-xl shrink-0"><CheckCircle2 className="w-5 h-5"/></div>
              <div>
                <h4 className="font-bold text-slate-800">精準報告</h4>
                <p className="text-sm text-slate-500 mt-1">針對學生分析適合的學科與未來職涯</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4 items-start">
              <div className="p-2 bg-amber-100 text-amber-500 rounded-xl shrink-0"><Award className="w-5 h-5"/></div>
              <div>
                <h4 className="font-bold text-slate-800">高可信度</h4>
                <p className="text-sm text-slate-500 mt-1">經專家信效度檢驗，大專院校指定工具</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button onClick={startTest} className="px-8 py-4 bg-indigo-600 text-white font-black rounded-full hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-1 transition-all flex items-center gap-2 group">
            開始 11 分鐘測驗
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );

  // Situational View
  const renderSituational = () => {
    const q = situationalQuestions[sitStep];
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 md:p-12 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm font-bold text-slate-400 mb-2 tracking-widest uppercase">
              <span>Section 1: 趣味情境題</span>
              <span>{sitStep + 1} / {situationalQuestions.length}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full transition-all duration-300" style={{ width: `${((sitStep) / situationalQuestions.length) * 100}%` }}></div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-800 mb-8 leading-relaxed">
            {q.text}
          </h3>

          <div className="space-y-3">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSituationalAnswer(opt.type)}
                className="w-full text-left p-5 rounded-2xl bg-white border-2 border-slate-100 hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-md transition-all font-bold text-slate-700 hover:text-indigo-700 flex items-center gap-4 group"
              >
                <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 group-hover:bg-indigo-200 group-hover:text-indigo-600 flex items-center justify-center shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  // Scale View
  const renderScale = () => {
    const q = scaleQuestions[scaleStep];
    return (
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="p-6 md:p-12 flex-1 flex flex-col justify-center">
         <div className="max-w-2xl mx-auto w-full">
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm font-bold text-slate-400 mb-2 tracking-widest uppercase">
              <span>Section 2: 簡易量表題</span>
              <span>{scaleStep + 1} / {scaleQuestions.length}</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${((scaleStep) / scaleQuestions.length) * 100}%` }}></div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-800 mb-12 leading-relaxed text-center">
            {q.text}
          </h3>

          <div className="flex flex-col sm:flex-row gap-3">
            {[
              { label: '非常不符合', val: 1, color: 'hover:bg-rose-50 hover:border-rose-400 hover:text-rose-600 border-slate-100' },
              { label: '不符合', val: 2, color: 'hover:bg-orange-50 hover:border-orange-400 hover:text-orange-600 border-slate-100' },
              { label: '普通', val: 3, color: 'hover:bg-slate-50 hover:border-slate-400 hover:text-slate-600 border-slate-100' },
              { label: '符合', val: 4, color: 'hover:bg-teal-50 hover:border-teal-400 hover:text-teal-600 border-slate-100' },
              { label: '非常符合', val: 5, color: 'hover:bg-emerald-50 hover:border-emerald-400 hover:text-emerald-600 border-slate-100' }
            ].map((btn) => (
              <button
                key={btn.val}
                onClick={() => handleScaleAnswer(q.type, btn.val)}
                className={`flex-1 py-4 px-2 rounded-2xl bg-white border-2 transition-all font-bold text-slate-500 text-sm md:text-base ${btn.color}`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Calculating View
  const renderCalculating = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-12 flex-1 flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <Activity className="w-16 h-16 text-indigo-500 animate-pulse" />
        <div className="absolute inset-0 border-4 border-t-indigo-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      <h3 className="text-2xl font-black text-slate-800">正在分析你的 Holland 潛質...</h3>
      <p className="text-slate-500 font-medium">比對 15 學群大數據庫中</p>
    </motion.div>
  );

  // Result View
  const renderResult = () => {
    // Top score
    const entries = Object.entries(scores) as [RiasecType, number][];
    const topType = entries.sort(([,a], [,b]) => b - a)[0][0];
    const result = riasecResults[topType];
    
    // Find recommended clusters
    const recommendedClusters = clustersData.filter(c => result.clusters.some(rc => c.name.includes(rc) || rc.includes(c.name)));

    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-6 md:p-10 container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-sm font-bold text-indigo-600 tracking-widest uppercase bg-indigo-50 inline-block px-4 py-1.5 rounded-full mb-3">測驗結果出爐</h2>
          <h3 className="text-3xl md:text-4xl font-black text-slate-900">你的優勢特質：{result.name}</h3>
        </div>

        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-slate-100 mb-10 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 flex flex-col items-center justify-center bg-slate-50 p-6 rounded-3xl border border-slate-100">
             <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-black shadow-lg shadow-indigo-200 mb-4">
                {result.animal}
             </div>
             <h4 className="text-xl font-bold text-slate-800 mb-1">代表動物：{result.animal}</h4>
             <p className="text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-lg text-sm">{result.trait}</p>
          </div>
          <div className="md:w-2/3 flex flex-col justify-center space-y-4">
             <h4 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">性格分析</h4>
             <p className="text-slate-600 leading-relaxed max-w-2xl text-justify font-medium whitespace-pre-wrap">{result.description}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-rose-500" />
            <h4 className="text-2xl font-black text-slate-800">為你推薦的發展學群 ({recommendedClusters.length})</h4>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedClusters.map(cluster => (
              <ClusterCard key={cluster.id} cluster={cluster} onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.getElementById(cluster.id);
                  el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  // We simulate a flash effect by adding/removing a class, or just scroll to it
                  if(el) {
                    el.classList.add('ring-4', 'ring-indigo-500', 'ring-offset-2');
                    setTimeout(() => el.classList.remove('ring-4', 'ring-indigo-500', 'ring-offset-2'), 2000);
                  }
                }, 300);
              }} />
            ))}
          </div>
        </div>

      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative flex flex-col w-full max-w-6xl max-h-[95vh] bg-white rounded-[2rem] shadow-2xl overflow-x-hidden overflow-y-auto"
      >
        {/* Header Close */}
        <div className="sticky top-0 right-0 z-20 flex justify-end p-4">
          <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col -mt-14">
          <AnimatePresence mode="wait">
            {step === 'intro' && renderIntro()}
            {step === 'situational' && renderSituational()}
            {step === 'scale' && renderScale()}
            {step === 'calculating' && renderCalculating()}
            {step === 'result' && renderResult()}
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
}
