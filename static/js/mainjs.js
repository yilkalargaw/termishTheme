 function darkMode() {
     var element = document.body;
     element.className = "dark-mode";
     console.log("Dark Mode is ON");
	 var highlight_theme = document.getElementsByTagName('link')[0];
	 highlight_theme.setAttribute('href', "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/brewer.min.css");
 }

 function lightMode() {
     var element = document.body;
     element.className = "light-mode";
	 console.log("Dark Mode is OFF");
	 var highlight_theme = document.getElementsByTagName('link')[0];
	 highlight_theme.setAttribute('href', "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/base16/github.min.css");
 }

 /* if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	// dark mode
	var element = document.body;
  *     var content = document.getElementById("DarkModetext");
  *     element.className = "dark-mode";
  *     content.innerText = "Dark Mode is ON";
	} */

 function darken() {
	 let dm = document.querySelector('#color-mode');
	 localStorage.setItem("button-pressed", "true");

	 if (dm.checked == true)
	 {
		 darkMode();
	 }
	 else
	 {
		 lightMode();
	 }
 }

 var divfordark = document.getElementById('darkmode');

 var cb = document.createElement('input');
 cb.type = 'checkbox';
 cb.name = 'color-mode';
 cb.value = 'Dark';
 cb.id = "color-mode";
 cb.addEventListener("click", darken);
 cb.addEventListener("click", localStorage.setItem("button-pressed", "true"));
 divfordark.appendChild(cb);
 divfordark.appendChild(document.createTextNode(" Dark Mode"));

 if (localStorage.getItem("button-pressed") === "true"){
	 darken();
 }
 else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	 let dm = document.querySelector('#color-mode');
	 darkMode();
	 dm.checked = true;
 }
 else {
	 lightMode();
 }
