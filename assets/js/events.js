const command_controller = new CommandController();

btn_enviar.addEventListener('click', () => { enviaComando(); });

hamburger.addEventListener('click', () => {
    if (mobile_menu.classList.contains('active')) mobile_menu.classList.remove('active');
    else mobile_menu.classList.add('active')
});

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

window.addEventListener('keyup', e => {
    if (e.key == "Enter" && document.activeElement === txtarea_command) enviaComando();

    if (txtarea_log.innerHTML == "<br>") txtarea_log.innerHTML = '';
    Save.save();
});

abre_anotacoes.addEventListener('click', () => { anotacoes.classList.add('active') });

fecha_anotacoes.addEventListener('click', () => { anotacoes.classList.remove('active') });

function enviaComando() {
    let input = txtarea_command.value;

    if (!input) return;

    if (command_controller.reconheceComando(input)) command_controller.executaComando(input);
    else command_controller.adicionaAoLog(input);
}

function adicionaPergunta() {
    let input = txtarea_command.value;
    if (input) command_controller.adicionaAoLog(input);
}