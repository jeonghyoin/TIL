# 마크다운(Markdown) 문법 정리
<br>

### \* **마크다운 에디터**
https://stackedit.io/editor

---

### \* **제목 (Header)**

\# = H1 <br>
\## = H2 <br>
\### = H3 <br>
\#### = H4 <br>
\##### = H5 <br>
\###### = H6 <br>

# H1
## H2
### H3
#### H4
##### H5
###### H6
<br>
HTML 헤더와 유사하다. 숫자가 커질수록 글자 크기가 작아진다.

---

### \* **인용문**

\> 인용문1 <br>
\> 인용문2 <br>
\>> 인용문 안에 인용문 <br>
<br>
> 인용문1
> 인용문2
>> 인용문 안에 인용문

---

### \* **블럭**

+ #### 코드 블럭
` 세 개로 코드를 감싸준다. <br>
```
코드 블럭
```

+ #### 인라인 코드 블럭
\`를 사용한다. <br>
`인라인 코드 블럭`

---

### \* **텍스트 속성**

\**강조** <br>
 \__강조__ <br>

\*기울기* <br>
 \_기울기_ <br>

\~~취소선~~<br>
\<del>취소선\</del>
<br><br>
**강조**<br>
*기울기*<br>
~~취소선~~<br>

---

### \* **구분선(수평선) 넣기**

\--- <br>
\*** <br>
\___ <br>

셋 중 하나 사용하기.

---

### \* **링크 넣기**

+ #### 이메일 주소 넣기
\<email@email.com>
<email@email.com>


+ #### 주소 그대로 넣기
\<http://developmentnotepad.tistory.com>
<http://developmentnotepad.tistory.com>


+ #### 단어로 넣기
\[Study-Note](http://developmentnotepad.tistory.com)
[Study-Note](http://developmentnotepad.tistory.com)


+ #### 내부 링크 넣기
\[목차](#index)
[목차](#index)


---

### \* **이미지 첨부**

삽입할 이미지는 인터넷의 특정 장소에 올라가 있어야 한다. <br>
그 링크를 이용하여 이미지를 첨부하는 것. <br>
<br>
![Text] <br>
(이미지 URL) 혹은 (이미지 경로.jpg) <br>
<br>
\![Google Image]\(https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)
<br>
<br>
![Google Image](https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png)


---

### \* **줄 바꿈, 강제 개행**

br

---

### \* **리스트**

*, +, - 으로 넣을 수 있다. tab으로 들여쓰기 한다.
<br>

\* list item 1 <br>
	 * list item 1-1 <br>
     * list item 1-2 <br>
<br>

* list item 1
    * list item 1-1
    * list item 1-2

---

### \* **표(테이블) 넣기**


Header (1) | Header (2) <br>
\--------- | --------- <br>
Content (1) | Content (3) <br>
Content (2) | Content (4) <br>

Header (1) | Header (2)
--------- | ---------
Content (1) | Content (3)
Content (2) | Content (4)

| Header (1) | Header (2) | Header (3) | <br>
\| :-------- | :--------: | --------: | <br>
| Content(1) | Content(2) | Content(3) | <br>

| Header (1) | Header (2) | Header (3) |
| :-------- | :--------: | --------: |
| Content(1) | Content(2) | Content(3) |

---

### \* **각주(주석) 넣기**

각주(주석) 넣어보기[^test] <br>
[^test]: 여기엔 각주에 대한 설명 넣기 <br>
<br>
StackEdit[^test] is a full-featured, open-source Markdown editor <br>
 [^test]: http://math.stackexchange.com/ <br>


---

### \* **글머리 기호**

\- 글머리 기호 넣기 <br>
\> 인용 넣기 <br>
\>>- 글머리 기호 활용하기<br>
<br>
- 글머리 기호 넣기
> 인용 넣기
>>- 글머리 기호 활용하기

