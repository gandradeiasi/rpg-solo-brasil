const command_controller = new CommandController();

btn_enviar.addEventListener('click', () => { enviaComando(); });

hamburger.addEventListener('click', () => {
    if (mobile_menu.classList.contains('active')) mobile_menu.classList.remove('active');
    else mobile_menu.classList.add('active')
});

btn_sim_nao.addEventListener('click', () => {
    let input = txtarea_command.value;
    if (input) command_controller.adicionaAoLog(input);
    command_controller.adicionaAoLog(`<strong>${BotaoSimNao.resultado()}<strong>`);
});

window.addEventListener('keyup', e => {
    if (e.key == "Enter" && document.activeElement === txtarea_command) enviaComando();
});

abre_anotacoes.addEventListener('click', () => { anotacoes.classList.add('active') });

fecha_anotacoes.addEventListener('click', () => { anotacoes.classList.remove('active') });

function enviaComando() {
    let input = txtarea_command.value;

    if (command_controller.reconheceComando(input)) command_controller.executaComando(input);
    else command_controller.adicionaAoLog(input);

    txtarea_log.scrollBy(0,99999);
}