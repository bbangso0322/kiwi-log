import { LightMode } from './utils.js'
import { AnchorManager } from './anchor.js'

const lightMode = new LightMode();
const anchorManager = new AnchorManager(document.getElementById("toc"));

document.getElementById("light-mode-container").addEventListener("click", (e) => {
	lightMode.toggleMode();
});
