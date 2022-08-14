# 초기 파일

## Configuration 파일 생성하기

- 봇의 토큰은 소스 코드와 우리가 만들 봇을 연결해주므로 공개 될 경우 해킹의 위험이 있음
  - 따라서 봇의 토큰은 깃허브에 올릴때 .gitignore를 해주어야 함
  - Configuration 파일은 봇의 토큰 외에도 서버 id 등의 구성정보를 저장함

### config.json 파일 생성

- 봇의 토큰을 보호하기 위한 방법은 여러가지가 있지만  
  나는 봇의 토큰들의 구성 정보를 config.json 파일에 저장한 후
  .gitignore를 통해서 깃허브에 공개되지 않도록 하는 방식을 선택 하였다.

> 1. config.json 파일 생성
> 2. confg.json 파일에 토큰과 서버 ID 봇의 APPlication ID 저장

```
파일명 : config.json

{
  "clientId": Application ID,
  "guildId": 서버 아이디,
  "token": 봇의 토큰
}
```

```javascript
//필요한 discord.js 클래스 요청
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { token } = require("./config.json"); //토큰 요청

//client 인스턴스 생성
const { InteractionType } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

//client가 준비 되면 한번 실행되는 코드 (console.log에 Ready!가 출력된다.)
client.once("ready", () => {
  console.log("Ready!");
});

//지정한 토큰에 로그인
client.login(token);
```
