class BotaoMissoes {
    static substantivos = [
        'Carga', 'Mercador', 'Viajantes', 'Tropa', 'Governante', 'Nobre', 'Item Mágico',
        'Inocente', 'Rebelde', 'Prisioneiro', 'Artefato', 'Relíquia', 'Esperança',
        'Item Roubado', 'Poder', 'Item Valioso', 'Fortaleza', 'Obra de Arte',
        'Conhecido', 'Inimigo', 'Monstro', 'Criatura', 'Arma', 'Armadura', 'Ferido',
        'Doente', 'Tristeza', 'Aliado', 'Você', 'Mal-entendido', 'Amizade', 'Relacionamento',
        'Ferramenta', 'Exército', 'Gladiador', 'Familiar', 'Clone', 'Castelo', 'Amuleto',
        'Base Inimiga', 'Floresta', 'Montanha', 'Barco', 'Taverna', 'Escola', 'Contrabandista',
        'Assassino', 'Apostador', 'Moradia', 'Montaria', 'Poção', 'Ingrediente', 'Material',
        'Comida', 'Veste', 'Terreno', 'Fazenda', 'Vida', 'Equipamento', 'Paz', 'Guerra',
        'Sacerdote', 'Deus', 'Espírito', 'Demônio', 'Liberdade', 'Direito', 'Alma', 'Item Amaldiçoado',
        'Pergaminho', 'Mercadoria', 'Morto', 'Mensagem', 'Invenção', 'Militar', 'Veículo', 'Informação',
        'Testemunho', 'Imposto', 'Dinheiro', 'Mendigo', 'Perdido', 'Entrangeiro', 'Ancião', 'Criança',
        'Povo', 'Aldeia', 'Vila', 'Cidade', 'Raça', 'Animal', 'Criminoso', 'Malfeitor', 'Bibliotecário',
        'Vítima', 'Crime', 'Ruína', 'Caverna', 'Lago', 'Beco', 'Guilda', 'Mercado', 'Ordem', 'Farsante',
        'Escravo', 'Rico', 'Pobre', 'Tirano', 'Lenda', 'Ponte', 'Abrigo', 'Torre', 'Cripta',
        'Cemitério', 'Oceano', 'Masmorra', 'Pista', 'Prova', 'Origem', 'Verdade', 'Localização', 'Segredo',
        'Magia', 'Habilidade', 'Língua', 'Parente', 'Morte', 'Injustiça', 'Desastre', 'Plebeu', 'Energia',
        'Ritual'
    ]

    static verbos = [
        'Escoltar', 'Resgatar', 'Recuperar', 'Restaurar', 'Curar', 'Consertar',
        'Derrotar', 'Destruir', 'Convencer', 'Comprar', 'Negociar', 'Vender',
        'Transportar', 'Coletar', 'Ajudar', 'Salvar', 'Interrogar',
        'Investigar', 'Espionar', 'Desmascarar', 'Libertar', 'Roubar', 'Matar',
        'Reviver', 'Reconstruir', 'Construir', 'Explorar', 'Encontrar', 'Descobrir',
        'Aprender', 'Vingar', 'Fugir', 'Interromper'
    ]

    static resultado() {
        return {
            substantivo: randomFromArray(BotaoMissoes.substantivos),
            verbo: randomFromArray(BotaoMissoes.verbos)
        };
    }
}