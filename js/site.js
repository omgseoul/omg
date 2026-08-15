const BOOKING_URLS = Object.freeze({
  seoul: 'https://beds24.com/booking2.php?propid=257061',
  jongno: 'https://beds24.com/booking2.php?propid=263294',
  hongdae: 'https://beds24.com/booking2.php?propid=263281',
  myeongdong: 'https://beds24.com/booking2.php?propid=329251'
});

const translations = {
  en: {
    meta:{homeTitle:'OMG SEOUL | Your place in Seoul', propertyTitle:'{name} | OMG SEOUL'},
    hero:{eyebrow:'YOUR PLACE IN SEOUL',title:'Make today in Seoul<br><em>feel like home.</em>',lead:'Choose a neighborhood you love,<br>and let your comfortable Seoul stay begin.',visualAria:'A sunlit OMG SEOUL room illustration'},
    locations:{eyebrow:'OUR LOCATIONS',title:'Where will you<br>stay in Seoul?',description:'From connected Seoul Station and historic Jongno<br>to lively Hongdae and central Myeongdong.'},
    actions:{view:'View Property',book:'Book Now'},
    about:{title:'At home,<br>even away from home',description:'Great locations, thoughtful essentials and uplifting design—everything you need to enjoy Seoul.',locations:'SEOUL LOCATIONS',support:'GUEST SUPPORT',local:'LOCAL EXPERIENCE'},
    map:{aria:'Stylized Seoul map showing four OMG SEOUL properties',caption:'FOUR NEIGHBORHOODS · ONE SEOUL',seoul:'Seoul Station',hongdae:'Hongdae Station',jonggak:'Jonggak Station',myeongdong:'Myeongdong Station'},
    footer:{tagline:'Where your best Seoul moments begin',copyright:'© 2026 OMG SEOUL. All rights reserved.'},
    property:{home:'Home',other:'Other properties',galleryAria:'Room photo gallery',heroPhoto:'FEATURED ROOM',photo2:'ROOM 02',photo3:'ROOM 03',aboutEyebrow:'ABOUT THE STAY',aboutTitle:'About this stay',aboutExtra:'Rest easy with thoughtful essentials and a well-kept room.',roomTitle:'Room · Guests',bedding:'Bedding · Private bathroom',amenitiesTitle:'Amenities',amenities:['Free Wi-Fi','Coffee & tea','Heating & A/C','Hot shower','Smart TV','Toiletries'],timeTitle:'Check-in · Check-out',checkIn:'CHECK-IN',checkOut:'CHECK-OUT',after:'After 3:00 PM',before:'Before 11:00 AM',arrival:'Self check-in details are sent by message on arrival day.',location:'Location',mapAria:'Approximate property location',mapNote:'Near the station',bookEyebrow:'BOOK YOUR STAY',bookTitle:'Book {name}',bookCopy:'Check live availability and rates securely on Beds24.',bookNote:'The Beds24 booking page opens in a new tab.'},
    properties:{
      seoul:{name:'Seoul Nest',area:'Seoul Station',code:'SEOUL STATION',tagline:'A restful beginning and end to every journey',description:'Stay close to Seoul Station for effortless connections and a calm place to recharge.',room:'Standard Double',guests:'2 guests'},
      jongno:{name:'One Minute Guesthouse',area:'Jongno',code:'JONGNO',tagline:'Old Seoul, right outside your door',description:'Discover palaces, hanok lanes and independent shops from the historic heart of Jongno.',room:'Deluxe Twin',guests:'2–3 guests'},
      hongdae:{name:'OMG House',area:'Hongdae',code:'HONGDAE',tagline:'Your base for Seoul’s creative energy',description:'Step into Hongdae’s music, art and dining scene, then return to your own relaxed space.',room:'Family Studio',guests:'3–4 guests'},
      myeongdong:{name:'Lazybear',area:'Myeongdong',code:'MYEONGDONG',tagline:'Room to relax in the center of Seoul',description:'Put shopping, dining and Namsan within easy reach from the heart of Myeongdong.',room:'Superior Double',guests:'2 guests'}
    }
  },
  ko: {
    meta:{homeTitle:'OMG SEOUL | 서울에서 만나는 나만의 스테이',propertyTitle:'{name} | OMG SEOUL'},hero:{eyebrow:'YOUR PLACE IN SEOUL',title:'서울의 오늘을<br><em>가장 편안하게.</em>',lead:'취향에 맞는 동네를 고르면,<br>편안한 서울의 하루가 시작됩니다.',visualAria:'햇살이 드는 OMG SEOUL 객실 일러스트'},locations:{eyebrow:'OUR LOCATIONS',title:'어느 서울에<br>머물러 볼까요?',description:'교통이 편리한 서울역과 오래된 골목의 종로,<br>활기찬 홍대와 쇼핑의 중심 명동까지.'},actions:{view:'숙소 보기',book:'예약하기'},about:{title:'낯선 도시에서도<br>내 집처럼 편안하게',description:'좋은 위치와 꼭 필요한 편의, 기분 좋은 디자인으로 서울을 온전히 즐기는 시간을 만듭니다.',locations:'서울 지점',support:'고객 지원',local:'로컬 경험'},map:{aria:'OMG SEOUL 네 숙소를 표시한 서울 안내 지도',caption:'네 개의 동네 · 하나의 서울',seoul:'서울역',hongdae:'홍대입구역',jonggak:'종각역',myeongdong:'명동역'},footer:{tagline:'서울의 좋은 순간이 시작되는 곳',copyright:'© 2026 OMG SEOUL. 모든 권리 보유.'},property:{home:'홈',other:'다른 지점',galleryAria:'객실 사진 영역',heroPhoto:'객실 대표 사진',photo2:'객실 사진 02',photo3:'객실 사진 03',aboutEyebrow:'ABOUT THE STAY',aboutTitle:'숙소 소개',aboutExtra:'꼭 필요한 편의와 정돈된 객실에서 편안히 쉬어가세요.',roomTitle:'객실 · 인원',bedding:'침구 · 독립 욕실',amenitiesTitle:'주요 편의시설',amenities:['무료 Wi-Fi','커피 & 티','냉난방','온수 샤워','스마트 TV','어메니티'],timeTitle:'체크인 · 체크아웃',checkIn:'체크인',checkOut:'체크아웃',after:'15:00 이후',before:'11:00 이전',arrival:'비대면 입실 안내는 당일 메시지로 보내드립니다.',location:'위치',mapAria:'숙소의 대략적인 위치',mapNote:'역 인근',bookEyebrow:'BOOK YOUR STAY',bookTitle:'{name} 예약',bookCopy:'Beds24에서 실시간 객실과 요금을 확인하세요.',bookNote:'Beds24 예약 페이지가 새 탭에서 열립니다.'},properties:{seoul:{name:'Seoul Nest',area:'서울역',code:'SEOUL STATION',tagline:'여행의 시작과 끝이 가장 편안하도록',description:'서울 어디든 빠르게 이어지는 서울역 인근에서 설렘과 편안한 휴식을 모두 누려보세요.',room:'스탠다드 더블',guests:'2인'},jongno:{name:'One Minute Guesthouse',area:'종로',code:'JONGNO',tagline:'오래된 서울의 시간을 가까이에서',description:'고궁과 한옥 골목, 감각적인 가게가 공존하는 종로에서 서울의 매력을 발견해 보세요.',room:'디럭스 트윈',guests:'2–3인'},hongdae:{name:'OMG House',area:'홍대',code:'HONGDAE',tagline:'도시의 에너지를 즐기는 가장 좋은 방법',description:'음악과 예술, 다채로운 맛이 이어지는 홍대 중심에서 자유로운 여행을 시작하세요.',room:'패밀리 스튜디오',guests:'3–4인'},myeongdong:{name:'Lazybear',area:'명동',code:'MYEONGDONG',tagline:'서울의 중심에서 누리는 여유',description:'쇼핑과 미식, 남산의 풍경까지 걸어서 만나는 명동에서 알찬 서울 여행을 완성하세요.',room:'슈페리어 더블',guests:'2인'}}
  },
  ja: {
    meta:{homeTitle:'OMG SEOUL | ソウルの心地よい滞在',propertyTitle:'{name} | OMG SEOUL'},hero:{eyebrow:'YOUR PLACE IN SEOUL',title:'今日のソウルを<br><em>心地よく。</em>',lead:'お気に入りの街を選んだら、<br>心地よいソウル滞在の始まりです。',visualAria:'陽ざしが差し込むOMG SEOULの客室イラスト'},locations:{eyebrow:'OUR LOCATIONS',title:'ソウルのどこに<br>泊まりますか？',description:'アクセス便利なソウル駅、歴史ある鍾路、<br>活気あふれる弘大、中心地の明洞へ。'},actions:{view:'施設を見る',book:'予約する'},about:{title:'旅先でも<br>わが家のように',description:'好立地、必要な設備、心地よいデザイン。ソウルを満喫するための滞在をお届けします。',locations:'ソウルの施設',support:'ゲストサポート',local:'ローカル体験'},map:{aria:'OMG SEOULの4施設を示すソウル案内図',caption:'4つの街 · ひとつのソウル',seoul:'ソウル駅',hongdae:'弘大入口駅',jonggak:'鐘閣駅',myeongdong:'明洞駅'},footer:{tagline:'ソウルの素敵な時間が始まる場所',copyright:'© 2026 OMG SEOUL. All rights reserved.'},property:{home:'ホーム',other:'ほかの施設',galleryAria:'客室フォトギャラリー',heroPhoto:'メイン客室',photo2:'客室 02',photo3:'客室 03',aboutEyebrow:'ABOUT THE STAY',aboutTitle:'施設について',aboutExtra:'必要な設備が揃った清潔な客室で、ゆっくりお休みください。',roomTitle:'客室 · 定員',bedding:'寝具 · 専用バスルーム',amenitiesTitle:'設備・アメニティ',amenities:['無料Wi-Fi','コーヒー・紅茶','冷暖房','温水シャワー','スマートTV','バスアメニティ'],timeTitle:'チェックイン・アウト',checkIn:'チェックイン',checkOut:'チェックアウト',after:'15:00以降',before:'11:00まで',arrival:'セルフチェックインのご案内は当日メッセージでお送りします。',location:'ロケーション',mapAria:'施設のおおよその位置',mapNote:'駅周辺',bookEyebrow:'BOOK YOUR STAY',bookTitle:'{name}を予約',bookCopy:'Beds24で空室状況と料金をリアルタイムにご確認ください。',bookNote:'Beds24の予約ページが新しいタブで開きます。'},properties:{seoul:{name:'Seoul Nest',area:'ソウル駅',code:'SEOUL STATION',tagline:'旅の始まりと終わりを心地よく',description:'各地へアクセスしやすいソウル駅近くで、旅の高揚感と安らぎをお楽しみください。',room:'スタンダードダブル',guests:'定員2名'},jongno:{name:'One Minute Guesthouse',area:'鍾路',code:'JONGNO',tagline:'古きソウルをすぐそばに',description:'宮殿や韓屋の路地、個性豊かな店が共存する鍾路で、ソウルの魅力を発見してください。',room:'デラックスツイン',guests:'定員2～3名'},hongdae:{name:'OMG House',area:'弘大',code:'HONGDAE',tagline:'街のエネルギーを楽しむ拠点',description:'音楽、アート、グルメが集まる弘大の中心で、自由な旅を始めましょう。',room:'ファミリースタジオ',guests:'定員3～4名'},myeongdong:{name:'Lazybear',area:'明洞',code:'MYEONGDONG',tagline:'ソウルの中心でくつろぐ',description:'ショッピング、グルメ、南山まで徒歩で楽しめる明洞で、充実した旅を。',room:'スーペリアダブル',guests:'定員2名'}}
  },
  zh: {
    meta:{homeTitle:'OMG SEOUL | 首尔舒适住宿',propertyTitle:'{name} | OMG SEOUL'},hero:{eyebrow:'YOUR PLACE IN SEOUL',title:'在首尔的每一天<br><em>都自在如家。</em>',lead:'选一处喜爱的街区，<br>开启舒适惬意的首尔之旅。',visualAria:'阳光洒入OMG SEOUL客房的插画'},locations:{eyebrow:'OUR LOCATIONS',title:'这次住在<br>首尔哪里？',description:'从交通便利的首尔站、古韵钟路，<br>到活力弘大和中心明洞。'},actions:{view:'查看住宿',book:'立即预订'},about:{title:'身在旅途<br>自在如家',description:'优越位置、贴心设施与舒适设计，为你打造尽享首尔的美好住宿时光。',locations:'首尔住宿',support:'住客服务',local:'在地体验'},map:{aria:'标示OMG SEOUL四处住宿的首尔导览图',caption:'四个街区 · 一座首尔',seoul:'首尔站',hongdae:'弘大入口站',jonggak:'钟阁站',myeongdong:'明洞站'},footer:{tagline:'美好首尔时光开始的地方',copyright:'© 2026 OMG SEOUL. 版权所有。'},property:{home:'首页',other:'其他住宿',galleryAria:'客房图片',heroPhoto:'客房主图',photo2:'客房 02',photo3:'客房 03',aboutEyebrow:'ABOUT THE STAY',aboutTitle:'住宿介绍',aboutExtra:'在设施齐全、整洁舒适的客房里安心休息。',roomTitle:'客房 · 人数',bedding:'寝具 · 独立浴室',amenitiesTitle:'主要设施',amenities:['免费 Wi-Fi','咖啡与茶','冷暖空调','热水淋浴','智能电视','洗护用品'],timeTitle:'入住 · 退房',checkIn:'入住',checkOut:'退房',after:'15:00 后',before:'11:00 前',arrival:'自助入住说明将在入住当天通过消息发送。',location:'位置',mapAria:'住宿大致位置',mapNote:'车站附近',bookEyebrow:'BOOK YOUR STAY',bookTitle:'预订{name}',bookCopy:'请前往Beds24实时查看空房与价格。',bookNote:'Beds24预订页面将在新标签页中打开。'},properties:{seoul:{name:'Seoul Nest',area:'首尔站',code:'SEOUL STATION',tagline:'让旅程的起点与终点都舒适从容',description:'入住交通便捷的首尔站附近，轻松前往各处，也能惬意休息。',room:'标准双人房',guests:'2位'},jongno:{name:'One Minute Guesthouse',area:'钟路',code:'JONGNO',tagline:'近距离感受首尔旧时光',description:'在宫殿、韩屋小巷与特色小店交融的钟路，慢慢发现首尔魅力。',room:'豪华双床房',guests:'2–3位'},hongdae:{name:'OMG House',area:'弘大',code:'HONGDAE',tagline:'感受城市活力的理想据点',description:'在音乐、艺术与美食昼夜不息的弘大中心，开启自在旅程。',room:'家庭开间',guests:'3–4位'},myeongdong:{name:'Lazybear',area:'明洞',code:'MYEONGDONG',tagline:'在首尔中心悠然休憩',description:'从明洞步行探索购物、美食与南山风光，充实你的首尔旅程。',room:'高级双人房',guests:'2位'}}
  }
};

