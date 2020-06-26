class Notes {
    static add(title) {
        const id = lista_notas.length == 0 ? 0 : parseInt(lista_notas[lista_notas.length - 1].id) + 1;
        lista_notas.push({ id, title: title ? title : 'Nota', content: '' });
        Save.save();
        Notes.render();
        notes_box.querySelector(`.note[data-id="${id}"]`).click();
    }

    static remove(id) {
        for (let i = 0; i < lista_notas.length; i++)
            if (lista_notas[i].id == id)
                lista_notas.splice(i, 1);
        Save.save();
        Notes.render();
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
                    <div>${x.title}</div>
                    <button data-id="${x.id}" class="excluir-nota">Excluir</button>
                </div>
            `
        });

        notes_box.querySelectorAll('.note').forEach(x => {
            x.addEventListener('click', e => {
                if (!e.path.some(y => y.classList ? y.classList.contains('excluir-nota') : false)) {
                    const note = lista_notas.filter(y => y.id == x.dataset.id)[0];

                    Modal.abre(note.title,
                        `
                        <textarea data-id="${note.id}" class="current-note"  placeholder="Insira aqui suas anotações">
                        </textarea>
                    `
                    );
                    const txtarea = modal.querySelector('.current-note');
                    const title = modal.querySelector('.title');
                    title.setAttribute('contenteditable', 'true');
                    title.setAttribute('data-id', note.id);
                    title.classList.add('note-title');
                    txtarea.value = note.content;
                    txtarea.focus();
                    modal.querySelector('.fecha-modal').addEventListener('click', () => {
                        title.setAttribute('contenteditable', 'false');
                        title.setAttribute('data-id', '');
                        Notes.render();
                    })
                }
            });
        });

        notes_box.querySelectorAll('.excluir-nota').forEach(x => {

            x.addEventListener('click', e => {
                Modal.abre('Excluir nota', `
                <p>Deseja mesmo excluir essa nota?<p>
                <div class="botoes-exclui">
                    <button onclick="Modal.fecha()">Cancelar</button>
                    <button onclick="Notes.remove(${e.path.filter(x => x.dataset ? x.dataset.id : false)[0].dataset.id});Modal.fecha();">Excluir</button>
                </div>`);
            });
        })

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
            Notes.add(add_input_title.value);
        });
    }
}

Notes.render();