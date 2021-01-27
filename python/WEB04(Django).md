# Django

## 설치

anaconda prompt에다가 설치한다

```bash
conda activate data_env #위치이동
conda install django	#설치
```



![image-20210127130319115](C:%5CUsers%5C32153256%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210127130319115.png)













![image-20210127130653026](md-images/image-20210127130653026.png)

## 특징

- 전체 프로그램을 프로젝트라고 표현!

- 모듈화된 단위 프로그램 = 하나의 기능을 갖고있는 모듈.

  ex. 회원관리, 회원등록, 회원적으로 관련된 것, 우리사이트 내에서 도서에 관련된 것, 

- 개개인의 어플리케이션들이 프로젝트를 만드는 것. (다른 곳에서는 어플리케이션을 하나의 모듈로 보기도하기 때문에 용어 혼동조심!!)





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

- question-text:

- pub-date