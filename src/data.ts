import { Cluster } from "./types";

export const clustersData: Cluster[] = [
  {
    id: "mechanical",
    name: "機械群",
    icon: "Settings",
    color: "bg-orange-500",
    lightColor: "bg-orange-50 text-orange-600 border-orange-200",
    industries: "機械工業、汽車工業、電機電子工業、民生工業、航空國防工業等，亦可從事銷售、材料供應等，或經由考試進入公單位或國營事業。",
    traits: [
      "具有機械推理、空間關係、科學推理等性向。",
      "對修理機械、工業生產及操作機械事務有興趣。",
      "對圖形幾何、電腦繪圖有偏好。",
      "喜歡拆卸、組裝機械（如樂高、汽機車），並喜歡動手繪圖與設計。"
    ],
    departments: [
      { name: "機械科", description: "學習電腦輔助機械設計(CAD)與製造(CAM)，接軌產業先進設備。", certificates: ["銑床", "車床", "機械加工", "電腦輔助機械設計製圖"] },
      { name: "模具科", description: "學習一般機械及電腦化機械加工，應用於模具設計、製造與大量生產。", certificates: ["銑床", "車床", "機械加工", "模具"] },
      { name: "鑄造科", description: "學習金屬元件製作、金屬熔鑄、材料檢驗、電腦繪圖製造及琉璃創作。", certificates: ["銑床", "車床", "鑄造", "金銀珠寶飾品加工"] },
      { name: "板金科", description: "學習電腦輔助製圖、金屬彎折成型、銲接組合及防銹塗裝等技能。", certificates: ["金屬成型", "電銲", "板金"] },
      { name: "機械木模科", description: "學習手工具操作、木模/樹脂模製作及精密量測知識。", certificates: ["銑床", "車床", "機械加工"] },
      { name: "配管科", description: "學習各種管線（消防、水電、瓦斯）及熱水器裝檢維護與電腦繪圖技能。", certificates: ["自來水管配管", "工業用管配管", "特定瓦斯器具裝修"] },
      { name: "機電科", description: "學習機電整合自動化技術及基本知識，訓練自動化機械操作。", certificates: ["機電整合", "機械加工", "氣壓"] },
      { name: "製圖科", description: "學習機械工業製圖及設計，運用電腦資訊能力模擬機構運作。", certificates: ["電腦輔助機械設計製圖", "電腦輔助立體製圖"] },
      { name: "生物產業機電科", description: "結合機械、電子、電機與電腦控制，應用於生物生長與處理需求。", certificates: ["氣壓", "機電整合", "機械加工"] },
      { name: "電腦機械製圖科", description: "加強各項電腦繪圖軟體教學與產品實物測繪能力。", certificates: ["電腦輔助機械設計製圖", "電腦輔助立體製圖"] }
    ],
    future: {
      work: ["精密機械/汽車/航太工程技術人員", "模具/機械設計/繪圖工程師", "機電整合/自動化設備工程師", "板金/特殊銲接與配管管路設計等基層與中高階專才"],
      study: "機械工程、機電科技、材料科學與工程、工業工程與管理、生物機電工程、動力機械工程、航空機械系等。"
    }
  },
  {
    id: "power-mechanical",
    name: "動力機械群",
    icon: "Car",
    color: "bg-red-500",
    lightColor: "bg-red-50 text-red-600 border-red-200",
    industries: "汽機車設計、維修、美容、改裝；飛機維修及裝配；農業與工業動力機械操作等。",
    traits: [
      "具備機械推理、空間關係及邏輯科學推理。",
      "對修理機器、操作機械、車輛改裝有強烈興趣。",
      "喜歡機車、汽車、飛機，經常參觀車展或玩駕駛模擬遊戲。",
      "樂於整合機械、電子與資訊控制科技於載具產業中。"
    ],
    departments: [
      { name: "汽車科", description: "學習汽車學理、檢驗及維修，培養裝配、保養及基本技術。", certificates: ["汽車修護", "汽車車體板金", "車輛塗裝", "機器腳踏車修護"] },
      { name: "重機科", description: "學習堆高機、挖土機等重機械維護及機電整合控制實務。", certificates: ["重機械修護-引擎", "氣壓", "堆高機操作"] },
      { name: "飛機修護科", description: "培育飛機裝配、檢驗、保養與維修等航空產業基層技能。", certificates: ["飛機修護", "氣壓"] },
      { name: "動力機械科", description: "學習起重機、運搬機、機車及壓力容器設備等操作維護。", certificates: ["汽車修護", "重機械修護", "固定式起重機操作"] },
      { name: "農業機械科", description: "學習農機（耕耘機等）保養、農場自動化管理知識。", certificates: ["農業機械修護", "機器腳踏車修護", "銲接"] }
    ],
    future: {
      work: ["車廠維修技術員", "飛機修護工程師", "重機械/起重機操作工程師", "自動化設備維修管理", "車輛研發工程師"],
      study: "車輛工程系、機械工程系汽車組、飛機工程系、航空機械系、動力機械工程系等。"
    }
  },
  {
    id: "electrical",
    name: "電機與電子群",
    icon: "Cpu",
    color: "bg-blue-600",
    lightColor: "bg-blue-50 text-blue-600 border-blue-200",
    industries: "半導體、電子、資訊、光電、通信、冷凍空調、儀器與軟體產業。",
    traits: [
      "具數學推理、空間、抽象與邏輯推理能力。",
      "對科學、電腦、電器用品充滿好奇心與研究精神。",
      "喜歡把玩智慧手機、平板，並熱愛組裝、維修或拆解家電產品。",
      "對人工智慧、機器人、感應控制及網路設備極具興趣。"
    ],
    departments: [
      { name: "電機科", description: "學習室內外配線、電機機械、微電腦控制及程式設計。", certificates: ["室內配線", "工業配線", "電器修護"] },
      { name: "控制科", description: "整合機電、可程式邏輯控制及儀器，應用於工廠自動化。", certificates: ["機電整合", "工業儀器"] },
      { name: "冷凍空調科", description: "學習冷氣、冰箱及中央空調的結構、安裝與維護實務。", certificates: ["冷凍空調裝修", "電器修護"] },
      { name: "電子科", description: "學習電子影音產品電路設計、單晶片微電腦撰寫與測試。", certificates: ["儀表電子", "數位電子", "視聽/工業電子"] },
      { name: "資訊科", description: "學習電腦軟硬體安裝、網路架設、程式設計與單晶片控制。", certificates: ["電腦硬體裝修", "電腦軟體設計", "網路架設"] },
      { name: "航空電子科", description: "學習航空電子設備、通信導航、介面控制與微電腦周邊。", certificates: ["飛機修護", "通信技術", "儀表電子"] },
      { name: "電子通信科", description: "學習電子通信設備、導航、介面測試與維修。", certificates: ["通信技術", "數位電子"] }
    ],
    future: {
      work: ["自動化工程師", "冷凍空調技師", "軟/硬體設計工程師", "IC及半導體設備工程師", "航空電子/通訊工程主管"],
      study: "電機工程、光電工程、自動化、資訊工程、飛機工程、電子工程、遊戲與通訊工程系等。"
    }
  },
  {
    id: "chemical",
    name: "化工群",
    icon: "FlaskConical",
    color: "bg-emerald-500",
    lightColor: "bg-emerald-50 text-emerald-600 border-emerald-200",
    industries: "石化、塑橡膠、環保檢驗、紡織、染整、生化、化妝品、食品化學、製藥、半導體材料等。",
    traits: [
      "數學、邏輯推理能力佳，具備良好的觀察與分析能力。",
      "情緒穩定、做事細心謹慎，對科學實驗充滿熱忱。",
      "喜歡看科學實作節目，對探索物質原理感興趣。",
      "關注服飾布料材質變化，重視環境保護與防污技術。"
    ],
    departments: [
      { name: "化工科", description: "學習化工原料與產品分析、檢驗管制及化工機械/儀表使用。", certificates: ["化學", "化工", "石油化學"] },
      { name: "紡織科", description: "學習紡織工業流程（紡紗、織造、針織）與生產檢驗管理。", certificates: ["化學", "化工"] },
      { name: "染整科", description: "學習纖維織物染色、印花、整理加工與化學實驗操作。", certificates: ["化學", "化工"] },
      { name: "環境檢驗科", description: "訓練環境採樣與檢驗品管，培育環保檢測基礎人才。", certificates: ["化學"] }
    ],
    future: {
      work: ["化工製程工程師", "品保/品管檢驗人員", "紡織染整技術員", "環保/水質/空氣污染防制工程師", "生技研發專員"],
      study: "化學工程、材料工程、生物技術、環境工程、應用化學、化妝品與時尚彩妝系等。"
    }
  },
  {
    id: "civil",
    name: "土木與建築群",
    icon: "Building2",
    color: "bg-stone-500",
    lightColor: "bg-stone-50 text-stone-600 border-stone-200",
    industries: "建築繪圖、室內設計、景觀規劃、營造、工程顧問、測量與工程估價等。",
    traits: [
      "具備數理推理、空間關係及美感性向。",
      "做事較謹慎獨立、富責任感，能忍耐長時間作業。",
      "對空間積木組裝、公共建築設施具有濃厚興趣。",
      "關懷環境保育，擅長在邏輯中融合創新思維與藝術。"
    ],
    departments: [
      { name: "土木科", description: "學習土木工程設計、繪圖、施工測量及營造法規等技能。", certificates: ["測量", "鋼筋", "模板", "混凝土", "營建防水"] },
      { name: "建築科", description: "強調電腦繪圖、手繪造型與建築工程實務基本操作。", certificates: ["建築製圖應用", "建築物室內裝修工程管理", "泥水"] },
      { name: "消防工程科", description: "學習消防設施正確裝修、維護技能及相關土木基礎知識。", certificates: ["建築製圖應用", "測量"] },
      { name: "空間測繪科", description: "應用空間資訊觀念，培養從事大地開發、工程規劃與測繪人才。", certificates: ["建築製圖應用", "測量"] }
    ],
    future: {
      work: ["土木/結構工程師", "室內設計師", "測量及地政人員", "消防設備工程師", "營造管理專員"],
      study: "建築系、土木工程、室內設計系、空間資訊、環境工程、景觀設計、消防學系等。"
    }
  },
  {
    id: "business",
    name: "商業與管理群",
    icon: "Briefcase",
    color: "bg-indigo-500",
    lightColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
    industries: "行銷物流、證券金融、貿易、賣場服務、電子商務及程式企劃等。",
    traits: [
      "語文及數學邏輯推理佳，對數字處理速度與確度高。",
      "熱心服務，善於與人溝通交流，具備團隊合作精神。",
      "對經營網路商店、聽財經演講或觀察商業趨勢感興趣。",
      "擁有靈活的企業事務處理能力與商業敏感度。"
    ],
    departments: [
      { name: "商業經營科", description: "學習會計、門市服務、商事法規與現代化商業管理技能。", certificates: ["會計事務", "門市服務"] },
      { name: "國際貿易科", description: "學習國貿實務、外語、行銷及管理，培養進出口基礎能力。", certificates: ["國貿業務", "會計事務"] },
      { name: "會計事務科", description: "專攻記帳出納、統計分析、稅務處理及會計資訊系統。", certificates: ["會計事務", "會計資訊"] },
      { name: "資料處理科", description: "學習網路原理、程式設計、軟體應用及商業管理知識。", certificates: ["電腦軟體設計", "網頁設計", "會計事務"] },
      { name: "電子商務科", description: "結合商業基礎與網站架設，培育網路行銷與金流操作人才。", certificates: ["網頁設計", "門市服務"] },
      { name: "流通管理科", description: "學習物流設計、商業自動化及大型企業門市營運知識。", certificates: ["電腦軟體應用", "門市服務"] },
      { name: "航運/農產/水產科", description: "學習特定產業（海運、農漁業）之現代化行銷經營與實務。", certificates: ["會計事務", "電腦文書"] }
    ],
    future: {
      work: ["財務會計或記帳士", "國際貿易/報關專員", "電子商務企劃/網頁設計師", "行銷管理與門市主管人員"],
      study: "企業管理、財務金融、多媒體設計、休閒管理、行銷與流通管理、資訊管理等。"
    }
  },
  {
    id: "foreign-language",
    name: "外語群",
    icon: "Languages",
    color: "bg-purple-500",
    lightColor: "bg-purple-50 text-purple-600 border-purple-200",
    industries: "語文教學、翻譯、秘書、空服員、導遊與領隊、國際貿易等相關行業。",
    traits: [
      "具高度語文推理能力及學習動機，勇於開口練習發音表達。",
      "熱愛外國文化，喜歡接觸外語歌曲、影集及原文雜誌。",
      "有耐心記憶單字，且樂於擔任志工擴充國際視野。",
      "具有親切的銷售與服務熱忱，能與外國來賓流暢互動。"
    ],
    departments: [
      { name: "應用外語科 (英文組)", description: "加強英語聽、說、讀、寫能力，並輔以基礎商業與電腦文書知識。", certificates: ["全民英檢", "多益 (TOEIC)"] },
      { name: "應用外語科 (日文組)", description: "培養日文溝通會話及讀寫專長，兼修商業與觀光接待基礎能力。", certificates: ["日本語能力檢定 (JLPT)"] }
    ],
    future: {
      work: ["專業筆譯或口譯", "外商公司秘書/行銷員", "外語教師", "空服員及觀光導遊"],
      study: "應用英語系、應用日文/外語系、翻譯學系、國際貿易系、休閒產業管理系等。"
    }
  },
  {
    id: "design",
    name: "設計群",
    icon: "Palette",
    color: "bg-pink-500",
    lightColor: "bg-pink-50 text-pink-600 border-pink-200",
    industries: "平面美術、廣告設計、多媒體動畫、工業產品及室內景觀設計等。",
    traits: [
      "富含美學觀念、空間感佳，對色彩協調擁有極高敏感度。",
      "渴望展現創意，喜愛攝影、影音媒體，隨時關注時尚潮流。",
      "習慣使用圖像思考，熱衷於動手做工藝或繪畫塗鴉。",
      "熱愛參觀美術設計展覽，有獨特的生活藝術品味。"
    ],
    departments: [
      { name: "美工 / 陶瓷工藝科", description: "訓練產品模型製作、繪圖基礎及陶瓷器物燒製量產技術。", certificates: ["視覺傳達設計", "陶瓷石膏模"] },
      { name: "廣告設計科", description: "培養商品行銷視覺傳達、平面媒體、包裝與影視廣告專業。", certificates: ["印前製程", "視覺傳達設計"] },
      { name: "多媒體設計科", description: "培訓動畫製作、數位遊戲、互動網頁及影音數位後製能力。", certificates: ["網頁設計", "攝影", "視覺傳達"] },
      { name: "室內設計科", description: "專注空間使用觀念、製圖及室內模型佈置製作技術。", certificates: ["室內設計", "建築製圖"] },
      { name: "金屬手工藝/家具科", description: "指導產品設計美學，教授金銀珠寶加工與家具木工技巧。", certificates: ["家具木工", "金銀珠寶飾品加工"] }
    ],
    future: {
      work: ["商品/包裝設計師", "動畫與網頁設計師", "室內/景觀設計師", "攝影師及美術企劃編輯"],
      study: "視覺傳達設計、工業設計、數位多媒體設計、建築系、服裝設計系等。"
    }
  },
  {
    id: "agriculture",
    name: "農業群",
    icon: "Sprout",
    color: "bg-lime-600",
    lightColor: "bg-lime-50 text-lime-600 border-lime-200",
    industries: "農場經營、園藝造景、生態保育、林業加工、獸醫畜產、寵物美容等。",
    traits: [
      "熱愛戶外大自然、動植物與生態保育。",
      "喜歡觀察與親自動手種植花果蔬菜，體驗收成樂趣。",
      "具愛心與責任感，有飼養寵物或觀察昆蟲的經驗。",
      "對於環境保護、資源永續擁有高度的熱情與企圖心。"
    ],
    departments: [
      { name: "農場經營/園藝科", description: "學習作物栽培、農業資源應用、科技行銷及花藝景觀設計。", certificates: ["農藝", "園藝", "造園景觀"] },
      { name: "造園 / 森林科", description: "教授景觀測量施工、森林保育利用、木材加工及自然資源管理。", certificates: ["測量", "家具木工", "造園景觀"] },
      { name: "畜產保健科", description: "培育畜牧經營、禽畜疾病防治與解剖、寵物美容基礎人才。", certificates: ["肉製品加工", "寵物美容"] },
      { name: "野生動物保育科", description: "訓練生物資源應用，學習應用動物學與生態區環境經營。", certificates: ["水族養殖"] }
    ],
    future: {
      work: ["休閒農場管理", "景觀設計技師", "動物醫院助理或獸醫師", "寵物美容師", "生態導覽員"],
      study: "農園生產系、植物醫學系、森林系、獸醫學系、寵物美容學程、食品科學等。"
    }
  },
  {
    id: "food",
    name: "食品群",
    icon: "Utensils",
    color: "bg-amber-500",
    lightColor: "bg-amber-50 text-amber-600 border-amber-200",
    industries: "烘焙業、乳品/罐頭加工、生技保健食品、檢驗機構與餐飲服務。",
    traits: [
      "對烘焙、料理點心充滿熱忱，喜歡與親朋好友分享美食。",
      "關注食品衛生安全與健康營養知識。",
      "勇於發掘新食材、創新加工法，具備流暢的科學邏輯能力。",
      "對於吳寶春等餐飲巨匠的奮鬥故事心生響往。"
    ],
    departments: [
      { name: "食品加工/食品科", description: "研習食品化學分析、微生物、添加物管制及基本營養學。", certificates: ["食品檢驗分析", "食品用金屬罐捲封"] },
      { name: "水產食品科", description: "結合本地水產特色，專研冷凍冷藏學與水產食品加工技術。", certificates: ["水產食品加工", "肉製品加工"] },
      { name: "烘焙科", description: "培養穀類加工、麵包中西點烘焙及產品創新之全能烘焙人才。", certificates: ["烘焙食品", "中式米食/麵食加工"] }
    ],
    future: {
      work: ["食品/生技研發技師", "烘焙師父", "品保檢驗員", "營養師與餐飲經營"],
      study: "食品科學、保健營養、生物科技、烘焙管理、餐飲廚藝系等。"
    }
  },
  {
    id: "home-economics",
    name: "家政群",
    icon: "Scissors",
    color: "bg-fuchsia-500",
    lightColor: "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-200",
    industries: "幼兒教育保育、整體造型彩妝、服裝飾品設計與餐飲烘焙。",
    traits: [
      "具備空間美感、細膩的藝術氣質及豐富的創造力。",
      "為人友善、喜歡溝通並熱衷於提供貼心的個人式服務。",
      "對流行時尚趨勢（彩妝、髮型、穿搭）具高度興趣。",
      "喜愛手作DIY、手工藝設計或嘗試簡單家政烹調。"
    ],
    departments: [
      { name: "家政科", description: "綜合學習家事管理、烹飪與餐旅服務技巧。", certificates: ["中/西餐烹調", "飲料調製"] },
      { name: "幼兒保育科", description: "提供幼兒身心發展照護、教具製作及幼兒活動領導訓練。", certificates: ["保母人員", "服務照顧員"] },
      { name: "服裝 / 流行服飾科", description: "涵蓋服飾經營行銷、服裝打版縫製與立體剪裁應用。", certificates: ["女裝", "金銀珠寶飾品加工"] },
      { name: "美容 / 時尚造型科", description: "專攻美肌、美髮美顏及指甲藝術、舞台彩妝等技能。", certificates: ["美容", "女子美髮"] },
      { name: "時尚模特兒科", description: "形塑美姿美儀、舞蹈肢體及國際舞台公關表演能力。", certificates: ["美容"] }
    ],
    future: {
      work: ["保母/幼教老師", "整體造型/新娘秘書", "服裝設計與打版師", "時尚彩妝/演藝表演人員"],
      study: "幼兒保育、化妝品應用、流行設計、服裝設計、護理系、表演藝術等。"
    }
  },
  {
    id: "hospitality",
    name: "餐旅群",
    icon: "Plane", // Or Hotel/Coffee
    color: "bg-teal-500",
    lightColor: "bg-teal-50 text-teal-600 border-teal-200",
    industries: "觀光旅行社、航空地勤與空服、餐飲業、各大國際大飯店等觀光領域產業。",
    traits: [
      "喜歡製作餐點與飲料調製，具有銷售及人際互動熱忱。",
      "愛好旅遊，對各國風土民情及旅遊資源有旺盛好奇心。",
      "個性外向活潑、善於言辭，具有高度的跨文化適應力。",
      "愛逛美食博覽會、旅遊展，並重視自身儀態氣質。"
    ],
    departments: [
      { name: "餐飲管理科", description: "培訓中西式餐點烹調與烘焙技巧，並深入餐旅衛生經營與採購。", certificates: ["中餐烹調", "西餐烹調", "飲料調製", "餐旅服務"] },
      { name: "觀光事業科", description: "強調語文會話、旅遊遊程設計、旅館客房管理及生態解說技術。", certificates: ["餐旅服務", "導遊人員", "領隊人員"] }
    ],
    future: {
      work: ["航空公司空服員/地勤", "專業廚師/烘焙師", "專業導遊/領隊", "連鎖飯店或餐飲企劃幹部"],
      study: "餐飲管理、旅運管理、觀光事業經營、航空服務管理、休閒暨遊憩管理等。"
    }
  },
  {
    id: "maritime",
    name: "海事群",
    icon: "Ship",
    color: "bg-cyan-600",
    lightColor: "bg-cyan-50 text-cyan-600 border-cyan-200",
    industries: "商船駕駛、造船廠技術、海上運輸物流、港口裝卸、漁船保修及海防作業。",
    traits: [
      "精力充沛、刻苦耐勞，且具有喜歡海洋的心與冒險犯難精神。",
      "具備空間、機械與科學邏輯思考能力，能獨立完成作業。",
      "不怕搭船、喜愛水上活動，對大型商船機械設備具好奇心。",
      "有領導溝通特質，並懷抱『人生以服務為目的』的強大理念。"
    ],
    departments: [
      { name: "航海科", description: "培養商船駕駛技能與航儀操控，學習確保船舶能安全航運。", certificates: ["航行員", "船員基本訓練證書"] },
      { name: "輪機科", description: "專注船舶主機設備之操作維持、電機自動控制及故障維修。", certificates: ["輪機員", "焊接", "機械加工"] }
    ],
    future: {
      work: ["特考成為商船船長/輪機長", "港務與海關人員", "船艦與造船工程師", "遊艇及船舶動力機械維修"],
      study: "航運技術、輪機工程、機械工程、海洋與邊境管理學系等。"
    }
  },
  {
    id: "marine-fishery",
    name: "水產群",
    icon: "Fish",
    color: "bg-sky-500",
    lightColor: "bg-sky-50 text-sky-600 border-sky-200",
    industries: "水產科技養殖、魚蝦飼料與藥品開發、海洋生態導覽與休閒漁業。",
    traits: [
      "喜歡接觸水域生態，具有生態保育知識與濃厚熱情。",
      "喜歡動手保養水族箱或動植物培育，具備科學研究精神。",
      "不怕接觸魚類與軟體動物，喜愛釣魚等自然保護體驗。"
    ],
    departments: [
      { name: "水產養殖科", description: "研究水生/餌料生物學及疾病學，奠定養殖漁業永續經營能力。", certificates: ["水族養殖", "水產養殖技師"] },
      { name: "漁業科", description: "教授漁具漁法、栽培管理及現代航海探測技術，推廣海洋環保。", certificates: ["漁船船員基本安全訓練", "漁航員"] }
    ],
    future: {
      work: ["休閒漁業生態導覽員", "商船/海釣船駕駛或船長", "水族館及養殖場技師", "生物研究技術員"],
      study: "水產養殖、環境生物與產業科學、航海系、海洋休閒管理系等。"
    }
  },
  {
    id: "arts",
    name: "藝術群",
    icon: "Theater",
    color: "bg-yellow-500",
    lightColor: "bg-yellow-50 text-yellow-600 border-yellow-200",
    industries: "劇場與影視製作、多媒體動畫、藝術創作、傳播音樂表演與經紀人才。",
    traits: [
      "擁有強烈的表演慾，擅長運用聲音、肢體、或繪圖表達自我。",
      "極具想像力及藝術氣息，能夠結合材料媒材轉化為創意成品。",
      "享受聚光燈下的舞台展演，或對幕後藝術策劃抱有巨大熱情。",
      "隨時關注藝文活動（如音樂會、舞台劇、電影與展覽）。"
    ],
    departments: [
      { name: "戲劇 / 表演藝術科", description: "橫跨導演、編劇、走秀、歌唱與肢體節奏訓練，培養全方位表演者。", certificates: ["街頭藝人認證考試"] },
      { name: "影劇/電影電視科", description: "結合音樂舞蹈，深入舞台燈光音響、數位攝錄及節目企畫。", certificates: ["攝影"] },
      { name: "音樂/西樂/國樂科", description: "訓練古典至流行專項樂器獨奏室內樂、電腦音樂工程配樂技術。", certificates: ["各項樂器檢定"] },
      { name: "舞蹈科", description: "培養芭蕾/現代舞等身體基礎控制、舞蹈即興編排與藝術欣賞。", certificates: [] },
      { name: "美術 / 多媒體動畫科", description: "教授純熟美術創作、跨媒材創意繪圖，含動畫剪接後製。", certificates: ["視覺傳達設計", "網頁設計"] },
      { name: "時尚工藝科", description: "結合工業與藝術，推動琉璃、金屬、陶瓷的現代工廠時尚設計。", certificates: ["視覺傳達設計"] }
    ],
    future: {
      work: ["專業演員/歌手/編舞家", "導演/編劇/後製剪接師", "劇場行銷與藝術經紀管理", "攝影/音效與動畫設計創作"],
      study: "廣播電視電影、戲劇/舞蹈學系、音樂教育、多媒體動畫設計、藝術經營管理等。"
    }
  }
];
