class LightMode{
	
	constructor () {
		let isDarkMode = localStorage.getItem("isDarkMode");

		if(isDarkMode == null) {
			isDarkMode = false;
			if(window.matchMedia) {
				isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;	
			}
			localStorage.setItem("isDarkMode", isDarkMode);
		}

		this.setMode(isDarkMode);
	}

	toggleMode(){
		let isDarkMode = localStorage.getItem("isDarkMode");
		
		if(isDarkMode == "true") {
			localStorage.setItem("isDarkMode", false);
			this.setMode("false");
		}
		else {
			localStorage.setItem("isDarkMode", true);
			this.setMode("true");
		}
	}

	setMode(isDarkMode) {
		const modeIcon = document.getElementById("light-mode");
		const styler = document.documentElement.style;
		const codeAreaLists = document.querySelectorAll('div.highlight');

		if(isDarkMode == "false") {
			for (const area of codeAreaLists) {
				area.setAttribute('code-theme', 'manni');
			}

			styler.setProperty("--background-color", '#FFFBF7');
			styler.setProperty("--background-secondary", '#F8F3EB');
			styler.setProperty("--background-hover", '#FFDAD4');
			styler.setProperty("--font-color", '#3C2421');
			styler.setProperty("--background-search-bar", '#F6E9DE');
			styler.setProperty("--border-color", '#F6E9DE');
			styler.setProperty("--icon-hover", '#86705B');
			styler.setProperty("--font-color-gray", '#9E7E78');
			styler.setProperty("--badge-background-color", '#E6D0BF');
			styler.setProperty("--badge-background-hover", '#E3A678');
			styler.setProperty("--badge-font-color", '#B27444');
			styler.setProperty("--title-tag-color", '#B27444');
			styler.setProperty("--background-color-page", 'white');
			styler.setProperty("--toc-border-color", '#CDC7C3');
			styler.setProperty("--anchor-color", '#CFA684');
			styler.setProperty("--code-background-color", '#F9FBFD');
			styler.setProperty("--code-border-color", '#EDEDED');
			styler.setProperty("--plaincode-font-color", '#D3851F');
			styler.setProperty("--plaincode-background-color", '#FFF3E1');
			styler.setProperty("--quote-left-border-color", '#ffc582');
			styler.setProperty("--table-border-color", '#dfd7cf');
			styler.setProperty("--a-tag-color", '#ffa666');
			styler.setProperty("--scroll-color", '#D7D7D7');
			styler.setProperty("--scroll-color-hover", '#BBB');
			styler.setProperty("--selection-color", '#f3dbbd');
			modeIcon.classList.remove("fa-moon");
			modeIcon.classList.add("fa-sun");
		}
		else {
			for (const area of codeAreaLists) {
				area.setAttribute('code-theme', 'monokai');
			}

			styler.setProperty("--background-color", '#07181E');
			styler.setProperty("--background-secondary", '#1B2D33');
			styler.setProperty("--background-hover", '#1c3e3e');
			styler.setProperty("--font-color", '#b5cacd');
			styler.setProperty("--background-search-bar", '#1d3d44');
			styler.setProperty("--border-color", 'transparent');
			styler.setProperty("--icon-hover", '#618888');
			styler.setProperty("--font-color-gray", '#5e7077');
			styler.setProperty("--badge-background-color", '#445556');
			styler.setProperty("--badge-background-hover", '#507878');
			styler.setProperty("--badge-font-color", '#92c7c7');
			styler.setProperty("--title-tag-color", '#49a199');
			styler.setProperty("--background-color-page", '#1B2D33');
			styler.setProperty("--toc-border-color", '#a7c7c3');
			styler.setProperty("--anchor-color", '#CFA684');
			styler.setProperty("--code-background-color", '#0a1613');
			styler.setProperty("--code-border-color", 'transparent');
			styler.setProperty("--plaincode-font-color", '#35675b');
			styler.setProperty("--plaincode-background-color", '#b8dbd0');
			styler.setProperty("--quote-left-border-color", '#379a7a');
			styler.setProperty("--table-border-color", '#779d9e');
			styler.setProperty("--a-tag-color", '#70b4a1');
			styler.setProperty("--scroll-color", '#384c48');
			styler.setProperty("--scroll-color-hover", '#4a725e');
			styler.setProperty("--selection-color", '#224a62');
			modeIcon.classList.remove("fa-sun");
			modeIcon.classList.add("fa-moon");
		}
	}
}

export { LightMode };
