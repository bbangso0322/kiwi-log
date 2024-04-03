import { LightMode } from './utils.js';
import { AnchorManager } from './anchor.js';
import { CodeBlockManager } from './codeblockManager.js';

const lightMode = new LightMode();
const anchorManager = new AnchorManager(
	document.getElementById("toc"),
	document.getElementById("wiki-title"));
const codeBlockManager = new CodeBlockManager();

document.getElementById("light-mode-container").addEventListener("click", (e) => {
	lightMode.toggleMode();
});
