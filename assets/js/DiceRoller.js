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

    static formatRoll(result) {
        let dices = "";
        const modifier_sign = result.modifier ? (result.modifier < 0 ? '-' : '+') : null;
        result.modifier = modifier_sign == "-" ? result.modifier * -1 : result.modifier;
        const modifier_format = `${result.modifier ? ` ${modifier_sign} ${result.modifier}` : ''}`
        result.results.forEach((x,n) => {
            dices += x;
            if (n < result.results.length - 1) dices += " + ";
        });
        return `Rolando ${result.results.length}d${result.dice_max}${modifier_format} : [${dices}]${modifier_format} = ${result.total}`
    }
}