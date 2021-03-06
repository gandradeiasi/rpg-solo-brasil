class BotaoMissoes {
    static substantivos = [
        'carga', 'mercador', 'viajantes', 'tropa', 'governante', 'nobre', 'item mágico',
        'inocente', 'rebelde', 'prisioneiro', 'artefato', 'relíquia', 'esperança',
        'item roubado', 'poder', 'item valioso', 'fortaleza', 'obra de arte',
        'conhecido', 'inimigo', 'monstro', 'criatura', 'arma', 'armadura', 'ferido',
        'doente', 'tristeza', 'aliado', 'você', 'mal-entendido', 'amizade', 'relacionamento',
        'ferramenta', 'exército', 'gladiador', 'familiar', 'clone', 'castelo', 'amuleto',
        'base inimiga', 'floresta', 'montanha', 'barco', 'taverna', 'escola', 'contrabandista',
        'assassino', 'apostador', 'moradia', 'montaria', 'poção', 'ingrediente', 'material',
        'comida', 'veste', 'terreno', 'fazenda', 'vida', 'equipamento', 'paz', 'guerra',
        'sacerdote', 'deus', 'espírito', 'demônio', 'liberdade', 'direito', 'alma', 'item amaldiçoado',
        'pergaminho', 'mercadoria', 'morto', 'mensagem', 'invenção', 'militar', 'veículo', 'informação',
        'testemunho', 'imposto', 'dinheiro', 'mendigo', 'perdido', 'entrangeiro', 'ancião', 'criança',
        'povo', 'aldeia', 'vila', 'cidade', 'raça', 'animal', 'criminoso', 'malfeitor', 'bibliotecário',
        'vítima', 'crime', 'ruína', 'caverna', 'lago', 'beco', 'guilda', 'mercado', 'ordem', 'farsante',
        'escravo', 'rico', 'pobre', 'tirano', 'lenda', 'ponte', 'abrigo', 'torre', 'cripta',
        'cemitério', 'oceano', 'masmorra', 'pista', 'prova', 'origem', 'verdade', 'localização', 'segredo',
        'magia', 'habilidade', 'língua', 'parente', 'morte', 'injustiça', 'desastre', 'plebeu', 'energia',
        'ritual', 'tempo'
    ]

    static verbos = [
        'escoltar', 'resgatar', 'recuperar', 'restaurar', 'curar', 'consertar',
        'derrotar', 'destruir', 'convencer', 'comprar', 'negociar', 'vender',
        'transportar', 'coletar', 'ajudar', 'salvar', 'interrogar',
        'investigar', 'espionar', 'desmascarar', 'libertar', 'roubar', 'matar',
        'reviver', 'reconstruir', 'construir', 'explorar', 'encontrar', 'descobrir',
        'apreender', 'vingar', 'fugir', 'interromper', 'prender', 'soltar', 'adentrar',
        'sair', 'modificar', 'completar', 'juntar', 'unir', 'separar', 'atacar', 'defender',
        'reconhecer', 'buscar', 'fechar', 'abrir', 'impedir', 'causar', 'viajar', 'proteger',
        'escapar', 'acompanhar', 'garantir', 'certificar', 'atrair', 'recrutar', 'seguir', 'trocar'
    ]

    static resultado() {
        return {
            substantivo: randomFromArray(BotaoMissoes.substantivos),
            verbo: randomFromArray(BotaoMissoes.verbos)
        };
    }
}