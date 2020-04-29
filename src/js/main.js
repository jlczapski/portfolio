const toggleSwitch = document.querySelector(
	".toggle-switch input[type='checkbox']"
);

window.onload = function () {
	toggleSwitch.checked = false;
};

const switchTheme = (e) => {
	const checked = e.target.checked;

	if (checked) {
		document.body.classList.replace("light", "dark");
	} else {
		document.body.classList.replace("dark", "light");
	}
};

toggleSwitch.addEventListener("change", switchTheme, false);
