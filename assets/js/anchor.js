class AnchorManager {
	
	constructor (toc, wikiTitle) {
		if(wikiTitle == null)
			return;
		const headers = 
			document.querySelectorAll('h1, h2, h3, h4, h5 ,h6');
		this.createAnchor(headers);
		this.createToc(headers, toc, wikiTitle);
	}

	createToc(headers, toc, wikiTitle) {
		const headerPadding = {
			"H1": "0rem",
			"H2": "0.5rem",
			"H3": "1rem",
			"H4": "1.5rem",
			"H5": "2rem",
			"H6": "2.5rem"
		}
		
		const tocTitle = document.createElement('a');
		tocTitle.setAttribute('href', '#' + wikiTitle.id);
		tocTitle.setAttribute('class', 'toc-element');	
		tocTitle.textContent = wikiTitle.innerText;
		toc.appendChild(tocTitle);

		for (const header of headers) {
			console.log(headerPadding[header.tagName]);
			const tocElement = document.createElement('a');
			tocElement.setAttribute('href', '#' + header.id);
			tocElement.setAttribute('class', 'toc-element');
			tocElement.style.paddingLeft = headerPadding[header.tagName];
			tocElement.textContent = header.innerText; 
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
			anchorElement.innerHTML = '<i class="fa-solid fa-paperclip"></i>';	

			header.addEventListener('mouseover', () => {
				anchorElement.classList.add('anchor-hover');	
			});

			header.addEventListener('mouseout', () => {
				anchorElement.classList.remove('anchor-hover');	
			});

			header.appendChild(anchorElement);
		}
	}
}

export { AnchorManager }
