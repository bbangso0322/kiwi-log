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
		console.log(typeof(isDarkMode));
		
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
			styler.setProperty("--search-icon-hover", '#86705B');
			modeIcon.classList.remove("fa-moon");
			modeIcon.classList.add("fa-sun");
		}
		else {
			styler.setProperty("--background-color", 'red');
			styler.setProperty("--background-secondary", 'blue');
			styler.setProperty("--background-hover", '#FFDAD4');
			styler.setProperty("--font-color", 'white');
			styler.setProperty("--background-search-bar", '#3C2421');
			modeIcon.classList.remove("fa-sun");
			modeIcon.classList.add("fa-moon");
		}
	}
}

export { LightMode };
