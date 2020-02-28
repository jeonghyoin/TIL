# CSRF
### 개념
- **Cross-Site Request Forgery, 크로스 사이트 요청 위조**
- 사용자의 의지와는 무관하게 공격자가 의도한 행위를 하도록 만드는 공격
- 인증이 완료 된 사용자의 **권한을 도용**하여 공격한다.
- **조작된 HTTP Request(Action) 서버에 요청**하여 공격자가 원하는 명령을 사이트로 전송한다.

### 공격 조건
1. 사용자가 로그인 중인 상태 혹은 자동 로그인(유효한 쿠키 보유)
2. 위조 된 사이트 접속(피싱)
3. XSS 공격 수행
4. Social Engineering
	
### 방어 방법
1. Referrer 검증
2. Security Token 적용
3. Double Submit Cookie 검증

---

# XSS
- Cross-Site Scripting 공격
- 브라우저에서 악성 Script를 삽입하고, 실행되도록 하는 공격 방법
- 인증에 사용되는 Session 혹은 Cookie를 탈취한다. (세션 하이재킹)
- 주로 CSRF 공격을 하기 위해 사용된다.

### 공격 조건
- 브라우저에서 Client-Side Script를 실행
- 서버 측에서 입력 값에 대한 검사가 이루어지지 않을 때

---

# Cookie
쿠키가 한번 생성되면, 이후 서버로 요청을 보낼 때 모든 요청에 쿠키를 포함한다. 그리고 서버 측에서 요청에 대한 쿠키 정보를 읽을 수 있다. 쿠키에는 인증에 대한 정보가 담겨있으므로, 쿠키를 사용한 인증 구현 시에 탈취에 유의해야 한다.

### HttpOnly
- 쿠키는 클라이언트 측에서 **자바스크립트**로 조회가 가능하다.
- `document.cookie`로 접근 가능
- 이러한 취약점으로 인해, CSS 공격(Cross Site Scripting), XSS 공격이 발생할 수 있다.
- 취약점 보완을 위하여 설정하는 것이 `httpOnly` 설정이다.
	- 브라우저에서 쿠키에 접근할 수 없도록 제한한다. (쿠키 탈취 예방)
	- 브라우저에서 쿠키에 직접 접근할 필요가 없기 때문에, 기본적으로 True로 설정하여 막아두는 것이 좋다.

### Secure Cookie
- Javascript 뿐만 아니라 **네트워크**를 직접 감청하여 쿠키를 가로챌 수도 있다.
- 이를 막기 위하여 HTTPS 프로토콜을 사용하여 데이터를 암호화하는 방법이 사용된다.
- HTTPS 프로토콜은 쿠키 또한 암호화 되어 전송된다.
- SSL 통신 채널 연결 시에만 쿠키를 전송하도록 설정한다.

### withCredentials
- CORS: 다른 origin에 대한 요청을 허용하는 정책이다.
- 다른 도메인으로부터 리소스가 필요할 경우 CORS가 필요하다.
- `XMLHttpRequest`가 보안상의 이유로 동일한 도메인으로만 HTTP 요청을 보내도록 제한하기 때문이다.

---

### 참고한 곳
- [CSRF 공격 가능 여부](http://boansecurity.blogspot.com/2016/09/web-csrf.html)
- [CSRF 공격이란? 그리고 CSRF 방어 방법](https://itstory.tk/entry/CSRF-%EA%B3%B5%EA%B2%A9%EC%9D%B4%EB%9E%80-%EA%B7%B8%EB%A6%AC%EA%B3%A0-CSRF-%EB%B0%A9%EC%96%B4-%EB%B0%A9%EB%B2%95)
- [CSRF(Cross-Site Request Forgery)](https://blog.naver.com/PostView.nhn?blogId=aepkoreanet&logNo=221457283624&proxyReferer=https%3A%2F%2Fwww.google.com%2F)
- [MDN / HTTP 쿠키](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [MDN / CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
