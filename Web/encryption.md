# 암호화
### 단방향
- Hash
	- 원본 비밀번호를 알면 암호화된 비밀번호를 구할 수 있지만, 암호화된 비밀번호로는 원본 비밀번호를 알아낼 수 없다.
	- 사용자가 로그인할 때, 비밀번호를 입력하면 입력받은 비밀번호와 암호회된 비밀번호를 비교하여 로그인 성공, 실패 여부를 판단한다.
	- 해시 함수는 레인보우 테이블 공격에 유의해야 한다.
	- 레인보우 테이블: 해시 함수를 사용하여 변환 가능한 모든 해시 값을 저장시켜 놓은 표
	- 다이제스트: 해시 함수를 통해 암호화 된 메시지
- Hash 보완 방법
	1. Salt: 단방향 해시 함수에서 다이제스트를 생성할 때 추가되는 임의의 문자열
	- 원본 비밀번호에 문자열을 추가하여 다이제스트를 생성한다.
	- Salting을 적용하면 공격자가 다이제스트를 알아내더라도 Salting된 다이제스트를 대상으로 비밀번호 일치 여부를 알아내기 어렵다.
	- `Dp5BnBuJzdKr3DpE(salt) + helloworld (plainText) -> (Hash Function) -> DIGEST`
	2. 키 스트레칭
	- 입력한 비밀번호의 다이제스트를 생성하고, 생성된 다이제스트를 입력값으로 또 다시 다이제스트를 생성하는 것을 반복한다.
	3. Bcrypt
	- 단방향 암호화 해싱 함수
	- 패스워드 저장을 목적으로 설계되었다.
	-  레인보우 공격을 막기 위해서 Salt를 사용하며, 무차별 대입 공격을 방어하기 위해 암호검사 요청이 반복될 수록 cost를 늘린다.
	- Bcrypt로 암호화 된 암호문은 `$2a$`로 시작한다.
![ bcrypt](https://docs.google.com/drawings/d/e/2PACX-1vQNx1HRk87QQFoenXuRby493jI2Eg6gXIlTN-sxLFfurB-5FI5I5lutbrO-OPqWdnln2PBWXJv2X2Kl/pub?w=860&h=168)
	- Cost(`10$`): Iteration count를 1024번 돌린다.
	- Salt: 랜덤 Salt 값
	- Hashed password: Salt와 비밀번호를 묶은 후 암호화하였기 때문에 유추가 불가능하다.
![ count](http://d2.naver.com/content/images/2015/06/helloworld-318732-2.png)

---

### 양방향
* **AES(Advanced Encryption Standard)**
	* 암호화와 복호화 과정에서 동일한 키를 사용하는 대칭키 알고리즘
	* AES-128, AES-192, AES-256 등
		* 여기에서 숫자는 key의 길이를 의미한다. (256은 key의 길이가 256bit)
	* Add Round Key, Sub Byte, Mix Column의 반복으로 이루어진다.
		* 128은 10 Round, 192는 12 Round, 256은 14 Round를 실행한다.
	* 암호화, 복호화 과정
		* Shift Row: 자리 바꿈
		* Mix Column: 치환 연산
		* Add Round Key: XOR 연산
![](https://dailyworker.github.io/assets/images/AES-Decryption.jpg)![](https://dailyworker.github.io/assets/images/AES-Encryption.jpg)


---
### 참고한 곳
- https://www.joinc.co.kr/w/man/12/bcrypt
- [패스워드 보안의 기술](http://www.codeok.net/%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C%20%EB%B3%B4%EC%95%88%EC%9D%98%20%EA%B8%B0%EC%88%A0)
- [안전한 암호화를 위한 AES 알고리즘에 대한 이해](https://dailyworker.github.io/AES-Algorithm-and-Chiper-mode/)
