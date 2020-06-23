class CommandController {
    constructor() {
        this.comandos = [
            {
                "names": ["r", "roll", "rolar"],
                "description": `Rola um dado de F face N vezes com ou sem modificador, no formado NdF+Modificador.\nExemplo 1: para rolar 2 dados de 8 faces, digite '/r 2d8'.\nExemplo 2: para rolar 1 dado de 10 faces com +3 de modificador, digite '/r d10+3'.`,
                "function": input => {
                    const regex = /([0-9]*)[d]{1}([0-9]+)\+*([0-9]*)/;
                    const parametro = this.reconheceParametro(input);
                    if (this.validaParametro(parametro, regex)) {
                        const roll_info = regex.exec(parametro);
                        const dice_amount = roll_info[1] ? roll_info[1] : 1;
                        const dice_max = roll_info[2];
                        const modifier = roll_info[3] ? roll_info[3] : 0;
                        this.adicionaAoLog(`<strong>${DiceRoller.formatRoll(DiceRoller.roll(dice_amount, dice_max, modifier))}</strong>`);
                    }
                }
            },
            {
                "names": ["help", "ajuda"],
                "description": `Mostra a lista de comandos disponíveis.`,
                "function": () => {
                    let message = "Um comando é utilzado adicionando uma barra antes dele, nesse formato: '/comando'.\n\n";
                    this.comandos.forEach((x,n) => message += `${x.names.join(', ')}: ${x.description}${n == this.comandos.length-1 ? '' : '\n\n'}`)
                    alert(message);
                }
            }
        ];
    }

    executaComando(input) {
        let comando = this.reconheceComando(input);
        let comando_existe = false;

        this.comandos.forEach(x => { 
            if (x.names.includes(comando))  {
                x.function(input);
                this.limpaComando();
                comando_existe = true;
            }
        });

        if (!comando_existe) alert(`O comando '/${comando}' é inválido.`);
    }

    limpaComando() { txtarea_command.value = "" }

    adicionaAoLog(string) {
        if (txtarea_log.dataset.placeholder) {
            txtarea_log.dataset.placeholder = '';
            txtarea_log.innerHTML = "";
        }
        txtarea_log.innerHTML += string + "<br><br>";
        this.limpaComando();
        txtarea_log.scrollBy(0,99999);
        txtarea_command.focus();
    }

    reconheceComando(input) {
        if (/\/.*\s*/.test(input)) return /\/([a-zA-Z]*)\s*/.exec(input)[1]
        else return null;
    }

    reconheceParametro(input) { return /\/.*\s(.*)/.exec(input.replace(/\n/g,''))[1]; }

    validaParametro(parametro, regex) {
        if (regex.test(parametro)) return true;
        else {
            alert('O valor inserido para esse comando é inválido');
            return false;
        }
    }
}