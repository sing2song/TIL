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



# class

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

ex. 학생

- 속성:이름,학과,학번,학점
- 기능:자신의 정보를 문자열로 만들어서 리턴한다.



- 사용자 정의 class를 만들때는 class명을 **반드시 첫글자를 대문자로 작성.**


- python의 모든 class는 `object class`를 상속하고 있어요!(생략가능)
- _ _init_ _함수는 생성자와 비슷한 개념 안에 self 속성을 넣어준다.

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



## class안에서의 변수와 함수

- Java언어에서는변수를 field(필드), 함수를 method(메소드)
- C++언어에서는 변수를 member variable(멤버변수), 함수를 function(멤버함수)
- python언어에서는 변수를 property(속성,프로퍼티), 함수를 method(메소드)

- class인스턴스 **`object`와 그 안의 메소드의 인스턴스인 `self` 잊지말기!!!**



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

stu1.name='홍길동'	#내용바꾸기 가능
pribt(stu1.name)

stu1.names='이황'	#파이썬에서는 가능! 새로운 속성이 추가가 된다!
				 #javascript와 비슷.
pribt(stu1.names)
```



## class변수

`class variable` : class안에 있는 것들이 공유하는 것.

`instance variable` : 각각의 인스턴스가 갖는 속성

`instance method` : 각각의 인스턴스가 갖는 메소드

전부 밖에서도 변경이 가능하다. (python에서만 가능!)

인스턴스가 가지고 있는 속성은 외부에서 직접적인 **변경이 불가능하도록** 코드를 작성하는 것이 좋다.

**차라리 바꾸는 메소드를 만들어서 사용하는 것이 좋음!**

```python
class Student(object):
    scholarship_rate = 3.0  #class variable
    def __init__(self,name,dept):
        self.name=name     #각각의 객체(인스턴스)가 따로 들고있는 것.
        self.dept=dept     #instance variable
    
    def get_student_info(self):  #instance method
        return '이름은 : {}, 학과는 : {}'.format(self.name,self.dept)
        
	def change_info(self,name,dept):
        self.name=name
        self.dept=dept
        
    def is_scholarship(self):
        if self.grade>=Student.scholarship_rate:
            return True
        else:
            return False
        
        
stu1 = Student('미미','요리학과')
stu2 = Student('한솔','컴퓨터과')

print(stu1.get_student_info())
print(stu2.get_student_info())

#본래 객체지향에서는 객체가 가지고 있는 속성과 메소드만 사용할 수 있다.
#현재 stu1객체는 2개의 property와 1개의 method를 가지고 있다.


stu1.names='이황'	#파이썬에서는 가능! 새로운 속성이 추가가 된다!
				 #javascript와 비슷.
print(stu1.names)	#이황
print(stu1.scholarship_rate)	#3.0
stu1.scholarship_rate=3.5
print(stu1.scholarship_rate)	#3.5
print(stu2.scholarship_rate)	#3.0
#위와 같은 상황은 `namespace` 를 알면 간단히 이해할 수 있다!

Student.scholarship_rate=2.0  #class variable을 변경할때에는 클래스 이름사용.
print(stu1.scholarship_rate)

stu1.change_info('나리','유아교육')
#인스턴스가 가지고 있는 속성은 외부에서 직접적인 변경이 불가능하도록 코드를 작성하는 것이 좋다.
#차라리 바꾸는 메소드를 만들어서 사용하는 것이 좋음!
print(stu1.get_student_info())
```



- 객체지향의 꽃 => 재사용성확보

- 상속은 상위 클래스 특징을 이어받아서 확장된 하위 클래스를 만들어내는 방법 => 코드의 재사용성에 장점

- 상속을 이용하면 class간에 계승관계 성립



상위 클래스 : 상속을 내려주는 클래스

=상위클래스, super class, upper class, parent class, 부모 클래스....

하위클래스 : 상속을 받아서 확장하는 클래스

=하위 클래스, sub class, child class, 자식클래스



> `namespace`는 객체들의 요소들을 나누어서 관리하는 메모리공간

- 우리가 속성이나 method를 이용할 때 계층구조를 이용해서(namespace를 따라가면서) 속성과 method를 찾는다)

- 인스턴스 네임스페이스에서 찾고 후에 클래스 네임스페이스에서 찾고 supper 클래스 네임스페이스에서 찾는다.



> 인스턴스 네임스페이스=>클래스 네임스페이스=>supper클래스 네임스페이스

이 방향으로 사용하려는 메소드와 속성을 찾는다!

```python
class Student(object):
    
    scholarship_rate = 3.0  #class variable
    
    def __init__(self,name,dept,grade):
        self.name=name     #각각의 객체(인스턴스)가 따로 들고있는 것.
        self.dept=dept     #instance variable
        self.grade=grade   #instance variable
    
    def get_student_info(self):  #instance method
        return '이름은 : {}, 학과는 : {}, 학점은 : {}'.format(self.name,self.dept,self.grade)
        
    def is_scholarship(self):
        if self.grade>=Student.scholarship_rate:
            return True
        else:
            return False
        
stu1=Student('홍길동','철학',2.0)
stu2=Student('신사임당','컴퓨터',4.0)

print(stu1.is_scholarship())	#False
print(stu2.is_scholarship())	#True

Student.scholarship_rate=2.0	#class variable을 변경할 때에는 클래스 이름 사용.
```



## class variable을 변경하는 방법

- class method를 이용한다!

- calss method는 `cls`를 인자로 받는다. (instance method는 self를 사용)

- @classmethod라는 데코레이션을 붙인다

class method는 인스턴스가 공유하는 class variable을 생성, 변경

- @staticmethod self나 cls인자가 오지 않는다.

```python
class Student(object):
    
    scholarship_rate = 3.0  #class variable
    
    def __init__(self,name,dept,grade):
        self.name=name     #각각의 객체(인스턴스)가 따로 들고있는 것.
        self.dept=dept     #instance variable
        self.grade=grade   #instance variable
    
      
    #class method를 만들려면 특수한 데코레이터를 이용해야 한다.
    @classmethod
    def change_scholarship_rate(cls,rate):#cls=class
        cls.scholarship_rate=rate
  
	#static method를 만들려면 특수한 데코레이터를 이용한다.
    @staticmethod
    def print_hello():
        print('Hello')

Student.change_scholarship_rate(4.0)
print(Student.scholarship_rate)	#4.0
stu1.print_hello()				#Hello
```



## private & public

- public : 어디에서나 사용할 수 있는 경우를 지칭. 
- private : 속성과 함수를 사용할 수 있는 경우를 지칭
- 기본적으로 python은 instance variable과 instance method를 public으로 지정
- private표현은 함수나 변수 앞에 `__`를 넣는다.

```python
#private표현은 함수나 변수 앞에 __를 넣는다.
class Student(object):
    
    scholarship_rate = 3.0  #class variable
    
    def __init__(self,name,dept,grade):
        self.name=name     #각각의 객체(인스턴스)가 따로 들고있는 것.
        self.__dept=dept     #instance variable =>private
        self.grade=grade   #instance variable =>public
    
    def __change_info(self,name,dept):
        self.name=name
        self.dept=dept
        

stu1.__change_info('이이','4.2') #class외부에서 이렇게 접근불가능!!
```



