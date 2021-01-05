

## 제어문

- if
- if ~ elif~else 구문을 이용

```python
a=20
if a%3==0:
    print('3의 배수')
elif a%5==0:
    print('5의 배수')
elif a%7==0:
    print('7의 배수')
elif a%11==0:
    pass	#이 조건일때 넘기기{}의 의미와 같음
else:
    print('조건에 해당되는 것이 없다!')
```



## 반복문

for, while사용

for는 반복횟수를 알고 있을 때, while은 조건에 따라서 반복할 때

```python
for tmp in range, list, tuple, dict #이 중에서 범위 지정하여 가능하다

for tmp in range(10):
    print(tmp,end='')	#0 1 2 3 4 5 6 7 8 9
```



### For문

![image-20210105132309568](C:%5CUsers%5C32153256%5CDesktop%5CTIL%5Cpython%5Cmd-images%5Cimage-20210105132309568.png)

- print()는 default형태로 사용하면 출력 후 줄바꿈을 한다. 

- 만약 내용 출력 후 줄바꿈 대신 다른 처리를 하기 위해선 end속성을 이용하면 된다.

```python
for tmp in [1,2,3,4,5]:
    print(tmp,end=" ")	#1 2 3 4 5
    #"" 또는 '' 사용가능
```



- block을 표현할 때 {}를 사용하지 않습니다!

- 대신 indent를 사용한다!


```python
#모든 key에 대한 value값을 출력하기
for key in a.keys():
    print('key : {}, value : {}'.format(key,a[key]))
    
print('name' in a)	#True
#dict에서 in은 key값에서만 작용한다
```



### list comprehension

리스트를 생성할 때 반복문을 조건문을 이용해서 생성

```python
a=[1,2,3,4,5,6,7]

list1=[tmp*2 for tmp in a]
print(list1)	#[2,4,6,8,10,12,14]

list2=[tmp*2 for tmp in a if tmp%2==0]
print(list2)	#[4,8,12] - a에서 2,4,6만 2배
```



