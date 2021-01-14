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





### JSON형태로 DataFrame생성법

**Json형태로 바꾸는 이유!!**

서로 데이터를 사용하기 편하도록하는 약속!

내가 가진 DataFrame의 내용을 다른 컴퓨터나 다른 사용자에게 전달하기 위해서는 이런 표준형태의 데이터 표현방식으로 변환시켜서 전달해야한다.



> 파일오픈 방법

python으로 파일처리를 할려면

1. 파일오픈
2. 파일 처리
3. 파일 close

위 처리를 하려면 코드가 늘어난다! 코드방식을 바꾸면 효율적으로 처리할 수 있음!!



> 원래의 코드

```python
file1 = open('test.txt')
file1.readline()
file1.close()
```



> 효율적 코드

```python
#column명을 json의 key값으로 이용해서 JSON을 생성
with open('./data/books_orient_column.json','w', encoding='utf8') as file1:
    df.to_json(file1, force_ascii=False, orient='columns')
    
    
#json에서 []가 나오면 배열!!
#records는 한 행의 대한 정보가 json으로 만들어져서 여러 개가 들어오게 된다.
with open('./data/books_orient_records.json','w', encoding='utf8') as file2:
    df.to_json(file2, force_ascii=False, orient='records')

```

> 코드해석

`open` : 해당파일을 읽기, 쓰기, 저장 등의 작업을 위해서 `open` 사용.

​			자동으로 파일에 대한 close작업이 일어난다.

​			위 폴더와 파일을 만들어서 open하겠다!!! (직접 폴더 만들고오세용)

여기서 `. ` 은 주피터 노트북의 경로. c:\python_ML이다.

`to.json` : json으로 바꾼다.

`w` : writing하겠다

open된 파일의 이름을 `file1`로 설정, 

`encoding ` : 한글표현을 위해 인코딩정보 넣기

`orient` : 방향, 기본값은 컬럼, records 사용가능



실행하면 각각의 폴더 안에 json파일이 생기는 것을 확인 할 수 있다! Visual code로 확인해보면 column.json, record.json파일을 읽을 수 있다.

![image-20210114132051176](md-images/image-20210114132051176.png)



하지만 읽기 불편함...

https://jsonformatter.curiousconcept.com/

Json으로 바뀌어진 데이터를 가시적으로 표현해주는 사이트...

위에서 만들어진 파일 속 데이터를 위 사이트에 복사 붙여넣기 해서 Process하면 어떤 구조로 json이 만들어져있는지 볼 수 있다.

> column.json (dict형태로 가져온다.)

![image-20210114133509598](md-images/image-20210114133509598.png)



> records.json (list형태로 가져온다.)

![image-20210114162705533](md-images/image-20210114162705533.png)



#### JSON 파일 jupyter로 읽어오기

json파일을 가지고 있을 때 파일을 읽어서 pandas의 DataFrame으로 만들어보자!

`json.load(파일)` : 파일을 json으로 읽어서 python의 dict로 변환해서 읽음

![image-20210114164042289](md-images/image-20210114164042289.png)

`pd.read_json(파일) ` : json으로 읽은걸 dataframe처리하여 보여줌

![image-20210114164101152](md-images/image-20210114164101152.png)

```python
import numpy as np   #외장 모듈이기 때문에 설치 작업이 필요
import pandas as pd  #외장 모듈이기 때문에 설치 작업이 필요
import json          #json은 내장모듈

with open('./data/books_orient_column.json','r', encoding='utf8') as file1:
    dict_book = json.load(file1) #json을 읽어서 python의 dict로 변환
				#pd.read_json(file1)으로 사용가능

print(dict_book)
print(type(dict_book))

#DataFrame은 만드는 법
#1. 일반 dict
#2. csv
#3. database에서 가져와서!

df=pd.DataFrame(dict_book)
display(df)
```





## 4. Open API로 DataFrame생성

Open API를 이용해서 그 결과를가지고 DataFrame으로 만들것

Open API(공개적으로 누구나 사용할 수 있는 웹 프로그램)



> 영화진흥위원회에서 제공하는 
>
> 일일 박스오피스 순위에 대한 
>
> Open API를 이용해보자!



1. 영화진흥위원회 open api검색!!

http://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do

해당 사이트에 들어가서 회원가입 후 키를 발급받고 open api를 이용해보자!



📌요청 URL(일별 박스오피스) : http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json

**(xml->json)으로 수정!**



![image-20210114151621995](md-images/image-20210114151621995.png)

2. 필요한 요청변수!! 확인

   key : 발급받은 키(회원가입, 로그인 필요)

   targetDt : 20210113 (오늘날짜는 안됨! 어제 날짜로 쓰기. 아직 상영중이기때문)

   

3. GET방식으로 호출!!!

   Query String을 이용해서 호출하라! (QueryString은 요청인자를 전달하기 위한 특별한 형식)

   사용형식: ?key=키값&targetDt=20210113

> 호출 API

=> http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=키값&targetDt=20210113

위 URL을 웹브라우저에 쳐보면 정보가 JSON형태로 전달되는 것을 알 수 있다!



_하지만 보기 어렵다!!_

보기 쉽게하는 방법 2가지!!

1. 위에서 사용한 JSON Formatter 사이트 이용하기
2. 크롬 웹 스토어에 가서 json formatter 확장프로그램 추가

![image-20210114152514206](md-images/image-20210114152514206.png)

2번을 실행 한 후에 호출 API를 url을 재검색하면 보기 쉽게 출력된다!!

키 값의 의미는 영화진흥위원회open api페이지 응답 구조에서 확인 할 수 있다.

ex) []로 표현된것은 json array, {}는 json

![image-20210114152649677](md-images/image-20210114152649677.png)