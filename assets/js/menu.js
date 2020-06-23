const menu_itens = {
    1: 'O que é RPG Solo?',
    2: 'Como utilizar esse site?',
    3: '<a target="_blank" href="https://www.facebook.com/groups/187588152056870">Grupo do Facebook</a>',
    4: 'Configurações'
};

document.querySelectorAll('[data-menu-slot]').forEach(x => { x.innerHTML = menu_itens[x.dataset.menuSlot]; });