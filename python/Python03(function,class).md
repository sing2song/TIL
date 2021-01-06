# 함수
> python의 객체 지향

- 함수는 특정 기능을 수행하는 코드 묶음.

- 함수를 만들때 함수명은 가독성을 높이기 위해서 c언어 함수 스타일로 이름을 짓는다.

- 함수명은 소문자+밑줄(_)을 이용해서 함수명 작성 (ex.student_name)

- python에서의 내장함수와 사용자 정의 함수가 존재. ex. print() len()




## 사용자 정의 함수(user define function)

- 함수를 정의 할 때 `def` 키워드 사용
- 함수 선언 다음에 두 줄을 띄운다!(약속!!!)

```python
def my_sum(a,b,c):
    result=a+b+c
    return result


sum_result=my_sum(10,20,30)
print(sum_result)	#60

# 만약 sum이라고 이름을 지으면 존재하는 내장함수를 새로 덮어서 쓰게 되는 것이므로 원래의 고유 sum() 내장함수를 쓸 수 없다.
# 재정의의 유연성을 가지나 위험!
```



### 가변데이터 인자 사용시

- 함수를 정의해서 사용할 때 인자의 개수가 개변적일 때

```python
def my_sum(*tmp):	#tuple로 인자를 받는다!
    result=0
    for t in tmp:
        result+=t
    return result


print('결과값은: {}'.format(my_sum(1,2,3,4)))
#결과값은: 10
#함수내에서 tmp를 출력해보면 tuple로 출력된다.
```



### 여러개의 값을 리턴하는 함수

틀린 표현이지만 이해를 위해 위와 같이 표현.

기본적으로 리턴값은 하나만 가능하다!

**튜플**로 리턴하게 된다.

```python
def multi_return(a,b):
    result1=a+b
    result2=a*b
    return result1,result2	#tuple은  ()를 생략할 수 있다

#실제로는 (result1,result2)를 리턴하는 것이다
data1=multi_return(10,20)
print(type(data1))		#<class 'tuple'>
print(data1)			#(30,200)

data1,data2=multi_return(10,20)
#(data1,data2)상태
print(data1)
print(data2)
```



### default parameter

마지막 인자만 사용가능하다! 중간 인자는 사용불가 Error!

```python
def default_param(a,b,c=False):
    if c:
        result=a+b
    else:
        result=a+b+c
    return result

print(default_param(10,20))   #30
#3개의 인자가 들어가야하지만 넣지 않았으므로 default값인 False가 들어간다.
```



## call-by-value & call-by-reference

> 넘겨준 인자값이 변경되지 않는 경우

call by value =>immutable(파이썬 언어):변수값이 변하지않음,원본변경X

> 넘겨준 인자값이 변경되는 경우

call by reference=>mutable(파이썬 언어):변수값이 변함.

```python
def my_func(tmp_value,tmp_list):
    tmp_value = tmp_value +100
    tmp_list.append(100)
    
    
data_x=10
data_list=[10,20]

my_func(data_x,data_list)
print('data_x:{}'.format(data_x))		#10 => immutable(숫자,문자열,tuple)
print('data_list:{}'.format(data_list))	#[10, 20, 100] => mutable(list,dict)
```



##  local variable과 global variable

범위(scope)에 따라 달라지는 변수사용영역

```python
tmp=100

def my_func(x):
    tmp=tmp+x
    return tmp

print(my_func(20))	#ERROR!! 
#함수 내부에 있는 tmp와 함수 밖의 tmp와 다르기때문!!
```



> 함수 밖에 있는 변수를 사용하는 방법!!

```python
tmp=100

def my_func(x):
    global tmp	#global사용
    tmp=tmp+x
    return tmp

print(my_func(20))	#120

######################################
tmp = 100

def my_func(my_tmp,x):
#     global tmp
    my_tmp = my_tmp + x
    return my_tmp

print(my_func(tmp,20))
```



**BUT** 좋지 않은 방법!!!! 피해야한다!!!!!!

