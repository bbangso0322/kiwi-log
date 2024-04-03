class CodeBlockManager {

	constructor() {
		const codeBlocks = document.querySelectorAll('div.highlight');

		this.addCopyIcon(codeBlocks);
	}

	addCopyIcon(codeBlocks) {
		for(const cb of codeBlocks) {
			const cp = document.createElement('div');
			const icon = document.createElement('i');
			icon.classList.add("fa-solid");
			icon.classList.add("fa-copy");

			cp.setAttribute('class', 'copy-container');

			cp.appendChild(icon);
			cb.appendChild(cp);
		}
	}
}

export { CodeBlockManager };
