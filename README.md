# Nwitter

Twitter (mini)clone with React and Firebase

## 1. Setup

### Firebase

- firebase.js(이름은 아무렇게나)에 firebase 설정을 저장
- 어디서든 firebase.js를 import하면 설정을 불러올 수 있다
- key값은 노출되면 안되니까 .env에 저장
  - process.env.REACT_APP\_..으로 불러오기

### Router Setup

- components
  - App : 메인 화면이 보여지는 곳
  - Router : isLoggedIn 변수로 보여질 화면을 정함
- routes
  - Auth : 로그인/회원가입 화면
  - Home : 로그인 후 보여주는 메인화면
