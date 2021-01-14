# Pandas

## 3. Database를 이용해 DataFrame생성

MySQL에서 data를 읽어와서 DataFrame으로 만들것

python프로그램이 MySQL DBMS에 접속해야한다!

python은 데이터베이스에 접속할 모듈이 없기 때문에 외부모듈 필요하다!

모듈을 설치하는법?! 구글링!!
pymysql모듈을 이용할 것!



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

![image-20210114113908016](md-images/image-20210114113908016.png)



