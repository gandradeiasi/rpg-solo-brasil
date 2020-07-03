class CommandController {
    constructor() {
        this.comandos = [
            {
                "names": ["r", "roll", "rolar"],
                "description": `Rola um dado de F face N vezes com ou sem modificador, no formado NdF+Modificador.\nExemplo 1: para rolar 2 dados de 8 faces, digite '/r 2d8'.\nExemplo 2: para rolar 1 dado de 10 faces com +3 de modificador, digite '/r d10+3'.`,
                "function": input => {
                    const parametro = this.reconheceParametro(input);
                    if (this.validaParametro(parametro, DiceRoller.regex)) {
                        const info = DiceRoller.infoFromParam(parametro);
                        this.adicionaAoLog(`${DiceRoller.formataSoma(DiceRoller.roll(info.dice_amount, info.dice_max, info.modifier))}`);
                        return true;
                    }
                    return false;
                }
            },
            {
                "names": ["vantagem", "vant", "van"],
                "description": `Faz uma rolagem igual ao comando '/r', mas destacando o resultado maior.`,
                "function": input => {
                    const parametro = this.reconheceParametro(input);
                    if (this.validaParametro(parametro, DiceRoller.regex)) {
                        const info = DiceRoller.infoFromParam(parametro);
                        this.adicionaAoLog(`${DiceRoller.formataVantagem(DiceRoller.roll(info.dice_amount, info.dice_max))}`);
                        return true;
                    }
                    return false;
                }
            },
            {
                "names": ["desvantagem", "desvant", "des"],
                "description": `Faz uma rolagem igual ao comando '/r', mas destacando o resultado menor.`,
                "function": input => {
                    const parametro = this.reconheceParametro(input);
                    if (this.validaParametro(parametro, DiceRoller.regex)) {
                        const info = DiceRoller.infoFromParam(parametro);
                        this.adicionaAoLog(`${DiceRoller.formataDesvantagem(DiceRoller.roll(info.dice_amount, info.dice_max))}`);
                        return true;
                    }
                    return false;
                }
            },
            {
                "names": ["calc", "calculadora", "calcular", "calculate", "calcula"],
                "description": "Realiza uma conta matemática que utilize os eperadores +,-,* e /",
                "function": input => {
                    const parametro = this.reconheceParametro(input);
                    if (this.validaParametro(parametro, /(\d\s*[+\-*/]\s*)+\s*\d+$/)) {
                        this.adicionaAoLog(`<strong>${parametro.replace(/\s+/g, '')} = ${eval(parametro)}`);
                        return true;
                    }
                    return false;
                }
            },
            {
                "names": ["carta", "baralho", "sacar", "saca", "card"],
                "description": 'Saca uma carta do baralha. Caso o baralho esteja vazio, embaralha as cartas.',
                "function": () => {
                    const resultado = Baralho.sacar();
                    if (resultado.mensagem) command_controller.adicionaAoLog(`<strong>${resultado.mensagem}</strong>`);
                    else command_controller.adicionaAoLog(`<strong>Carta:</strong> ${resultado.valor} ${resultado.simbolo}`);
                    return true;
                }
            },
            {
                "names": ["limpa", "limpar", "clear", "clean", "c"],
                "description": `Limpa o log.`,
                "function": () => {
                    txtarea_log.innerHTML = "";
                    return true;
                }
            },
            {
                "names": ["help", "ajuda", "ajudar", "comando", "comandos", "command", "commands"],
                "description": `Mostra a lista de comandos disponíveis.`,
                "function": () => {
                    let message = "<br>Um comando é utilzado adicionando uma barra antes dele, nesse formato: '/comando'.<br><br>";
                    this.comandos.forEach((x, n) => message += `<strong>${x.names.join(', ')}</strong>: ${x.description}${n == this.comandos.length - 1 ? '' : '<br><br>'}`)
                    Modal.abre('Comandos', message);
                    return true;
                }
            }
        ];
    }

    executaComando(input) {
        let comando = this.reconheceComando(input);
        let comando_existe = false;

        const input_sem_quebra = input.replace(/\n/g, '');

        this.comandos.forEach(x => {
            if (x.names.includes(comando)) {
                comando_existe = true;
                const function_ok = x.function(input_sem_quebra);
                if (function_ok) {
                    this.limpaComando();
                    if (pilha_comandos[pilha_comandos.length - 2] != input_sem_quebra)
                        pilha_comandos.splice(pilha_comandos.length - 1, 0, input_sem_quebra)
                    pilha_comandos_index = pilha_comandos.length - 1;
                }
            }
        });

        if (!comando_existe) {
            txtarea_command.value = txtarea_command.value.replace(/\n/g, '');
            alert(`O comando '/${comando}' é inválido.`);
        };
    }

    limpaComando() { txtarea_command.value = "" }

    adicionaAoLog(string) {
        this.limpaComando();
        txtarea_log.innerHTML += string + "<br><br>";
        txtarea_log.scrollBy(0, 99999);
        txtarea_command.focus();
        Save.save();
    }

    reconheceComando(input) {
        if (/\/.*\s*/.test(input)) return /\/([a-zA-Z]*)\s*/.exec(input)[1]
        else return null;
    }

    reconheceParametro(input) {
        return /^\/\w+\s(.*)/g.exec(input.replace(/\n/g, ''))[1];
    }

    validaParametro(parametro, regex) {
        if (regex.test(parametro)) return true;
        else {
            txtarea_command.value = txtarea_command.value.replace(/\n/g, '');
            alert('O valor inserido para esse comando é inválido');
            return false;
        }
    }
}