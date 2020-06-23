class BotaoSimNao {
    static sim_nao_count = 0;

    static opcoes = [
        { range: [1], evento: true, reseta: true, resultado: "Não, e um evento acontece:" },
        { range: [2,3], evento: false, reseta: true, resultado: "Não, e..." },
        { range: [4,5,6], evento: false, reseta: true, resultado: "Não, mas..." },
        { range: [7,8,9,10], evento: false, reseta: false, resultado: "Não" },
        { range: [11,12,13,14], evento: false, reseta: false, resultado: "Sim" },
        { range: [15,16,17], evento: false, reseta: true, resultado: "Sim, mas..." },
        { range: [18,19], evento: false, reseta: true, resultado: "Sim, e..." },
        { range: [20], evento: true, reseta: true, resultado: "Sim, um evento acontece:" }
    ]

    static resultado() {
        const totalOpcoes = BotaoSimNao.opcoes.reduce((init, current) => init + current.range.length, 0);
        let result_num = parseInt(Math.random() * totalOpcoes + 1);

        const final_count = (result_num <= totalOpcoes / 2) ? BotaoSimNao.sim_nao_count * -1 : BotaoSimNao.sim_nao_count; 
        const final_number = result_num + final_count;

        let result;

        if (final_number <= 1) result = BotaoSimNao.opcoes[0];
        else if (final_number >= totalOpcoes) result = BotaoSimNao.opcoes[BotaoSimNao.opcoes.length-1];
        else result = BotaoSimNao.opcoes.filter(x => x.range.includes(final_number))[0];

        BotaoSimNao.sim_nao_count = result.reseta ? 0 : BotaoSimNao.sim_nao_count + 1;

        console.log(BotaoSimNao.sim_nao_count);

        if (result.evento) result.resultado += `<br><br>${Eventos.aleatorio()}`;

        return result.resultado;
    }
}