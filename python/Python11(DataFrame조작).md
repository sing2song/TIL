# DataFrame 조작

## NaN

결치, 값이없다. 실수로 표현.

NaN은 골칫거리. 값을 지우거나 평균값을 넣어야한다.



### NaN 지우기

`df.dropna(how=?)` : NaN을 지우는 함수. how에 들어가는 속성값에 따라 행동이 다르다. 

how='any'일땐 NaN이 하나라도 해당 행에 존재하면 행을 삭제

how='all' 모든 컬럼의 값이 NaN인 경우 행을 삭제

inplace = False로 default 설정 (데이터프레임 원본 변경을 안한다. 복사본 리턴)

```python
import numpy as np
import pandas as pd

#random값을 도출해서 DataFrame을 생성 => np.random.randint()
#6행 4열짜리 DataFrame을 만들어요!

np.random.seed(1)

df=pd.DataFrame(np.random.randint(0,10,(6,4)))
#df.index=pd.date_range('202001001','periods=6)
df.index=pd.date_range('20200101','20200106')#끝나는 지점을 알고있으면 쓰기!
df.columns=['A','B','C','D']

df['E']=[7,np.nan,4,np.nan,2,np.nan]
display(df)

new_df=df.dropna(how='any')
display(new_df)
```





### NaN 채우기



