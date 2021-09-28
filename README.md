# Nwitter

Twitter (mini)clone with React and Firebase

## 1. Setup

### Firebase

- fbase.js(이름은 아무렇게나)에 firebase 설정을 저장
- 어디서든 fbase.js를 import하면 설정을 불러올 수 있다
- key값은 노출되면 안되니까 .env에 저장
  - process.env.REACT_APP\_..으로 불러오기

### Router Setup

- components
  - App : 메인 화면이 보여지는 곳 -> Router로 isLoggedIn 매개변수 전달
  - Router : isLoggedIn 변수로 보여질 화면을 정함
- routes
  - Auth : 로그인/회원가입 화면
  - Home : 로그인 후 보여주는 메인화면

## 2. Authentication

- 로그인 인증을 위해 fbase.js에 auth 가져옴
- `authService.currentUser` 변수를 사용하면 user가 없으면 null이라 인증 여부를 확인할 수 있다
- Auth.js에서 기본 로그인 form을 만듦
  - onChange : 입력창에 글자를 적을 때마다 이 함수를 부름
    - value : 변경된 값
    - 여기서 setEmail(value)를 했기 때문에 email 변수 값이 value로 변경됨.
    - email을 업데이트 하지 않으면 text에 글자 적은게 업데이트 되지 않음

### auth 외 코드

- jsconfig.json : import할 때 기준 폴더를 지정
