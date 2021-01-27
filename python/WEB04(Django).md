# WEB server

인터넷을 통해서 client의 request가 전달되었을 때 이 요청을 처리하는 hardware & software => 정적 resource 서비스



## WSGI

**Web Server Gate Interface**

python에 종속된 개념



앞에단 아파치를 쓰는데 현재 쓰지 않는다! 쓸려면 연동한것을 이어줘야함. 그 때 사용하는 파일. **외부 웹서버와 연동하기 위한 파일이 wsgi파일!**

우리는 쉽게 가기 위해 중간 아파치 서버단계를 넘기고 WAS안에 있는 미들웨어로 바로 갈것이다!





# Django

## 특징

![image-20210127130653026](md-images/image-20210127130653026.png)

- 전체 프로그램을 프로젝트라고 표현!

- 모듈화된 단위 프로그램 = 하나의 기능을 갖고있는 모듈.

  ex. 회원관리, 회원등록, 회원적으로 관련된 것, 우리사이트 내에서 도서에 관련된 것, 

- 개개인의 어플리케이션들이 프로젝트를 만드는 것. (다른 곳에서는 어플리케이션을 하나의 모듈로 보기도하기 때문에 용어 혼동조심!!)

- 프로젝트는 어플리케이션들의 모음





## 설치

1. anaconda prompt에다가 설치한다

   base상태에서 설치하자!

```bash
conda install django	#설치
```

​	1-1. django설치확인

```bash
python -m django --version
# 2.2.5 로 나온다
```




2. python-Django폴더를 생성해서 장고와 관련된 파일은 이 폴더에 서 진행하자!

```bash
(base) C:\Users\32153256>cd ..

(base) C:\Users>cd ..

(base) C:\>mkdir python-Django

(base) C:\>cd python-Django

(base) C:\python-Django>  
```



3. django-admin이라는 코드를 사용할 수 있다. 프로젝트 뼈대를 만들기 위한 것! 샘플 프로젝트를 만들겠다는 것!

   startproject 뒤에는 프로젝트의 이름을 지정해서 넣어준다

```bash
(base) C:\python-Django>django-admin startproject mysite
```

​	3-1. 탐색기를 열어서 현재 상태를 파악해보자!

​	현재 진행하려는 프로젝트의 최상위 폴더가 생성되었다!

​	내 프로젝트를 관리하는 목적의 관리 프로젝트이기 때문에 이름을 꼭 mysite로 진행하지 않아도 된다! **MyFirstWeb**으로 바꿔서 진행하자!=>안에 mysite폴더가 또 있기 때문에 헷갈림을 방지하고자!  

​	내부의 mysite폴더 : 내 프로젝트에서 사용하는 설정들의 모음.(이름변경X)

![image-20210127140929022](md-images/image-20210127140929022.png)

![image-20210127141205038](md-images/image-20210127141205038.png)



4. **anaconda prompt에서 위에서 만든 폴더로 이동한 다음에 startapp으로 polls라는 이름의 어플리케이션을 프로젝트내에 manage.py를 이용해서 만든다라는 의미**

```bash
(base) C:\python-Django\MyFirstWeb>python manage.py startapp polls
```

![image-20210127141942969](md-images/image-20210127141942969.png)



### ☝파일구조 확인

현재까지 진행한 project의 폴더 구조

![image-20210127144427718](md-images/image-20210127144427718.png)

>설명

- MyFirstWeb(project)

  ​	db.sqlite3(database 파일) - **아직 생성안함!**

  ​	manage.py

  ​	mysite(프로젝트에 대한 설정을 갖고있는 폴더) 

  ​	polls(application)

  

- mysite폴더

  `__init__.py` : 3버전와선 거의 사용X, 의미 X

  `settings.py` : 프로젝트의 전체설정

  `urls.py` : project level의 url pattern을 정의하는 **URL conf파일.** (MVT패턴에서 사용되는 URLconfig와 관련)

  보통 application 내에도 urls.py를 만들어서 계층 구조로 이용

  =>

  `wsgi.py` : 웹 서버 게이트웨이 인터페이스. Apache와 같은 웹서버와 연동하기 위한 설정. (현재, 우리는 사용하지 않는다! 이유는 위 WSGI파트에서 서술)

  

- polls폴더

  `admin.py` : Admin site(관리자 페이지)에 model class를 등록. 우리는 OMR을 쓰니까 모델이 데이터베이스랑 연동된다. sql code가 아니라 데이터베이스를 제어하는 내용을 관리자 페이지에 설정 및 처리를 한다.

  장고는 자동적으로 관리자 페이지가 만들어지게 된다.

  ex) 내가 파이썬에서 모델 클래스를 하나 만들면 database에 테이블이 만들어진다. 어떤 데이터베이스가 사용이 되는지 관리자페이지에서 확인을 해야한다. 

  `apps.py` : application 설정클래스를 정의하는 파일

  `migrations 폴더` : database변경사항을 관리하는 폴더. DB에 대한 CRUD가 발생하면 관련된 파일들이 들어가게 된다. 

  `models.py` : 데이터베이스 테이블과 연관된 모든 클래스를정리하는 파일. => 클래스를 만들게 되면 데이터베이스에 테이블이 만들어지게 되는 것.

   `views.py` : View함수를 정의하는 파일. **로직처리**하는 함수가 View.






### 파이참 설치

1. professional 버전으로 설치!

![image-20210127150712683](md-images/image-20210127150712683.png)

이대로 install~ 바탕화면에 설치 된 것을 사용!

난 현재 학생용으로 구비해뒀기때문에 문제 없음!



2. open 해서 우리가 만든 python-Django 에서 위에서 만든 최상위 폴더인 MyFirstWeb폴더로 들어간다

![image-20210127151138794](md-images/image-20210127151138794.png)

![image-20210127151250326](md-images/image-20210127151250326.png)







  ### settings.py

















# MVT pattern(Model기능 View함수 Template )

![image-20210127131331329](md-images/image-20210127131331329.png)

웹 클라이언트에서 request를 보내면 제일 먼저 서버에서 URLConf를 거쳐서 View로 들어간다. View는 함수의 집합으로 볼 수 도 있고 class의 메소드.

View에서는 기능을 수행하는 로직을 갖고 있고, Model한테 CRUD를 시킬 수 있다. ORM을 통해서 Database와 연결.

​	ORM : python class를 이용해서 Database를 사용하는 것

나온 결과로 Template을 통해 View를 거쳐 response를 클라이언트에게 전달해준다.



# 🚩프로젝트!!

책에 있는 내용을 차용해서 쓸 예정(폴 프로젝트?) 

실수나 오류를 방지하기 위해서.... 우리가 받은 책에 있을 거당!!

## 설계

> Poll project(설문조사 웹 프로그램)

ex)![image-20210127132447411](md-images/image-20210127132447411.png)



> Database Table 설계



테이블은 몇개 필요할까? 

DataFrame처럼 2차원 배열을 생각해봅시다!

1. Question table

   column 3개(id, question-text,pub-date)

- id : 숫자, 자동생성(시퀀스), primary key, not null

- question-text: 문자열, not null

- pub-date: 날짜, 언제 설문을 만들었는가



2. choice table

각 질문당 보기가 있어야한다! detail.html

column 4개(id, choice-text, votes, question_id)

- id : index로 생각
- choice-text : 문자열, 항목들이 저장됨
- votes: 숫자, 각 항목들이 몇번 선택됐는지. 투표횟수.
- question_id : 각 항목은 어떤 질문에 대한 항목인가. **Question table의 id와 같다** 외래키.(Foreign key)



## 실행





