# push 충돌 상황

```bash
$ git push origin master
To https://github.com/edutak/practice.git
 ! [rejected]        master -> master (fetch first)
 # error!!!!!
error: failed to push some refs to 'https://github.com/edutak/practice.git'
# 거절(rejected), 왜냐하면..
# 원격저장소가 가지고 있는 작업사항
hint: Updates were rejected because the remote contains work that you do
# 너가 로컬에 가지고 있지 않다.
hint: not have locally. This is usually caused by another repository pushing
# 너는 원할거다..
# 먼저 원격저장소의 변경사항을 통합하는 것을..
# 다시 push하기 전에
# git pull .....?
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

![전](md-images/%EC%A0%84.jpg)

* 해결 하기

  ```bash
  # 1. pull
  # 원격 저장소의 변경사항을 받아오고
  $ git pull origin master
  remote: Enumerating objects: 7, done.
  remote: Counting objects: 100% (7/7), done.
  remote: Compressing objects: 100% (4/4), done.
  remote: Total 6 (delta 2), reused 0 (delta 0), pack-reused 0
  Unpacking objects: 100% (6/6), 1.33 KiB | 43.00 KiB/s, done.
  From https://github.com/edutak/practice
   * branch            master     -> FETCH_HEAD
     1ce8a44..7822758  master     -> origin/master
  Merge made by the 'recursive' strategy.
   README.md | 4 ++++
   1 file changed, 4 insertions(+)
   create mode 100644 README.md
  
  # 2. 다시 push
  $ git push origin master
  Enumerating objects: 6, done.
  Counting objects: 100% (6/6), done.
  Delta compression using up to 8 threads
  Compressing objects: 100% (4/4), done.
  Writing objects: 100% (4/4), 499 bytes | 499.00 KiB/s, done.
  Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
  remote: Resolving deltas: 100% (2/2), completed with 1 local object.
  To https://github.com/edutak/practice.git
     7822758..3bb716a  master -> master
  ```

  ```bash
  $ git log --oneline
  # merge commit 발생!
  3bb716a (HEAD -> master, origin/master) Merge branch 'master' of https://github.com/edutak/practice
  7822758 Update README.md
  d8f1ae3 hi
  e94b045 Create README.md
  1ce8a44 A
  3566a2b 추가작업!!
  08c9f10 hi
  16915c2 파워포인트
  b844872 보고서
  f64d131 Init
  4d9c1cc First commit
  ```

  ![후](md-images/%ED%9B%84.jpg)

* 상황 보기

  * 로컬

    ```bash
    $ git log --oneline
    d8f1ae3 (HEAD -> master) hi
    1ce8a44 (origin/master) A
    3566a2b 추가작업!!
    08c9f10 hi
    16915c2 파워포인트
    b844872 보고서
    f64d131 Init
    4d9c1cc First commit
    ```

  * 원격![Screen Shot 2020-12-30 at 오전 10.45](md-images/Screen%20Shot%202020-12-30%20at%20%EC%98%A4%EC%A0%84%2010.45.png)