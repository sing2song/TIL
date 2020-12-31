# git commit author 설정

최초에 컴퓨터에서 git을 활용하려고 하면, 아래의 설정을 하지 않으면 commit이 안된다. 

```bash
$ git config --global user.name __username__
$ git config --global user.email __email__
```

* 설정을 확인할 때는 아래의 명령어를 활용한다.

```bash
$ git config --global -l
user.name=edutak
user.email=edutak.ssafy@gmail.com
```

* 설정된 이메일이 Github에 등록된 이메일이랑 같도록 하는 것을 추천 (잔디밭)