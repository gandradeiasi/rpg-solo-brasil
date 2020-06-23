class Eventos {
    static lista = [
        "uma trama diferente da atual se torna o foco da cena",
        "uma nova trama surge",
        "uma nova ameaça ou perigo surge",
        "uma aemaça ou perigo antigo volta a aparecer",
        "um NPC (conhecido ou não) entra em cena",
        "um NPC muda drasticamente de alguma forma",
        "um NPC ou objeto se torna o foco da cena",
        "algo acontece que leva para uma mudança de cena",
        "algo importante acontece em outro lugar",
        "o resto da cena favorece os personagens do jogador",
        "o resto da cena prejudica os personagens do jogador",
        "a natureza ou o clima te favorece",
        "a natureza ou o clima te prejudica",
        "a trama atual muda completamente de direção",
        "a cena continua em outro lugar",
        "a trama atual revela ser mais importante do que parecia ser",
        "a trama atual revela ser menos importante do que parecia ser",
        "um vínculo entre personagens de jogador e/ou NPCs é formada",
        "a próxima cena encerra ou avançar consideravelmente uma trama",
        "a próxima cena tem algum conflito como foco",
        "a próxima cena envolve investigação, descoberta ou aquisição de conhecimento",
        "NPC faz uma ação impressionante ou importante",
        "alguma coisa revela não ser o que ela parecia",
        "alguém é ferido"
    ];

    static aleatorio() { return 'Evento: ' + Eventos.lista[parseInt(Math.random() * Eventos.lista.length)] }
}