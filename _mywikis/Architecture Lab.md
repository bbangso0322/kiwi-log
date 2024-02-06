---
---

# CSAPP Architecture Lab

CSAPP의 Architecture Lab에 대한 솔루션입니다.

## 환경 구성
이전의 랩과 달리 디펜던시 프로그램들이 있어 구성하는데 몇 가지 패키지들을 다운로드하고 설정해야합니다.

* 필요한 패키지 설치  
	```console
	sudo apt install tcl tcl-dev tk tk-dev
	sudo apt install flex
	sudo apt install bison
	```
	
	다음 블로그를 참고하였습니다. https://zhuanlan.zhihu.com/p/480380496
	
* 설정  
  다음과 같은 설정을 하지 않으면 `multiple definition of` 에러를 발생시킵니다.
  ``` console
	# Old misc/Makefile:
	CFLAGS=-Wall -O1 -g
	LCFLAGS=-O1
	
	# New misc/Makefile:
	CFLAGS=-Wall -O1 -g -fcommon
	LCFLAGS=-O1 -fcommon
	
	# pipe 쪽도 마찬가지 설정해준다.
  ```
  stackoverflow를 참고하였습니다. https://stackoverflow.com/questions/63152352/fail-to-compile-the-y86-simulatur-csapp


