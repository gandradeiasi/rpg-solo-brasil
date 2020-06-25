class DiceRoller {
    static roll(dice_amount, dice_max, dice_modifier) {
        let result = {
            'dice_max': dice_max,
            'results': [],
            'modifier': dice_modifier,
            'total': 0,
        }

        for (let i = 0; i < dice_amount; i++) {
            result.results.push(parseInt(Math.random() * dice_max) + 1)
            result.total += result.results[i];
        }

        result.total += parseInt(dice_modifier);

        return result;
    }

    static formataSoma(result) {
        const modifier_sign = result.modifier ? (result.modifier < 0 ? '-' : '+') : null;
        result.modifier = modifier_sign == "-" ? result.modifier * -1 : result.modifier;
        const modifier_format = `${result.modifier ? ` ${modifier_sign} ${result.modifier}` : ''}`
        return `Rolando ${result.results.length}d${result.dice_max}${modifier_format} : ${DiceRoller.formataDices(result)}${modifier_format} || Soma = ${result.total}`
    }

    static formataVantagem(result) {
        return `Rolando ${result.results.length}d${result.dice_max} : ${DiceRoller.formataDices(result)} || Maior = ${result.results.reduce((x,y) => y > x ? y : x, 0)}`
    }

    static formataDesvantagem(result) {
        return `Rolando ${result.results.length}d${result.dice_max} : ${DiceRoller.formataDices(result)} || Menor = ${result.results.reduce((x,y) => y < x ? y : x, result.results[0])}`
    }

    static formataDices(result) {
        let dices = "";
        result.results.forEach((x, n) => {
            dices += x;
            if (n < result.results.length - 1) dices += ", ";
        });
        return `[${dices}]`;
    }

    static infoFromParam(param) {
        const roll_info = DiceRoller.regex.exec(param);
        const dice_amount = roll_info[1] ? roll_info[1] : 1;
        const dice_max = roll_info[2];
        const sign = roll_info[3] ? (roll_info[3][0] == "+" ? 1 : -1) : 1;
        const modifier = roll_info[4] ? roll_info[4] * sign : 0;

        return {
            dice_amount,
            dice_max,
            modifier
        }
    }

    static regex = /([0-9]*)d([0-9]+)([+-]*)([0-9]*)/;
}