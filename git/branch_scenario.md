### 상황 1. fast-foward(프리라이딩)

> fast-foward는 feature 브랜치 생성된 이후 master 브랜치에 변경 사항이 없는 상황

1. feature/test branch 생성 및 이동

   ```bash
   # 생성
   $ git branch feature/test
   $ git branch
     feature/test
   * master
   # 생성 및 이동
   $ git checkout feature/test
   Switched to branch 'feature/test'
   (feature/test) $
   ```

   

2. 작업 완료 후 commit

   ```bash
   $ touch test.txt
   $ git add .
   $ git commit -m 'Complete test'
   
   $ git log --oneline
   # feature/test 브랜치 +HEAD(내가 지금 가지고 있는 위치)
   # master브랜치
   ```
   
   


3. master 이동

   ```bash
   $ git checkout master
   ```
   
   


4. master에 병합

   ```bash
   $ git log --oneline
   $ git merge feature/test
   ```
   
   


5. 결과 -> fast-foward (단순히 HEAD를 이동)

   ```bash
   $ git log --oneline
   ```

   

6. branch 삭제

   ```bash
   
   ```
   
   

---

### 상황 2. merge commit(보고서/PPT 각자)

> 서로 다른 이력(commit)을 병합(merge)하는 과정에서 다른 파일이 수정되어 있는 상황
>
> git이 auto merging을 진행하고, commit이 발생된다.

1. feature/signout branch 생성 및 이동

   

2. 작업 완료 후 commit

   

3. master 이동

   

4. *master에 추가 commit 이 발생시키기!!*

   * **다른 파일을 수정 혹은 생성하세요!**

   

5. master에 병합

   

6. 결과 -> 자동으로 *merge commit 발생*

   * vim 편집기 화면이 나타납니다.
   
   * 자동으로 작성된 커밋 메시지를 확인하고, `esc`를 누른 후 `:wq`를 입력하여 저장 및 종료를 합니다.
      * `w` : write
      * `q` : quit
      
   * 커밋을  확인 해봅시다.
   
7. 그래프 확인하기

   

8. branch 삭제

   

---

### 상황 3. merge commit 충돌(보고서/PPT 같이)

> 서로 다른 이력(commit)을 병합(merge)하는 과정에서 동일 파일이 수정되어 있는 상황
>
> git이 auto merging을 하지 못하고, 해당 파일의 위치에 라벨링을 해준다.
>
> 원하는 형태의 코드로 직접 수정을 하고 merge commit을 발생 시켜야 한다.

1. feature/board branch 생성 및 이동

   

2. 작업 완료 후 commit

   


3. master 이동

   


4. *master에 추가 commit 이 발생시키기!!*

   * **동일 파일을 수정 혹은 생성하세요!**
   

   
5. master에 병합

   


6. 결과 -> *merge conflict발생*

   


7. 충돌 확인 및 해결

   


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

    


10. branch 삭제

    
