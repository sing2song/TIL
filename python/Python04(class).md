# 클래스02

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



