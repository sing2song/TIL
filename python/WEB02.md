# 리뷰
## 네트워크



![image-20210122091854595](C:%5CUsers%5C32153256%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210122091854595.png)

- 네트워크 : 컴퓨터간의 데이터 통신망

- 인터넷 : 네트워크로 구성된 네트워크. 전세계의 통신망. 네트워크를 네트워크로 만든 물리적인 Framework.

- 사람들은 인터넷 위에서 동작하는 서비스를 만들려고 노력함. ex. HTTP Web Service, SMTP(Email), FTP

  ❌인터넷이 안돼요~ => ⭕네트워크가 안돼요~



## WEB

하나의 프로그램에 WAS와 webserver가 같이 구동되도록 하는 프로그램들이 많다. 하지만 우리는 개념파악을 위해 따로 공부!

- Web client(web client program) 

  → browser(chrome)

  → 따로 구현할 수 있다.

- Web server(web server program) 

  → Apache,IIS,oracle web server

  → 따로 구현하지 않는다. 

  → 정적인 클라이언트를 서비스한다.(web server가 처리)

  → 동적인 컨텐츠를 만들어서 서비스하지 않는다.(서버에서 별도의 `Web program=Server Side Web Application`을 실행시켜서 나온 결과)

  ☞ 자신이 할 수 없으니 `WAS(Web Application Server)` 에게 위임

- WAS

  별도의 결과를 서버로 돌려줘서 클라이언트에게 보여줄 수 있다!



## library vs Framework vs platform

library : 특정기능을 수행하는 코드묶음. 로직을 포함하지는 않는다. ex. 파이썬에서의 module

Framework : 라이브러리의 개념을 확장시킨 것. 시스템이 어떻게 돌아가지는지 이미 만들어져있음. 구축되어있는 시스템. 우리는 만들어져있는 것에서 수정하면 된다! ex. Django 

platform : 다른 프로그램을 실행시켜주는 프로그램! ex. OS계열들(windows, Linux 등)





