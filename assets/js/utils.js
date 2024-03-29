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
		if(isDarkMode == "false") {
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
			styler.setProperty("--scroll-color", '#D7D7D7');
			styler.setProperty("--scroll-color-hover", '#BBB');
			modeIcon.classList.remove("fa-moon");
			modeIcon.classList.add("fa-sun");
		}
		else {
			styler.setProperty("--background-color", 'black');
			styler.setProperty("--background-secondary", 'gray');
			styler.setProperty("--background-hover", '#FFDAD4');
			styler.setProperty("--font-color", 'white');
			styler.setProperty("--background-search-bar", '#3C2421');
			styler.setProperty("--border-color", '#F6E9DE');
			styler.setProperty("--icon-hover", '#86705B');
			styler.setProperty("--font-color-gray", 'gray');
			styler.setProperty("--badge-background-color", '#FFFFFF');
			styler.setProperty("--badge-baground-hover", '#E6D0BF');
			styler.setProperty("--badge-font-color", '#F4DACC');
			styler.setProperty("--title-tag-color", '#B27444');
			styler.setProperty("--background-color-page", 'black');
			styler.setProperty("--toc-border-color", 'white');
			styler.setProperty("--code-background-color", '#F9FBFD');
			styler.setProperty("--code-border-color", '#EDEDED');
			styler.setProperty("--plaincode-font-color", '#EDEDED');
			styler.setProperty("--plaincode-background-color", '#FFF3E1');
			styler.setProperty("--quote-left-border-color", '#ffc582');
			styler.setProperty("--scroll-color", '#D7D7D7');
			styler.setProperty("--scroll-color-hover", '#BBB');
			modeIcon.classList.remove("fa-sun");
			modeIcon.classList.add("fa-moon");
		}
	}
}

export { LightMode };
