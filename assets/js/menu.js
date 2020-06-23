const menu_itens = {
    1: '<a target="_blank" href="https://www.facebook.com/groups/187588152056870">Grupo do Facebook</a>'
};

document.querySelectorAll('[data-menu-slot]').forEach(x => { x.innerHTML = menu_itens[x.dataset.menuSlot]; });