# OMG SEOUL

서울의 네 지역 숙소를 한곳에서 소개하는 GitHub Pages용 정적 웹사이트입니다.

## 로컬에서 보기

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 여세요. 별도의 빌드나 의존성 설치는 필요하지 않습니다.

## 예약 링크 연결하기

`js/site.js`의 `properties` 객체에서 해당 지점의 `bookingUrl`을 Beds24 링크로 변경하면 예약 버튼이 자동으로 활성화됩니다.

