function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
	container: document.querySelector("#boxes"),
	input: document.querySelector("#controls input"),
	createBtn: document.querySelector("button[data-create]"),
	clearBtn: document.querySelector("button[data-destroy]"),
};

refs.createBtn.addEventListener("click", onCreateBtnClick);
refs.clearBtn.addEventListener("click", destroyBoxes);

function onCreateBtnClick() {
	return createBoxes(refs.input.value);
}

function createBoxes(amount) {
	const markupArr = [];
	const length = 30;
	for (let i = 0; i < amount; i += 1) {
		markupArr.push(
			`<div style="background-color:${getRandomHexColor()};width:${
				length + i * 10
			}px;height:${length + i * 10}px"></div>`
		);
	}
	refs.container.innerHTML = markupArr.join("");
}

function destroyBoxes() {
	refs.input.value = 0;
	refs.container.innerHTML = "";
}

