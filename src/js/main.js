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

if (window.innerWidth > 1024) {
	setTimeout(() => {
		let RegContent = document.querySelector(".registration");
		let RegContentHeight = RegContent.offsetHeight;
		RegContent.style.height = RegContentHeight + "px";
	}, 1000);
}

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

let SelectAll = document.querySelector("#Selectall");
let allCheckboxes = document.querySelectorAll(".accordion__checkbox");
SelectAll.addEventListener("change", () => {
	let checkStatus = false;
	if (SelectAll.checked) {
		checkStatus = true;
	}
	console.log(checkStatus);
	allCheckboxes.forEach((input) => {
		input.checked = checkStatus;
	});
});

let YourProgram = document.querySelector("#YourProgram");
let allProgramCheckboxes = document.querySelectorAll(
	".accordion__checkbox.programCheck"
);
YourProgram.addEventListener("change", (e) => {
	e.preventDefault();
	let checkStatus = false;
	if (YourProgram.checked) {
		checkStatus = true;
	}
	console.log(checkStatus);
	allProgramCheckboxes.forEach((input) => {
		input.checked = checkStatus;
	});
});

let YourCampus = document.querySelector("#YourCampus");
let allCampusCheckboxes = document.querySelectorAll(
	".accordion__checkbox.campus"
);
YourCampus.addEventListener("change", (e) => {
	e.preventDefault();
	let checkStatus = false;
	if (YourCampus.checked) {
		checkStatus = true;
	}
	console.log(checkStatus);
	allCampusCheckboxes.forEach((input) => {
		input.checked = checkStatus;
	});
});
let CommitmenttoExcellence = document.querySelector("#CommitmenttoExcellence");
let allCommitmentCheckboxes = document.querySelectorAll(
	".accordion__checkbox.commitment"
);
CommitmenttoExcellence.addEventListener("change", (e) => {
	e.preventDefault();
	let checkStatus = false;
	if (CommitmenttoExcellence.checked) {
		checkStatus = true;
	}
	console.log(checkStatus);
	allCommitmentCheckboxes.forEach((input) => {
		input.checked = checkStatus;
	});
});
let WhyStudyatAnderson = document.querySelector("#WhyStudyatAnderson");
let allwhystudyCheckboxes = document.querySelectorAll(
	".accordion__checkbox.whystudy"
);
WhyStudyatAnderson.addEventListener("change", (e) => {
	e.preventDefault();
	let checkStatus = false;
	if (WhyStudyatAnderson.checked) {
		checkStatus = true;
	}
	console.log(checkStatus);
	allwhystudyCheckboxes.forEach((input) => {
		input.checked = checkStatus;
	});
});
let NextSteps = document.querySelector("#NextSteps");
let allStepsCheckboxes = document.querySelectorAll(
	".accordion__checkbox.Steps"
);
NextSteps.addEventListener("change", (e) => {
	e.preventDefault();
	let checkStatus = false;
	if (NextSteps.checked) {
		checkStatus = true;
	}
	console.log(checkStatus);
	allStepsCheckboxes.forEach((input) => {
		input.checked = checkStatus;
	});
});
