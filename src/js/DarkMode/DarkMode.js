class DarkMode {
	constructor(currentTheme, toggleSwitch) {
		this.currentTheme = currentTheme;
		this.toggleSwitch = toggleSwitch;
		this.init();
		toggleSwitch.addEventListener("change", this.switchTheme, false);
	}

	/**
	 * Check if user pref was previously saved in
	 * localStorage, set switch accordingly.
	 *
	 * @param {HTMLElement} toggleSwitch
	 */
	init = () => {
		if (this.currentTheme === "dark") {
			document.body.classList.replace("light", "dark");
			this.toggleSwitch.checked = true;
		} else {
			this.toggleSwitch.checked = false;
		}
	};

	/**
	 * Check position of toggle switch, set theme accordingly.
	 *
	 * @param {Event} e
	 */
	switchTheme = (e) => {
		const checked = e.target.checked;

		if (checked) {
			document.body.classList.replace("light", "dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.body.classList.replace("dark", "light");
			localStorage.setItem("theme", "light");
		}
	};
}

export default DarkMode;
