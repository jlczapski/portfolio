import DarkMode from "./DarkMode/DarkMode";
import Scroll from "./Scroll/Scroll";

const scroll = new Scroll([".skills .text-title", ".contact .text-title"]);
const darkMode = new DarkMode(
	localStorage.getItem("theme"),
	document.querySelector("#toggleDarkMode")
);
