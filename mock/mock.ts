export default [
  {
    url: '/api/products',
    method: 'get',
    response: () => [
      {
        id: 1,
        name: '乌拉圭玫瑰桉',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: 'Eucalyptus grandis',
          grade: 'Premium Pruned',
          spec: 'SED 30+ CM, 5,80M with 20CM Free Trim',
        },
        slogan: '赤骨熔岩，千轧不摧',
        description:
          '熔岩般深红木纹凝固乌拉圭矿脉之魂，750kg/m³超密肌理承货轮集装箱重轧不裂。天然油脂渗作白蚁禁地，露天栈道暴晒十年反凝蜜蜡光泽。当压机轰鸣碾过地垛板，暗红纹理如凤凰涅槃，终成船厂龙骨与仓廪脊梁——这大地锻铸的赤铁之躯，纵使背负千吨光阴，脊骨依旧炽热如初。',
      },
      {
        id: 2,
        name: '云冷杉原木',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        parameter: {
          botanicalName: 'Picea abies',
          grade: 'Sawlog ABC',
          spec: '25cm+/11.5m plus 30cm free trim',
        },
        slogan: '霜骨擎天，寒魂立世',
        description:
          '阿尔卑斯雪线赋予通直银躯，450kg/m³轻质却蕴9000psi抗弯伟力。冰晶年轮如自然锻造的钢筋，预钻孔槽咬合螺栓稳固如冰川相嵌。当木构架托起机场弧形穹顶，风雪在桁架间奏响凛冽赞歌——这寒带淬炼的银色脊梁，终以一身霜骨，让人类建筑触摸云巅。',
      },
      {
        id: 3,
        name: '云杉锯材',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        parameter: {
          botanicalName: 'Picea abies',
          grade: 'SF I-IV',
          spec: 'customer cut size',
        },
        slogan: '天籁银筋，万器凝魂',
        description:
          '北欧寒光淬炼匀密银纹，每寸年轮皆是自然调音师。琴厂刨刀起落间，2800平米音乐厅共振出纯净D大调；飞机螺旋桨截取木之精魄，轻强纤维破云时震颤如竖琴低吟。从教堂穹顶肋拱到精密仪器内衬，这身披极光的冰雪银骨，终以无声之声，让人类造物携带森林的清澈魂灵。',
      },
      {
        id: 4,
        name: '南方松原木',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: '-',
          grade: '-',
          spec: '-',
        },
        slogan: '金筋镇海，万载擎涛',
        description:
          '密西西比烈日熔铸金黄血脉，纵直木筋如青铜巨缆贯穿髓心。万吨货轮系缆桩深扎海床，廿载咸雾侵蚀，钢索锈迹斑斑而松木愈发光亮。船厂巨斧劈开原木刹那，树脂金泪涌流如昔年阳光——这承袭上古龙骨的桀骜之躯，终以0.8%年衰减率的惊人定力，托起港口吊机的钢铁臂膀，将文明焊进惊涛不侵的黄金纪元。',
      },
      {
        id: 5,
        name: '南非松木',
        photos: ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpg', '5.jpg'],
        parameter: {
          botanicalName: 'Pinus Patula',
          grade: 'A30/K/KIS',
          spec: 'SED A30 30+ CM, K:20-28 CM, KIS:12-18CM',
        },
        slogan: '深淬金甲，精铸骨梁',
        description:
          '高压釜百小时注药淬炼，ACQ防腐剂浸透率突破95%，细胞孔道化作白蚁禁域。数控刨铣的几何棱线误差≤0.1mm，万吨物流仓螺栓孔位毫厘不差。当暴风雨撕扯混凝土码头，浸药松板材却随浪涛震颤如活肌——这经工厂锻铸的黄金甲胄，终以0.5%含水率定型的绝对忠顺，让体育馆60米木拱架精准落位，以现代文明的金属意志，重写雨林傲骨的工业诗章。',
      },
      {
        id: 6,
        name: '南非玫瑰桉',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        parameter: {
          botanicalName: 'Eucalyptus grandis',
          grade: 'Pruned',
          spec: 'SED 30+ CM, 5,80M with 10CM Free Trim',
        },
        slogan: '玫魄淬火，千韧开山',
        description:
          '克鲁格草原的野火熔炼暗红铁躯，750kg/m³密骨抗液压机千吨重轧不裂。天然桉树脑结成防腐金甲，矿山输煤槽板曝晒十年反凝铜锈光泽。当锯齿撕裂粗砺树皮，玫瑰纹路如岩浆奔涌——这浴火重生的荒原之魂，终以Janka硬度1200lbf的野蛮气魄，撑起深井矿架与货轮底舱，把非洲大地的桀骜血脉，铸成工业文明的赤铜勋章。',
      },
      {
        id: 7,
        name: '巴拿马柚木',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        parameter: {
          botanicalName: 'Tectona grandis',
          grade: 'Premium',
          spec: 'Girth 100cm+',
        },
        slogan: '海蚀成珀，浪琢生辉',
        description:
          '巴拿马运河咸风廿年沁润，23%天然油质凝作蜜蜡金甲，船厂甲板拼合时自生防水密封。烈日与海啸轮番拷打，柚木筋骨反吐琥珀光泽，游艇龙骨接缝十年不涨不裂。当老水手抚摸驾驶台包浆，掌纹与浪痕在木纹间交融——这以0.2%年收缩率蔑视沧溟的黄金之躯，终在暴风雨后闪烁出比新造时更骄纵的流金史诗。',
      },
      {
        id: 8,
        name: '日本柳杉',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: 'Cryptomeria japonica',
          grade: 'ABC',
          spec: 'SED 36+ CM',
        },
        slogan: '雾塑轻舟，万韧通途',
        description:
          '富士山雾霭滋养十五年速生银躯，0.34g/cm³轻骨却蕴惊人柔韧。当气干窑精准锁住0.12%含水率，百万电商包裹跨海越洋，榫卯相接的物流托架震颤如活体关节。新干线车厢底板承载时速320公里风压，柳杉年轮在共振中吟唱纪伊半岛的季风诗篇——这被精密算法驯服的云雾之子，终以千箱过手无裂痕的温柔坚定，将森林呼吸织入钢铁时代的血脉律动。',
      },
      {
        id: 9,
        name: '日本桧木',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        parameter: {
          botanicalName: 'Chamaecyparis obtusa',
          grade: 'AB',
          spec: 'SED 28+ CM',
        },
        slogan: '天香愈世，木魄回春',
        description:
          '日光深山四百年吞吐云雾，木质腺体凝炼0.06%日柏醇黄金精油。手术室吊顶细孔昼夜挥发抗菌因子，术后感染率骤降43%；温泉旅馆梁柱浸透蒸汽，类黄酮随氤氲治愈关节沉疴。当阿尔兹海默病房漫开冷冽柏香，失智老人指认木纹如触故园年轮——这被神社奉作通灵之躯的东方神木，终以分子级的生命密码，让冰冷建筑吐纳出穿越千年的愈疗呼吸。',
      },
      {
        id: 10,
        name: '榉木原木',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        parameter: {
          botanicalName: 'Fagus sylvatica',
          grade: 'Sawlog ABC; Peeling',
          spec: '40cm+/4m+',
        },
        slogan: '银骨千旋，玄纹立世',
        description:
          '阿尔卑斯风暴雕琢银灰铁躯，径向干缩率0.1%铸就千年定力。斧劈新材刹那，抛物状木纹如星云漩涡，旋切单板不离不裂。当古老城堡将榉木巨墩沉入地基，冰川重压下年轮反生玄黑豹纹——这拒绝向重力俯首的山岳精魂，终以1200kgf/cm²静曲强度的野性脊梁，托起大教堂旋转扶梯，在每道刀削斧凿的创痕里，刻写刚柔相济的欧陆史诗。',
      },
      {
        id: 11,
        name: '榉木锯材',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        parameter: {
          botanicalName: 'Fagus sylvatica',
          grade: 'A/AB/BC',
          spec: '26mm/32mm/38mm/50mm',
        },
        slogan: '玄豹旋宙，千切成器',
        description:
          '阿尔卑斯千年银躯经数控精铣，木射线幻化为玄豹斑纹，冷压拼板时隙缝≤0.05mm。弦切单板在钢琴侧板共振如雪山风啸，榫卯如星轨咬合承托柏林爱乐厅的巴赫狂想。当铣刀雕出32°倒角流光，断茬处显露水晶状结晶密网——这被莱茵匠魂驯化的雪山野性，终以128兆帕静曲强度的精确诗意，让每道切割轨迹都成为文明重写自然的钢印。',
      },
      {
        id: 12,
        name: '欧橡原木',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: 'Quercus alba/ Quercus robur',
          grade: 'Sawlog ABC/AB/BC',
          spec: '30cm+/4m+',
        },
        slogan: '虎纹鎏金，窖藏春秋',
        description:
          '莱茵河畔百年密林凝就虎斑金纹，0.85g/cm³密骨淬炼出葡萄酒窖的呼吸韵律。当木工凿开树芯刹那，星射线迸射如液态阳光，波尔多酒庄的橡木桶正吞吐单宁风暴。海船龙骨浸透咸雾廿载，木纹反凝青铜豹斑，慕尼黑宫殿拼花地板包浆如琥珀——这驮载欧陆文明的黄金经脉，终以0.1%干缩率的绝对忠贞，在时光窖藏中醒出跨越三个世纪的木质史诗。',
      },
      {
        id: 13,
        name: '欧橡锯材',
        photos: ['1.jpeg', '2.jpeg', '3.jpeg'],
        parameter: {
          botanicalName: 'Quercus alba',
          grade: 'AB/ABC',
          spec: '26mm/32mm/40mm/50mm',
        },
        slogan: '金纹凝宙，榫魄千年',
        description:
          '莱茵钢锯剖开百年密林虎斑金纹，0.85g/cm³密骨淬炼精密榫槽。数控铣刀雕琢0.05mm拼缝间隙，波尔多酒庄陈年酒桶弧板严丝合缝；凡尔赛宫拼花地板块如星轨咬合，拿破仑军靴踏百年未现凹痕。当慕尼黑匠人抹去最后一粒木屑，虎斑木髓在斜阳下奔涌液态鎏金——这被文明雕凿的欧陆金脉，终以0.1%干缩率的绝对忠贞，在钢锯与年轮的博弈中，淬炼出跨越世纪的传世密约。',
      },
      {
        id: 14,
        name: '欧洲红橡',
        photos: ['1.png', '2.png', '3.png'],
        parameter: {
          botanicalName: 'Quercus rubra',
          grade: 'Sawlog ABC',
          spec: '30cm+/4m+',
        },
        slogan: '赤脉凝晖，淬锋千年',
        description:
          '莱茵河雾霭浸染百年木髓，剖开0.77g/cm³密骨赤霞流金。凡尔赛宫匠人以青铜雕刀镂刻0.3mm星轨拼花，拿破仑军靴踏百年未留凹痕；波尔多酒窖中单宁风暴撞击白橡木桶，而红橡以无浸填体的敞阔脉管，吞吐北欧极简风橱柜的呼吸韵律。当数控铣刀削出山形纹的现代诗篇，这驮载欧陆文明的赤色血脉，终在简素留白的空间里，淬炼出木性与锋芒的千年密契。',
      },
      {
        id: 15,
        name: '欧蜡原木',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: 'Fraxinus excelsior',
          grade: 'Sawlog ABC & AB',
          spec: '30cm+/2.8m+',
        },
        slogan: '银脉山魄，万曲归真',
        description:
          '阿尔卑斯西风雕琢银灰密骨，0.72g/cm³肌理蕴藏千道山形水影。当蒸汽注入百年木髓，曲木机械咬合出完美π弧，奔驰S级内饰板在72小时冷压中涅槃重生。米兰家具展的悬空书案如冻瀑飞泻，木纹在数控灯光下奔涌成银灰色诗行——这被钢钳驯服的山岳之灵，终以±0.8mm曲度误差的绝对忠顺，让自然野性在人类掌心蜿蜒成理性的温柔史诗。',
      },
      {
        id: 16,
        name: '欧蜡锯材',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: '-',
          grade: '-',
          spec: '-',
        },
        slogan: '银脉塑形，万曲凝光',
        description:
          '阿尔卑斯千年银躯经数控精铣，弦切山纹如冻湖冰裂漫射冷冽流光。奔驰S级仪表板在-30℃环境舱中保持±0.05mm拼缝，榫卯咬合处泛起银河碎钻；米兰悬空书桌弧面承载百公斤典籍，山形木纹在负角度弯折后仍迸发阿尔卑斯晨雾。当激光切割机雕出π/2曲率的神性弧光，这被理性驯化的野性之诗，终以72小时冷压定型的绝对忠贞，让每道工业伤痕都成为自然献给文明的银色勋章。',
      },
      {
        id: 17,
        name: '白蜡原木',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        parameter: {
          botanicalName: 'Fraxinus americana',
          grade: 'Sawlog: 2sc+; Veneer log: 3sc & 4sc',
          spec: "Sawlog: 10''+/8'+. Veneer log:13''+/8'+",
        },
        slogan: '素山凝骨，万韧承激',
        description:
          '北美雪暴塑就银灰铁躯，山形木纹如冻瀑奔流，Janka硬度1450lbf的密骨淬炼千次锤击不裂。车床飞旋剖开树芯刹那，橄榄球头盔弧板在蒸汽中弯折出完美π角；曲棍球杆劈裂空气，山核桃色的木髓爆出冰裂脆响。当冰球场灯照亮满身凹痕的护板，这驮载人类原始竞技之魂的沉默脊梁，终在暴力美学的风暴中心，撑起骨骼与钢铁碰撞的生命史诗。',
      },
      {
        id: 18,
        name: '白蜡锯材',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: 'Fraxinus americana',
          grade: 'FAS/#1C/#2C',
          spec: '4/4,5/4,6/4,8/4',
        },
        slogan: '雪线弯虹，硬骨啸风',
        description:
          '北美极寒凝铸银骨，蒸汽曲压幻化流云弧线。冰球重击炸开星裂山纹，护板凹痕深嵌战勋如史；武士棍风劈月，木啸声里唤醒千年雪魄。奔驰内舱冷光漫溢，弯弧榫眼暗合毫米契约——这浴火重生的刚柔之灵，终以百压成器的沉默忠贞，在暴力与理性的刀锋上，跳一曲银甲冰刃的共生之舞。',
      },
      {
        id: 19,
        name: '红橡原木',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
        parameter: {
          botanicalName: 'Quercus rubra',
          grade: 'Sawlog: 2sc+; Veneer log: 3sc & 4sc',
          spec: "Sawlog: 12''+/8'+. Veneer log:13''+/8'+",
        },
        slogan: '金斑淬日，海魄凝魂',
        description:
          '阿巴拉契亚的烈日熔炼木髓金斑，粗犷髓线在剖料瞬间喷涌如熔岩。波尔多酒窖里单宁渗入木脉搏动，酒香随年轮沉淀成琥珀秘语；战舰龙骨沉入咸雾，浪花啃食木躯却淬出青铜鳞甲。当船匠抚摸甲板上的弹痕与盐霜，百年红橡只是低语——陆地骄阳与深海寒潮的千年角力，早将胜负刻进每一寸呼吸的血脉。',
      },
      {
        id: 20,
        name: '红橡锯材',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'],
        parameter: {
          botanicalName: 'Quercus rubra',
          grade: 'FAS/#1C/#2C',
          spec: '4/4,5/4,6/4,8/4',
        },
        slogan: '金轨裁天，榫魄镇宙',
        description:
          '数控锯台剖开阿巴拉契亚的熔金虎斑，山形木纹在刀锋下奔涌成精密轨道。战舰甲板拼缝咬合海风咸雾，0.05mm隙间藏下半个世纪的潮汐涨落；百年酒窖弧板承托单宁风暴，1600MPa胶合力锁住时光的每一次醉意颠簸。当月光漫过教堂穹顶的星斗榫眼，这被工业理性驯服的陆地骄阳，终在钢锯与年轮的博弈场，将每道伤痕锻成向岁月宣战的契约血契',
      },
      {
        id: 21,
        name: '花旗松原木',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: 'Pseudotsuga menziesii',
          grade: 'Sawlog ABC',
          spec: '-',
        },
        slogan: '金甲裹岳，弦擎苍脉',
        description:
          '落基山巅冰风淬炼天然金胄，松脂沁透百年年轮凝成防蚀盔甲。钢锯破开树心刹那，树脂冷香裹挟雪气迸发，5万吨悬索桥墩木在狂风中震动如大地竖琴。当地震波撕裂岩层，木纤维饱和点将冲击能化为热能消散——这披挂半世纪松脂金甲的雪山卫士，以0.53g/cm³轻韧密骨擎起人类向苍穹索高的重力诗篇。',
      },
      {
        id: 22,
        name: '黑胡桃原木',
        photos: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
        parameter: {
          botanicalName: 'Juglans nigra',
          grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
          spec: "0-1sc:10''+/7'+,2/3sc 12''+/8'+. Veneer log:13''+/8'+",
        },
        slogan: '金甲裹岳，桁弦擎穹',
        description:
          '落基山脉的雪刃雕琢金色骨甲，树脂浸透年轮凝成天然盔胄。剖木机撕裂树干刹那，松香裹挟冷杉气息炸裂，5万吨钢桁吊桥的墩木在风雪中震动如竖琴粗弦。当地震波撕扯混凝土基座，原木深扎岩层的根系反爆出春雷闷响——这身披半世纪松脂金甲的雪山武士，终以0.53g/cm³的轻韧铁骨，把荒野的暴烈基因，谱作人类向苍穹索求高度的重力史诗。',
      },
      {
        id: 23,
        name: '黑胡桃锯材',
        photos: ['1.jpg', '2.jpg', '3.jpg'],
        parameter: {
          botanicalName: 'Juglans nigra',
          grade: 'FAS/#1C/#2C',
          spec: '4/4,5/4,6/4,8/4',
        },
        slogan: '玄穹裁星，弦魄纳雷',
        description:
          '数控刨光驯服百年雷霆，巧克力木纹在精密刀轨下延展成星河流转。提琴师以弦切背板捕捉70%声导率共振，F孔炸裂的密林惊雷惊醒沉睡音魂；美术馆长桌倒映穹顶碎光，深色肌理吞噬杂尘如黑洞噬光。当枪械师擦去握把上的硝烟余烬，战争血性与艺术诗性早已淬入同一道虎纹——这被文明驯化的暴烈之魂，终以0.01mm拼缝精度的绝对秩序，将暴力基因重铸为银河可触的沉默诗章。',
      },
    ],
  },
  {
    url: '/api/newsLastUpdate',
    method: 'get',
    response: () => '2025-07-20T08:53:47.415Z',
  },
  {
    url: '/api/category',
    method: 'get',
    response: () => [
      {
        key: 'category-1',
        label: '北美原木',
        children: [
          {
            key: 22,
            label: '黑胡桃原木',
          },
          {
            key: 17,
            label: '白蜡原木',
          },
          {
            key: 19,
            label: '红橡原木',
          },
        ],
      },
      {
        key: 'category-2',
        label: '北美锯材',
        children: [
          {
            key: 20,
            label: '红橡锯材',
          },
          {
            key: 23,
            label: '黑胡桃锯材',
          },
          {
            key: 18,
            label: '白蜡锯材',
          },
        ],
      },
      {
        key: 'category-3',
        label: '欧洲原木',
        children: [
          {
            key: 10,
            label: '榉木原木',
          },
          {
            key: 15,
            label: '欧蜡原木',
          },
          {
            key: 12,
            label: '欧橡原木',
          },
          {
            key: 14,
            label: '欧洲红橡',
          },
          {
            key: 21,
            label: '花旗松原木',
          },
          {
            key: 2,
            label: '云冷杉原木',
          },
        ],
      },
      {
        key: 'category-4',
        label: '欧洲锯材',
        children: [
          {
            key: 11,
            label: '榉木锯材',
          },
          {
            key: 13,
            label: '欧橡锯材',
          },
          {
            key: 18,
            label: '白蜡锯材',
          },
          {
            key: 3,
            label: '云杉锯材',
          },
        ],
      },
      {
        key: 'category-5',
        label: '其他原木',
        children: [
          {
            key: 6,
            label: '南非玫瑰桉',
          },
          {
            key: 1,
            label: '乌拉圭玫瑰桉',
          },
          {
            key: 5,
            label: '南非松木',
          },
          {
            key: 7,
            label: '巴拿马柚木',
          },
          {
            key: 8,
            label: '日本柳杉',
          },
          {
            key: 9,
            label: '日本桧木',
          },
        ],
      },
    ],
  },
  // {
  //   url: '/api/search',
  //   method: 'get',
  //   response: () => [
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'Sawlog: 0-1sc,2sc, 3sc; Veneer log: 3sc & 4sc',
  //       id: 22,
  //       name: '黑胡桃原木',
  //     },
  //     {
  //       botanicalName: 'Juglans nigra',
  //       grade: 'FAS/#1C/#2C',
  //       id: 23,
  //       name: '黑胡桃锯材',
  //     },
  //   ],
  // },
]