const languageOptions = [{id:'en',label:'🇺🇸 EN'},{id:'ko',label:'🇰🇷 한'},{id:'ja',label:'🇯🇵 日'},{id:'zh',label:'🇨🇳 中'}];
let currentLanguage = localStorage.getItem('omgSeoulLanguage');
if (!translations[currentLanguage]) currentLanguage = 'en';
const get = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
const format = (text, values={}) => text.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');

function languagePicker() {
  return `<span class="language-label" aria-hidden="true">◎ Language</span><select aria-label="Select language">${languageOptions.map(({id,label}) => `<option value="${id}"${id === currentLanguage ? ' selected' : ''}>${label}</option>`).join('')}</select>`;
}

function propertyTemplate(p, common, key) {
  const amenityIcons = ['⌁','☕','❄','♨','▣','✦'];
  return `<header class="site-header"><a class="brand" href="index.html" aria-label="OMG SEOUL home"><span>OMG</span> SEOUL</a><div class="language-picker" data-language-picker>${languagePicker()}</div></header>
  <main><section class="property-hero"><p class="breadcrumb"><a href="index.html">${common.home}</a><span>·</span>${p.area}</p><h1 class="property-title"><small>${p.code}</small>${p.name}</h1><div class="property-subtitle"><h2>${p.tagline}</h2><p>${p.description}</p></div></section>
  <section class="property-gallery" aria-label="${common.galleryAria}"><div class="photo-placeholder property-${key}"><span>${common.heroPhoto}</span></div><div class="photo-placeholder"><span>${common.photo2}</span></div><div class="photo-placeholder"><span>${common.photo3}</span></div></section>
  <div class="property-content"><div><section class="info-section stay-intro"><p class="eyebrow">${common.aboutEyebrow}</p><h2>${common.aboutTitle}</h2><p>${p.description} ${common.aboutExtra}</p></section>
  <section class="info-section"><h2>${common.roomTitle}</h2><div class="room-card"><div><strong>${p.room}</strong><span>${common.bedding}</span></div><strong>${p.guests}</strong></div></section>
  <section class="info-section"><h2>${common.amenitiesTitle}</h2><ul class="amenities">${common.amenities.map((item,index)=>`<li><b>${amenityIcons[index]}</b>${item}</li>`).join('')}</ul></section>
  <section class="info-section"><h2>${common.timeTitle}</h2><div class="time-grid"><div><span>${common.checkIn}</span><strong>${common.after}</strong></div><div><span>${common.checkOut}</span><strong>${common.before}</strong></div></div><p>${common.arrival}</p></section>
  <section class="info-section"><h2>${common.location}</h2><p>${p.area}</p><div class="map" aria-label="${common.mapAria}"><div class="pin"></div><span>${common.mapNote}</span></div></section></div>
  <aside class="booking-card" id="booking"><p class="eyebrow">${common.bookEyebrow}</p><h2>${format(common.bookTitle,p)}</h2><p>${common.bookCopy}</p><a class="button booking-button" href="${BOOKING_URLS[key]}" target="_blank" rel="noopener noreferrer">${translations[currentLanguage].actions.book} →</a><div class="booking-meta">${common.bookNote}</div></aside></div></main>
  <footer><a class="brand" href="index.html"><span>OMG</span> SEOUL</a><p>${translations[currentLanguage].footer.tagline}</p><small>${translations[currentLanguage].footer.copyright}</small></footer>`;
}

function render() {
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : currentLanguage;
  const app = document.querySelector('#property-app');
  if (app) {
    const key = document.body.dataset.property;
    const property = dictionary.properties[key];
    app.innerHTML = propertyTemplate(property, dictionary.property, key);
    document.title = format(dictionary.meta.propertyTitle, property);
  } else {
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = get(dictionary, element.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(element => { element.innerHTML = get(dictionary, element.dataset.i18nHtml); });
    document.querySelectorAll('[data-i18n-aria]').forEach(element => { element.setAttribute('aria-label', get(dictionary, element.dataset.i18nAria)); });
    document.title = dictionary.meta.homeTitle;
    document.querySelectorAll('[data-language-picker]').forEach(element => { element.innerHTML = languagePicker(); });
  }
  document.querySelectorAll('[data-language-picker] select').forEach(select => select.addEventListener('change', event => {
    currentLanguage = event.target.value;
    localStorage.setItem('omgSeoulLanguage', currentLanguage);
    render();
  }));
}

render();
