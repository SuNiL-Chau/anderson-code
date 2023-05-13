let tabButtons = document.querySelectorAll("[data-tabValue]");
let prevBtn = document.querySelector(".active[data-tabValue]");
tabButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		tabButtons.forEach((allbtns) => {
			if (allbtns == prevBtn) {
				allbtns.classList.remove("active");
				let tabValue = allbtns.dataset.tabvalue;
				let tab = document.querySelector(`[data-tab="${tabValue}"]`);
				tab.classList.remove("show");
			}
		});
		prevBtn = btn;
		btn.classList.toggle("active");
		console.log(btn.dataset);
		let tabValue = btn.dataset.tabvalue;
		let tab = document.querySelector(`[data-tab="${tabValue}"]`);

		if (btn.classList.contains("active")) {
			tab.classList.add("show");
		} else {
			tab.classList.remove("show");
		}
	});
});

let Accbuttons = document.querySelectorAll(".accordion__button");
let AccCheckboxs = document.querySelectorAll(".accordion__checkbox");

Accbuttons.forEach((btn) => {
	btn.addEventListener("click", () => {
		let accContent = btn.nextElementSibling;
		console.log(accContent.offsetWidth);
		btn.classList.toggle("show");
		accContent.style.maxHeight = btn.classList.contains("show")
			? accContent.offsetWidth + "px"
			: "0";
	});
});
