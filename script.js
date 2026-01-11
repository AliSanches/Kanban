import { aPri } from './variables.js';

const columns = document.querySelectorAll('.container-pillar');
const cards = document.querySelectorAll('.card');
const btnModal = document.querySelector('#add');
const modal = document.querySelector('#modal-main');
const btnClose = document.querySelector('#btn-close');

////////////////////////////////////////////////////////////////////
// Data transfer: Objeto do nav. usado para transferir algo enquanto
// algo esta sendo arrastado.
// dataTransfer.SetData(tipo do valor, valor);

// todos os cards podem ser arrastados
cards.forEach(card => {
    card.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text", e.target.id);
    });
});

// todas as colunas aceitam cards
columns.forEach(column => {

    column.addEventListener("dragover", (e) => {
        e.preventDefault(); // necessário para permitir o drop
    });

    column.addEventListener("drop", (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text");
        const draggedCard = document.getElementById(id);
        column.appendChild(draggedCard);
    });
});

const ModalOpen = () => {
    modal.classList.toggle("active");
}

const loadOpts = () => {
    const select = document.querySelector('#priority');

    select.innerHTML = aPri
        .map((item, index) => `<option value="${item}">${index}</option>`)
        .join('');
}

btnModal.addEventListener('click', ModalOpen);
btnClose.addEventListener('click', ModalOpen);