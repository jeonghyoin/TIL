# Shell

쉘(Shell)

- 사용자가 명령을 입력하면 명령을 컴퓨터가 이해할 수 있도록 해석하고 관리하는 프로그램 (zsh, bash 등)
- 사용자와 커널을 연결시켜주는 역할을 담당한다.

![kernel shell에 대한 이미지 검색결과](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F27552535590AB2BB0F)

- 하드웨어: 하드디스크, CPU, SSD 등과  같이 기계적인 부분
- 커널: 하드웨어를 감싸고 있음, 물리적인 기계를 직접적으로 제어하는 Core
- 쉘: 껍데기, 사용자가 리눅스에서 명령어를 실행했을 때 이를 해석하고 커널에게 전달한다.

---

# Shell script

쉘을 사용해서 프로그래밍할 수 있다. 여러 개의 명령을 **순차적**으로 실행시키기 위해 사용한다.

```shell
> nano backup

#!/bin/bash
if ! [ -d bak ]; then
	mkdir bak
fi
cp *.log bak
```

1. 현재 디랙토리에 bak라는 디렉토리가 없다면 만들고, 있다면 만들지 않는다.
2. 현재 디렉토리에 있는 모든 파일 중에 `.log`로 끝나는 모든 파일을 bak 디렉토리로 복사한다.
3. `fi`: 조건문의 종료

## * 작성 방법

```shell
$ touch test.sh //파일 생성
$ vim test.sh //편집기로 파일 열기
$ chmod +x test.sh //실행 권한 부여
$ ./test.sh //쉘 스크립트 실행
```

쉘 스크립트를 작성하기 위해 스크립트 최상단에 `#!/bin/bash` 를 추가한다.

- 출력: `echo`(자동 줄바꿈), `printf`
  - `printf "%s %s" hello world`
- 주석: #
- 함수

```shell
string_test() { # function 생략 가능
	echo "인자값: ${@}"
}

# 호출
string_test
# 인자값 전달
string_test "hello" "world"
```

- 변수
  - 변수는 기본적으로 전역 변수이며, 지역변수에는 `local`이 붙는다.
  - 변수명 앞에 `export`를 를이면 환경 변수로 설정되어 자식 스크립트에서 사용 가능하다.
  - $를 붙여서 사용한다.
- 예약 변수

