# html

![img](https://t1.daumcdn.net/cfile/tistory/261BFE435539390B1B)

* div
  * Division의 약자로, 레이아웃을 나눌 때 주로 쓰인다.
* section
  * 내용적 흐름과 구조를 만들기 위해 내용을 나누는 용도
  * 같은 성격의 내용, 관련 있는 내용을 묶는다.
* article
  * 내용이 각기 독립적이고 홀로 설 수 있는 내용을 묶는다.
* main
  * 문서 내에 main은 한 번만 허용된다.
  * article, header, footer, nav 요소의 하위로 사용할 수 없다.

# CSS

* overflow

  * 내용이 요소의 크기를 벗어났을 때 어떻게 처리할지를 정하는 속성
    * visible : 박스를 넘어가도 보여준다.
    * hidden : 박스를 넘어간 부분은 보이지 않는다.
    * scroll : 박스와 관계 없이 스크롤바가 나온다.
    * auto : 박스를 넘어가지 않으면 스크롤바가 나오지 않고, 박스를 넘어갈 때에는 스크롤바가 나온다.
    * initial : 기본값으로 설정한다.
    * inherit : 부모 요소의 속성값을 상속받는다.

* clear

  * float 속성을 주변으로 컨텐츠가 배치되는데, 이를 해제하기 위해 사용한다.
    * none: 기본 설정 값
    * left: 왼쪽으로 붙는 float 정렬을 취소한다.
    * right: 오른쪽으로 붙는 float 정렬을 취소한다.
    * both: 왼쪽, 오른쪽 모두 붙는 float 정렬을 취소한다.

* float

  * 정렬을 위해 사용하는 속성(box element에만 사용 가능)
    * none: 기본 값
    * left: 왼쪽에 띄운다.
    * right: 오른쪽에 띄운다.
    * inherit: 부모 요소에서 상속

* display

  * none: 보이지 않음(영역을 차지하지 않음)
  * block: 블록 박스
  * inline: 인라인 박스
  * inline-block: block과 inline의 중간 형태

* position

* em, px, % 차이

  * 절대단위: in, cm, mm, pt, pc
  * 상대단위: em, ex, px, %

* inherit(상속)

  * 부모 태그에 특정 값을 적용하면 하위 태그에도 속성들이 전달된다.
  * color, font 등

* margin, padding 차이

  ![margin & padding](https://ofcourse.kr/images/attach/margin_padding.png)

  * margin: 바깥쪽 여백
  * padding: 안쪽 여백

* box-sizing 속성 변경하기

  ![img](https://ofcourse.kr/images/attach/box-sizing.jpg)

  * `width: 200px` 이고 `height: 100px, padding: 20px, border: 5px solid black` 일 때 오른쪽과 같이 배치된다.
    * 전체 너비가 200px인 것이 아닌 것에 주의
    * 이를 해결하기 위해서는 content-box 속성을 box-sizing로 바꾸어준다.
    * `box-sizing: border-box;`
  * visibility
    * 태그의 가시성을 결정한다.
      * visible: 보임
      * hidden: 숨김(자신의 영역은 계속 차지)
      * collapse: 겹치도록 지정(테이블의 행과 열 요소만 지정할 수 있으며, 그 외 요소의 지정하면 hidden으로 해석)
      * inherit: 부모 요소의 값을 상속
  * layout
    * 수평 레이아웃 구성
    * 수평 가운데 정렬
      * left, margin-left 설정하기
      * margin-auto
    * 수직 가운데 정렬
      * padding 설정하기
      * line-height

  

---

### 【 참고한 곳 】

[https://ofcourse.kr/css-course/%EC%86%8D%EC%84%B1](https://ofcourse.kr/css-course/속성)
