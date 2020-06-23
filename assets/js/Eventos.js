class Eventos {
    static lista = [
        "uma trama diferente da atual se torna o foco da cena",
        "uma nova ameaça ou perigo surge",
        "uma aemaça ou perigo antigo volta a aparecer",
        "um NPC (conhecido ou não) entra em cena",
        "um NPC muda drasticamente de alguma forma",
        "um NPC ou objeto se torna o foco da cena",
        "ulgo acontece que leva para uma mudança de cena",
        "o resto da cena favorece os personagens do jogador",
        "a natureza ou o clima te favorece",
        "a natureza ou o clima te prejudica",
        "a trama atual muda completamente de direção",
        "a cena continua em outro lugar",
        "um vínculo entre personagens de jogador e/ou NPCs é formada",
        "a próxima cena deve encerrar ou avançar consideravelmente uma trama",
        "a próxima cena deve ter algum conflito como foco",
        "a próxima cena deve envolver investigação, descoberta ou aquisição de conhecimento",
        "um NPCs faz uma ação impressionante ou importante",
        "alguma coisa revela não ser o que ela parecia ser"
    ];

    static aleatorio() { return 'Evento: ' + Eventos.lista[parseInt(Math.random() * Eventos.lista.length)] }
}