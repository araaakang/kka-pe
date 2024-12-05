const places = [
  {
    name: '富富',
    lat: 25.0462952,
    lng: 121.5102851,
  },
  {
    name: '有耳朵',
    lat: 25.0329162,
    lng: 121.5559071,
  },
  {
    name: '灯火 AKARI 深夜咖啡（最後點餐為11點，無接待四人以上組別，營業時間請參考Ig公告）',
    lat: 24.9978364,
    lng: 121.5171202,
  },
  {
    name: '圈外咖啡專門店Kengai coffea',
    lat: 25.000033,
    lng: 121.5139786,
  },
  {
    name: '卜卜商店',
    lat: 25.0555443,
    lng: 121.5196804,
  },
  {
    name: '北風社',
    lat: 25.0552532,
    lng: 121.5201497,
  },
  {
    name: 'ABOUT H Coffee 咖啡廳 巷子是私人土地請勿停車',
    lat: 25.044321,
    lng: 121.527394,
  },
  {
    name: 'OUVERT SEOUL TAIPEI 光復店',
    lat: 25.0390365,
    lng: 121.556619,
  },
  {
    name: '山林咖啡Coffee Roaster ｜自家烘焙、虹吸專門、單品拿鐵 ｜',
    lat: 25.021354,
    lng: 121.4278,
  },
  {
    name: 'Caféine咖啡因（現址羅東鎮愛國路60號）',
    lat: 24.6853054,
    lng: 121.7692117,
  },
  {
    name: '里海咖啡',
    lat: 24.8138704,
    lng: 121.7939484,
  },
  {
    name: '浮光書店',
    lat: 25.0552559,
    lng: 121.5200937,
  },
  {
    name: '宇宙小艇 Cosmoship大安店',
    lat: 25.0321014,
    lng: 121.5385099,
  },
  {
    name: '胚 pae venue｜不定期公休詳見官方IG',
    lat: 25.0689013,
    lng: 121.3583953,
  },
  {
    name: '目丘Mucho',
    lat: 25.0582115,
    lng: 121.821768,
  },
  {
    name: '喫茶月滿・月滿小書店',
    lat: 24.1397987,
    lng: 120.6806619,
  },
  {
    name: '旭舊',
    lat: 25.0128361,
    lng: 121.4706195,
  },
  {
    name: '巢',
    lat: 25.0412135,
    lng: 121.5691695,
  },
  {
    name: 'Museum Coffee 50年代博物館咖啡',
    lat: 25.0362719,
    lng: 121.5580072,
  },
  {
    name: '磨子Mill',
    lat: 25.1090435,
    lng: 121.5569444,
  },
  {
    name: '點冰室·ジャビン',
    lat: 25.0553699,
    lng: 121.5194801,
  },
  {
    name: '珍珠菓子喫茶屋',
    lat: 25.0817534,
    lng: 121.5809923,
  },
  {
    name: '喫茶 メイド MEIDO',
    lat: 25.023027,
    lng: 121.52111,
  },
  {
    name: '秋波名曲珈琲',
    lat: 25.0658656,
    lng: 121.5107529,
  },
  {
    name: '秋麗喫茶',
    lat: 24.9889365,
    lng: 121.3115766,
  },
  {
    name: '嗜甜',
    lat: 25.1769708,
    lng: 121.4508943,
  },
  {
    name: '植愛 Succulent Cafe & Food Lab',
    lat: 25.0413946,
    lng: 121.5067648,
  },
  {
    name: 'Cafe Parmentier⁣ ⁣',
    lat: 25.0240548,
    lng: 121.5511611,
  },
  {
    name: '羊毛與花 ‧ 光點 youmoutoohana Coffee',
    lat: 25.0532985,
    lng: 121.5221338,
  },
  {
    name: '咖啡，梅',
    lat: 25.0416754,
    lng: 121.5266074,
  },
  {
    name: '黑露咖啡館 OLO Coffee Roasters',
    lat: 25.050914,
    lng: 121.520039,
  },
  {
    name: 'O CAT CAFÈ 三重貓咪中途咖啡廳《非寵物友善、非親子餐廳，恕不接待未滿12歲小朋友》',
    lat: 25.0579369,
    lng: 121.48837,
  },
  {
    name: '浪浪別哭（不能攜帶寵物）',
    lat: 25.0457265,
    lng: 121.5245927,
  },
  {
    name: '喵喵屋中途貓咪咖啡廳（原M17中途咖啡館）',
    lat: 25.0326426,
    lng: 121.5381983,
  },
  {
    name: '朵朵嚐嚐貓咪中途咖啡廳（無接待12歲以下孩童）',
    lat: 25.0594627,
    lng: 121.5479672,
  },
  {
    name: 'MUY 莯以咖啡',
    lat: 25.064164,
    lng: 121.5341885,
  },
  {
    name: '% ARABICA 台北烘豆坊 (中山店)',
    lat: 25.0563113,
    lng: 121.520804,
  },
  {
    name: 'P. COFFEE ROASTER 自家烘焙咖啡',
    lat: 24.9956502,
    lng: 121.5413682,
  },
  {
    name: '倆男咖啡室（週一例休，例假日無訂位，平日可致電訂位）',
    lat: 25.05753,
    lng: 121.5317519,
  },
  {
    name: '香菜籽子/營業時間依IG公告為主',
    lat: 25.0522021,
    lng: 121.5121435,
  },
  {
    name: 'looproom',
    lat: 25.0369034,
    lng: 121.547472,
  },
  {
    name: 'TWATUTIAN Coffee & Co.',
    lat: 25.0509437,
    lng: 121.536383,
  },
  {
    name: '三十曼波工作室30mambo（11/27-12/1）',
    lat: 25.0695648,
    lng: 121.4972303,
  },
  {
    name: '月半咖啡 （11/5-11/7 close)',
    lat: 25.0302541,
    lng: 121.5312315,
  },
  {
    name: '早秋咖啡 Cafe Macho',
    lat: 25.026052,
    lng: 121.521129,
  },
  {
    name: 'J’s Coffee 僦室 貓屋｜ 中永和自烘咖啡 中永和貓咪咖啡 中永和美食 中永和甜點',
    lat: 24.998491,
    lng: 121.5103439,
  },
  {
    name: 'Joco latte',
    lat: 25.0575,
    lng: 121.5425,
  },
  {
    name: '【AKA café 】 老宅咖啡廳 | 秘境 Bar | 場地租借/包場 | 頌缽瑜珈課 | 音樂沙龍',
    lat: 25.057732,
    lng: 121.510522,
  },
  {
    name: '郭怡美咖啡廳',
    lat: 25.0576592,
    lng: 121.5100373,
  },
  {
    name: '逆風樓咖啡館 A Fighter Cafe',
    lat: 25.0557059,
    lng: 121.5090058,
  },
  {
    name: '在場咖啡 |針織服飾 | 空間租借 | 午餐首選手工水餃',
    lat: 25.053716,
    lng: 121.509745,
  },
  {
    name: '鼠皮soopi cafe',
    lat: 25.0555109,
    lng: 121.5123367,
  },
  {
    name: '何家人珈琲・COFFEE HO｜Blue Door Bike Shop 2f',
    lat: 25.05493,
    lng: 121.513464,
  },
  {
    name: '雪可屋',
    lat: 25.0196006,
    lng: 121.5323943,
  },
  {
    name: '二會咖啡廳',
    lat: 25.0492816,
    lng: 121.5199959,
  },
  {
    name: '𝙅𝙔𝘼 𝘾𝙤𝙛𝙛𝙚𝙚 じゃ コーヒー',
    lat: 25.0519822,
    lng: 121.5133465,
  },
  {
    name: 'GOOD DAY CAFE by mrs inkolize',
    lat: 25.0503156,
    lng: 121.5178883,
  },
  {
    name: '哩哉咖啡 Uknowhere Café',
    lat: 25.0080602,
    lng: 121.4617443,
  },
  {
    name: 'péakie （公休請見IG)',
    lat: 25.0539529,
    lng: 121.5644803,
  },
  {
    name: '嘎哩咖啡 ｜ GaliGabi',
    lat: 25.064706,
    lng: 121.5139052,
  },
  {
    name: '嬌嬌咖啡(無訂位、無接待四位以上、入店交談請放低音量)',
    lat: 24.9901811,
    lng: 121.542295,
  },
  {
    name: '鴉埠咖啡YABOO',
    lat: 25.0304219,
    lng: 121.5306096,
  },
  {
    name: '猫蔵咖啡 -《NEZO CAFE》',
    lat: 25.0558062,
    lng: 121.5197269,
  },
  {
    name: '權泉珈琲 KWON SAEM COFFEE',
    lat: 25.0551336,
    lng: 121.5195864,
  },
  {
    name: '羊毛與花 ‧ 永康',
    lat: 25.030696,
    lng: 121.529969,
  },
  {
    name: "潘寓 Pan's Haunt(安靜工作咖啡廳）",
    lat: 25.0269537,
    lng: 121.5398395,
  },
  {
    name: 'NEWSSTAND',
    lat: 24.1488617,
    lng: 120.6677539,
  },
  {
    name: '小樂堂',
    lat: 24.9824739,
    lng: 121.5405115,
  },
  {
    name: '月霞 Waha Cafe',
    lat: 25.0553361,
    lng: 121.5197593,
  },
  {
    name: '好人好室 x 七二聚場',
    lat: 25.0570013,
    lng: 121.5215732,
  },
  {
    name: '月里つきさと',
    lat: 25.053509,
    lng: 121.5241151,
  },
  {
    name: '小尾咖啡Tinytail_coffee',
    lat: 25.0628593,
    lng: 121.5102296,
  },
  {
    name: '幻猻家珈琲 Pallas Cafe｜Coffee Roaster｜コー​​ヒーショップ',
    lat: 25.0541599,
    lng: 121.509734,
  },
  {
    name: '孵咖啡-孵珈琲洋館 / Fu Cafe',
    lat: 25.058168,
    lng: 121.510425,
  },
  {
    name: '初二咖啡 Ao Tao Zu Café ||【不接受預約】',
    lat: 25.06052,
    lng: 121.5098159,
  },
  {
    name: '雨。聲。咖。啡',
    lat: 24.9949358,
    lng: 121.5426097,
  },
  {
    name: 'CREAMY DAILY CAFE',
    lat: 24.1306623,
    lng: 120.6407778,
  },
  {
    name: 'Kohi Hausu Roaster 手沖咖啡專門店',
    lat: 24.9947226,
    lng: 121.5058355,
  },
  {
    name: 'OH MY ZOO 寵物咖啡廳',
    lat: 25.0425012,
    lng: 121.5521667,
  },
  {
    name: '倉鼠甜點工作室',
    lat: 25.0392103,
    lng: 121.5253616,
  },
  {
    name: '與路 Yu Lu Café',
    lat: 25.0498257,
    lng: 121.7979137,
  },
  {
    name: '山小孩咖啡烘豆所',
    lat: 25.0023611,
    lng: 121.5556342,
  },
  {
    name: 'The Folks',
    lat: 25.026622,
    lng: 121.5476263,
  },
  {
    name: 'inn Lobby甜點店/咖啡/午茶/斗宅樓下咖啡店',
    lat: 23.6912594,
    lng: 120.5294966,
  },
  {
    name: 'kikumo',
    lat: 25.0554538,
    lng: 121.5287896,
  },
  {
    name: '3C Cafe',
    lat: 25.0001373,
    lng: 121.5147187,
  },
  {
    name: '青陽食肆精誠店',
    lat: 24.1542603,
    lng: 120.6550092,
  },
  {
    name: '三塊鬆餅 SA DAY',
    lat: 24.171485,
    lng: 120.664891,
  },
  {
    name: '咖啡瑪榭 中山店',
    lat: 25.0531965,
    lng: 121.5212494,
  },
  {
    name: '青春雞 CHING CHUN JEE 炸物 咖啡 甜點 喫茶 藝術品信義象山創始店',
    lat: 25.0258254,
    lng: 121.5664733,
  },
  {
    name: '頃刻咖啡inamoment',
    lat: 25.0557957,
    lng: 121.5090109,
  },
  {
    name: 'Cộng Cà Phê 台北總店',
    lat: 25.045939,
    lng: 121.5137646,
  },
  {
    name: '吉野傢俬店．選物．咖啡外帶',
    lat: 24.1476075,
    lng: 120.6840638,
  },
  {
    name: '舟倉Cabin Cafe《深夜咖啡廳》咖啡酒吧｜特調咖啡｜精品咖啡｜人氣｜熱門｜聚會｜質感咖啡廳',
    lat: 24.144803,
    lng: 120.660443,
  },
  {
    name: 'ハハ珈琲店',
    lat: 25.0677194,
    lng: 121.5244965,
  },
  {
    name: '白光咖啡 White Light Coffee Roaster',
    lat: 25.08557,
    lng: 121.3852811,
  },
  {
    name: '山生。宅',
    lat: 25.1214775,
    lng: 121.8681881,
  },
  {
    name: '鵲 Kasasagi Coffee Roasters（完全預約制，購買咖啡豆可以按黑色門鈴）',
    lat: 25.040526,
    lng: 121.573115,
  },
  {
    name: 'Nomadland_Ximen',
    lat: 25.0450657,
    lng: 121.5048772,
  },
  {
    name: '碧山巖藝文休閒中心',
    lat: 25.0969088,
    lng: 121.5876155,
  },
  {
    name: '鬧咖啡 NOW coffee（無預約服務）',
    lat: 25.0455055,
    lng: 121.5104056,
  },
  {
    name: 'passer',
    lat: 25.0243173,
    lng: 121.5505633,
  },
  {
    name: 'Okey Dokey Café（臨時公休請看IG）',
    lat: 22.9904431,
    lng: 120.194366,
  },
  {
    name: 'Flügel Studio',
    lat: 25.0198341,
    lng: 121.5302876,
  },
  {
    name: '曦-日光島嶼合作社',
    lat: 22.619412,
    lng: 120.2932566,
  },
  {
    name: '艸礻手作千層',
    lat: 22.9818305,
    lng: 120.2321395,
  },
  {
    name: '裏 Ura.219',
    lat: 25.0597689,
    lng: 121.509508,
  },
  {
    name: '捌㡯珈琲（無訂位服務）',
    lat: 24.8475777,
    lng: 121.8134968,
  },
  {
    name: '邊城咖啡坊',
    lat: 22.9772268,
    lng: 120.2025988,
  },
  {
    name: '多美咖啡',
    lat: 24.1556567,
    lng: 120.6555923,
  },
  {
    name: '千森製菓',
    lat: 22.9956336,
    lng: 120.2006117,
  },
  {
    name: '厚里Baking·手撕包專賣店 (火車內)',
    lat: 22.6258943,
    lng: 120.2785331,
  },
  {
    name: 'hima cafe | 暇 • 咖啡（無預約、公休請看ig)',
    lat: 25.1094547,
    lng: 121.8435214,
  },
  {
    name: '富錦樹咖啡 華山店',
    lat: 25.044028,
    lng: 121.527395,
  },
  {
    name: '富錦樹咖啡 FUJIN TREE CAFE 中山店',
    lat: 25.0532608,
    lng: 121.5237938,
  },
  {
    name: '富錦樹咖啡 FUJIN TREE CAFE 富錦店',
    lat: 25.0606632,
    lng: 121.5577698,
  },
  {
    name: '朔望咖啡 SYZYGY COFFEE',
    lat: 25.0514803,
    lng: 121.5132759,
  },
  {
    name: '秘境小峇里 （原幸福灣海景庭園咖啡）（獨立冷氣包廂）（網美打卡點，南洋風庭園）',
    lat: 25.2624393,
    lng: 121.479759,
  },
  {
    name: '微光森林',
    lat: 23.9191359,
    lng: 120.635527,
  },
  {
    name: '艸緣⟢女巫焙煎所⟣coffee｜店休詳見IG｜map同步更新',
    lat: 24.9748643,
    lng: 121.2548409,
  },
  {
    name: 'ALL DAY ROASTING COMPANY 天母店',
    lat: 25.1154751,
    lng: 121.5330251,
  },
  {
    name: 'ALL DAY ROASTING COMPANY',
    lat: 25.0568643,
    lng: 121.5602372,
  },
  {
    name: 'ALL DAY ROASTING COMPANY 師大店',
    lat: 25.02067,
    lng: 121.526735,
  },
  {
    name: '胚 pae nook',
    lat: 25.0774403,
    lng: 121.3715907,
  },
  {
    name: 'Seiki Cafe',
    lat: 24.9952866,
    lng: 121.3244506,
  },
  {
    name: 'Barista Ray Coffee (台北店)',
    lat: 25.0405469,
    lng: 121.5541299,
  },
  {
    name: '波波咖啡 Bo Coffee Roaster（波豆商行）',
    lat: 24.9477382,
    lng: 121.5051195,
  },
  {
    name: 'CAFE ACME｜Taipei Fine Arts Museum 北美館',
    lat: 25.0732782,
    lng: 121.5245048,
  },
  {
    name: '耳邊風 ebf.cafe',
    lat: 25.0594251,
    lng: 121.5086165,
  },
  {
    name: '喫茶銀河 Kissa Ginga 咖啡',
    lat: 25.0419044,
    lng: 121.5109609,
  },
  {
    name: '島',
    lat: 25.0657699,
    lng: 121.5098626,
  },
  {
    name: '敲咖啡',
    lat: 25.0574756,
    lng: 121.5632451,
  },
  {
    name: 'ALPHA CAFE',
    lat: 25.0556675,
    lng: 121.5201789,
  },
  {
    name: '嶼木',
    lat: 25.0491748,
    lng: 121.5197338,
  },
  {
    name: 'QuackKitchen 呱灶廚房',
    lat: 25.026481,
    lng: 121.4666365,
  },
  {
    name: "小貓花園 CAFE' & CATS 1998（貓咪陪伴您喝下午茶）",
    lat: 25.102394,
    lng: 121.5222345,
  },
  {
    name: 'Overture序曲',
    lat: 24.163984,
    lng: 120.6892995,
  },
  {
    name: 'Overture序曲 散策65',
    lat: 24.1637694,
    lng: 120.6882019,
  },
  {
    name: 'Overture序曲 國美12',
    lat: 24.1401099,
    lng: 120.6661819,
  },
  {
    name: 'Green Cherry Coffee 綠櫻桃咖啡',
    lat: 23.0186496,
    lng: 120.2071311,
  },
  {
    name: '燊咖啡',
    lat: 25.0164747,
    lng: 121.3016895,
  },
  {
    name: 'MAMA CAFE',
    lat: 25.0205498,
    lng: 121.2945143,
  },
  {
    name: '春山 ChunShan Cafe',
    lat: 24.9984993,
    lng: 121.2894913,
  },
  {
    name: '瞌睡咖啡Nap cafe',
    lat: 25.0184231,
    lng: 121.2964183,
  },
  {
    name: '森琴咖啡/光源62/植栽販售/咖啡廳/鬆餅/下午茶',
    lat: 24.9574357,
    lng: 121.1966713,
  },
  {
    name: '時常咖啡_Often coffee(無公休日，店門口請勿停車，停車資訊見IG精選動態)',
    lat: 24.9630663,
    lng: 121.2553032,
  },
  {
    name: 'ハァイ珈琲（Hy coffee)',
    lat: 24.9488343,
    lng: 121.2292373,
  },
  {
    name: '擼貓 - 療癒中途吸貓館|中壢美食|手工義式冰淇淋|沒有接待12歲以下小孩|預約以及臨時營業時間變動請參考粉專',
    lat: 24.9580073,
    lng: 121.2237783,
  },
  {
    name: '我們。 他們 咖啡廳',
    lat: 24.9543282,
    lng: 121.2175383,
  },
  {
    name: '貳巷貓弄Catfeine 中壢店 咖啡/甜點/早午餐/貓咪餐廳(未滿12歲以下兒童只接受電話/臉書粉絲團預約)',
    lat: 24.9577518,
    lng: 121.223051,
  },
  {
    name: '貳巷貓弄Catfeine板橋店 咖啡/甜點/早午餐/貓咪餐廳(未滿12歲以下兒童只接受電話/臉書粉絲團預約)',
    lat: 25.0168913,
    lng: 121.463158,
  },
  {
    name: 'Warm Air - 暖空咖啡 （ 中壢刈包 / 咖啡/ 咖啡豆專門店 ）',
    lat: 24.9571785,
    lng: 121.2262522,
  },
  {
    name: '找個地方cafe',
    lat: 24.9551217,
    lng: 121.2421795,
  },
  {
    name: '美焦咖啡',
    lat: 24.9556403,
    lng: 121.241288,
  },
  {
    name: '武威堂咖啡（巷子內請勿停車，公休日請看IG)',
    lat: 24.9513416,
    lng: 121.2237216,
  },
  {
    name: '喬治的咖啡 George’s Coffee 自烘精品咖啡豆專賣｜精品手沖咖啡｜手作甜點 | 場地租借',
    lat: 24.9589545,
    lng: 121.2175063,
  },
  {
    name: '綠沐恬拾 Café & Pâtisserie （ 2.0 ）',
    lat: 24.9631898,
    lng: 121.2127583,
  },
  {
    name: '日日籽 Daily Seed Store | 咖啡雜貨店（ 店休詳見IG公告 ）',
    lat: 24.9536554,
    lng: 121.2294759,
  },
  {
    name: '秋甜kakigori 刨冰喫茶｜咖啡｜空間租借｜寵物友善（最後點餐19:30 or 完售）',
    lat: 24.9662666,
    lng: 121.2326556,
  },
  {
    name: 'BA-beforetfa-甜點咖啡下午茶-主打戚風蛋糕',
    lat: 24.95932,
    lng: 121.210198,
  },
  {
    name: 'Re-Title Cafe',
    lat: 24.9617621,
    lng: 121.2214052,
  },
  {
    name: '拾午gatherdelicious',
    lat: 24.9609342,
    lng: 121.2248297,
  },
  {
    name: '鬍莉咖啡',
    lat: 24.9558176,
    lng: 121.2238425,
  },
  {
    name: '（營業時間請看IG、FB)咖啡曜日kohi youbi & Shao Leather手工皮件',
    lat: 24.9535698,
    lng: 121.229249,
  },
  {
    name: '貓咪日和咖啡屋',
    lat: 24.99782,
    lng: 121.512087,
  },
  {
    name: 'ハーフ珈琲 (hafu coffee)',
    lat: 25.0250636,
    lng: 121.4706734,
  },
  {
    name: "秘徑咖啡Alley's cafe",
    lat: 25.0016877,
    lng: 121.5384752,
  },
  {
    name: '上樓看看 咖啡',
    lat: 25.0414643,
    lng: 121.5689705,
  },
  {
    name: '大山咖啡店',
    lat: 25.0276301,
    lng: 121.5668061,
  },
  {
    name: 'Back of the house (公休詳見 Instagram）',
    lat: 25.0160377,
    lng: 121.5097743,
  },
  {
    name: 'Block & Cafe. 町咖啡',
    lat: 25.0508535,
    lng: 121.5152487,
  },
  {
    name: 'HIGHFIVE COFFEE',
    lat: 25.00919,
    lng: 121.5051706,
  },
  {
    name: '此木咖啡｜Zmu Cafe (公休日請看IG. FB公告)',
    lat: 25.0003165,
    lng: 121.520599,
  },
  {
    name: '森氏咖啡所',
    lat: 25.0032241,
    lng: 121.5106736,
  },
  {
    name: '自由溫室深夜咖啡廳（早午餐 咖啡 飲品 甜點 不限時 提供免費插座網路）',
    lat: 25.0043786,
    lng: 121.5113037,
  },
  {
    name: '又室甜點店 Y Dessert specialty .',
    lat: 25.1247014,
    lng: 121.5066795,
  },
  {
    name: 'ZZZ Coffee Shops',
    lat: 25.0024771,
    lng: 121.4998623,
  },
  {
    name: '點心俱樂部',
    lat: 24.9992363,
    lng: 121.5096538,
  },
  {
    name: '黑雨kuro ame（假日4點前限時，無訂位服務）',
    lat: 25.0099714,
    lng: 121.5132956,
  },
  {
    name: '貳氖福商行',
    lat: 25.046126,
    lng: 121.511812,
  },
  {
    name: 'Coach Play 赤峰街',
    lat: 25.0536422,
    lng: 121.5200453,
  },
  {
    name: '大鶴黑寶（最多三位 拆坐不可）',
    lat: 25.0536318,
    lng: 121.5242181,
  },
  {
    name: '2730café 貳柒參零咖啡',
    lat: 25.0336005,
    lng: 121.5570628,
  },
  {
    name: '木木商號【Moon Moon Coffee】',
    lat: 24.9974157,
    lng: 121.5186709,
  },
  {
    name: '貓隱村',
    lat: 25.0083001,
    lng: 121.5106054,
  },
  {
    name: 'Middle Name coffee & space',
    lat: 25.0516392,
    lng: 121.52012,
  },
  {
    name: '私藏不藏私咖啡食堂',
    lat: 24.9945042,
    lng: 121.5058019,
  },
  {
    name: 'memo café',
    lat: 25.0612152,
    lng: 121.5391492,
  },
  {
    name: '如常食光 Luminare Café',
    lat: 25.1789436,
    lng: 121.4373555,
  },
  {
    name: 'Tella Tella Cafe',
    lat: 25.0556745,
    lng: 121.5202759,
  },
  {
    name: '丸吉咖啡',
    lat: 25.0342594,
    lng: 121.5365731,
  },
  {
    name: '獴貓cafe/hair salon',
    lat: 25.052782,
    lng: 121.4297154,
  },
  {
    name: 'LOST and Found',
    lat: 25.0324772,
    lng: 121.5512248,
  },
  {
    name: 'Aki matcha bar',
    lat: 25.0796566,
    lng: 121.5210321,
  },
  {
    name: '勳咖啡 Eternal Black｜自家烘焙咖啡豆｜鹿角蕨｜肉桂捲',
    lat: 24.9982608,
    lng: 121.5106501,
  },
  {
    name: 'K珈琲小売所',
    lat: 25.0008787,
    lng: 121.5180485,
  },
  {
    name: "Jo's Haven 舊識港灣",
    lat: 24.9959739,
    lng: 121.5180635,
  },
  {
    name: '甜酸 - Sweet & Sour Life',
    lat: 25.0534775,
    lng: 121.5218788,
  },
  {
    name: '甜舍La Maison Doux（店休日詳見IG）',
    lat: 25.047241,
    lng: 121.5243548,
  },
  {
    name: '草根早午餐 TOUCH WOOD',
    lat: 25.0194175,
    lng: 121.5318994,
  },
  {
    name: 'BURGER MADE美式漢堡',
    lat: 25.0529158,
    lng: 121.5385339,
  },
  {
    name: 'YOUMECA夢珈忠孝旗艦店-大安人氣早午餐|熱門早午餐|輕食下午茶|聚餐餐廳|網美咖啡廳|熱門咖啡館|精品咖啡廳|人氣甜點',
    lat: 25.0399511,
    lng: 121.5536208,
  },
  {
    name: '無二會所',
    lat: 25.0301762,
    lng: 121.5229977,
  },
  {
    name: 'Le Park Cafe公園咖啡館',
    lat: 25.0538428,
    lng: 121.542031,
  },
  {
    name: '鬧蟬咖啡Now Chance Coffee (Fuxing)',
    lat: 25.0535952,
    lng: 121.5419894,
  },
  {
    name: '鬧蟬烘豆工作室',
    lat: 25.0096377,
    lng: 121.5041065,
  },
  {
    name: 'CRO#FEE 咖啡井 - 復興店',
    lat: 25.0407453,
    lng: 121.5414294,
  },
  {
    name: 'CRO#FEE 咖啡井 - 敦南店',
    lat: 25.0347818,
    lng: 121.5493098,
  },
  {
    name: '登波咖啡',
    lat: 25.0558043,
    lng: 121.5203751,
  },
  {
    name: 'COFFEE XOVER 咖啡手搖概念店',
    lat: 25.0604519,
    lng: 121.5207306,
  },
  {
    name: 'Fallinto.Coffee 沉溺咖啡（不定休營業日公佈IG)',
    lat: 25.0034919,
    lng: 121.5105648,
  },
  {
    name: 'Cafe insomnie',
    lat: 25.046574,
    lng: 121.543066,
  },
  {
    name: 'Heritage Bakery & Cafe',
    lat: 25.045299,
    lng: 121.511842,
  },
  {
    name: '梅笑糧行MAY SHOW CAFE',
    lat: 25.0406987,
    lng: 121.5000291,
  },
  {
    name: '貳拾陸巷 Somebody Cafe',
    lat: 25.042924,
    lng: 121.505745,
  },
  {
    name: 'Riverside Darling',
    lat: 25.0537645,
    lng: 121.5076962,
  },
  {
    name: 'Semi Club 分號俱樂部 ; Sandwich, Brunch & Cafe Bar',
    lat: 25.0587395,
    lng: 121.5462463,
  },
  {
    name: '勺日咖啡廳 日好空間店',
    lat: 25.0394946,
    lng: 121.5435028,
  },
  {
    name: '有kaffe冇',
    lat: 25.0371253,
    lng: 121.541041,
  },
  {
    name: 'Comptoir潮洋行',
    lat: 25.0536274,
    lng: 121.5118885,
  },
  {
    name: 'Seul Café 寂室',
    lat: 25.1131106,
    lng: 121.5362693,
  },
  {
    name: 'CHUCHU CAFE啾啾咖啡 中和左岸店_中和網美下午茶|人氣咖啡|氣泡咖啡推薦|網美咖啡廳|熱門咖啡館|咖啡廳推薦|調酒推薦|包場推薦',
    lat: 25.0102135,
    lng: 121.4870542,
  },
  {
    name: 'CHUCHU CAFE啾啾咖啡 台北華山店_台北網美下午茶|人氣咖啡|氣泡咖啡推薦|網美咖啡廳|熱門咖啡館|咖啡廳推薦|調酒推薦|包場推薦',
    lat: 25.0433882,
    lng: 121.5280762,
  },
  {
    name: 'yet coffee x deep work',
    lat: 25.0278978,
    lng: 121.5688622,
  },
  {
    name: 'PILLO bakery & cafe（訂位請點下方）',
    lat: 25.0543689,
    lng: 121.511856,
  },
  {
    name: '紅利咖啡',
    lat: 25.0101478,
    lng: 121.4598592,
  },
  {
    name: 'LAIFA Coffee Store -來發咖啡所（每個月第二週星期二公休）10/8',
    lat: 24.9903014,
    lng: 121.418827,
  },
  {
    name: 'Yungflea',
    lat: 25.0212948,
    lng: 121.5331392,
  },
  {
    name: '半路咖啡 Halfway Cafe',
    lat: 25.0201344,
    lng: 121.5316095,
  },
  {
    name: '舒適圈．Comfortzone',
    lat: 25.0239428,
    lng: 121.5503852,
  },
  {
    name: '貝克宅 忠孝店',
    lat: 25.0405507,
    lng: 121.5423956,
  },
  {
    name: '貳拾貳日甜—預訂制甜點店',
    lat: 25.0216759,
    lng: 121.5278441,
  },
  {
    name: 'HAN COFFEE',
    lat: 25.0898625,
    lng: 121.5234486,
  },
  {
    name: '愛貓成癮 • CAT HOTEL & CAFE',
    lat: 25.0277419,
    lng: 121.5640719,
  },
  {
    name: 'AFAD CAFE',
    lat: 25.031277,
    lng: 121.529804,
  },
  {
    name: 'NO COFFEE 台北中山店',
    lat: 25.0527485,
    lng: 121.5206836,
  },
  {
    name: '玉虫画室',
    lat: 25.0541617,
    lng: 121.6016139,
  },
  {
    name: '微間素生 MI-KAN STUDIO',
    lat: 24.986036,
    lng: 121.4283542,
  },
  {
    name: '生活在他方-城南店 (無訂位服務)',
    lat: 25.0292503,
    lng: 121.5156353,
  },
  {
    name: '沙丘',
    lat: 25.0554588,
    lng: 121.5114819,
  },
  {
    name: 'A N G L E II',
    lat: 25.1140958,
    lng: 121.5209802,
  },
  {
    name: '瑤池墮宮 Y.C.D.G / 深夜咖啡',
    lat: 25.0619896,
    lng: 121.5251147,
  },
  {
    name: '汩咖啡 gu coffee ( 營運時間以ig公告為準 ）',
    lat: 25.0472424,
    lng: 121.5564338,
  },
  {
    name: '一角鯨咖啡 Monodon Coffee',
    lat: 25.055701,
    lng: 121.519953,
  },
  {
    name: 'Hapa coffee',
    lat: 25.0627605,
    lng: 121.5148217,
  },
  {
    name: '之藍じらん 抹茶販売店-.淡水人氣甜點|甜點推薦|人氣霜淇淋|必吃甜點|熱門甜品|抹茶專賣店|抹茶霜淇淋|抹茶甜品',
    lat: 25.1731841,
    lng: 121.4355999,
  },
  {
    name: 'Coffee Action | 咖啡開機 咖啡專賣店',
    lat: 25.0271856,
    lng: 121.4692416,
  },
  {
    name: '穀嶼—麵包 ‧咖啡 ‧雜貨',
    lat: 25.1070098,
    lng: 121.5242892,
  },
  {
    name: '響板',
    lat: 25.0540324,
    lng: 121.5210543,
  },
  {
    name: 'Supranormal Bakery Cafe 赤峰店',
    lat: 25.0566599,
    lng: 121.5203386,
  },
  {
    name: '万 象WANGXINAG',
    lat: 25.0231995,
    lng: 121.5215188,
  },
  {
    name: 'Chüan Chuan Coffee｜捲捲｜咖啡｜捲捲咖啡｜肉桂捲(正門在捷運邊側 請從中正路236巷進入) 公休日請見IG',
    lat: 25.0966158,
    lng: 121.5252537,
  },
  {
    name: 'PECKiSH bakery',
    lat: 25.0565179,
    lng: 121.5576939,
  },
  {
    name: '書店 咖啡 「凝流書店生活」',
    lat: 25.0065142,
    lng: 121.4505253,
  },
  {
    name: '咖啡休日 Day off. - 手沖咖啡專門店',
    lat: 25.0122635,
    lng: 121.5358449,
  },
  {
    name: '山海What’s Life Coffee Roasters（恕不接受五位內用）',
    lat: 25.0710101,
    lng: 121.5196661,
  },
  {
    name: '無憂wuyooo cafe',
    lat: 25.1184391,
    lng: 121.5250662,
  },
  {
    name: 'Le buno café',
    lat: 25.0426454,
    lng: 121.5520721,
  },
  {
    name: '三層',
    lat: 25.0072478,
    lng: 121.5178805,
  },
  {
    name: '夏班納咖啡館',
    lat: 25.000592,
    lng: 121.5275774,
  },
  {
    name: '露徑 On The Road',
    lat: 25.0529371,
    lng: 121.5292747,
  },
  {
    name: 'COFFEE FLAIR 咖啡館 手沖咖啡 甜點 咖啡豆專賣',
    lat: 25.0641982,
    lng: 121.5252215,
  },
  {
    name: '波赫士領地精品咖啡館 昌吉店 BorgesPlace 提拉米蘇 千層蛋糕',
    lat: 25.0657177,
    lng: 121.5172911,
  },
  {
    name: '波赫士領地精品咖啡館 明水店 BorgesPlace 提拉米蘇 千層蛋糕',
    lat: 25.0775452,
    lng: 121.549736,
  },
  {
    name: '雪咖啡 yuki coffee/貓咪/深夜/行天宮(假日無訂位,臨時店休請看IG))',
    lat: 25.0576051,
    lng: 121.5324206,
  },
  {
    name: 'Jack & NaNa COFFEE STORE',
    lat: 25.0267324,
    lng: 121.5316226,
  },
  {
    name: '覺旅咖啡 Journey Kaffe 南京復興店',
    lat: 25.0530552,
    lng: 121.5471475,
  },
  {
    name: '2J CAFE',
    lat: 25.0309655,
    lng: 121.538374,
  },
  {
    name: 'dateless',
    lat: 25.0618236,
    lng: 121.5028353,
  },
  {
    name: 'A Small Place',
    lat: 25.0258197,
    lng: 121.5203512,
  },
  {
    name: 'Buttery',
    lat: 25.0090793,
    lng: 121.4653292,
  },
  {
    name: 'Local Local Coffee 咖啡再地',
    lat: 24.9835522,
    lng: 121.5400076,
  },
  {
    name: '隅咖啡Aroundtheblock',
    lat: 25.0243045,
    lng: 121.5214312,
  },
  {
    name: 'Météore Labo(無固定公休，公布於社群平台請自行查詢)',
    lat: 25.056521,
    lng: 121.450553,
  },
  {
    name: 'GRAY CAFE 咖灰（不提供訂位服務）',
    lat: 25.284228,
    lng: 121.521215,
  },
  {
    name: 'mois cafe',
    lat: 25.0440799,
    lng: 121.5473477,
  },
  {
    name: '拾浪咖啡',
    lat: 25.2802449,
    lng: 121.6087822,
  },
  {
    name: '我們在海邊',
    lat: 25.2553374,
    lng: 121.4747073,
  },
  {
    name: '普羅旺斯海岸咖啡',
    lat: 25.2541511,
    lng: 121.473556,
  },
  {
    name: 'KNIGHT COFFEE 騎士驛站-咖啡屋',
    lat: 24.9349702,
    lng: 121.3258433,
  },
  {
    name: 'Luna Handmade Dessert 咖啡.布丁.提拉米蘇.千層蛋糕.草莓蛋糕.常溫甜點.客製化生日蛋糕.下午茶.烘焙課程',
    lat: 24.9694881,
    lng: 121.5442961,
  },
  {
    name: '六丁目',
    lat: 25.0583934,
    lng: 121.560893,
  },
  {
    name: '綠咖生活概念店 greengreencoffee',
    lat: 25.0355452,
    lng: 121.5555183,
  },
  {
    name: '河童家 かっぱや',
    lat: 25.0001435,
    lng: 121.5383289,
  },
  {
    name: 'Mr. Moan 莫恩先生布丁店-板橋布丁/板橋咖啡店/新埔甜點推薦/江子翠咖啡廳',
    lat: 25.0190233,
    lng: 121.464525,
  },
  {
    name: 'Koshi Café',
    lat: 25.0786393,
    lng: 121.5979749,
  },
  {
    name: '杦窩JIUWO',
    lat: 24.9946215,
    lng: 121.4294364,
  },
  {
    name: '第二人生咖啡館天母店 Second Life Coffee｜咖啡｜輕食｜甜點｜',
    lat: 25.1081408,
    lng: 121.5299463,
  },
  {
    name: '第二人生咖啡館士林店 Second Life Coffee Plus (正門位於捷運橋邊)',
    lat: 25.0957824,
    lng: 121.5251466,
  },
  {
    name: 'cafe waku',
    lat: 25.055698,
    lng: 121.5193002,
  },
  {
    name: 'Remember Me_記得我．café－台北推薦咖啡廳 深夜咖啡館廳首選 小巨蛋 熱門網美咖啡廳 松山區必吃下午茶首選 烘焙特色咖啡 網紅拍照IG打卡 特色音樂駐唱餐廳 生日慶生高CP值場地包場 約會聚餐 寵物友善',
    lat: 25.052357,
    lng: 121.554531,
  },
  {
    name: '奎府聚書店 Kimotsi',
    lat: 25.0548802,
    lng: 121.5201427,
  },
  {
    name: 'KiOSK',
    lat: 25.0462835,
    lng: 121.5314104,
  },
  {
    name: '夏野豆行',
    lat: 25.0612289,
    lng: 121.5326254,
  },
  {
    name: '坵粼咖啡',
    lat: 25.0253375,
    lng: 121.5413944,
  },
  {
    name: '小川珈琲所',
    lat: 25.03125,
    lng: 121.5601121,
  },
  {
    name: '昭和浪漫洗濯屋_霜淇淋專賣店',
    lat: 25.0591891,
    lng: 121.5101599,
  },
  {
    name: '駅eki - 中崙駅',
    lat: 25.0467136,
    lng: 121.5459119,
  },
  {
    name: '昭和浪漫冰室 Showaice',
    lat: 25.03293,
    lng: 121.5505714,
  },
  {
    name: '炭波波·喫茶（公休詳情請見IG精選動態）',
    lat: 25.01894,
    lng: 121.532101,
  },
  {
    name: 'SIDOLI RADIO 小島裡',
    lat: 25.0521594,
    lng: 121.5112881,
  },
  {
    name: 'Cat Cafe Mocha',
    lat: 25.0383005,
    lng: 121.566783,
  },
  {
    name: 'Meerkat75 Café - 75度獴-敦南旗艦店',
    lat: 25.03536,
    lng: 121.5507181,
  },
  {
    name: 'Meerkat75 Café - 75度獴-小巨蛋店(整修中)',
    lat: 25.0488233,
    lng: 121.5551426,
  },
  {
    name: '妳有咖啡 neo cafe',
    lat: 25.0456972,
    lng: 121.5051101,
  },
  {
    name: 'Cozy Cowork Cafe/共享工作活動空間/台北咖啡廳/甜點/早午餐/美食/下午茶',
    lat: 25.0470984,
    lng: 121.5561625,
  },
  {
    name: 'Moi Cafe 忠孝店',
    lat: 25.042732,
    lng: 121.545523,
  },
  {
    name: '鹿邊咖啡Deer cafe',
    lat: 25.2976225,
    lng: 121.5733505,
  },
  {
    name: '転運棧-貓咪中途咖啡廳',
    lat: 25.0532138,
    lng: 121.513859,
  },
  {
    name: 'Modism Café 摩德年代 天母店',
    lat: 25.1033966,
    lng: 121.5248996,
  },
  {
    name: 'Modism Café 摩德年代 士林店',
    lat: 25.0945299,
    lng: 121.5262273,
  },
  {
    name: '濁水',
    lat: 25.0085475,
    lng: 121.4570862,
  },
  {
    name: 'Cactus Cafe 不限時插座免服務費咖啡廳、早午餐',
    lat: 25.0432454,
    lng: 121.5466826,
  },
  {
    name: '抹More',
    lat: 25.0256536,
    lng: 121.5103729,
  },
  {
    name: '這間咖啡',
    lat: 25.0318139,
    lng: 121.5447918,
  },
  {
    name: '未央咖啡店',
    lat: 25.0262375,
    lng: 121.5474209,
  },
  {
    name: '桃五咖啡',
    lat: 25.0298007,
    lng: 121.5404435,
  },
  {
    name: 'Vis cafe 圓山店',
    lat: 25.070564,
    lng: 121.5189387,
  },
  {
    name: '翌日咖啡店',
    lat: 25.0283112,
    lng: 121.529752,
  },
  {
    name: '象園咖啡內湖店',
    lat: 25.080771,
    lng: 121.5857379,
  },
  {
    name: '行路 Walk Cafe',
    lat: 25.0265013,
    lng: 121.5248283,
  },
  {
    name: '尖蚪',
    lat: 25.0104605,
    lng: 121.5318943,
  },
  {
    name: 'Her Rose 水果塔專賣店_咖啡 甜點 下午茶 輕食套餐 寵物友善',
    lat: 25.0562204,
    lng: 121.5202141,
  },
  {
    name: 'KINO KINO CAFE',
    lat: 25.0087695,
    lng: 121.4558813,
  },
  {
    name: 'Cafe Jia Song 咖央 | 吃整天的早午餐 · 東區秘境咖啡廳 · 下午茶',
    lat: 25.0430389,
    lng: 121.5463668,
  },
  {
    name: '漂夢島甜點',
    lat: 25.0650172,
    lng: 121.4574874,
  },
  {
    name: '硫磺 Sulfur｜咖啡｜奶昔｜美式療癒食物｜早午餐｜法國吐司｜寵物友善',
    lat: 25.0406509,
    lng: 121.5514033,
  },
  {
    name: 'Qm159 清琳咖啡',
    lat: 24.9346928,
    lng: 121.3673522,
  },
  {
    name: '街口6號珈啡（假日限3小時，入店後請保持輕聲交談*₊✦）',
    lat: 25.0392387,
    lng: 121.506757,
  },
  {
    name: '春秋書店',
    lat: 25.0549429,
    lng: 121.520184,
  },
  {
    name: '角公園咖啡 Triangle Garden Cafe',
    lat: 25.0530645,
    lng: 121.5161049,
  },
  {
    name: '河流咖啡 RIVER COFFEE',
    lat: 25.0818719,
    lng: 121.5894136,
  },
  {
    name: 'boven 雜誌圖書館',
    lat: 25.0441952,
    lng: 121.5451715,
  },
  {
    name: 'Congrats Café',
    lat: 25.0329519,
    lng: 121.5505806,
  },
  {
    name: 'A N G L E',
    lat: 25.0281566,
    lng: 121.5406744,
  },
  {
    name: '青菓 chinguo cafe',
    lat: 25.053603,
    lng: 121.5309399,
  },
  {
    name: 'Milk Bar by BKA',
    lat: 25.0525424,
    lng: 121.5457039,
  },
  {
    name: 'Ruins Coffee Roasters廢墟 湖村店',
    lat: 24.9882482,
    lng: 121.5789989,
  },
  {
    name: '京沺屋抹茶專門-西門店',
    lat: 25.0447955,
    lng: 121.5085574,
  },
  {
    name: 'iki',
    lat: 25.0554343,
    lng: 121.5196884,
  },
  {
    name: '木白甜點咖啡店',
    lat: 25.0455627,
    lng: 121.52511,
  },
  {
    name: 'Dr.Matcha SHOP',
    lat: 25.0363533,
    lng: 121.5564923,
  },
  {
    name: '京町山本屋｜Kyomachi Yamamotoya｜甜點＆日本家庭料理｜Japanese Tea House',
    lat: 25.0306066,
    lng: 121.5250975,
  },
  {
    name: '平安京茶事',
    lat: 25.0206513,
    lng: 121.527237,
  },
  {
    name: '魚目咖啡',
    lat: 25.0276031,
    lng: 121.5211632,
  },
  {
    name: '點二咖啡(公休日請看ig 精選限動，不接待超過四人、無插座、禁帶寵物）',
    lat: 25.0681271,
    lng: 121.5311919,
  },
  {
    name: '卜卜商店',
    lat: 25.0555443,
    lng: 121.5196804,
  },
  {
    name: 'Bethelight Coffee Roasters',
    lat: 25.0140059,
    lng: 121.4591225,
  },
  {
    name: 'YUYU pâtisserie',
    lat: 25.0154119,
    lng: 121.4608712,
  },
  {
    name: 'January Couple（一月夫婦）',
    lat: 25.0578204,
    lng: 121.5321066,
  },
  {
    name: 'Tiamomo 提拉摸摸',
    lat: 25.00721,
    lng: 121.5230766,
  },
  {
    name: 'NUKI coffee(營業時間請參閱FB或IG）',
    lat: 25.0228333,
    lng: 121.5245588,
  },
  {
    name: 'Green River Roastery',
    lat: 24.9641059,
    lng: 121.5370834,
  },
  {
    name: 'The Platypus Café',
    lat: 25.0717975,
    lng: 121.5781498,
  },
  {
    name: '德佈Debut Cafe 台北店',
    lat: 25.0466746,
    lng: 121.5319511,
  },
  {
    name: '4F劇場咖啡 古亭店 Theater café',
    lat: 25.0279927,
    lng: 121.520887,
  },
  {
    name: '父母 FUMU CAFE & BAR',
    lat: 25.0561454,
    lng: 121.5437022,
  },
  {
    name: '呷滴 Jia Dee',
    lat: 25.0286003,
    lng: 121.5616923,
  },
  {
    name: '棠棠 DonDonStudio',
    lat: 25.0438946,
    lng: 121.5471534,
  },
  {
    name: 'Half coffee',
    lat: 25.015986,
    lng: 121.532084,
  },
  {
    name: '別處咖啡 Away cafe',
    lat: 25.0169359,
    lng: 121.530442,
  },
  {
    name: '野餐咖啡',
    lat: 25.0203552,
    lng: 121.5330658,
  },
  {
    name: '羊跳蚤',
    lat: 25.0213577,
    lng: 121.5331471,
  },
  {
    name: '喜鵲咖啡（無訂位服務）',
    lat: 25.0209198,
    lng: 121.5316901,
  },
  {
    name: '沐沐家 mumujia （預約制優先｜IG、FB私訊訂位｜可現場候位）',
    lat: 25.0591675,
    lng: 121.5190076,
  },
  {
    name: '小春日和 動物雜貨‧珈琲',
    lat: 25.0566389,
    lng: 121.5587528,
  },
];

export { places };
