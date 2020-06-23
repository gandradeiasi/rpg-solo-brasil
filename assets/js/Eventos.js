class Eventos {
    static lista = [
        "Uma trama diferente da atual se torna o foco da cena",
        "Uma nova ameaça ou perigo surge",
        "Uma aemaça ou perigo antigo volta a aparecer",
        "Um NPC (conhecido ou não) entra em cena",
        "Um NPC muda drasticamente de alguma forma",
        "Um NPC ou objeto se torna o foco da cena",
        "Algo acontece que leva para uma mudança de cena",
        "O resto da cena favorece os personagens do jogador",
        "A natureza ou o clima te favorece",
        "A natureza ou o clima te prejudica",
        "A trama atual muda completamente de direção",
        "A cena continua em outro lugar",
        "Um vínculo entre personagens de jogador e/ou NPCs é formada",
        "A próxima cena deve encerrar ou avançar consideravelmente uma trama",
        "A próxima cena deve ter algum conflito como foco",
        "A próxima cena deve envolver investigação, descoberta ou aquisição de conhecimento",
        "Um NPCs faz uma ação impressionante ou importante",
        "Alguma coisa revela não ser o que ela parecia ser"
    ]

    static aleatorio() { return Eventos.lista[parseInt(Math.random() * Eventos.lista.length)] }
}