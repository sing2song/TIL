## gitignore

git 저장소 내에서 git으로 관리하고 싶지 않은 파일이 있다면, `.gitignore` 파일을 만들어서 관리한다.

```bash
**관리방법**
#특정 파일 
data.csv

#특정 폴더
images/

#특정 확장자
*.png

#특정 확장자 제외
!profile.png
```

일반적으로, 개발환경/ 운영체제/ 특정 언어 등에서 임시 파일과 같이 개발 소스 코드와 관련 없는 파일은 git으로 관리하지 않는다.

- https://gitignore.io
  - 예) 윈도우 환경에서 파이썬으로 django웹을 한다면
    - https://www.toptal.com/developers/gitignore/api/python,django
- https://github.com/github/gitignore <<gitignore파일이 예시로 만들어져있음



