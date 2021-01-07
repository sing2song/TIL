# 상속



## 목적

한 번 정의한 class를 필요에 따라 재활용하기 위해서.

코드의 반복을 줄이고 compact한 코드를 작성하기 위해. 

장점 :코드의 반복을 줄이고 재활용성을 높일 수 있다.

단점 : 클래스를 재활용하려면 독립적인 클래스인 경우인 것이 좋음

상위 클래스와 하위 클래스가 서로 긴밀하게 연결(tightly coupled)



> 예시

```python
#상위 클래스 :super class, parent class, base class
class Unit(object):
    def __init__(self,damage,life):
        self.utype=self.__class__.__name__  #class의 이름이 나올것이다!
        self.damage=damage
        self.life=life
        
my_unit=Unit(100,200)
print(my_unit.damage)
print(my_unit.utype)


#하위 클래스 : sub class, child class 하위클래스가 기능을 더 갖는편.
class Marine(Unit):#상속
    def __init__(self,damage,life,offense_upgrade):
        super(Marine, self).__init__(damage,life)	
        #상위 클래스의 init을 호출해라 
        #super()안에 인자들은 생략가능
        self.offense_upgrade=offense_upgrade


marine1=Marine(300,400,3)
print(marine1.damage)		#300
print(marine1.utype)		#Marine
print(marine1.offense_upgrade)	#3
```