| 문자            | 설명                                                         |
| --------------- | :----------------------------------------------------------- |
| `HOME`          | 사용자의 홈 디렉토리                                         |
| `PATH`          | 실행 파일을 찾을 경로                                        |
| `LANG`          | 프로그램 사용시 기본 지원되는 언어                           |
| `PWD`           | 사용자의 현재 작업중인 디렉토리                              |
| `FUNCNAME`      | 현재 함수 이름                                               |
| `SECONDS`       | 스크립트가 실행된 초 단위 시간                               |
| `SHLVL`         | 쉘 레벨(중첩된 깊이를 나타냄)                                |
| `SHELL`         | 로그인해서 사용하는 쉘                                       |
| `PPID`          | 부모 프로세스의 PID                                          |
| `BASH`          | BASH 실행 파일 경로                                          |
| `BASH_ENV`      | 스크립트 실행시 BASH 시작 파일을 읽을 위치 변수              |
| `BASH_VERSION`  | 설치된 BASH 버전                                             |
| `BASH_VERSINFO` | `BASH_VERSINFO[0]`~`BASH_VERSINFO[5]`배열로 상세정보 제공    |
| `MAIL`          | 메일 보관 경로                                               |
| `MAILCHECK`     | 메일 확인 시간                                               |
| `OSTYPE`        | 운영체제 종류                                                |
| `TERM`          | 로긴 터미널 타입                                             |
| `HOSTNAME`      | 호스트 이름                                                  |
| `HOSTTYPE`      | 시스템 하드웨어 종류                                         |
| `MACHTYPE`      | 머신 종류(`HOSTTYPE`보다 상세)                               |
| `LOGNAME`       | 로그인 이름                                                  |
| `UID`           | 사용자 UID                                                   |
| `EUID`          | `su` 명령에서 사용하는 사용자의 유효 아이디 값(`UID`=/= `EUID` ) |
| `USER`          | 사용자 이름                                                  |
| `USERNAME`      | 사용자 이름                                                  |
| `GROUPS`        | 사용자 그룹(`/etc/passwd` 값을 출력)                         |
| `HISTFILE`      | `history` 파일 경로                                          |
| `HISTFILESIZE`  | `history` 파일 크기                                          |
| `HISTSIZE`      | `history` 저장되는 개수                                      |
| `HISTCONTROL`   | 중복되는 명령에 대한 기록 유무                               |
| `DISPLAY`       | X 디스플레이 이름                                            |
| `IFS`           | 입력 필드 구분자(기본값: ` ` - 빈칸)                         |
| `VISUAL`        | VISUAL 편집기 이름                                           |
| `EDITOR`        | 기본 편집기 이름                                             |
| `COLUMNS`       | 현재 터미널이나 윈도우 터미널의 컬럼 수                      |
| `LINES`         | 터미널의 라인 수                                             |
| `LS_COLORS`     | `ls` 명령의 색상 관련 옵션                                   |
| `PS1`           | 기본 프롬프트 변수(기본값: `bash\$`)                         |
| `PS2`           | 보조 프롬프트 변수(기본값: `>`), 명령을 "\"를 사용하여 명령 행을 연장시 사용됨 |
| `PS3`           | 쉘 스크립트에서 `select` 사용시 프롬프트 변수(기본값: `#?`)  |
| `PS4`           | 쉘 스크립트 디버깅 모드의 프롬프트 변수(기본값: `+`)         |
| `TMOUT`         | `0`이면 제한이 없으며 `time`시간 지정시 지정한 시간 이후 로그아웃 |

- 위치 매개변수

| 문자 | 설명                                                         |
| :--- | :----------------------------------------------------------- |
| `$0` | 실행된 스크립트 이름                                         |
| `$1` | `$1 $2 $3...${10}`인자 순서대로 번호가 부여된다. 10번째부터는 {}로 감싸줘야 함 |
| `$*` | 전체 인자 값                                                 |
| `$@` | 전체 인자 값(`$*`와 동일하지만 ""로 변수를 감싸면 다른 결과 출력) |
| `$#` | 매개 변수의 총 개수                                          |

- 특수 매개변수

| 문자 | 설명                                                  |
| :--- | :---------------------------------------------------- |
| `$$` | 현재 스크립트의 PID                                   |
| `$?` | 최근에 실행된 명령어, 함수, 스크립트 자식의 종료 상태 |
| `$!` | 최근에 실행한 백그라운드(비동기) 명령의 PID           |
| `$-` | 현재 옵션 플래그                                      |
| `$_` | 지난 명령의 마지막 인자로 설정된 특수 변수            |

- 배열
  - `daemons=("var1" "var2" "var3")`
  - `${daemons[@]}`  로 배열에 접근한다.
- 반복문
  - 반복문을 빠져 나갈 때 `break`
  - 현재 반복문이나 조건을 건너 뛸 때 `continue`

```shell
# for
for 변수 in 변수값1 변수값2 ...
do
  ...
done

# whild
while [조건문]
do
  ...
done
```

```shell
# file.txt 파일 읽기
for var in 'cat /root/bin/file.txt'; do
    echo $var
done
```

- 조건문

```shell
if [조건]
then
  ...
else
  ...
fi
```

```shell
string1="hello"
string2="world"
string3="hello world"

if [ ${string1} == ${string2} ]; then
	echo "hello"
elif [ ${string1} == ${string3} ]; then
	echo "world"
else
	echo "hello world"
fi
```

------

### 【 참고한 곳 】

https://blog.gaerae.com/2015/01/bash-hello-world.html

https://opentutorials.org/
