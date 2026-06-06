import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "115年國中會考志願選填的關鍵是什麼？",
    answer: "重點在於先了解自己的興趣與優勢，再利用TW會考落點分析評估適合的群科。建議至少參考 3-5 個高職學群，並且在填寫志願序時，將最想就讀的科系填在前段（夢幻區），中間填寫把握度較高的科系（落點區），最後保留安全志願（保底區）。"
  },
  {
    question: "我不知道自己該選高中還是高職，可以用什麼工具輔助？",
    answer: "本網站提供免費的「Holland 職涯測驗」，只要 11 分鐘，根據專科心理學職業興趣理論，測出您潛在的性格特質，並為您推薦最適合的技職高中科系。認識自己是選填志願最重要的第一步。"
  },
  {
    question: "落點分析系統的數據來源是什麼？準確度高嗎？",
    answer: "TW會考落點團隊整合歷屆錄取數據及多項參考指標，並根據 115 年的招生名額及免試入學政策調整進行大數據分析，旨在提供高中職選填上的重要參考與指引。但最後錄取仍以官方分發結果為主，建議同學多方參考並評估。"
  },
  {
    question: "選擇高職的優勢在哪裡？",
    answer: "技職體系強調「做中學」，實作操作比例高，不僅能提早考取專業證照，更可以透過產學合作與業界接軌。此外，高職生升學優勢多元，可透過四技二專統測、繁星計畫、技優甄審等管道進入優質科技大學就讀。"
  },
  {
    question: "若會考成績不如預期，志願該怎麼填？",
    answer: "不要灰心！選填志願的重點是依照自己的「興趣專業」及「未來職涯方向」。技職教育非常看重實作能力，如果在自己感興趣的領域用心學習，未來的成就與進步幅度往往能超越國中會考成績的限制。建議多參考學長姐的心得分享來評估！"
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-20 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 text-indigo-600 rounded-2xl mb-4">
          <MessageCircleQuestion className="w-8 h-8" />
        </div>
        <h3 className="text-3xl font-black tracking-tight text-slate-800">115會考志願選填 常見問題 (FAQ)</h3>
        <p className="mt-4 text-slate-600 font-medium">解答您對於升學、落點分析與職涯探索的疑惑</p>
      </div>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-[1.5rem] overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white border-indigo-200 shadow-lg shadow-indigo-100/50' : 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-white'}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 rounded-[1.5rem]"
              >
                <span className="font-bold text-slate-800 text-lg pr-8">{faq.question}</span>
                <span className={`flex shrink-0 items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 ${isOpen ? 'bg-indigo-100 text-indigo-600 rotate-180' : 'bg-slate-200 text-slate-500'}`}>
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-slate-600 font-medium leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
