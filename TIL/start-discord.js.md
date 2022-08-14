# Discord 봇 만들기 - 작업 환경 설정

## 프로젝트 폴더 설치

- npm 프로젝트 폴더를 설치 한다
- VScode 터미널에서 아래 코드 중 하나 입력

```
npm init        //작업 환경 수동 설정

npm init -y    //빠른 작업 환경 설정 (기본 설정)

```

### discord.js 설치

- discord.js :

```
npm install discord.js
```

---

## Discord 봇 생성

1. [디스코드 Developer 포털](https://discord.com/developers/applications)로 이동 한다.
2. `create new application` 클릭
3. 이름과 설정을 해준다.
4. Bot탭으로 가서 `Add Bot` 클릭 -> 봇 생성 완료.
5. Bot탭의 `Reset Token`을 클릭하면 봇의 토큰을 확인 할 수 있음  
   [Token이란](./initial-bot-code.md)

---

## 서버에 Discord 봇 추가하기

1. `OAuth2` 탭으로 이동
2. 권한 설정 후 화면 하단에 Generated URL 복사
3. 생성되는 창을 통해 원하는 서버에 초대
