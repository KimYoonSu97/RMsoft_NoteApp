<div align="center">
  
![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&height=250&section=header&text=RM-Note&fontSize=60)

</div>

## RM-note

> RM-Soft 과제테스트 : 노트앱
> <br />
> 개발기간: 23.12.11 - 23.12.13

## 배포

🔗 : https://r-msoft-note-app.vercel.app/

## 시작가이드

- react 18.2.0
- node 18.18.1

```
git clone https://github.com/KimYoonSu97/RMsoft_NoteApp.git
-------
yarn
-------
yarn start
```

## 기능 요구사항

⭐️ 백엔드 구현 X => 로컬스토리지 사용
<br />
✅ NOTEBOOKS 목록 확인
<br />
✅ NOTEBOOKS 추가 삭제
<br />
✅ NOTEBOOKS 내부에 메모 추가 삭제
<br />
✅ NOTEBOOKS 내부에 NOTEBOOKS 추가 불가능
<br />
✅ 메모 목록에서 메모선택하여 확인 및 수정 가능
<br />
✅ 텍스트 입력 후 일정 시간 후에 입력 사항이 저장

## 스타일 요구(참고)사항

✅ 최소 가로길이 1400px 최대 가로길이는 1920px
<br />
✅ 최초 화면에서 NOTEBOOKS는 하나도 없는 상태
<br />
✅ 기본 UI는 UpNote활용
<br />
✅ 메모목록에서 메모 내용의 첫번째 줄이 메모의 제목으로 표시
<br />
✅ 메모 제목이 메모목록의 가로길이를 넘어가는 경우 말줄임표 처리
<br />

## 사용 라이브러리

<img src="https://img.shields.io/badge/lexical-61DAFB?style=for-the-badge&"/>
⭐️필수사용⭐️

- 렉시컬 라이브러리를 사용하여 구현하였습니다.
  onChangePlugin을 선언하여 사용하였고 onChange 함수 내부에서 throttle로 자동저장 기능을 구현하였습니다.
  <br />

<img src="https://img.shields.io/badge/lodash-3492FF?style=for-the-badge&logo=lodash&logoColor=white"/>

- 로대시 라이브러리의 throttle를 활용하여 작성 내용 2초 단위로 자동저장 기능을 구현하였습니다.
  <br />

<img src="https://img.shields.io/badge/reactrouter-DB7093?style=for-the-badge&logo=reactrouter&logoColor=white"/>

- 노트 / 메모의 아이디값을 추출하여 사용하기 위해서 사용하였습니다.
  <br />

<img src="https://img.shields.io/badge/styledcomponents-CA4245?style=for-the-badge&logo=styledcomponents&logoColor=white"/>

- CSS-in- JS방식의styled-components사용,
  디자인시스템의 font적용은 별도의 상수선언으로 전역관리
  <br />

<img src="https://img.shields.io/badge/shortid-61DAFB?style=for-the-badge&"/>

- 노트 / 메모별 별도 아이디 값 부여로 데이터를 관리하였습니다.
  <br />

<img src="https://img.shields.io/badge/jotai-61DAFB?style=for-the-badge&"/>

- 전역상태 관리라이브러리로 작성 내용이 리스트에 적용 될 수 있도록 구현하였습니다.
  <br />

<div align='left'>

</div>
