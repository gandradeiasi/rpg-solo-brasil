const command_controller = new CommandController();

btn_enviar.addEventListener('click', () => {
    let input = txtarea_command.value;

    if (command_controller.reconheceComando(input)) command_controller.executaComando(input);
    else command_controller.adicionaAoLog(input);
});
