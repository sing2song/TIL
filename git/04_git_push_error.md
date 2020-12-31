## push 충돌상황

```bash
$ git push origin master

# 거절(rejected), 왜냐하면...
# 원격 저장소가 가지고 있는 작업사항

# 너가 로컬에 가지고 있지 않다.
# 
```

- 해결하기

  ```bash
  # 1.pull
  # 원격 저장소의 변경사항을 받아오기
  $ git pull origin master
  
  # 2.다시 push
  $ git push origin master
  ```

  

  ```bash
  $ git log --oneline
  #merge commit 발생!
  ```

  

- 상황보기

  - 로컬

  ```bash
  $ git log --oneline
  ```

  - github에서 보기

![image-20201230104940099](C:\Users\tmax\AppData\Roaming\Typora\typora-user-images\image-20201230104940099.png)