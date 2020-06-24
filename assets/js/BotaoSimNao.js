class BotaoSimNao {
    static sim_nao_count = 0;

    static opcoes = [
        { range: [1], evento: true, reseta: true, resultado: "Não, e " },
        { range: [2,3], evento: false, reseta: true, resultado: "Não, e..." },
        { range: [4,5,6,7], evento: false, reseta: true, resultado: "Não, mas..." },
        { range: [8,9,10,11,12,13,14,15], evento: false, reseta: false, resultado: "Não" },
        { range: [16,17,18,19,20,21,22,23], evento: false, reseta: false, resultado: "Sim" },
        { range: [24,25,26,27], evento: false, reseta: true, resultado: "Sim, mas..." },
        { range: [28,29], evento: false, reseta: true, resultado: "Sim, e..." },
        { range: [30], evento: true, reseta: true, resultado: "Sim, e " }
    ]

    static eventos = [
        "uma trama diferente da atual se torna o foco da cena",
        "uma nova trama surge",
        "uma nova ameaça surge",
        "um novo perigo surge",
        "uma aemaça ou perigo antigo volta a aparecer",
        "um NPC (conhecido ou não) entra em cena",
        "um NPC muda drasticamente de alguma forma",
        "um NPC se torna o foco da cena",
        "um objeto se torna o foco da cena",
        "algo acontece que leva para uma mudança de cena",
        "algo importante acontece em outro lugar",
        "o resto da cena te favorece",
        "o resto da cena te prejudica",
        "a natureza ou o clima te favorece",
        "a natureza ou o clima te prejudica",
        "a trama atual muda completamente de direção",
        "a cena continua em outro lugar",
        "a trama atual revela ser mais importante do que parecia",
        "a trama atual revela ser menos importante do que parecia",
        "um vínculo entre personagens de jogador e/ou NPCs é formada",
        "a cena avança consideravelmente uma trama",
        "a cena encerra uma trama",
        "a cena tem algum conflito como foco",
        "a cena envolve investigação, descoberta ou aquisição de conhecimento",
        "um NPC faz uma ação impressionante ou importante",
        "alguma coisa revela não ser o parecia",
        "alguém é ferido",
        "um novo obtáculo aparece"
    ];

    static evento() { return randomFromArray(BotaoSimNao.eventos) }

    static resultado() {
        const totalOpcoes = BotaoSimNao.opcoes.reduce((init, current) => init + current.range.length, 0);
        let result_num = DiceRoller.roll(1,totalOpcoes).results[0];

        const final_count = (result_num <= totalOpcoes / 2) ? BotaoSimNao.sim_nao_count * -1 : BotaoSimNao.sim_nao_count; 
        const final_number = result_num + final_count;

        let result;

        if (final_number <= 1) result = BotaoSimNao.opcoes[0];
        else if (final_number >= totalOpcoes) result = BotaoSimNao.opcoes[BotaoSimNao.opcoes.length-1];
        else result = BotaoSimNao.opcoes.filter(x => x.range.includes(final_number))[0];

        BotaoSimNao.sim_nao_count = result.reseta ? 0 : BotaoSimNao.sim_nao_count + 1;

        let retorno = result.resultado;
        
        if (result.evento) retorno += BotaoSimNao.evento();

        return retorno;
    }
}