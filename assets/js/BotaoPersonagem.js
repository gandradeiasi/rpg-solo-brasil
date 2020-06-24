class BotaoPersonagem {
    static personalidades = [
        'Bravo', 'Impaciente', 'Pragmático', 'Metódico', 'Religioso', 'Avarento',
        'Calmo', 'Compreensivo', 'Apaixonado', 'Dedicado', 'Esperançoso', 'Pessimista',
        'Otimista', 'Chorão', 'Medroso', 'Covarde', 'Corajoso', 'Honesto',
        'Mentiroso', 'Raivoso', 'Agressivo', 'Pacifista', 'Insatisfeito', 'Rebelde', 'Cínico',
        'Consumista', 'Guloso', 'Tarado', 'Sorridente', 'Inseguro', 'Questionador', 'Mau',
        'Bom', 'Caridoso', 'Amigável', 'Antisocial', 'Feliz', 'Infeliz', 'Indeciso',
        'Hipócrita', 'Cleptomaníaco', 'Carismático', 'Tagarela', 'Detalhista', 'Pefecionista',
        'Emotivo', 'Frio', 'Indiferente', 'Calculista', 'Satisfeito', 'Ejoado', 'Exigente',
        'Ingênuo', 'Manipulável', 'Manipulador', 'Insensível', 'Sensato', 'Esforçado', 'Estudioso',
        'Bruto', 'Perturbado', 'Preocupado', 'Sagaz', 'Mesquinho', 'Astuto', 'Trabalhador', 'Apressado',
        'Habilidoso', 'Técnico', 'Cético', 'Legal', 'Chato', 'Irritante', 'Proativo', 'Lento',
        'Insano', 'Acelerado', 'Alcólatra', 'Drogado', 'Viciado', 'Gênio', 'Rigoroso', 'Energético',
        'Risonho', 'Disciplinado', 'Caótico', 'Leal', 'Baderneiro', 'Apostador', 'Vulgar', 'Comportado',
        'Supersticioso', 'Atencioso', 'Distraído', 'Fútil', 'Nojento', 'Traumatizado', 'Orgulhoso',
        'Humilde', 'Prolixo', 'Prolífico'
    ]

    static caracteristicas = [
        'Alto', 'Baixo', 'Magro', 'Orelhudo', 'Narigudo', 'Peludo', 'Inteligênte', 'Fraco',
        'Forte', 'Rico', 'Pobre', 'Magro', 'Gordo', 'Bonito', 'Feio', 'Fedorento', 'Cheiroso',
        'Musculoso', 'Ágil', 'Flexível', 'Atlético', 'Habilidoso', 'Talentoso', 'Sedentário',
        'Doente', 'Debilitado', 'Elegante', 'Desleixado', 'Vigoroso', 'Saudável', 'Jovem', 'Criança',
        'Velho', 'Manco', 'Caolho', 'Cego', 'Mudo', 'Surdo', 'Gago', 'Friorento', 'Suado',
        'Barbudo', 'Careca', 'Cabeludo', 'Bigodudo', 'Atraente', 'Sujo', 'Limpo', 'Catarrento',
        'Alérgico', 'Míope', 'Vesgo', 'Estrábico'
    ]

    static resultado() {
        return {
            personalidade: randomFromArray(BotaoPersonagem.personalidades),
            caracteristica: randomFromArray(BotaoPersonagem.caracteristicas)
        } 
    }
}