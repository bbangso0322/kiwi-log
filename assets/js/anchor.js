class AnchorManager {
	
	constructor (toc) {
		const headers = 
			document.querySelectorAll('h1, h2, h3, h4, h5 ,h6');
		this.createAnchor(headers);
		this.createToc(headers, toc);
	}

	createToc(headers, toc) {
		for (const header of headers) {
			const tocElement = document.createElement('a');
			tocElement.setAttribute('href', '#' + header.id);
			tocElement.setAttribute('class', 'toc-element');
			tocElement.textContent = header.id; 
			toc.appendChild(tocElement);
		}
	}

	createAnchor(headers) {
		for (const header of headers) {
			const anchorElement = 
				document.createElement('a');
			anchorElement.setAttribute('href', '#' + header.id);
			anchorElement.setAttribute('class', 'anchor');
			anchorElement.textContent = "링크";	

			header.appendChild(anchorElement);
		}
	}
}

export { AnchorManager }
