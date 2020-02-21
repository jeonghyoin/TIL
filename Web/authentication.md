# 인증(Authentication)
모든 API 요청에 대해 사용자를 확인하는 작업을 일컫는다.

---

# 서버(Session, Cookie) 기반 인증
### 절차
- 유저가 로그인을 한다.
- 로그인 정보가 일치하면 고유한 세션 ID를 생성한 후 세션 저장소에 저장한다.
- 세션 ID는 쿠키에 저장된다.
- 인증이 필요한 요청이 발생할 때 쿠키 값을 검증한다.

### 기존 방식의 단점
- Stateful한 인증 방식이므로 클라이언트의 상태를 계속해서 유지해야 한다.
- 세션은 서버의 메모리나 데이터베이스에 저장되므로 서버의 부담이 커지고, 확장성이 나빠질 수 있다.
![img](https://t1.daumcdn.net/cfile/tistory/994BEA345B53368401)

---

# Token 기반 인증
- 클라이언트에 세션 상태를 저장하는 것이 아니라, 필요한 정보를 Token Body에 저장해 놓았다가 필요할 때 사용하는 인증 방식이다. 
- HTTP 요청 헤더에 인증 수단(Token)을 넣어 요청을 보내 인증 절차를 진행한다.
- 웹 표준([RFC 7519](https://tools.ietf.org/html/rfc7519)) 기반의 방식이다.

### JWT(Json Web Token)
- 인증에 필요한 정보들을 암호화시킨 토큰
- Header: 해싱 알고리즘, 타입 등이 들어간다.
- Payload: 토큰에 담을 정보
- Signature:  Base64 방식으로 인코딩한 Header, payload, secret key를 더하여 서명된다.
- 주의할 점
  - Header, Payload는 누구나 해독할 수 있으므로 중요 정보를 담으면 안된다.
  - Verify Signature는 SECRET KEY를 알지 못하면 복호화할 수 없다.

### 절차
1. 클라이언트가 로그인을 하면 Access Token이 생성된다.
2. 이후 Header에 Access Token을 포함하여 API를 호출한다.
3. 서버는 Access Token을 해독하고 인증되면 호출된 API의 기능을 수행한다.
4. Token 기한이 만료되었으면 Access Token을 지우고 재로그인을 요청한다.

### 해독 방식(보안)
1. A가 B에게 JWT를 보내려한다.
2. A, B 둘 다 암호화 된 Secret Key를 알고 있다.
3. Secret Key를 알지 못하는 C가 A, B의 JWT에 접근하려 한다.
4. 이를 방지하기 위해 Signature에 Payload, Secret Key가 해시화해 추가되어있다.
5. C가 JWT를 변경하려해도 Secret Key를 알지 못하기 때문에 접근할 수 없다.

### 장점
1. 서버측에서 유저의 세션을 유지 할 필요가 없다. (유저가 로그인 되어있는지 안되어있는지 신경 쓸 필요가 없다.)
2. 유저가 요청을 했을 때 토큰만 확인하면 되므로 세션 관리가 필요 없고, 서버 자원을 아낄 수 있다.

![img](https://t1.daumcdn.net/cfile/tistory/995EC2345B53368912)

---

### 참고한 곳
- https://yonghyunlee.gitlab.io/node/jwt/
- https://tansfil.tistory.com/58
- https://dooopark.tistory.com/6
- https://velopert.com/2350
- https://codeflow.study/web-deprecated/79?comment=390
