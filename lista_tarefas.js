let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0


function addTarefa() {
    //Pega o valor do campo input
    let valorInput = input.value;

    //valida o valor do campo
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div class="item-nome" onclick="marcarTarefa(${contador})">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete" onclick="deletar(${contador})">Deletar Tarefa <i class="mdi mdi-delete"></i> </button>
        </div>`;

        //adiciona item no main
        main.innerHTML += novoItem;

        //zerar barra de escrita
        input.value = "";
        input.focus();
    }
}


function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == 'item') {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item)

    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}



input.addEventListener("keyup", function (event) {
    //Se teclou enter (13)
    if (event.key == "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
});