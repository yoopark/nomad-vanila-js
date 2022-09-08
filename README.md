# nomad-vanila-js
**노마드코더의 "바닐라 JS로 크롬 앱 만들기"를 보며 만든, Momentum 크롬 익스텐션 클론코딩**
> 이 프로젝트를 진행하면서 배운 내용은 [여기](https://yopark.notion.site/JS-TIL-54b9cc2355c14c58b5dfd05cd18da388)에 정리되어 있습니다.    
> <https://yoopark.github.io/nomad-vanila-js>로 들어가면, 제가 만든 토이 프로젝트 결과물을 볼 수 있습니다.
---
  
위 강의는 Chrome 확장 프로그램인 [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=ko)을 클론코딩하는 방식으로 진행된다. 



![](https://velog.velcdn.com/images/yoopark/post/f620d19b-3a81-4418-80d8-74e1a123af1a/image.png)


## 구현한 기능

- `clock` : 현재 시각
- `greeting` : username을 받아 `localStorage`에 저장하여 인사말 표시
    - 시간대에 따라, *Good Morning, Good Afternoon, Good Evening* 으로 변화
- `background`, `quote` (위 사진에서 중앙 하단) : 랜덤 배경, 랜덤 명언
- `search` (좌측 상단) :  구글에 검색하기
- `weather` (우측 상단) : [OpenWeatherMap API](https://openweathermap.org/api)를 이용하여 현재 지역, 날씨, 기온 표시
- `today-focus` : 오늘의 가장 큰 TODO 목표를 적어두는 공간
    - `pomodoro-timer` : 시계 아이콘을 누르면 작동하며, 25분(1뽀모도로) 타이머다.
- `TODO` (우측 하단) : `localStorage`에 저장되어 새로고침해도 초기화되지 않음.
    - 모달 창으로 만들었다.
