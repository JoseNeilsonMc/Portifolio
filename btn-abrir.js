document.addEventListener('DOMContentLoaded', function () {
    var btnAbrir = document.getElementById('btn-abrir');
    var btnFechar = document.getElementById('btn-fechar');
    var menu = document.getElementById('menu');

    // Adicione um ouvinte de evento de clique ao botão de abrir
    btnAbrir.addEventListener('click', function () {
        menu.style.display = 'block';
        btnAbrir.style.display = 'none'
        btnAbrir.classList.add('escondido');
    });

    // Adicione um ouvinte de evento de clique ao botão de fechar
    btnFechar.addEventListener('click', function () {
        menu.style.display = 'none';
        btnAbrir.style.display = 'flex';
    });
});