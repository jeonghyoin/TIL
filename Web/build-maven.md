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

### **Maven 설정 파일**
- **setting.xml**
  - **Maven 빌드 툴**과 관련된 설정 파일이다.
  - Maven 설치 시 기본적으로 제공되며 MAVEN_HOME/conf 내에 위치한다.
  
- **POM(pom.xml)**
  - Maven 프로젝트의 최상위에 하나씩 존재하는 xml 파일이다.
  ~~~xml
		<?xml version="1.0" encoding="UTF-8"?>  
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
		<artifactId>mavenTest</artifactId>
		<version>0.0.1-SNAPSHOT</version>
		<!-- 패키지 유형 -->
		<packaging>jar/war</packaging>
		<!-- 프로젝트명 -->
		<name>mavenTest</name>

		<!-- 속성 정보 -->
		<!-- POM 내에서 공통적으로 사용되는 값, ${org.springframework-version} 처럼 사용 -->
		<properties>
			<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
				<archiveName>${project.artifactId}</archiveName>
				<debug_env>true/false</debug_env>
				<site_env>module name</site_env>
				<build_script></build_script>
			</properties>
		</properties>

		<!-- 라이브러리를 받아올 저장소를 지정 -->
		<repositories>
				<repository>
					<id></id>
					<name></name>
					<url></url>
				</repository>
			</repositories>
		</repositories>

		<!-- 설정 관리 -->
		<profiles>
		    <profile>
			    <id></id>
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
								<warSourceExcludes><!-- 제외 목록 --></warSourceExcludes>
								<webResources>
									<resource>
										<directory>target/temp</directory>
										<includes>
											<include><!-- 포함 목록 --></include>
										</includes>
									</resource>
								</webResources>
							</configuration>
						</plugin>
					</plugins>
				</build>
			</profile>
		</profiles>

		<!-- 프로젝트에서 사용하는 의존 라이브러리 관리 -->
		<dependencies>
			<dependency>
				<groupId></groupId>
				<artifactId>r</artifactId>
				<version>1.0.1-SNAPSHOT</version>
			</dependency>
		</dependencies>

		<!--빌드에 사용할 플러그인 관리, 프로젝트의 빌드 방법 지정 -->
		<build>
			<plugins>
				<plugin></plugin>
			</plugins>
		</build>
		</project>
	~~~

---

### 참고한 곳
https://goddaehee.tistory.com/199
http://wiki.gurubee.net/display/SWDEV/Maven+Lifecycle
