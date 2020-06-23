const command_controller = new CommandController();

btn_enviar.addEventListener('click', () => {
    let input = txtarea_command.value;

    if (command_controller.reconheceComando(input)) command_controller.executaComando(input);
    else command_controller.adicionaAoLog(input);
});

hamburger.addEventListener('click', () => {
    if (mobile_menu.classList.contains('active')) mobile_menu.classList.remove('active');
    else mobile_menu.classList.add('active')
});