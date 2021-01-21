# WEB💻

🚩`HTTP protocol`로 통신하는 클라이언트/서버 프로그램을 개발할거다!

`Django`를 사용할 예정.(서버)

클라이언트부터 배워갈것입니다~~~



- `protocol(프로토콜)` : 데이터 통신을 주고받기 위해서 지켜야하는 약속 혹은 규약.

- 2개의 프로세스가 통신을 주고 받으려면 약속이 필요하다. 이러한 약속(프로토콜)이 많다! web에서 사용되는 대표적인 프로토콜은 `HTTP protocol`.

- 웹 클라이언트/서버 프로그램 : 따로 개발할 수도 있고 함께 개발도 가능



## WEB program

CS구조로 되어있다.

=> 클라이언트(C) - 서버(S)

클라이언트 : 능동적으로 서비스를 요청.

서버 : 클라이언트 요청에 대해 서비스를 제공.



`WEB client `: 웹 서버에 접속하는 클라이언트 프로그램!!

ex. Browser(chrome, IE, safari, firefox 등)

`WEB server` : 웹 클라이언트의 요청을 받아 스비스를 제공하는 프로그램!!

ex. Apache web server

**둘 다 컴퓨터가 아니라 프로그램이다!**



클라이언트와 서버를 만드는 것이 아니라 어플리케이션을 만드는 것!!

web client application : 클라이언트에서 동작하는 응용프로그램. (HTML,CSS,javascript)

web server application : 서버에서 동작하는 응용프로그램.(Django-python, Servlet-java)



## Protocol/Port

`protocol(프로토콜)` : 데이터 통신을 주고받기 위해서 지켜야하는 약속 혹은 규약. (ex. HTTP)

`port(포트)` : 0~65535 사이에 있는 하나의 숫자. 하나의 프로세스(프로그램)을 지칭하는 숫자. **unique**하다!

0~1024 : reserved(예약, 지정된 값)

1025~65535 : 사용자가 사용가능한 범위.



## IP/MAC address

컴퓨터 외부에서 내부에 있는 프로그램이랑 연결을 하려한다! 그 때 필요한 것은 `IP address (인터넷 주소)`

`IP 주소` : Network에 연결되어있는 각종 기기에 부여되는 논리적인 주소. 4자리. (ex. 192.168.34.2)

`MAC 주소` : Network에 연결되어있는 물리적인 주소. 변경불가능!! 6자리. (ex.34.37.128.34.2.76)

프로그램할땐 IP 주소를 사용한다. 컴퓨터는 통신하기 위해선 물리적인 주소인 MAC주소를 쫓으므로 내부적으로 IP→MAC주소로 변경해주는 프로토콜도 존재한다.



> Protocol, port, IP주소가 기본적인 네트워크 통신 재료!!

```bash
HTTP://192.168.0.34:4000
```

HTTP:// : protocol,이 규칙(HTTP)을 가지고 주소를 찾아갈 것!

192.168.0.34 : IP

4000 : port



## HTTP protocol

![image-20210121101742053](md-images/image-20210121101742053.png)

> 순서

- web client 에서 web server로 요청(HTTP request)를 보낸다.

- 논리적인 데이터 통로가 연결되게 된다! (request를 보낼 때 만들어짐)

- web server는 응답(HTTP response)을 보낸다.

- 계속 연결되어있지 않고 사용이 끝나면 연결을 끊는다.



_연결을 끊는 이유?!_

why=> 서버는 한정 되어있기 때문에! 클라이언트 수를 조절 할 필요가 있기 때문이다.

**But**, 서버가 클라이언트를 구별할 수 없는 문제가 발생한다! IP주소로는 구분하지 않는다. 논리적 주소이기 때문에 변경이 됨. => **stateless**

서버가 클라이언트의 상태를 알 수가 없다. 그래서 http protocol를 `stateless protocol`이라고 부르기도 한다.





## 📢잠깐 CHECK

- web client(web client program) : 우리가 작성할 수 있고. 브라우저로 이용가능 ex. Browser

- web server(seb server program) : performance가 중요하기 때문에 우리가 작성하지 않는다. 프로그램을 받아서 사용한다. ex. Apache, IIS, Oracle Web server

- protocol : 여러가지 규칙이 존재한다. 

  ex. HTTP(WEB전용 프로토콜), FTP(file전송전용 프로토콜), SMTP(simple message transfer protocol, e-mail 관련 프로토콜)

- IP, Port → URL(주소체계 통칭)을 만들 수 있다.

- 클라이언트와 서버가 주고 받는 Request, Response 





