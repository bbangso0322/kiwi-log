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
		if(isDarkMode == "false") {
			document.documentElement.style.setProperty("--background-color", 'white');
			document.documentElement.style.setProperty("--background-gray", '#F8FAFD');
			document.documentElement.style.setProperty("--background-hover", '#C2E7FF');
			modeIcon.classList.remove("fa-moon");
			modeIcon.classList.add("fa-sun");
		}
		else {
			document.documentElement.style.setProperty("--background-color", 'red');
			document.documentElement.style.setProperty("--background-gray", 'blue');
			modeIcon.classList.remove("fa-sun");
			modeIcon.classList.add("fa-moon");
		}
	}
}

export { LightMode };
