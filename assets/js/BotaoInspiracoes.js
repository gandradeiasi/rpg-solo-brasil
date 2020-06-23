class BotaoInspiracoes {
    static lista = [
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
        'Cinzas', 'Onda', 'Fartura', 'Gordura', 'Leveza', 'Peso', 'Grandeza', 'Certeza'
    ]

    static resultado(num) {
        let array = [];
        for (let i = 0; i < num; i++) 
            array.push(BotaoInspiracoes.lista[DiceRoller.roll(1,BotaoInspiracoes.lista.length).results[0]+1]);
        return array;
    }
}