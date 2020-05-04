class Scroll {
	constructor(selectors) {
		this.selectors = selectors;
		this.elems = [];
		this.init();
		window.addEventListener("scroll", this.checkScrollPos, false);
	}

	/**
	 * Create arr of elements from selectors.
	 */
	init = () => {
		this.selectors.forEach((selector) => {
			this.elems.push(document.querySelector(selector));
		});
	};

	/**
	 * Function to check whether DOM node is currently in viewport.
	 * @param {HTMLElement} elem
	 */
	elemInViewport = (elem) => {
		const rect = elem.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <=
				(window.innerWidth || document.documentElement.clientWidth)
		);
	};

	/**
	 * Loop through elems and add animation
	 * class if in viewport
	 */
	checkScrollPos = () => {
		this.elems.forEach((elem) => {
			if (this.elemInViewport(elem)) {
				elem.classList.add("slide-right");
			}
		});
	};
}

export default Scroll;
