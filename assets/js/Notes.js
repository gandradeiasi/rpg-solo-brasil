class Notes {
    static fecha() {
        Modal.fecha();
        Notes.render();
    }

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

    static moveUp(id) {
        let troca_id = null;

        lista_notas.forEach(x => {
            if (x.id < id && (troca_id ? x.id > troca_id : true)) troca_id = x.id;
        });

        if (troca_id) {
            lista_notas.filter(x => x.id == troca_id)[0].id = id;
            lista_notas.filter(x => x.id == id)[1].id = troca_id;
        }

        lista_notas.sort((x,y) => x.id - y.id)

        Save.save();
        Notes.render();
    }

    static moveDown(id) {
        let troca_id = null;

        lista_notas.forEach(x => {
            if (x.id > id && (troca_id ? x.id < troca_id : true)) troca_id = x.id;
        });

        if (troca_id) {
            lista_notas.filter(x => x.id == id)[0].id = troca_id;
            lista_notas.filter(x => x.id == troca_id)[1].id = id;
        }

        lista_notas.sort((x,y) => x.id - y.id)

        Save.save();
        Notes.render();
    }

    static render() {
        notes_box.innerHTML = `
            <div class="add">
                <div class="botao active hover" id="btn-adiciona-nota">
                    <span class="plus">+</span> Adicionar Nota
                </div>
                <div class="input hover" id="add-input">
                    <input id="add-input-title" type="text" placeholder="Título da nota">
                    <button id="btn-adicionar">Adicionar</button>
                </div>
            </div>
        `;

        lista_notas.forEach(x => {
            notes_box.innerHTML += `
                <div data-id="${x.id}" class="note hover">
                    <div>${x.title}</div>
                    <div class="arrows">
                        <div class="arrow-up" data-id="${x.id}">▲</div>
                        <div class="arrow-down" data-id="${x.id}">▼</div>
                    </div>
                    <button data-id="${x.id}" class="excluir-nota">Excluir</button>
                </div>
            `
        });

        notes_box.querySelectorAll('.note').forEach(x => {
            x.addEventListener('click', e => {
                if (!e.path.some(y => y.classList ? y.classList.contains('excluir-nota') || y.classList.contains('arrow-up') || y.classList.contains('arrow-down') : false)) {
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

        notes_box.querySelectorAll('.arrow-down').forEach(x => {
            x.addEventListener('click', e => { Notes.moveDown(x.dataset.id); });
        })

        notes_box.querySelectorAll('.arrow-up').forEach(x => {
            x.addEventListener('click', e => { Notes.moveUp(parseInt(x.dataset.id)); });
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