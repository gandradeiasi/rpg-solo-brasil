const command_controller = new CommandController();

btn_enviar.addEventListener('click', () => { enviaComando(); });

hamburger.addEventListener('click', () => {
    if (mobile_menu.classList.contains('active')) mobile_menu.classList.remove('active');
    else mobile_menu.classList.add('active')
});

copy_log.addEventListener('click', () => copy(txtarea_log.innerText, "Log copiado para a área de transferência"));

copy_notes.addEventListener('click', () => copy(txtarea_notes.value, "Anotações copiadas para a área de transferência"));

btn_rolar.addEventListener('click', () => {
    txtarea_command.value = `/r ${dice_amount.value}d${dice_max.value}${dice_modifier.value < 0 ? `-${dice_modifier.value * -1}` : `+${dice_modifier.value}`}`
    enviaComando();
});

btn_sim_nao.addEventListener('click', () => {
    adicionaPergunta();
    command_controller.adicionaAoLog(`<strong>${BotaoSimNao.resultado()}<strong>`);
});

btn_inspiracoes.addEventListener('click', () => {
    adicionaPergunta();
    const resultado = BotaoInspiracoes.resultado();
    command_controller.adicionaAoLog(`<strong>Inspiração: ${resultado.substantivo} / ${resultado.verbo}<strong>`);
});

btn_missao.addEventListener('click', () => {
    adicionaPergunta();
    const resultado = BotaoMissoes.resultado();
    command_controller.adicionaAoLog(`<strong>Missão: ${resultado.verbo} / ${resultado.substantivo}<strong>`);
});

btn_baralho.addEventListener('click', () => {
    adicionaPergunta();
    const resultado = Baralho.sacar();
    if (resultado.mensagem) command_controller.adicionaAoLog(`<strong>${resultado.mensagem}<strong>`);
    else command_controller.adicionaAoLog(`<strong>Carta: ${resultado.valor} ${resultado.simbolo}<strong>`);
});

btn_personagem.addEventListener('click', () => {
    adicionaPergunta();
    const resultado = BotaoPersonagem.resultado();
    command_controller.adicionaAoLog(`<strong>Personagem: ${resultado.nome}, o(a) ${resultado.oficio} ${resultado.caracteristica} que está ${resultado.estado}<strong>`);
});

window.addEventListener('keyup', e => {
    //envia o que estiver na caida de comando
    if (e.key == "Enter" && document.activeElement === txtarea_command)
        enviaComando();

    if (txtarea_log.innerHTML == "<br>") txtarea_log.innerHTML = '';

    Save.save();
});

window.addEventListener('keydown', e => {
    //busca comandos
    if (!txtarea_command.value || txtarea_command.value[0] == '/') {
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
    else command_controller.adicionaAoLog(input);
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