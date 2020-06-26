class Notes {
    static criaNota(title) {
        const id = lista_notas.length == 0 ? 0 : parseInt(lista_notas[lista_notas.length - 1].id) + 1;
        lista_notas.push({ id, title : title ? title : 'Nota', content: '' });
        Notes.render();
        Save.save();
        notes_box.querySelector(`.note[data-id="${id}"]`).click();
    }

    static render() {
        notes_box.innerHTML = `
        <div class="add">
                <div class="botao active" id="btn-adiciona-nota">
                    <span class="plus">+</span> Adicionar Nota
                </div>
                <div class="input" id="add-input">
                    <input id="add-input-title" type="text" placeholder="Título da nota">
                    <button id="btn-adicionar">Adicionar</button>
                </div>
            </div>
        `;

        lista_notas.forEach(x => {
            notes_box.innerHTML += `
                <div data-id="${x.id}" class="note">
                    ${x.title}
                </div>
            `
        });
        
        notes_box.querySelectorAll('.note').forEach(x => {
            const note = lista_notas[x.dataset.id];

            x.addEventListener('click', () => {
                Modal.preenche(note.title, 
                    `
                        <textarea data-id="${note.id}" class="current-note"  placeholder="Insira aqui suas anotações">
                        </textarea>
                    `
                );
                const txtarea = modal.querySelector('.current-note');
                const title = modal.querySelector('.title');
                title.setAttribute('contenteditable','true');
                title.setAttribute('data-id', note.id);
                title.classList.add('note-title');
                txtarea.value = note.content;
                Modal.abre();
                txtarea.focus();
                modal.querySelector('.fecha-modal').addEventListener('click', () => Notes.render())
            });
        });

        window.addEventListener('keyup', () => {
            const element = document.activeElement;

            if (element.classList.contains('current-note')) {
                lista_notas.filter(x => x.id == element.dataset.id)[0].content = element.value;
                Save.save();
            }
            else if (element.classList.contains('note-title')) {
                lista_notas.filter(x => x.id == element.dataset.id)[0].title = element.innerText ? element.innerText : 'Nota';
                Save.save();
            }
        });

        const btn_adiciona_nota = document.querySelector('#btn-adiciona-nota');
        const add_input_title = document.querySelector('#add-input-title');
        const add_input = document.querySelector('#add-input');

        btn_adiciona_nota.addEventListener('click', () => {
            btn_adiciona_nota.classList.remove('active');
            add_input.classList.add('active');
            add_input_title.focus();
        });
        
        document.querySelector('#btn-adicionar').addEventListener('click', () => {
            add_input.classList.remove('active');
            btn_adiciona_nota.classList.add('active');
            Notes.criaNota(add_input_title.value);
            Modal.abre();
        });
    }
}

Notes.render();