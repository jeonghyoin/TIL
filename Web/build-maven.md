
# Build, Maven

### **빌드(Build)**
- 소스파일을 컴퓨터에서 실행시킬 수 있도록 변환한 결과물이다.
- .java, .xml 파일 등을 JVM이나 WAS가 인식할 수 있는 구조로 패키징하는 과정이다.

### **빌드 도구**
- 프로젝트 생성, 테스트 빌드, 배포 등의 작업을 수행하기 위한 프로그램이다.
- 라이브러리 추가 및 라이브러리 버전 동기화를 쉽게 적용하기 위하여 사용한다.
- Maven, Gradle 등이 있다.

---

### **Maven**
- **Build Tool + Project Manager**
- Java에서 사용하는 프로젝트 관리 도구이며 프로젝트의 전반적인 라이프 사이클을 관리한다.
- 라이브러리를 xml 문서(pom.xml)에 정의해 두면, 해당 라이브러리가 작동하는 데에 필요한 타 라이브러리까지 자동으로 다운받는다.
- **라이프 사이클(LifeCycle)**
![](http://wiki.gurubee.net/download/attachments/2457635/6_MavenLifecycle.png)
- 크게 Clean, Default(Build), Site 세 가지의 LifeCycle을 가지고 있다.
- Maven은 빌드 단위에 대한 LifeCycle이 예약되어 있기 때문에 임의로 변경할 수 없다.
- Lifecycle은 순서를 갖는 단계(Phase)로 구성된다.
- LifeCycle의 특정 단계를 실행시키기 위해 mvn [단계이름] 명령어를 사용한다.
- 특정 단계를 실행시키면 그 앞에 위치한 단계까지 모두 실행된다.
- **LifeCycle 종류**
  - Clean: target 디렉토리의 결과물을 모두 제거한다.
  - Validate: 프로젝트와 필요한 모든 정보를 확인한다.
  - Compile: 프로젝트의 소스코드 컴파일하고 클래스를 `<outputDirectory>`에 생성 한다.
  - Test: 단위 테스트 코드를 실행, 테스트가 실패하면 빌드를 멈춘다.
  - Package: 컴파일 된 소스코드와 리소스들을 jar, war 파일로 target 디렉토리 아래에 생성한다.
  - Verify: 통합 테스트 결과에 대한 검사를 실행한다.
  - Install: 패키지를 로컬 저장소에 배포한다.
  - Site: 프로젝트 문서와 사이트를 작성 및 생성한다.
  - Deploy: 원격 리파지토리에 등록하여 다른 프로젝트에서 사용할 수 있도록 한다.
  
---

### **빌드 순서**
![](http://wiki.gurubee.net/download/attachments/2457635/6_maven_phase.png)
- 각 Phase에 연결된 Goal을 실행하는 과정을 빌드라고 한다.
- **Compile -> Test -> Package**
  - Compile: src/main/java 내의 소스코드가 컴파일된다.
  - Test: 테스트 소스 코드가 컴파일 된다.
  - Package: 컴파일, 테스트 완료 후 jar, war 파일로 압축한다.

- **Phase**
  - Build Lifecycle 각각의 단계를 의미한다.
  - 의존관계를 가지고 있기 때문에 단계적으로 수행된다.
  - 특정 순서에 따라 Goal이 실행되도록 구조를 제공한다.
  
- **Goal**
	- Maven에서 제공하는 기능은 플러그인 기반으로 동작한다.
  - 기본적으로 제공하는 Phase를 실행하면 연결된 플러그인의 Goal이 실행된다. 
  - `mvn compiler:compile`은 compiler 플러그인에서 compile 기능(Goal)을 실행한다는 의미이다.

---

### Maven Nexus
- Maven에서 사용할 수 있는 Repository이다.
- Proxy 적용을 통해 빠르게 라이브러리를 다운로드할 수 있다.
- 공개된 Repository에 올릴 수 없는 라이브러리를 효과적으로 관리할 수 있다.
- 프로젝트 개발자 간에 일관되게 라이브러리 사용을 관리 및 사용할 수 있다.

---

### **Maven 설정 파일**
- **setting.xml**
  - **Maven 빌드 툴**과 관련된 설정 파일이다.
  - Maven 설치 시 기본적으로 제공되며 MAVEN_HOME/conf 내에 위치한다.
  
- **POM(pom.xml)**
  - Maven 프로젝트의 최상위에 하나씩 존재하는 xml 파일로, 다음과 같은 설정 정보를 지정할 수 있다.
  1. 프로젝트 정보
  2. 빌드 설정 (소스, 리소스, LifeCycle 별로 실행할 플러그인 등 빌드 관련 설정)
  3. 빌드 환경 (사용자 환경 별로 달라질 수 있는 프로파일 정보)
  4. POM 연관 정보 (의존 프로젝트(모듈), 상위 프로젝트, 포함 관계에 있는 하위 모듈)
  - `<build>`
	- sourceDirectory: java 소스 디렉토리를 지정한다.
	- outputDirectory: compile된 파일의 target 디렉토리를 지정한다. (일반적으로 target/classes 내에 생성)
	- resource: resource 파일의 디렉토리를 지정한다.
	- testSourceDirectory: java test case 소스 디렉토리를 지정한다.
	- testOutputDirectory: compile된 test case 소스 파일의 target 디렉토리를 지정한다.
	- testResource: test case용 resource 파일의 디렉토리를 지정한다.
  - `<profile>`
	- 다중 환경에서의 패키징을 위해 사용한다.
	- 환경에 맞게 지정한 파일들을 포함해서 패키징한다.
	- 설정 파일 등을 폴더에 넣어두고 환경에 맞게 -P 옵션으로 세팅할 수 있다.
	- 예) `mvn -P local package`
	![](https://t1.daumcdn.net/cfile/tistory/1313E235516C09041A)
	~~~xml
	<project ?xml version="1.0" encoding="UTF-8"?>  
	<project xmlns="http://maven.apache.org/POM/4.0.0"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
	https://maven.apache.org/xsd/maven-4.0.0.xsd">  
				
	<!-- POM model 버전 -->
	<modelVersion>4.0.0</modelVersion>
	<!-- 그룹의 아이디, 도메인 이름 -->
	<groupId></groupId>
	<!-- 빌드 시 mavenTest-0.0.1-SNAPSHOT.war 파일 생성 -->
	<!-- 빌드 시 파일 이름, 프로젝트를 구분하는 값  -->
	<!-- archetype:generate Goal이 성공적으로 실행되면, artifactId 이름의 폴더가 자동으로 생성된다. -->
	<artifactId>mavenTest</artifactId>
	<!-- 빌드 결과물의 버전 -->
	<version>0.0.1-SNAPSHOT</version>
	<!-- 패키지 유형 (jar, war, ear 등) -->
	<packaging></packaging>
	<!-- 프로젝트명 -->
	<name>mavenTest</name>

	<!-- 속성 정보 -->
	<!-- POM 내에서 공통적으로 사용되는 값 -->
	<properties>
		<property>
			<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
			<archiveName>${project.artifactId}</archiveName>
			<!-- ${debug_env}로 불러와 사용 -->
			<debug_env>true/false</debug_env>
		</property>
	</properties>

	<!-- 라이브러리를 받아올 저장소를 지정 -->
	<repositories>
		<repository>
			<id></id>
			<name></name>
			<url></url>
		</repository>
	</repositories>

	<!-- 설정 관리, 환경에 따라 세팅을 다르게 설정-->
	<profiles>
		<!-- local 일 떄 -->
		<profile>
			<id>local</id>
			<properties>
				<debug_env></debug_env>
			</properties>
			<build>
				<plugins>
					<plugin>
						<groupId>org.apache.maven.plugins</groupId>
						<artifactId>maven-war-plugin</artifactId>
						<version></version>
						<configuration>
							<webXml>src/main/webapp/WEB-INF/web.xml</webXml>
							<warName>${archiveName}</warName>
							<!-- 제외 목록 -->
							<warSourceExcludes></warSourceExcludes>
							<webResources>
								<resource>
									<directory>target/temp</directory>
									<includes>
										<!-- 포함 목록 -->
										<include></include>
									</includes>
								</resource>
							</webResources>
						</configuration>
					</plugin>
				</plugins>
			</build>
		</profile>
		<!-- local -->
	</profiles>

	<!-- 프로젝트에서 사용하는 의존 라이브러리 관리 -->
	<!-- dependency로 추가해 의존 모듈을 설정할 수 있으므로 별도로 다운로드해 추가할 필요가 없다 -->
	<dependencies>
		<dependency>
			<groupId></groupId>
			<artifactId>r</artifactId>
			<version>1.0.1-SNAPSHOT</version>
			<!-- 의존하는 범위 설정 (compile, runtime, provided, test) -->
			<scope></scope>
		</dependency>
	</dependencies>

	<!--빌드에 사용할 플러그인 관리, 프로젝트의 빌드 방법 지정 -->
	<!-- outPutDirectory를 설정하여 컴파일 결과를 위치시킬 폴더를 지정할 수 있다. 일반적으로 target/classes에 생성-->
	<build>
		<plugins>
			<plugin>
				<!-- 컴파일러 소스, 타겟 버전, 인코딩 방식 지정 -->
				<artifactId>maven-compiler-plugin</artifactId>
				<version>2.0.2</version>
				<configuration>
					<source>1.6</source>
					<target>1.6</target>
					<encoding>UTF-8</encoding>
				</configuration>
			</plugin>
		</plugins>
	</build>
	</project>
	~~~

---

### 참고한 곳
- https://goddaehee.tistory.com/199
- http://wiki.gurubee.net/display/SWDEV/Maven+Lifecycle
- https://bcho.tistory.com/740
