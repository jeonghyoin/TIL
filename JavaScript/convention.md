### 컨벤션 필요성
* 코드 가독성 및 유지보수성 향상

### JavaScript 변수 작성 규칙
* **변수**에 사용할 수 있는 문자
	* 알파벳(a-z, A-Z)
	* 숫자(0-9)
	* 언더바(_)
	* 달러($)
* 변수는 숫자로 시작할 수 없다.
* 하이픈(-), 공백은 사용할 수 없다.
* 특수기호(_, $ 제외)를 사용할 수 없다.
* 예약어를 사용할 수 없다.
* 변수는 선언과 동시에 초기화 하는 것이 좋다
	* `undefined` 값 피하기
	* `var firstName = ""`, `var price = 0`, `var myArray = []`

* **예약어**
	* break, case, catch, class, const, continue, debugger, defauld, do, else, export 등

* 변수명 조합 규칙(단어를 조합)
	* 언더스코어 표기법: `test_value`
	* **카멜 표기법: `testVaule`**
	* 퍼스칼 표기법: `TestValue`

---

### * VSCode에서 ESLint 사용하기
* ESLint
  - **ES( EcmaScript ) + Lint (에러 코드 표식)**
  - 소스 코드에 문제가 있는지 탐색하는 작업을 도와주는 소프트웨어 도구
  - 코딩 스타일을 적용하거나 안티 패턴을 찾는 데에 사용된다.
  - 플러그인을 사용해 규칙을 추가하고 Custom할 수 있기 때문에 다양한 사람들과 같은 환경에서 개발을 진행할 수 있다.

* 필요성
  - 자바스크립트는 컴파일 과정이 없는 인터프리터 언어이므로 런타임 에러가 발생할 확률이 높다.
  - Lint를 적용하여 사전에 발생할 수 있는 오류들을 최소화 하는 것이 중요하다.

**적용 방법**
  1. VS Code MarketPlace > ESLint 설치
  2. `npm install eslint --save-dev` 입력 (dev 옵션은 개발 시에만 적용하고, 배포에는 적용시키지 않기 위해 추가)
  3. 초기 설정: create ESLINT Configuration로 .eslintrc 파일 생성

다음과 같은 기본적인 서식을 설정할 수 있다.
~~~js
module.exports = {
	"env": {
		"browser":  true,
		"commonjs":  true,
		"es6":  false
	},
	"extends":  "eslint:recommended",
	"globals": {
		"Atomics":  "readonly",
		"SharedArrayBuffer":  "readonly"
	},
	"parserOptions": {
		"ecmaVersion":  2018
	},
	"rules": {
	}
};
~~~

---

### 참고한 곳
* [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)
