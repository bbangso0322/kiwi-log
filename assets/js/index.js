import { LightMode } from './utils.js'

const lightMode = new LightMode();

document.getElementById("light-mode-container").addEventListener("click", (e) => {
	lightMode.toggleMode();
});
