const properties = {
  seoul: { name: '서울역점', english: 'SEOUL STATION', area: '서울역', tagline: '서울의 시작과 끝이 가장 편안하도록', description: '서울 어디든 빠르게 이어지는 서울역 인근에서 여행의 설렘과 편안한 휴식을 모두 누려보세요.', room: '스탠다드 더블', guests: '기준 2인 · 최대 2인', address: '서울특별시 용산구 서울역 인근', accent: '#abc8b8', bookingUrl: 'https://beds24.com/booking2.php?propid=257061' },
  jongno: { name: '종로점', english: 'JONGNO', area: '종로', tagline: '오래된 서울의 시간을 가까이에서', description: '고궁과 한옥 골목, 감각적인 가게가 공존하는 종로에서 천천히 서울의 매력을 발견해 보세요.', room: '디럭스 트윈', guests: '기준 2인 · 최대 3인', address: '서울특별시 종로구 종로 인근', accent: '#e8c6ad', bookingUrl: 'https://beds24.com/booking2.php?propid=263294' },
  hongdae: { name: '홍대점', english: 'HONGDAE', area: '홍대', tagline: '도시의 에너지를 즐기는 가장 좋은 방법', description: '음악과 예술, 다채로운 맛이 밤낮없이 이어지는 홍대 중심에서 자유로운 여행을 시작하세요.', room: '패밀리 스튜디오', guests: '기준 3인 · 최대 4인', address: '서울특별시 마포구 홍대입구역 인근', accent: '#d8e681', bookingUrl: 'https://beds24.com/booking2.php?propid=263281' },
  myeongdong: { name: '명동점', english: 'MYEONGDONG', area: '명동', tagline: '서울의 중심에서 누리는 여유', description: '쇼핑과 미식, 남산의 풍경까지 도보로 만나는 명동에서 알찬 서울 여행을 완성해 보세요.', room: '슈페리어 더블', guests: '기준 2인 · 최대 2인', address: '서울특별시 중구 명동역 인근', accent: '#b7bdd7', bookingUrl: 'https://beds24.com/booking2.php?propid=329251' }
};

function propertyTemplate(p) {
  return `<header class="site-header"><a class="brand" href="index.html" aria-label="OMG SEOUL 홈"><span>OMG</span> SEOUL</a><nav aria-label="주요 메뉴"><a href="index.html#locations">다른 지점</a><a href="#booking">예약 안내</a></nav></header>
  <main><section class="property-hero"><p class="breadcrumb"><a href="index.html">홈</a><span>·</span>${p.area}</p><h1 class="property-title"><small>${p.english}</small>${p.name}</h1><div class="property-subtitle"><h2>${p.tagline}</h2><p>${p.description}</p></div></section>
  <section class="property-gallery" aria-label="객실 사진 영역" style="--accent:${p.accent}"><div class="photo-placeholder" style="background:linear-gradient(145deg,${p.accent},#e8e0ce)"><span>객실 대표 사진</span></div><div class="photo-placeholder" style="background:${p.accent}"><span>객실 사진 02</span></div><div class="photo-placeholder"><span>객실 사진 03</span></div></section>
  <div class="property-content"><div>
    <section class="info-section stay-intro"><p class="eyebrow">ABOUT THE STAY</p><h2>숙소 소개</h2><p>${p.description}<br>꼭 필요한 편의와 정돈된 객실에서 편안히 쉬어가세요.</p></section>
    <section class="info-section"><h2>객실 · 인원</h2><div class="room-card"><div><strong>${p.room}</strong><span>침구 · 독립 욕실</span></div><strong>${p.guests}</strong></div></section>
    <section class="info-section"><h2>주요 편의시설</h2><ul class="amenities"><li><b>⌁</b>무료 Wi-Fi</li><li><b>☕</b>커피 & 티</li><li><b>❄</b>냉난방</li><li><b>♨</b>온수 샤워</li><li><b>▣</b>스마트 TV</li><li><b>✦</b>어메니티</li></ul></section>
    <section class="info-section"><h2>이용 시간</h2><div class="time-grid"><div><span>CHECK-IN</span><strong>15:00 이후</strong></div><div><span>CHECK-OUT</span><strong>11:00 이전</strong></div></div><p>비대면 입실 안내는 당일 메시지로 보내드립니다.</p></section>
    <section class="info-section"><h2>위치</h2><p>${p.address}</p><div class="map" aria-label="지도 준비 영역"><div class="pin"></div><span style="position:absolute;bottom:20px;z-index:2">상세 지도 준비 중</span></div></section>
  </div><aside class="booking-card" id="booking"><p class="eyebrow">BOOK YOUR STAY</p><h2>${p.name} 예약</h2><p>Beds24에서 실시간 객실과 요금을 확인하세요.</p><a class="button booking-button" href="${p.bookingUrl}" target="_blank" rel="noopener noreferrer">예약하기 →</a><div class="booking-meta">Beds24 예약 페이지가 새 탭에서 열립니다.</div></aside></div></main>
  <footer><a class="brand" href="index.html"><span>OMG</span> SEOUL</a><p>서울의 좋은 순간이 시작되는 곳</p><small>© 2026 OMG SEOUL.</small></footer>`;
}

const app = document.querySelector('#property-app');
if (app) {
  const property = properties[document.body.dataset.property];
  if (property) app.innerHTML = propertyTemplate(property);
}
