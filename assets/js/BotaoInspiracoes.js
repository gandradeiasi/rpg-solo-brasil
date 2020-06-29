class BotaoInspiracoes {
    static substantivos = [
        'Dúvida', 'Distração', 'Surgimento', 'Fluidez', 'Sujeira', 'Calor', 'Frieza',
        'Dureza', 'Grão', 'Módulo', 'Violência', 'Calma', 'Tempo', 'Movimento',
        'Perda', 'Ganho', 'Recebimento', 'Oferta', 'Repulsa', 'Furtividade', 'Confusão',
        'Mecanismo', 'Sombra', 'Luz', 'Imensidão', 'Pequenez', 'Maldição', 'Magia',
        'Ar', 'Vento', 'Tera', 'Fogo', 'Água', 'Novidade', 'Repetição',
        'Antiguidade', 'Destruição', 'Fuga', 'Moeda', 'Símbolo', 'Imagem', 'Mordida',
        'Brilho', 'Metal', 'Madeira', 'Caminho', 'Vida', 'Morte', 'Dor', 'Prazer',
        'Medo', 'Alimento', 'Material', 'Pechincha', 'Barganha', 'Veste', 'Item',
        'Objeto', 'Proteção', 'Envólucro', 'Casca', 'Base', 'Pilar', 'Arma', 'Poder',
        'Lugar', 'Construção', 'Caverna', 'Floresta', 'Montanha', 'Rocha', 'Loja',
        'Estabelecimento', 'Taverna', 'Subterfúgio', 'Identidade', 'Reconhecimento',
        'Esperança', 'Desolação', 'Elasticidade', 'Dualidade', 'Raio', 'Forma', 'Fala',
        'Comunicação', 'Transporte', 'Locomoção', 'Verdade', 'Mentira', 'Torrente',
        'Fluxo', 'Todo', 'Nada', 'Vazio', 'Preenchimento', 'Resquício', 'Parte', 'Fragmento',
        'Ponta', 'Rompimento', 'Ferida', 'Cura', 'Salvação', 'Roubo', 'Inversão', 'Oposição',
        'Conhecimento', 'Descoberta', 'Renovação', 'Vingança', 'Redução', 'Acréscimo', 
        'Conserto', 'Música', 'Arte', 'Bom', 'Mal', 'Bem', 'Claridade', 'Escuridão', 'Doença',
        'Saúde', 'Aspereza', 'Lisura', 'Horror', 'Terror', 'Confiança', 'Vigia', 'Guarda',
        'Armazém', 'Carga', 'Energia', 'Ideia', 'Névoa', 'Facilidade', 'Dificuldade', 'Pó',
        'Cinzas', 'Onda', 'Fartura', 'Gordura', 'Leveza', 'Peso', 'Grandeza', 'Certeza', 'Deus',
        'Chamado'
    ]

    static verbos = [
        'Amarrar', 'Odiar', 'Expulsar', 'Amar', 'Olhar', 'Pensar', 'Virar', 'Tornar',
        'Investigar', 'Correr', 'Pular', 'Ignorar', 'Tensionar', 'Maltratar', 'Dormir',
        'Atacar', 'Prestigiar', 'Girar', 'Mover', 'Acabar', 'Começar', 'Tratar', 'Ler',
        'Ouvir', 'Sentir', 'Tocar', 'Rezar', 'Provar', 'Recusar', 'Alcançar', 'Esquivar',
        'Lutar', 'Obrigar', 'Convencer', 'Beber', 'Salvar', 'Julgar', 'Idolatrar', 'Escrever',
        'Anotar', 'Marcar', 'Secar', 'Molhar', 'Avivar', 'Dminuir', 'Animar', 'Desanimar',
        'Saltitar', 'Estufar', 'Recompor', 'Naufragar', 'Navegar', 'Questionar', 'Solidificar',
        'Edificar', 'Negociar', 'Trocar', 'Merecer', 'Sorrir', 'Chorar', 'Gritar', 'Calar',
        'Silenciar', 'Capturar', 'Negligenciar', 'Negar', 'Aprovar', 'Concordar', 'Conhecer',
        'Despedir', 'Renunciar', 'Construir', 'Destruir', 'Cortar', 'Prover', 'Confirmar',
        'Confiar', 'Estudar', 'Analisar', 'Revidar', 'Defender', 'Torturar', 'Sarar', 'Cuidar',
        'Montar', 'Tramar', 'Focar', 'Juntar', 'Separar', 'Trazer', 'Levar', 'Cultivar', 'Vestir',
        'Copiar', 'Diferenciar', 'Ameaçar', 'Celebrar', 'Denuciar', 'Raspar', 'Segurar', 'Soltar',
        'Fechar', 'Abrir', 'Elevar', 'Clamar', 'Chamar', 'Conduzir', 'Vibrar', 'Emanar', 'Atraiar',
        'Afastar', 'Esfriar', 'Esquentar', 'Crair', 'Destruir'
    ]

    static resultado() {
        return {
            substantivo: randomFromArray(BotaoInspiracoes.substantivos),
            verbo: randomFromArray(BotaoInspiracoes.verbos)
        };
    }
}