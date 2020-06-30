const command_controller = new CommandController();

btn_enviar.addEventListener('click', () => { enviaComando(); });

hamburger.addEventListener('click', () => {
    if (mobile_menu.classList.contains('active')) mobile_menu.classList.remove('active');
    else mobile_menu.classList.add('active')
});

copy_log.addEventListener('click', () => copy(txtarea_log.innerText, "Log copiado para a área de transferência"));

btn_rolar.addEventListener('click', () => {
    adicionaPergunta();
    txtarea_command.value = `/r ${dice_amount.value}d${dice_max.value}${dice_modifier.value < 0 ? `-${dice_modifier.value * -1}` : `+${dice_modifier.value}`}`
    enviaComando();
});

btn_vantagem.addEventListener('click', () => {
    adicionaPergunta();
    txtarea_command.value = `/van ${dice_amount.value}d${dice_max.value}}`
    enviaComando();
});

btn_desvantagem.addEventListener('click', () => {
    adicionaPergunta();
    txtarea_command.value = `/des ${dice_amount.value}d${dice_max.value}}`
    enviaComando();
});

btn_sim_nao.addEventListener('click', () => {
    adicionaPergunta();
    command_controller.adicionaAoLog(`<strong>${BotaoSimNao.resultado()}<strong>`);
});

btn_baralho.addEventListener('click', () => {
    adicionaPergunta();
    txtarea_command.value = `/carta ${dice_amount.value}d${dice_max.value}}`
    enviaComando();
});

modal.addEventListener('click', e => {
    if (!e.path.some(x => x.classList ? x.classList.contains('body') : false))
        Notes.fecha();
});

btn_tabelas_geradores.addEventListener('click', () => {
    Modal.abre('Tabelas e Geradores', `
        <br>
        <button class="btn-tabela-gerador" id="btn-inspiracoes" onclick="Modal.fecha()">Inspiração</button>
        <button class="btn-tabela-gerador" id="btn-missao" onclick="Modal.fecha()">Missão</button>
        <button class="btn-tabela-gerador" id="btn-profissao" onclick="Modal.fecha()">Profissão</button>
        <button class="btn-tabela-gerador" id="btn-nome" onclick="Modal.fecha()">Nome</button>
        <button class="btn-tabela-gerador" id="btn-adjetivo" onclick="Modal.fecha()">Adjetivo para NPC</button>
    `);

    modal.querySelector('#btn-inspiracoes').addEventListener('click', () => {
        adicionaPergunta();
        const resultado = BotaoInspiracoes.resultado();
        command_controller.adicionaAoLog(`<strong>Inspiração: ${resultado.substantivo} / ${resultado.verbo}<strong>`);
    });
    
    modal.querySelector('#btn-missao').addEventListener('click', () => {
        adicionaPergunta();
        const resultado = BotaoMissoes.resultado();
        command_controller.adicionaAoLog(`<strong>Missão: ${resultado.verbo} / ${resultado.substantivo}<strong>`);
    });
    
    modal.querySelector('#btn-nome').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Nome: ${Nome.nome()}<strong>`);
    });

    modal.querySelector('#btn-profissao').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Profissão: ${randomFromArray(Tabelas.profissoes)}<strong>`);
    });

    modal.querySelector('#btn-adjetivo').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Adjetivo: ${randomFromArray(Tabelas.adjetivos)}<strong>`);
    });
});

fecha_modal.addEventListener('click', () => Modal.fecha());

window.addEventListener('keyup', e => {
    if (e.key == "Shift") shift = false;

    else if (e.key == "Enter") {
        if (!shift && document.activeElement === txtarea_command)
            enviaComando();
        else if (document.activeElement.id ? document.activeElement.id == "add-input-title" : false )
            document.querySelector('#btn-adicionar').click();
    }

    else if (txtarea_log.innerHTML == "<br>") txtarea_log.innerHTML = '';

    Save.save();
});

window.addEventListener('keydown', e => {
    if (e.key == "Shift") shift = true;

    //busca comandos
    else if (document.activeElement == txtarea_command && !txtarea_command.value || txtarea_command.value[0] == '/') {
        switch (e.key) {
            case "ArrowUp":
                if (pilha_comandos_index > 0) {
                    pilha_comandos_index--;
                    atualizaComando();
                }
                else atualizaComando();
                break;
            case "ArrowDown":
                if (pilha_comandos_index < pilha_comandos.length - 1) {
                    pilha_comandos_index++;
                    atualizaComando();
                }
                break;
        }
    }
    
    else if (e.key == "Escape") { Notes.fecha(); }
});

abre_anotacoes.addEventListener('click', () => { anotacoes.classList.add('active') });

fecha_anotacoes.addEventListener('click', () => { anotacoes.classList.remove('active') });

function atualizaComando() {
    if (pilha_comandos.length > 1) {
        txtarea_command.value = pilha_comandos[pilha_comandos_index];
        txtarea_command.classList.add('no-cursor');
        setTimeout(() => {
            txtarea_command.setSelectionRange(txtarea_command.value.length, txtarea_command.value.length);
            txtarea_command.classList.remove('no-cursor');
        }, .1)
    }
}

function enviaComando() {
    let input = txtarea_command.value;

    if (!input) return;

    if (command_controller.reconheceComando(input)) command_controller.executaComando(input);
    else if (/^\n/.test(input)) command_controller.limpaComando();
    else {
        let input_formatado = input.replace(/\n+$/, '')
        command_controller.adicionaAoLog(input_formatado.replace(/\n/g, '<br>'));
    }
}

function adicionaPergunta() {
    let input = txtarea_command.value;
    if (input) command_controller.adicionaAoLog(input);
}

function copy(text, message) {
    txtarea_copy.value = text;
    txtarea_copy.select();
    txtarea_copy.setSelectionRange(0, 99999); /*For mobile devices*/
    document.execCommand("copy");
    if (message) alert(message);
}