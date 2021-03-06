class Baralho {
    static baralho = [
        { naipe: "", valor: "Curinga", simbolo: "<span class='espada'>♠</span><span class='copa'>♥</span><span class='pau'>♣</span><span class='ouro'>♦</span>" },
        { naipe: "", valor: "Curinga", simbolo: "<span class='espada'>♠</span><span class='copa'>♥</span><span class='pau'>♣</span><span class='ouro'>♦</span>" },
        { naipe: "espada", valor: "A", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "1", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "2", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "3", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "4", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "5", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "6", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "7", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "8", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "9", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "10", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "J", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "Q", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "espada", valor: "K", simbolo: "<span class='espada'>♠</span>" },
        { naipe: "pau", valor: "A", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "1", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "2", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "3", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "4", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "5", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "6", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "7", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "8", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "9", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "10", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "J", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "Q", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "pau", valor: "K", simbolo: "<span class='pau'>♣</span>" },
        { naipe: "copa", valor: "A", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "1", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "2", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "3", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "4", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "5", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "6", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "7", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "8", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "9", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "10", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "J", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "Q", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "copa", valor: "K", simbolo: "<span class='copa'>♥</span>" },
        { naipe: "ouro", valor: "A", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "1", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "2", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "3", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "4", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "5", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "6", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "7", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "8", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "9", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "10", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "J", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "Q", simbolo: "<span class='ouro'>♦</span>" },
        { naipe: "ouro", valor: "K", simbolo: "<span class='ouro'>♦</span>" }
    ];

    static cartas_sacadas = [];

    static embaralhar() {
        Baralho.cartas_sacadas.forEach(x => { Baralho.baralho.push(x); });
        Baralho.cartas_sacadas = [];

        let baralho_embaralhado = [];

        while (Baralho.baralho.length > 0) {
            const rand = parseInt(Math.random() * Baralho.baralho.length);

            baralho_embaralhado.push(Baralho.baralho[rand]);
            Baralho.baralho.splice(rand, 1);
        }

        Baralho.baralho = baralho_embaralhado;
    }

    static sacar() {
        if (Baralho.baralho.length > 0) {
            if (Baralho.cartas_sacadas.length == 0) Baralho.embaralhar();
            const saque = Baralho.baralho[Baralho.baralho.length - 1];
            Baralho.baralho.splice(Baralho.baralho.length - 1, 1);
            Baralho.cartas_sacadas.push(saque);
            return saque;
        }
        else {
            Baralho.embaralhar();
            return { mensagem: "Acabaram as cartas do baralho. Embaralhando... Você pode sacar uma carta agora." }
        }
    }
}