의존성이 높아진다. 독립적이여야할 함수가 연결이 되면서 흔히 말하는 스파게티코드가 될 수 있음!!



## 내장함수

가짓수가 매우 많음!

1. all(x) 함수 : 반복 가능한 자료형 x에 대해서 모든 값이 True이면 True. 만약 하나라도 False이면 False처리를 해주는 함수.

   ``` python
   a=[3.14,100,'Hello',True]
   print(all(a))	#True
   
   a=[3.14,0,'Hello',True]	#0은 논리값으로 False을 가짐
   print(all(a))	#False
   ```

2. any(x) 함수 : 반복가능한 자료형 x에 대해서 하나라도 True이면 True. 모든 데이터가 False이면 False 처리를 해주는 함수.

   ```python
   a=[0,1,'',None]
   print(any(a))	#True
   ```

3. len(x) 함수 : x의 길이를 알려주는 함수

4. int(), float(), list(), tuple(), dict(), str(), set() : 형변환



### 람다함수(lambda) : 대체 표현식

- lambda는 한줄로 함수를 정의하는 방법.

- 함수처럼 사용은 되지만 정확히 따지면 함수는 아니다! 식이다!

- 함수의 이름이 없기때문에 `anonymous function`이라고 하기도 한다.

- 스택 메모리 잡지 않으며 별도의 scope를 갖지않는다.

- 람다는 함수명이 없기때문에 일반적으로 `람다식(lambda expression)`이라고 불린다.

- 변수 = lambda 입력변수1, 입력변수2, ... : **대체표현식**

```python
f=lambda a,b,c : a+b+c

def my_sum(a,b,c):
    return a+b+c

#둘은 다르다!!
#함수는 별도의 스코프를 갖고 return 필요!
#람다식은 return이 없다. 처리된 결과를 돌려주는 것이 아닌 표현만 바꾸는 것.

print(f(10,20,30))	#60 print(10+20+30)과 같은 형태
```





# 객체지향

python 3.x로 변경되면서 객체지향 언어로 변환.

과거에는 프로그래밍을 하기 힘들었기에 이를 보완하기 위해 등장!

과거 프로그래밍(절차적 프로그래밍)

이진수 프로그래밍 => 010100001110101 : 변수생성
									101101110110010 : 복사

어셈블리어~  ADD, REGISTER

C를 위시한 고급 언어들이 등장!(절차적, 구조적 프로그래밍 대표언어)



프로그램을 기능으로 세분화 시킨다.

파악된 각각의 기능을 모듈로 만든다! => 함수로 각 모듈을 구현



장점 : 프로그램을 쉽고 빠르게 구현. 프로그램의 설계를 빠르게 할 수 있고 누가 설계를 하던지 거의 동일한 설계가 나온다.

단점 : 프로그램의 규모가 커지게 되면 유지보수가 힘들다. 개발비용보다 유지보수 비용이 더 커지는 현상. 

기존 코드를 재사용하는데 한계 => 함수단위로 가져다가 쓰던지. 코드 복사, 붙여넣기 재사용
재사용성에 한계.(매번하기가 힘듦)



## 객체 프로그래밍 방식

프로그램을 기능으로 세분화 하지 않는다.
해결해야하는 문제를 그래도 프로그램으로 묘사
프로그램을 구성하는 주체를 파악
은행을 구성하고 있는 주체들=>은행,계좌,사람,지점
이 주체들이 어떻게 서로 상호작용하는지를 프로그램적으로 묘사

> 장점: 프로그램의 유지보수성과 재사용성에 이점을 가질 수 있다.
> 단점: 프로그램의 설계와 구현이 상대적으로 어렵다.    

학계나 상대적으로 간단한, 특별한 유지보수가 필요없는 
이런 프로그램들은 절차적 프로그램 방식으로 구현
서비스류 프로그램들은 유지보수성 때문에 객체 지향적으로 구현하는게 좋다!



## class

