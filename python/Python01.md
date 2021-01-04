## 📌Python

1. 러닝커브가 얕다
2. 무료/간결
3. 교육용으로 시작하다보니 코드의 가독성이 높다
4. 다양한 분야에서 이용가능(WEB, DB, 데이터 분석, AI쪽)

mobile App을 만들기는 적합X 시스템 프로그래밍도 안됨!



### ☝파이썬의 특징

1. 상대적으로 쉬운 언어
2. 강력한 데이터분석 library, AI관련 library가 많다!
3. open source(무료)
4. 데이터분석을 위한 범용적인 언어 (R: 통계를 위한 프로그래밍 언어)
5. 가장 인기있는 언어 중에 하나.
6. 하위 호환성은 문제! (2.x버전과 3.x버전)
7. 배열이 없다! 리스트의 개념만 알아두자!



### 파이썬을 코딩하는 IDE

1. pycham(파이참)

2. jupyter
3. anaconda

`anacond`를 이용해서 파이썬을 이용해보기로 했다! 자세한 설치 및 이용법은 AI(private)에 기술



### 주석

```python
# 1줄 주석
여러줄 주석 ''''''
```



### Python의 Data Type(Built in Data)

```python
#목차
#1. numeric
- int , float, complex
#2. sequence
- list, tuple
#3. text sequence(문자열)
#4. mapping
#5. set
#6. bool
```



#### 1. Numeric(숫자형)

```python
#정수(int), 실수(float), 복소수(complex)
a=123		#정수
b=3.141592  #실수
c=1+2j		#복소수
d=0o34		#8진수
e=0xAB		#16진수
```

![image-20210104170510149](../../ssong/AI(private)/md-images/image-20210104170510149.png)

__연산법__

```python
#연산은 무조건 같은 데이터 타입끼리!
a=3+3.14
print(a) # 6.14000000001<<floating point연산의 오류

a=3/4    #0.75
#정수/정수=정수가 나오는 것이 아닌 정말 나눗셈을 한다!!
print(a)

#지수표현
a=3 **4
print(a) #81

#나머지 연산
a=100%3
print(a) #1

#나눗셈의 몫
a=100//3
print(a) #33
```



#### 2. sequence 데이터 타입

- 임의의 데이터를 순서대로 저장하는 집합 자료형
- 파이썬은 배열이 없으며 리스트의 개념만 있다!!
- Java의 ArrayList와 비슷



**리스트(list)**

- 대괄호[]를 사용해서 리스트 표현

```python
a=list() #빈 리스트 생성
a=[]	 #빈 리스트 생성
a=[1,2,3,4,5,True]
a=[1,2,[4,5],6]
a=[1,2,['show','me','the','money'],3.14,True] #리스트 안에 리스트
print(a) #[1,2,['show','me','the','money'],3.14,True]
```

> **인덱싱(indexing)**

```python
print(a[1]) #2 <<이와 같은 표현은 인덱싱(indexing)이라고 표현
print(a[2]) #['show','me','the','money']
print(a[-2]) #3.14 다른 언어에서는 오류, 파이썬에서만 가능
print(a[2][2]) #the 2차 배열이 아님 a[2][1]=>me
```

> **슬라이싱(slicing)**

부분 집합을 얻는 것이기 때문에 원본의 데이터 타입을 그대로 계승. [inclusive : exclusive]

```python
print(a[1:4])
print(a[0:1]) #[1] 원본과 결과본이 같아야한다!!! list형태로 나오게 된다!
print(a[3:])  #[3.14,True]
print(a[:2])  #[1,2]
print(a[:])
print(a[:-1])
```

> **연결(concatenation)**

```python
a=[1,2,3]
b=[4,5,6]
print(a+b) #[1,2,3,4,5,6]
print(a*3) #a+a+a =>[1,2,3,1,2,3,1,2,3]

a=[1,2,3]
a[0]=5 #[5,2,3]
#1.
a[0:1]=[7,8,9] # 부분리스트를 이걸로 대체하기
print(a)       #[7,8,9,2,3]
#2.
a[0]=[7,8,9]
print(a)       #[[7,8,9],2,3]
```

> **추가/삭제**

```python
a=[1,2,3]
#1.
a.append(4) 
print(a) # [1,2,3,4]
#2.
a.append([4]) 
print(a) #[1,2,3,[4]]

del a[0]
print(a)
```

> **정렬**

```python
#python의 리스트(list)는 집합자료구조이면서 다양한 기능을 가지고 있다
# 많은 함수를 이용해서 이런 기능들을 우리에게 제공한다.

a=[7,3,1,8,2]
#sort()함수는 리턴이 없다!
result=a.sort()	#None
a.reverse()		#리스트 자체를 역순으로 정렬한다!
print(a)		#[2, 8, 1, 3, 7]
a.sort()
print(a)		#[1, 2, 3, 7, 8]
a.reverse()
print(a)		#[8, 7, 3, 2, 1]
```



**튜플(tuple)**

- () 소괄호를 이용해서 표현
- 값 수정이 불가능하다
- 소괄호가 생략가능하다

```python
a=tuple() #tuple
a=() #tuple
a=(1,2,3) #[1,2,3]과 비슷한 의미

a=[1]     # 요소를 1개만 가지고 있는 list
b=(1,)    #()의 의미가 다르다. 요소가 1개짜리 tuple은 ,를 이용해서 표현
print(type(b))#<class 'tuple'>
a=(1,2,3) #tuple
print(type(a)) #<class 'tuple'>

#tuple은 특이하게 소괄호를 생략할 수 있다.
b=4,5,6
print(type(b)) #<class 'tuple'>

#tuple은 값을 수정 할 수 없다!!!
b[0]=100  #Error!!
```



> **인덱싱, 슬라이싱,연결**

```python
# indexing과 slicing방식은 list와 동일.

a=(1,2,3)
b=(4,5,6)
print(a+b) #(1,2,3,4,5,6)

last=[1,2,3] #list

#list를 tuple로 변환시키자!
print("last=",last)	# last= [1, 2, 3]
result=tuple(last)	
print("last=",result)# last= (1, 2, 3)
```
