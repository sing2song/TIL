![Screen Shot 2020-12-30 at 오후 1.47](md-images/Screen%20Shot%202020-12-30%20at%20%EC%98%A4%ED%9B%84%201.47-1609308186938.png)

### 상황 1. fast-foward(프리라이딩)

> fast-foward는 feature 브랜치 생성된 이후 master 브랜치에 변경 사항이 없는 상황

1. feature/test branch 생성 및 이동

   ```bash
   $ git branch feature/test
   $ git branch
     feature/test
   * master
   $ git checkout feature/test
   Switched to branch 'feature/test'
   (feature/test) $
   ```

2. 작업 완료 후 commit

   ```bash
   $ touch test.txt
   $ git add .
   $ git commit -m 'Complete test'
   [feature/test 5ff4709] Complete test
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 test.txt
   $ git log --oneline
   # feature/test 브랜치 + HEAD
   5ff4709 (HEAD -> feature/test) Complete test
   # master 브랜치
   c6f5db0 (master) Add README
   ```


3. master 이동

   ```bash
   $ git checkout master
   Switched to branch 'master'
   (master) $
   ```


4. master에 병합

   ```bash
   $ git log --oneline
   c6f5db0 (HEAD -> master) Add README
   $ git merge feature/test
   Updating c6f5db0..5ff4709
   # Fast-forward!!!!
   # MASTER에 변경사항 없어서 그냥 앞으로 
   Fast-forward
    test.txt | 0
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 test.txt
   ```


5. 결과 -> fast-foward (단순히 HEAD를 이동)

   ```bash
   $ git log --oneline
   5ff4709 (HEAD -> master, feature/test) Complete test
   c6f5db0 Add README
   ```

6. branch 삭제

   ```bash
   $ git branch -d feature/test
   Deleted branch feature/test (was 5ff4709).
   ```

---

### 상황 2. merge commit(보고서/PPT 각자)

> 서로 다른 이력(commit)을 병합(merge)하는 과정에서 다른 파일이 수정되어 있는 상황
>
> git이 auto merging을 진행하고, commit이 발생된다.

1. feature/data branch 생성 및 이동

   ```bash
   $ git checkout -b feature/data
   Switched to a new branch 'feature/data'
   ```

2. 작업 완료 후 commit

   ```bash
   $ touch data.txt
   $ git add .
   $ git commit -m 'Complete data'
   [feature/data 6b0245e] Complete data
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 data.txt
   $ git log --oneline
   6b0245e (HEAD -> feature/data) Complete data
   5ff4709 (master) Complete test
   c6f5db0 Add README
   ```

3. master 이동

   ```bash
   $ git checkout master
   ```

4. *master에 추가 commit 이 발생시키기!!*

   * **다른 파일을 수정 혹은 생성하세요!**

     ```bash
     $ touch hotfix.txt
     $ git add .
     $ git commit -m 'hotfix'
     $ git log --oneline
     6930e34 (HEAD -> master) hotfix
     5ff4709 Complete test
     c6f5db0 Add README
     ```

5. master에 병합

   ```bash
   $ git merge feature/data
   Merge made by the 'recursive' strategy.
    data.txt | 0
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 data.txt
   ```

6. 결과 -> 자동으로 *merge commit 발생*

   * vim 편집기 화면이 나타납니다.![Screen Shot 2020-12-30 at 오후 2.48](../../Screen%20Shot%202020-12-30%20at%20%EC%98%A4%ED%9B%84%202.48.png)

   * 자동으로 작성된 커밋 메시지를 확인하고, `esc`를 누른 후 `:wq`를 입력하여 저장 및 종료를 합니다.
      * `w` : write
      * `q` : quit
      
   * 커밋을  확인 해봅시다.

      ```bash
      44515f8 (HEAD -> master) Merge branch 'feature/data'
      6930e34 hotfix
      6b0245e (feature/data) Complete data
      5ff4709 Complete test
      c6f5db0 Add README
      ```

7. 그래프 확인하기

   ```bash
   $ git log --oneline --graph
   *   44515f8 (HEAD -> master) Merge branch 'feature/data'
   |\
   | * 6b0245e (feature/data) Complete data
   * | 6930e34 hotfix
   |/
   * 5ff4709 Complete test
   * c6f5db0 Add README
   ```

