/*document.addEventListener('DOMContentLoaded', function () {
    var btnAbrir = document.getElementById('btn-abrir');
    var menu = document.getElementById('menu');

    // Adicione um ouvinte de evento de clique ao botão de abrir
    btnAbrir.addEventListener('click', function () {
        // Alterna a visibilidade do menu
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
});*/
document.addEventListener('DOMContentLoaded', function () {
    var btnAbrir = document.getElementById('btn-abrir');
    var btnFechar = document.getElementById('btn-fechar');
    var menu = document.getElementById('menu');

    // Adicione um ouvinte de evento de clique ao botão de abrir
    btnAbrir.addEventListener('click', function () {
        menu.style.display = 'block';
        btnAbrir.classList.add('escondido');
    });

    // Adicione um ouvinte de evento de clique ao botão de fechar
    btnFechar.addEventListener('click', function () {
        menu.style.display = 'none';
        btnAbrir.classList.remove('escondido');
    });
});