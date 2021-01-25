#### 3. Database로부터 데이터를 읽어서 생성

##### MySQL 설치

MariaDB와 MySQL의 포트번호가 같으므로 하나를 사용하는 것을 추천!

사양 및 설정을 맞추기 위해 강사님 따라서 설치해보자!



https://dev.mysql.com/downloads/

1. 위 링크를 타고 가서 **MySQL Community Server**로 들어가 (현재(21.01.13)기준 최신버전은 8.0.22) 옆에 보면 이전버전을 찾아서 다운이 가능하다.

![image-20210113152605646](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210113152605646.png)

5.6.50 버전으로 선택해서 

![image-20210113152736334](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210113152736334.png)

다운로드!!

![image-20210113152952102](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210113152952102.png)

2. No thanks를 누르면 회원가입 없이도 다운이 가능하다.

   다운 받은 파일은 바탕하면에 두자!!(따라하기 편하게 하기 위할뿐)

3. 다운 받은 폴더 압축풀기 ( setup같은 것이 있는 것이 아님!)



##### MySQL 실행

1. 윈도우 cmd창 띄우기!(win+R키 : cmd입력)

![image-20210113153754077](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210113153754077.png)

2. cd명령어로 다운받은 폴더 내의 bin폴더 위치로 옮기기

   ```bash
   cd C:\Users\32153256\Desktop\mysql-5.6.50-winx64\mysql-5.6.50-winx64\bin
   ```

   

3. 실행하는 법 : cmd창에서 `mysqld` 명령어 실행.

4. 방어벽 허용.

5. 종료하는 법 : 새로운 cmd창을 하나 더 띄우고 cd로 bin폴더로 움직인다음에 `mysqladmin - u root shutdown` 명령어로 종료할 수 있다



> 새로운 사용자 ID/PW 만들기

1. mysql console에 들어가기. (관리자 권한)
2. `mysql -u root` 입력!(**그 전에 다른 cmd에서 mysqld를 명령을 실행해둬야한다! 총 cmd창을 2개 띄우는 것!!!!!!!!!!!!**)
3. console에 들어가면 mysql> 로 시작하는 프롬프트가 보인다.
4. 정상적으로 접속했으면 새로운 사용자를 다음의 명령어로 만든다.

```mysql
create user data identified by "data"; 
#"data"부분은 ID(스스로지정) password부분도 지정해서 넣어주기?
```

5. 외부 접속을 위해 다음의 명령을 한 번 더 실행!

```mysql
create user data@localhost identified by "data";
#@localhost가 없으면 외부접속이 불가능!
```

6. 데이터가 저장될 데이터베이스를 생성해야한다! 우리가 사용하는 mysql은 DBMS(DataBase Management System=데이터베이스 관리도구)

7. 실제 데이터를 저장할 공간. 데이터베이스라는 공간을 만든다. 

``` mysql
   create database library; #database생성
```

   현재 사용자(data)가 따로 있고 database(library)가 따로 있는 상황!

8. 사용자가 데이터베이스를 사용할 수 있도록 권한을 부여할 것.

```mysql
grant all privileges on library.* to data; #data는 사용자 이름
grant all privileges on library.* to data@localhost; #data는 사용자 이름
```

![image-20210113163624746](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210113163624746.png)



9. 권한 설정에 대한 refresh를 시킨다.

```mysql
flush privileges;	#권한 적용
```



10. 설정을 다 끝냈으므로 console에서 나오기!

```mysql
exit;
```



11. exit해서 나온 도스창(cmd)에서 강사님이 제공한 script file을 이용해서 데이터를 적재하기.

    C:\Users\32153256\Desktop\mysql-5.6.50-winx64\mysql-5.6.50-winx64\bin에 저장했음. (_BookTableDump.sql)

    ```bash
    mysql -u data -p library < _BookTableDump.sql
    ```

    

    #data계정의 권한으로 library 데이터 베이스 안에 데이터를 넣겠다는 뜻.

    pw를 "data"로 넣을 것

    

    -p: 나중에 password넣겠다

    <: library 데이터베스 안에 넣겠다는 의미

![image-20210113164945824](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210113164945824.png)





##### Toad 설치

12. `toad for mysql` 다운받기. mysql을 다루는 툴인 toad!!!

https://www.toadworld.com/downloads

![image-20210114093037664](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210114093037664.png)

MySQL페이지에서 Toad Edge 선택!

![image-20210114093129310](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210114093129310.png)

Limited freeware선택해서 이메일 적고 window 다운!

![image-20210114093328225](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210114093328225.png)

default값으로 따로 선택할 거 없이 install한다!



##### Toad 실행

![image-20210114100435582](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210114100435582.png)

1. connection 눌러서 어제 만든 database로 접속!
2. cmd창에서 명령어`mysqld`로 mysql 켜두기!!





### pymysql설치



anaconda prompt에서 설치.

anaconda가 제공해주는 레파지토리에 있으면 실행되고 없으면 다른 곳에서 설치해야한다!

![image-20210114102925309](C:%5CUsers%5C32153256%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210114102925309.png)



### 데이터베이스 접속

연결이 성공하면 연결객체가 생성된다! conn으로 받음!

```python
import pymysql.cursors
import numpy as np
import pandas as pd

conn = pymysql.connect(host='localhost',
                       user='data',
                       password='data',
                       db='library',
                       charset='utf8')
print(conn)
#<pymysql.connections.Connection object at 0x0000025E973D07C8>
```

host, user, password, db를 설정해서 연결하기!



> 접속이 성공했으면 데이터를 가져오자!

Q.  책 제목에 특정 키워드('여행')이 들 어있는 책들을 검색해보자!

책 제목에 여행이라는 키워드가 들어가있는 책만 검색

database에서 데이터를 가져오려면 database에서 사용되어지는 언어로 질의를 전달해야 한다!

질의(query)를 전달한다=>SQL(데이터베이스용 프로그래밍 언어)

```python
keyword='여행'

sql = "SELECT bisbn, btitle, bauthor, bprice FROM book WHERE btitle LIKE '%{}%'".format(keyword)

#python의 예외처리를 이용하는게 좋다!
#데이터베이스가 중지되어있으면 당연히 오류가 나기 때문에!
try:
    df=pd.read_sql(sql,con=conn)
    display(df)
except Exception as err:
    print(err)
finally:
    conn.close()   #database연결 종료    
```

![image-20210114113908016](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210114113908016.png)



