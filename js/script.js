// TEMA
// selecionar elementos
const root = document.documentElement;
const tema = document.getElementById("btnTema");

// tema light/dark
tema.addEventListener("click", () => {
	const escuro = root.getAttribute("data-tema") === 'escuro';

	if (escuro) {
		root.removeAttribute("data-tema");
	} else {
		root.setAttribute("data-tema", "escuro");
	}
});
// =============== FINALIZADO =====================================

// NOTAS
// ELEMENTOS
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");
const notesContainer = document.querySelector("#notes-container");


// funções
function addNote() {

	const noteObject = {
		id: generatedId(),
		content: noteInput.value,
		fixed: false,
	};

	const noteElement = createNote(noteObject.id, noteObject.content);

	notesContainer.appendChild(noteElement)

}

function generatedId() {
	return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed) {

	const element = document.createElement("div");

	element.classList.add("note");

	const textarea = document.createElement("textarea");

	textarea.value = content;

	textarea.placeholder = "Adicione Aqui";

	element.appendChild(textarea);

	return element;
}



// eventos
addNoteBtn.addEventListener("click", () => addNote());