8. branch 삭제

   ```bash
   $ git branch -d feature/data
   Deleted branch feature/data (was 6b0245e).
   ```
   
   ![Screen Shot 2020-12-30 at 오후 2.34](md-images/Screen%20Shot%202020-12-30%20at%20%EC%98%A4%ED%9B%84%202.34.png)

---

### 상황 3. merge commit 충돌(보고서/PPT 같이)

> 서로 다른 이력(commit)을 병합(merge)하는 과정에서 동일 파일이 수정되어 있는 상황
>
> git이 auto merging을 하지 못하고, 해당 파일의 위치에 라벨링을 해준다.
>
> 원하는 형태의 코드로 직접 수정을 하고 merge commit을 발생 시켜야 한다.

1. feature/web branch 생성 및 이동

   ```bash
   $ git checkout -b feature/web
   ```

2. 작업 완료 후 commit

   ```bash
   # README.md 파일 수정!!!
   $ touch README.md
   $ git status
   On branch feature/web
   Changes not staged for commit:
     (use "git add <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   README.md
   
   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           web.txt
   
   no changes added to commit (use "git add" and/or "git commit -a")
   $ git add .
   $ git commit -m 'Update and Complete'
   ```


3. master 이동

   ```bash
   $ git checkout master
   ```


4. *master에 추가 commit 이 발생시키기!!*

   * **동일 파일을 수정 혹은 생성하세요!**

   ```bash
   # README 파일을 수정
   $ git status
   On branch master
   Changes not staged for commit:
     (use "git add <file>..." to update what will be committed)
     (use "git restore <file>..." to discard changes in working directory)
           modified:   README.md
   
   no changes added to commit (use "git add" and/or "git commit -a")
   $ git add .
   $ git commit -m 'Update README'
   ```

5. master에 병합

   ```bash
   $ git merge feature/web
   # 자동으로 병합하는 중에..
   Auto-merging README.md
   # 충돌발생(Merge conflict)
   CONFLICT (content): Merge conflict in README.md
   # 자동 머지 실패함; 
   # 충돌을 고치고 결과를 커밋해.
   Automatic merge failed; fix conflicts and then commit the result.
   (master|MERGING) $
   ```


6. 결과 -> *merge conflict발생*

   ```bash
   $ git status
   On branch master
   You have unmerged paths.
     (fix conflicts and run "git commit")
     (use "git merge --abort" to abort the merge)
   
   Changes to be committed:
           new file:   web.txt
   # 어디서 충돌이 난건지 확인..
   Unmerged paths:
     (use "git add <file>..." to mark resolution)
           both modified:   README.md
   
   ```


7. 충돌 확인 및 해결

   ```
   <<<<<<< HEAD
   # Project
   
   * data 프로젝트 blah blah
   =======
   # 프로젝트
   
   * web 개발
   >>>>>>> feature/web
   ```


8. merge commit 진행

    ```bash
    $ git commit
    ```

   * vim 편집기 화면이 나타납니다.
   
   * 자동으로 작성된 커밋 메시지를 확인하고, `esc`를 누른 후 `:wq`를 입력하여 저장 및 종료를 합니다.
      * `w` : write
      * `q` : quit
      
   * 커밋이  확인 해봅시다.
   
9. 그래프 확인하기

    ```bash
   $ git log --oneline --graph
   *   1a08480 (HEAD -> master) Merge branch 'feature/web'
   |\
   | * 156b027 (feature/web) Update README and Complete web
   * | 30c71d2 Update README
   |/
   *   44515f8 Merge branch 'feature/data'
   |\
   | * 6b0245e Complete data
   * | 6930e34 hotfix
   |/
   * 5ff4709 Complete test
   * c6f5db0 Add README
   ```


10. branch 삭제

    ![Screen Shot 2020-12-30 at 오후 2.54](md-images/Screen%20Shot%202020-12-30%20at%20%EC%98%A4%ED%9B%84%202.54.png)
    
    

## 정리

![Screen Shot 2020-12-30 at 오후 2.57](md-images/Screen%20Shot%202020-12-30%20at%20%EC%98%A4%ED%9B%84%202.57.png)