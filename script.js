document.addEventListener('DOMContentLoaded', function () {
    const adicionarTarefaBtn = document.getElementById('adicionar-tarefa');
    const limparListaBtn = document.getElementById('limpar-lista');
    const textareaTarefa = document.getElementById('tarefa');
    const listaTarefas = document.getElementById('lista-tarefas');

    adicionarTarefaBtn.addEventListener('click', function () {
        const tarefaTexto = textareaTarefa.value.trim();

        if (tarefaTexto !== '') {
            adicionarTarefa(tarefaTexto);
            textareaTarefa.value = '';
        }
    });

    limparListaBtn.addEventListener('click', function () {
        listaTarefas.innerHTML = '';
    });

    function adicionarTarefa(texto) {
        const li = document.createElement('li');
        li.textContent = texto;
        listaTarefas.appendChild(li);
    }
});