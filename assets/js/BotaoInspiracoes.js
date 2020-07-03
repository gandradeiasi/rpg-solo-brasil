class BotaoInspiracoes {
    static substantivos = [
        'dúvida', 'distração', 'surgimento', 'fluidez', 'sujeira', 'calor', 'frieza',
        'dureza', 'grão', 'módulo', 'violência', 'calma', 'tempo', 'movimento',
        'perda', 'ganho', 'recebimento', 'oferta', 'repulsa', 'furtividade', 'confusão',
        'mecanismo', 'sombra', 'luz', 'imensidão', 'pequenez', 'maldição', 'magia',
        'ar', 'vento', 'tetra', 'fogo', 'água', 'novidade', 'repetição',
        'antiguidade', 'destruição', 'fuga', 'moeda', 'símbolo', 'imagem', 'mordida',
        'brilho', 'metal', 'madeira', 'caminho', 'vida', 'morte', 'dor', 'prazer',
        'medo', 'alimento', 'material', 'pechincha', 'barganha', 'veste', 'item',
        'objeto', 'proteção', 'envólucro', 'casca', 'base', 'pilar', 'arma', 'poder',
        'lugar', 'construção', 'caverna', 'floresta', 'montanha', 'rocha', 'loja',
        'estabelecimento', 'taverna', 'subterfúgio', 'identidade', 'reconhecimento',
        'esperança', 'desolação', 'elasticidade', 'dualidade', 'raio', 'forma', 'fala',
        'comunicação', 'transporte', 'locomoção', 'verdade', 'mentira', 'torrente',
        'fluxo', 'todo', 'nada', 'vazio', 'preenchimento', 'resquício', 'parte', 'fragmento',
        'ponta', 'rompimento', 'ferida', 'cura', 'salvação', 'roubo', 'inversão', 'oposição',
        'conhecimento', 'descoberta', 'renovação', 'vingança', 'redução', 'acréscimo',
        'conserto', 'música', 'arte', 'bom', 'mal', 'bem', 'claridade', 'escuridão', 'doença',
        'saúde', 'aspereza', 'lisura', 'horror', 'terror', 'confiança', 'vigia', 'guarda',
        'armazém', 'carga', 'energia', 'ideia', 'névoa', 'facilidade', 'dificuldade', 'pó',
        'cinzas', 'onda', 'fartura', 'gordura', 'leveza', 'peso', 'grandeza', 'certeza', 'deus',
        'chamado', 'refúgio', 'abrigo', 'cópia', 'conjunto', 'mensagem'
    ]

    static verbos = [
        'amarrar', 'odiar', 'expulsar', 'amar', 'olhar', 'pensar', 'virar', 'tornar',
        'investigar', 'correr', 'pular', 'ignorar', 'tensionar', 'maltratar', 'dormir',
        'atacar', 'prestigiar', 'girar', 'mover', 'acabar', 'começar', 'tratar', 'ler',
        'ouvir', 'sentir', 'tocar', 'rezar', 'provar', 'recusar', 'alcançar', 'esquivar',
        'lutar', 'obrigar', 'convencer', 'beber', 'salvar', 'julgar', 'idolatrar', 'escrever',
        'anotar', 'marcar', 'secar', 'molhar', 'avivar', 'diminuir', 'animar', 'desanimar',
        'saltitar', 'estufar', 'recompor', 'naufragar', 'navegar', 'questionar', 'solidificar',
        'edificar', 'negociar', 'trocar', 'merecer', 'sorrir', 'chorar', 'gritar', 'calar',
        'silenciar', 'capturar', 'negligenciar', 'negar', 'aprovar', 'concordar', 'conhecer',
        'despedir', 'renunciar', 'construir', 'destruir', 'cortar', 'prover', 'confirmar',
        'confiar', 'estudar', 'analisar', 'revidar', 'defender', 'torturar', 'sarar', 'cuidar',
        'montar', 'tramar', 'focar', 'juntar', 'separar', 'trazer', 'levar', 'cultivar', 'vestir',
        'copiar', 'diferenciar', 'ameaçar', 'celebrar', 'denunciar', 'raspar', 'segurar', 'soltar',
        'fechar', 'abrir', 'elevar', 'clamar', 'chamar', 'conduzir', 'vibrar', 'emanar', 'atrair',
        'afastar', 'esfriar', 'esquentar', 'cair', 'destacar', 'preencher', 'esvaziar', 'puxar',
        'empurrar', 'perfurar', 'manusear'
    ]

    static resultado() {
        return {
            substantivo: randomFromArray(BotaoInspiracoes.substantivos),
            verbo: randomFromArray(BotaoInspiracoes.verbos)
        };
    }
}