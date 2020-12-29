# git 기초

> 분산버전관리시스템(DVCS)

## 0.로컬 저장소(repository) 설정

현재 디렉토리 맞는지 확인 후 git init을하기

```bash
$ git init
# 초기화 되었다..
Initialized empty Git repository in C:/Users/32153256/Desktop/practice/.git/
```

- ` .git` 폴더가 생성되고, 여기에 모든 git과 관려된 정보들이 저장된다.



## 기본 작업 흐름

> 모든 작업은 touch로 파일을 만드는 것으로 대체

### 1. add

```bash
$ git add .		# . :현재 디렉토리(하위 디렉토리 포함)
$ git add a.txt # 특정 파일
$ git add my_folder/ # 특정 폴더
$ git add a.txt b.txt c.txt #복수의 파일
```

- working direcotyr의 변경사항(첫번째 통)을 staging area(두번째 통)상태로 변경시킨다.
- 커밋의 대상 파일을 관리한다.

```bash
$ touch a.txt
$ git status
On branch master

No commits yet
# 트래킹이 되고 있지 않는 파일들..
# => 새로 생성된 파일
Untracked files:
	# add 명령을 사용해!
	# 커밋이 될 것에 포함시키기 위하여..
	# => Satging Area (두번째 통)
  (use "git add <file>..." to include in what will be committed)
      a.txt
      
nothing added to commit but untracked files present (use "git add" to track)
```

- add 이후

```bash
$ git add .
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   a.txt

```



## 2. commit

```bash
$ git commit -m 'First commit'
[master (root-commit) 97ae0f1] First commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 a.txt
```

- `commit` 은 지금 상태를 스냅샷을 찍는다.
- 커밋 메시지는 지금 기록하는 이력을 충분히 잘 나타낼 수 있도록 작성한다.
- `git log` 명령어를 통해 지금까지 기록된 커밋들을 확인 할 수 있다.



## 기타 명령어

### 1. status

> 로컬 저장소의 상태

```bash
$ git status
```

### 2. log

> 커밋 히스토리

```bash
$ git log
commit 97ae0f1b91eeb417caf415a3f9f3749a7c56d7fc (HEAD -> master)
Author: ssong <sing2song@naver.com>
Date:   Tue Dec 29 14:10:56 2020 +0900

    First commit

$ git log --oneline
97ae0f1 (HEAD -> master) First commit

$ git log -1
$ git log --oneline -1
```

