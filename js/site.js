const properties = {
  seoul: { name: '서울역점', english: 'SEOUL STATION', area: '서울역', tagline: '서울의 시작과 끝이 가장 편안하도록', description: '서울 어디든 빠르게 이어지는 서울역 인근에서 여행의 설렘과 편안한 휴식을 모두 누려보세요.', room: '스탠다드 더블', guests: '기준 2인 · 최대 2인', address: '서울특별시 용산구 서울역 인근', accent: '#abc8b8', bookingUrl: '' },
  jongno: { name: '종로점', english: 'JONGNO', area: '종로', tagline: '오래된 서울의 시간을 가까이에서', description: '고궁과 한옥 골목, 감각적인 가게가 공존하는 종로에서 천천히 서울의 매력을 발견해 보세요.', room: '디럭스 트윈', guests: '기준 2인 · 최대 3인', address: '서울특별시 종로구 종로 인근', accent: '#e8c6ad', bookingUrl: '' },
  hongdae: { name: '홍대점', english: 'HONGDAE', area: '홍대', tagline: '도시의 에너지를 즐기는 가장 좋은 방법', description: '음악과 예술, 다채로운 맛이 밤낮없이 이어지는 홍대 중심에서 자유로운 여행을 시작하세요.', room: '패밀리 스튜디오', guests: '기준 3인 · 최대 4인', address: '서울특별시 마포구 홍대입구역 인근', accent: '#d8e681', bookingUrl: '' },
  myeongdong: { name: '명동점', english: 'MYEONGDONG', area: '명동', tagline: '서울의 중심에서 누리는 여유', description: '쇼핑과 미식, 남산의 풍경까지 도보로 만나는 명동에서 알찬 서울 여행을 완성해 보세요.', room: '슈페리어 더블', guests: '기준 2인 · 최대 2인', address: '서울특별시 중구 명동역 인근', accent: '#b7bdd7', bookingUrl: '' }
};

function propertyTemplate(p) {
  return `<header class="site-header"><a class="brand" href="index.html" aria-label="OMG SEOUL 홈"><span>OMG</span> SEOUL</a><nav aria-label="주요 메뉴"><a href="index.html#locations">다른 지점</a><a href="#booking">예약 안내</a></nav></header>
  <main><section class="property-hero"><p class="breadcrumb"><a href="index.html">홈</a><span>·</span>${p.area}</p><h1 class="property-title"><small>${p.english}</small>${p.name}</h1><div class="property-subtitle"><h2>${p.tagline}</h2><p>${p.description}</p></div></section>
  <section class="property-gallery" aria-label="객실 사진 영역" style="--accent:${p.accent}"><div class="photo-placeholder" style="background:linear-gradient(145deg,${p.accent},#e8e0ce)"><span>객실 대표 사진</span></div><div class="photo-placeholder" style="background:${p.accent}"><span>객실 사진 02</span></div><div class="photo-placeholder"><span>객실 사진 03</span></div></section>
  <div class="property-content"><div>
    <section class="info-section"><p class="eyebrow">ABOUT THE STAY</p><h2>숙소 소개</h2><p>${p.description} 정돈된 객실과 세심하게 준비된 편의시설로 여행 중에도 온전한 쉼을 경험할 수 있습니다.</p></section>
    <section class="info-section"><h2>객실 종류와 기준 인원</h2><div class="room-card"><div><strong>${p.room}</strong><span>편안한 침구와 독립 욕실을 갖춘 객실</span></div><strong>${p.guests}</strong></div></section>
    <section class="info-section"><h2>주요 편의시설</h2><ul class="amenities"><li><b>⌁</b>무료 Wi-Fi</li><li><b>☕</b>커피 & 티</li><li><b>❄</b>냉난방</li><li><b>♨</b>온수 샤워</li><li><b>▣</b>스마트 TV</li><li><b>✦</b>어메니티</li></ul></section>
    <section class="info-section"><h2>체크인 · 체크아웃</h2><div class="time-grid"><div><span>CHECK-IN</span><strong>15:00 이후</strong></div><div><span>CHECK-OUT</span><strong>11:00 이전</strong></div></div><p>비대면 체크인 안내는 입실 당일 메시지로 보내드립니다.</p></section>
    <section class="info-section"><h2>위치</h2><p>${p.address}</p><div class="map" aria-label="지도 준비 영역"><div class="pin"></div><span style="position:absolute;bottom:20px;z-index:2">상세 지도 준비 중</span></div></section>
  </div><aside class="booking-card" id="booking"><p class="eyebrow">BOOK YOUR STAY</p><h2>${p.name}에서<br>머물러 보세요</h2><p>예약 가능 여부와 요금 확인 기능을 준비하고 있습니다.</p><button class="button booking-button" type="button" data-booking-url="${p.bookingUrl}">예약하기 →</button><p class="booking-note" role="status">예약 시스템 준비 중</p><div class="booking-meta">Beds24 예약 링크 또는 위젯 연결 예정<br>문의가 필요하시면 잠시만 기다려 주세요.</div></aside></div></main>
  <footer><a class="brand" href="index.html"><span>OMG</span> SEOUL</a><p>서울의 좋은 순간이 시작되는 곳</p><small>© 2026 OMG SEOUL.</small></footer>`;
}

const app = document.querySelector('#property-app');
if (app) {
  const property = properties[document.body.dataset.property];
  if (property) app.innerHTML = propertyTemplate(property);
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.booking-button');
  if (!button) return;
  const url = button.dataset.bookingUrl;
  if (url) window.location.href = url;
  else {
    const note = button.nextElementSibling;
    note.classList.add('show');
    note.textContent = '예약 시스템 준비 중';
  }
});
