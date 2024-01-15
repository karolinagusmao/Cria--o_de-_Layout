// Adiciona uma tarefa à lista correspondente
function adicionarTarefa() {
    const novaTarefa = document.getElementById('nova-tarefa').value.trim();

    if (novaTarefa !== '') {
        const tabelaDia = document.querySelector('#lista-dia ul');
        const tabelaNoite = document.querySelector('#lista-noite ul');

        const novaLinha = document.createElement('li');
        novaLinha.textContent = novaTarefa;

        const novaLinhaDia = novaLinha.cloneNode(true);
        const novaLinhaNoite = novaLinha.cloneNode(true);

        tabelaDia.appendChild(novaLinhaDia);
        tabelaNoite.appendChild(novaLinhaNoite);

        document.getElementById('nova-tarefa').value = '';
    }
}

// Remove a última tarefa adicionada de ambas as listas
function removerTarefa() {
    const tabelaDia = document.querySelector('#lista-dia ul');
    const tabelaNoite = document.querySelector('#lista-noite ul');

    if (tabelaDia.lastChild && tabelaNoite.lastChild) {
        tabelaDia.removeChild(tabelaDia.lastChild);
        tabelaNoite.removeChild(tabelaNoite.lastChild);
    }
}