class안에는 변수들과 함수들이 여러개 들어가 있다
class를 데이터 타입의 관점에서 바라볼 수 있다.

class : (현실세계의) 객체를 (프로그램적으로)모델링의 (프로그래밍)수단
class : 추상 데이터 타입(새로운 데이터 타입을 만들어내는 수단)

class를 기반으로 프로그램에서 사용할 수 있는 메모리 영역을 할당할 수 있다
instance라고 한다! =>객체

```python
# 학생을 프로그램적으로 표현해보아요!
# 1명의 학생을 표현하려면 이렇게 하면 될 꺼 같아요!
# 이름, 학과, 학점, 학번
stu_name = '홍길동'
stu_dept = '철학'
stu_num = '20200111'
stu_grade = 3.5

# 3명의 학생을 표현하려면
stu1_name='홍길동'
stu1_dept='철학'
stu1_num='20200111'
stu1_grade=3.5

stu2_name='김길동'
stu2_dept='영어영문'
stu2_num='20200113'
stu2_grade=4.5

stu3_name='신사임당'
stu3_dept='컴퓨터'
stu3_num='20200115'
stu3_grade=1.5

# 집합자료구조를 이용하면 조금 더 나은 표현이 되요!
#list를 이용해서 표현
stu_name=['홍길동','김길동','신사임당']
stu_dept=['철학','영어영문','컴퓨터']
stu_num=['20200111','20200113','20200115']
stu_grade = [3.5, 4.5, 1.5]
```

확실하게 모듈화가 되어있지 않고, index를 이용해서 프로그램 처리를 해야한다. 

이건 생각보다 프로그래밍을 어렵게 만드는 요소이다.



> 객체지향적으로 표현해보자!

학생
- 속성:이름,학과,학번,학점
- 기능:자신의 정보를 문자열로 만들어서 리턴한다.



사용자 정의 class를 만들때는 class명을 **반드시 첫글자를 대문자로 작성.**

python의 모든 class는 object class를 상속하고 있어요!

```python
class Student(object):
    #initailizer(생성자 - constructor)
    def __init__(self,name,dept,num,grade):
        #속성을 __init__ 안에서 명시를 해요!
        self.name = name
        #인자로 들어온 변수 
        #self.name = 이 함수가 가지는 name이라는 변수
        self.dept = dept
        self.num = num
        self.grade = grade
        
        
#이제 instance를 만들어 보아요!
students=[]
students.append(Student('홍길동','철학','20200111',1.5))    #객체 생성!!
students.append(Student('김길동','영어영문','20200113',3.5))    #객체 생성!!
students.append(Student('신사임당','컴퓨터','20200115',4.5))    #객체 생성!!

#2번째 객체인 김길동의 학과를 출력하자!
#객체가 가지는 속성이나 method를 access(사용)할 때는 연산자를 이용. '.'
#dot operator라고 한다!
print(students[1].dept)
```



### class안에서의 변수와 함수

- Java언어에서는변수를 field(필드), 함수를 method(메소드)
- C++언어에서는 변수를 member variable(멤버변수), 함수를 function(멤버함수)
- python언어에서는 변수를 property(속성,프로퍼티), 함수를 method(메소드)



```python
class Student(object):
    #initailizer(생성자 - constructor)
    def __init__(self,name,dept,num,grade):
        #속성을 __init__ 안에서 명시를 해요!
        self.name = name # 전달된 값으로 이름속성을 설정
        self.dept = dept
        self.num = num
        self.grade = grade
        
    #아래의 method는 객체가 가지고 있는 학생의 정보를 문자열로 리턴하는 역할을 수행하는 method
    def get_stu_info(self):#self넣어야한다!!
        return '이름 : {}, 학과: {}'.format(self.name,self.dept)
    
stu1=Student('강감찬','경영학과','20201120',3.4)
print(stu1.get_stu_info())
```

- class인스턴스 **`object`와 그 안의 메소드의 인스턴스인 `self` 잊지말기!!!**











