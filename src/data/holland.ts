export type RiasecType = "R" | "I" | "A" | "S" | "E" | "C";

export interface Question {
  id: number;
  text: string;
  type: RiasecType;
}

export interface SituationalQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    type: RiasecType;
  }[];
}

export const situationalQuestions: SituationalQuestion[] = [
  {
    id: 1,
    text: "週末如果有一整天的空閒，你最可能選擇做什麼？",
    options: [
      { text: "找材料自己組裝模型、動手做木工或修理腳踏車", type: "R" },
      { text: "閱讀科普雜誌、玩解謎遊戲或報名探索新知的講座", type: "I" },
      { text: "去美術館看展覽、看電影，或在咖啡廳畫畫/寫作", type: "A" },
      { text: "找朋友一起去當活動服務志工，或是參加聚會聊天", type: "S" },
      { text: "和朋友計畫一個能賺錢的買賣，或擔任社團活動總召", type: "E" },
      { text: "待在家裡把房間整理得一塵不染，並登記記帳本", type: "C" },
    ],
  },
  {
    id: 2,
    text: "如果要和同學一起完成一份分組專題報告，你最想擔任哪個角色？",
    options: [
      { text: "負責動手製作報告道具、組裝硬體或操作儀器", type: "R" },
      { text: "負責深入搜尋資料、分析數據及找出問題核心原理", type: "I" },
      { text: "負責報告排版、視覺美編設計、音樂搭配及影片剪輯", type: "A" },
      { text: "負責關心大家進度，居中調解紛爭並鼓勵團隊士氣", type: "S" },
      { text: "負責上台魅力簡報、分配大家工作並帶領討論大方向", type: "E" },
      { text: "負責記錄會議重點、整理參考文獻格式及掌控時程表", type: "C" },
    ],
  },
];

export const scaleQuestions: Question[] = [
  { id: 3, text: "我喜歡動手操作機械、工具或修理物品。", type: "R" },
  { id: 4, text: "我喜歡在戶外活動或進行需要體力的工作。", type: "R" },
  { id: 5, text: "我喜歡解決複雜的數學、科學邏輯問題。", type: "I" },
  { id: 6, text: "我喜歡做實驗、觀察自然現象並找出事物的原因。", type: "I" },
  { id: 7, text: "我喜歡畫畫、寫作、演奏音樂等創作活動。", type: "A" },
  { id: 8, text: "我喜歡不受拘束地表達自己的創意與想法。", type: "A" },
  { id: 9, text: "我喜歡幫助別人解決困難或教導缺乏經驗的人。", type: "S" },
  { id: 10, text: "我喜歡參與團隊合作，認為傾聽和關懷很重要。", type: "S" },
  { id: 11, text: "我喜歡領導團隊、企劃活動或帶領大家達成目標。", type: "E" },
  { id: 12, text: "我喜歡追求成就感與地位，並且擅長說服別人。", type: "E" },
  { id: 13, text: "我喜歡有條理地整理資料、分類物品或建檔。", type: "C" },
  { id: 14, text: "我做事按部就班，喜歡按照明確的規則和標準處理微小細節。", type: "C" },
];

export const riasecResults: Record<RiasecType, { name: string; animal: string; trait: string; description: string; clusters: string[] }> = {
  R: {
    name: "實作型 (Realistic)",
    animal: "牛",
    trait: "勤勞實際、穩重不浮誇",
    description: "牛，偶蹄目，牛科，人類家畜之一，在中國文化中是勤勞的象徵。古代就有用牛拉動耕犁整地，從農耕、交通甚至軍事都廣泛運用。\n牛勤勞實際的個性與擁有實作型興趣的人有些相像，他們大多情緒穩定、有耐性，做事坦承直率，寧願行動不喜多言，也喜歡在講求實際、需要動手的環境中，從事明確的工作。他們對於機械和工具等事物較有興趣，生活上亦以實用為重，喜歡獨自做事。",
    clusters: ["機械群", "動力機械群", "土木與建築群", "農業群"],
  },
  I: {
    name: "研究型 (Investigative)",
    animal: "貓頭鷹",
    trait: "聰明理性、充滿好奇",
    description: "貓頭鷹是智慧與理性的象徵。研究型的人善於觀察、思考與分析，他們對自然現象或科學原理充滿好奇。遇到問題時，喜歡抽絲剝繭找出核心原因，比起人際互動，他們更喜歡和符號、概念或數據打交道，適合需要邏輯思考的專業領域。",
    clusters: ["電機與電子群", "化工群", "農業群"],
  },
  A: {
    name: "藝術型 (Artistic)",
    animal: "孔雀",
    trait: "獨具慧眼、創意奔放",
    description: "孔雀以絢麗的羽毛吸引目光，正如藝術型的人渴望展現自我、揮灑創意。這種類型的人具有豐沛的情感與敏銳的美感，不喜歡受限於死板的規定。他們傾向用藝術、文字或影像來表達內心世界，適合從事設計、展演等需要創造力的工作。",
    clusters: ["設計群", "藝術群", "家政群"],
  },
  S: {
    name: "社交型 (Social)",
    animal: "海豚",
    trait: "友善溫暖、樂於助人",
    description: "海豚是非常具有社會性且聰明友善的動物。社交型的人喜歡與人接觸，擅長傾聽、溝通及教導別人。他們具有高度的同理心，喜歡在團隊中促進和諧，或是幫助別人解決困難，在需要高度人際互動的服務與照護領域中能發揮最大價值。",
    clusters: ["餐旅群", "家政群", "外語群"],
  },
  E: {
    name: "企業型 (Enterprising)",
    animal: "獅子",
    trait: "充滿自信、具領導力",
    description: "獅子是萬獸之王，象徵著領導與企圖心。企業型的人充滿自信，精力充沛，喜歡發揮影響力並說服他人。他們追求權力、地位及物質財富，喜歡在競爭激烈的環境中挑戰自我，非常適合商業經營、管理與行銷的舞台。",
    clusters: ["商業與管理群", "餐旅群"],
  },
  C: {
    name: "常規型 (Conventional)",
    animal: "蜜蜂",
    trait: "細心嚴謹、遵守規則",
    description: "蜜蜂有著嚴密的組織與分工。常規型的人做事按部就班、注重細節，喜歡在有明確規則與標準流程的環境中工作。他們善於整理資料、處理數字與行政文書，是組織中最不可或缺的穩定基石。",
    clusters: ["商業與管理群", "資訊科 (電機與電子群)"],
  },
};
