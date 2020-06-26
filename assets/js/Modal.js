class Modal {
    static abre(title, content) {
        modal.querySelector('.title').innerHTML = title;
        modal.querySelector('.content').innerHTML = content;
        modal.classList.add('active');
    }

    static fecha() { modal.classList.remove('active'); }
}