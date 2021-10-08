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
  - https://ko.reactjs.org/docs/forms.html
  - onChange event : 사용자에 의해 값이 변경되었을 때 `input`, `select`, `textarea` 태그에서 이 이벤트가 발생.
    - value : 변경된 값
    - 여기서 setEmail(value)를 했기 때문에 email 변수 값이 value로 변경됨.
    - email을 업데이트 하지 않으면 text에 글자 적은게 업데이트 되지 않음
  - onSubmit event: `form` 태그에서 submit 버튼이 눌리면 이벤트 발생
    - event.preventDefault() 을 사용하면 submit 기본 액션(새로고침 + text 지움)을 수행하지 않음

**firebase/auth** : https://firebase.google.com/docs/reference/js/auth?authuser=0

### 이메일로 가입/로그인

- `createUserWithEmailAndPassword` : email과 passwd로 계정 생성
- `signInWithEmailAndPassword` : email과 passwd로 로그인
- `setPersistence` : 현재 저장된 auth 세션의 persistence의 타입을 바꿈.
  - 위에서 계정 생성과 로그인을 하면 auth에 계정 정보가 저장 돼 있음 -> 이 정보를 얼마나 유지할 지 설정
  - Persistence type : 3종류
    - 'NONE' : memory에 저장됨.
    - 'SESSION' : 임시 저장(temporary persistence). sessionStorage에 저장. 브라우저가 열려있을 때만 유지
    - 'LOCAL' : 오래 저장(long term persistence). localStorage or IndexedDB에 저장. 브라우저를 닫아도 유지
- 로그인을 위해 toggleAccount 함수를 만들어서 newAccount를 변경

### 앱 초기화

- 앱을 실행하면 초기화 -> 화면이 그려지는데 firebase도 초기화까지 시간이 걸려서 처음에는 로그인이 안된 상태가 됨
- 앱 초기화 -> firebase 초기화 -> firebase 로그인 체크 -> 화면 그리기 로 만들 것임

  - init 변수 : firebase가 초기화됐는지 확인
  - useEffect hooks : user의 상태가 변하는지 확인 -> `onAuthStateChanged` 메소드 사용 -> isLoggedIn 변수를 변경
  - `onAuthStateChanged` : 사용자의 로그인 상태(로그인/로그아웃)가 변하는 걸 체크하는 observer(관찰자)를 추가. 이벤트 리스너 추가.

### 소셜 로그인 만들기

- 방법
  1. provider(제공자)를 만듦
  2. provider로 로그인
- popup, redirect 두 가지 방법이 있음
- 소셜 로그인 문서
  - google 로그인 : https://firebase.google.com/docs/auth/web/google-signin?hl=ko
  - github 로그인 : https://firebase.google.com/docs/auth/web/github-auth?hl=ko

**auth 외 코드**

- jsconfig.json : import할 때 기준 폴더를 지정

## 3. Nweeting

- cloud firestore : https://firebase.google.com/docs/firestore?hl=ko

### DB 만들기

- firebase 웹 페이지에서 `Firestore Database` 선택 -> 테스트 모드 시작 -> 위치 : asia-northeast3
- NoSQL DB로 만들어짐
  - collection : document 모음
  - document : 문서 같은 텍스트. 필드, 유형, 값을 지정
  - collection을 만들고 그 안에 document를 만듦

### DB에 document 생성하기(Create)

- 목표 : Home에서 Nweet을 적고 submit 버튼을 누르면 document를 생성하기
  - 데이터 : text, 생성일, user
- `addDoc` : Collection에 새 document 추가
  - https://firebase.google.com/docs/reference/js/firestore_.md?hl=ko#adddoc
- user는 Home.js 뿐만 아니라 다양한 곳에서 사용되니까 App.js에서 user 관리
  - App.js -> Router.js -> Home.js로 user 데이터 전달됨

### DB의 document 수정하기(Update)

- `updateDoc`

### DB의 document 읽기(Read)

- `collection` : DB의 reference(collection)를 가져옴. CollectionReference 리턴(Query 상속)
- `query` : DB에 질문해서 원하는 데이터 가져옴. Query 리턴
- `getDocs` : collection에 있는 documents를 한 번 불러옴
- `onSnapshot` : collection에 있는 documents를 실시간으로 불러옴

### DB의 document 삭제하기(Delete)

- `deleteDoc` : `doc`로 삭제할 document를 선택 후 삭제
  ```
    deleteDoc(doc(db, "collection", "document id"))
    deleteDoc(doc(db, "collection/document id")) 이렇게 /로 구분해도 됨
  ```

## 4. File Upload

- 목표 : 게시글에 사진 추가하는 곳 만들기

### 이미지 추가하는 버튼, 미리보기 이미지 보여주기

- nweet 만드는 곳(Home.js)에 사진 추가하는 input 태그 만듦
- 미리보기로 확인하기 위해 FileReader API를 사용
  - https://developer.mozilla.org/ko/docs/Web/API/File/Using_files_from_web_applications#%EC%98%88%EC%8B%9C_%EC%82%AC%EC%9A%A9%EC%9E%90%EA%B0%80_%EC%84%A0%ED%83%9D%ED%95%9C_%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%9D%98_%EC%84%AC%EB%84%A4%EC%9D%BC_%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0
- onloadend : load가 끝났을 때 이벤트가 발생함.

### react hooks API

- useRef()

  - react의 hooks API
  - 사용 방법 : useRef()의 인스턴스를 생성하고 인스턴스를 <태그>의 ref에 넣기
    - 인스턴스.current = <태그>
    - 이렇게 하면 태그의 property를 변경할 수 있음

  ```
    const inputElement = useRef(null)
    <input ref={inputElement} type="text">
  ```
