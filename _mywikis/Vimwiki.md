---
---
Vimwiki는 자신만의 위키를 Vim 에디터 기반으로 구축할 수 있는 플러그인입니다. 

개발을 하다보면 메모의 필요성을 느낍니다. 개발은 워낙 방대한 지식을 필요로 하기 때문에 이를 다 외우고 있을 수 없습니다. 그래서 필요할 때마다 인터넷 검색이나 레퍼런스 자료들을 참고하곤 하는데 돌아서면 잊어버리기 때문에 그때마다 다시 인터넷검색을 해서 찾는건 비효율적이라 느끼게 되었습니다. 따라서 메모를 통해 그때그때 얻은 지식들을 메모해 놓을 필요성을 느끼게 되었습니다. 

## 왜 Vimwiki 인가
그렇다면 어떤 메모 어플리케이션을 사용할 것이냐가 고민이되었습니다. 최근 사람들이 많이 사용하는 노트필기 앱들이 많은데요(옵시디언, 노션 등) 저는 다음과 같은 몇 가지 이유 때문에 Vimwiki를 선택하게 되었습니다. 

* **Vim 기반**  
  저에게 가장 큰 장점으로 다가운 부분입니다. 주로 Vim 에디터를 사용하기 때문에 PC앱을 실행시키거나 브라우저를 통해 특정 사이트에 들어가야하는 과정없이 바로 터미널에서 사용할 수 있다는 것은 매우 큰 장점입니다. 
  
* **마크다운 지원**  
  마크다운만큼 쉽고 간단한 마크업언어는 없다고 생각합니다. 

* **로컬 스토리지**  
  Vimwiki는 작성한 문서들을 로컬에 저장합니다. 따라서 문서 작성 및 검색이 로컬에서 이루어지기 때문에 매우 빠릅니다. 제가 노션과 같은 웹기반 앱을 사용하지 않는 이유입니다. 매력적인 기능들이 있지만 편집과 검색이 필연적으로 서버를 갔다와야하기 때문에 약간 느립니다. 또한 Github와 같은 remote 저장소를 이용하면 마치 클라우드 앱처럼  어떤 기기에서든 편집, 검색이 가능하게 됩니다. 


## 설치
기본적인 설치와 설정은 Github repository를 참고합니다.
[Github repository](https://github.com/vimwiki/vimwiki) 

## 사용법 및 설정
* **기본 키 바인딩**
	* \<Leader>ww -- Open default wiki index file.
	* \<Leader>wt -- Open default wiki index file in a new tab.
	* \<Leader>ws -- Select and open wiki index file.
	* \<Leader>wd -- Delete wiki file you are in.
	* \<Leader>wr -- Rename wiki file you are in.
	* \<Enter> -- Follow/Create wiki link.
	* \<Shift-Enter> -- Split and follow/create wiki link.
	* \<Ctrl-Enter> -- Vertical split and follow/create wiki link.
	* \<Backspace> -- Go back to parent(previous) wiki link.
	* \<Tab> -- Find next wiki link.
	* \<Shift-Tab> -- Find previous wiki link.

