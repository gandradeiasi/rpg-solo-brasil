class Modal {
    static preenche(title, content) {
        modal.querySelector('.title').innerHTML = title;
        modal.querySelector('.content').innerHTML = content;
    }

    static abre() { modal.classList.add('active'); }

    static fecha() { modal.classList.remove('active'); }
}