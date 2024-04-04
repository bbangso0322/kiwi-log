class CodeBlockManager {

	constructor() {
		const codeBlocks = document.querySelectorAll('div.highlight');

		this.addCopyIcon(codeBlocks);
	}

	addCopyIcon(codeBlocks) {
		for(const cb of codeBlocks) {
			const cp = document.createElement('div');
			const icon = document.createElement('i');
			const copyMessage = document.createElement('div');

			copyMessage.setAttribute('class', 'copy-message');
			copyMessage.textContent = "Copied!";

			icon.classList.add("fa-solid");
			icon.classList.add("fa-copy");

			cp.setAttribute('class', 'copy-container');
			cp.addEventListener('click', (e) => {
				const codeArea = e.currentTarget.parentNode.querySelector('.highlight code');
				copyMessage.classList.add('copied');
				setTimeout(() => {
					copyMessage.classList.remove('copied');
				}, 800);

				navigator.clipboard.writeText(codeArea.textContent);
			});

			cp.appendChild(icon);
			cb.appendChild(copyMessage);
			cb.appendChild(cp);
		}
	}
}

export { CodeBlockManager };
