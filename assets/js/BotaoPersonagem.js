class BotaoPersonagem {
    static caracteristicas = [
        'pragmático(a)', 'metódico(a)', 'religioso(a)',
        'avarento(a)', 'compreensivo(a)', 'dedicado(a)',
        'chorão(a)', 'medroso(a)', 'corajoso(a)', 'estrangeiro(a)', 'paciente',
        'honesto(a)', 'mentiroso(a)', 'raivoso(a)', 'comportado(a)',
        'agressivo(a)', 'pacifista', 'rebelde', 'cínico(a)',
        'consumista', 'guloso(a)', 'tarado(a)', 'sorridente', 'inseguro(a)', 'questionador(a)', 'mau/má',
        'bom/boa', 'caridoso(a)', 'amigável', 'antissocial', 'egoísta', 'energético(a)',
        'hipócrita', 'cleptomaníaco(a)', 'carismático(a)', 'tagarela', 'detalhista', 'perfeccionista',
        'emotivo(a)', 'frio(a)', 'indiferente', 'calculista', 'exigente', 'estudioso(a)', 'pomposo(a)',
        'ingênuo(a)', 'manipulável', 'manipulador(a)', 'insensível', 'sensato(a)', 'esforçado(a)',
        'bruto(a)', 'perturbado(a)', 'sagaz', 'mesquinho(a)', 'astuto(a)', 'trabalhador(a)', 'caolho(a)',
        'técnico(a)', 'cético(a)', 'legal(a)', 'chato(a)', 'irritante', 'proativo(a)', 'lento(a)',
        'insano(a)', 'acelerado(a)', 'alcólatra', 'drogado(a)', 'viciado(a)', 'gênio(a)', 'rigoroso(a)',
        'risonho(a)', 'disciplinado(a)', 'caótico(a)', 'leal', 'baderneiro(a)', 'apostador(a)', 'vulgar',
        'supersticioso(a)', 'atencioso(a)', 'avoado(a)', 'fútil', 'nojento(a)', 'traumatizado(a)', 'orgulhoso(a)',
        'humilde', 'prolixo(a)', 'prolífico(a)', 'fofo(a)', 'grosso(a)', 'gentil', 'mimado(a)', 'arteiro(a)',
        'cuidadoso(a)', 'previsível', 'imprevisível', 'monótono(a)', 'monossilábico(a)', 'romântico(a)',
        'adaptável(a)', 'talentoso(a)', 'resistente', 'criança', 'idoso(a)', 'gago(a)', 'atraente', 'rico(a)',
        'vesgo(a)', 'estrábico(a)', 'tímido(a)', 'extrovertido(a)', 'introvertido(a)', 'burro(a)', 'inteligente',
        'pobre', 'musculoso(a)', 'ágil', 'flexível', 'reflexivo(a)', 'atlético(a)', 'habilidoso(a)', 'manco(a)',
        'alérgico(a)', 'míope', 'estiloso(a)', 'corcunda', 'líder', 'exibido(a)', 'convencido(a)',
        'afobado(a)', 'sábio(a)', 'invejoso(a)', 'curioso(a)', 'conhecido(a)', 'desconhecido(a)',
        'pessimista', 'otimista', 'covarde'
    ]

    static estados = [
        'distraído(a)', 'empolgado(a)', 'pensante', 'cansado(a)', 'preocupado(a)', 'ferido(a)', 'magoado(a)',
        'doente', 'debilitado(a)', 'elegante', 'desleixado(a)', 'saudável', 'revoltado(a)', 'desconfiado(a)',
        'suado(a)', 'sujo(a)', 'arrumado(a)', 'alegre', 'impressionado(a)', 'animado(a)', 'concentrado(a)',
        'dolorido(a)', 'indeciso(a)', 'esperançoso(a)', 'impaciente', 'ofegante', 'exausto(a)', 'alucinado(a)',
        'apaixonado(a)', 'calmo(a)', 'tranquilo(a)', 'bravo(a)', 'feliz', 'infeliz', 'satisfeito(a)', 'insatisfeito(a)',
        'ejoado(a)', 'apressado(a)', 'nervoso(a)', 'ansioso(a)', 'envergonhado(a)', 'arrependido(a)', 'desanimado(a)',
        'interessado(a)', 'desinteressado(a)', 'ocupado(a)', 'incrédulo(a)', 'desolado(a)', 'iludido(a)', 'desiludido(a)'
    ]

    static oficios = [
        'estudante', 'cultista', 'monge/monja', 'sacerdote/sacerdotisa', 'guerreiro(a)', 'marechal', 'general', 'soldado',
        'cabo', 'mercador(a)', 'cozinheiro(a)', 'artesão/artesã', 'arquiteto(a)', 'pintor(a)', 'engenheiro(a)', 'caçador(a)',
        'inventor(a)', 'médico(a)', 'curandeiro(a)', 'guarda', 'nobre', 'governante', 'tenente', 'cidadão/cidadã',
        'fazendeiro(a)', 'alquimista', 'professor(a)', 'pirata', 'contrabandista', 'mago(a)', 'marceneiro(a)',
        'carpinteiro(a)', 'mensageiro(a)', 'marinheiro(a)', 'pescador(a)', 'taverneiro(a)', 'cartógrafo(a)', 'paleontólogo(a)',
        'arqueólogo(a)', 'historiador(a)', 'escritor(a)', 'filósofo(a)', 'adivinho(a)', 'mágico(a)', 'tradutor(a)', 'linguista(a)',
        'bibliotecário(a)', 'adestrador(a)', 'babá', 'lenhador(a)', 'condutor(a)', 'administrador(a)', 'feirante',
        'ferreiro(a)', 'alfaiate', 'costureiro(a)', 'tecelão/tecelã', 'criminoso(a)', 'ladrão/ladra', 'espião/espiã', 'comunicador(a)',
        'vendedor(a)', 'fabricante(a)', 'fornecedor(a)', 'investigador(a)', 'mercenário(a)', 'pesquisador(a)', 'fiscal',
        'hebolario(a)', 'lutador(a)', 'gladiador(a)', 'mestre(a)', 'ator/atriz', 'músico(a)', 'joalheiro(a)', 'minerador(a)',
        'atirador(a)', 'mordomo', 'barbeiro(a)', 'guia', 'padeiro(a)', 'animador(a)', 'vidraceiro(a)', 'torturador(a)',
        'escoteiro(a)', 'jardineiro(a)', 'cervejeiro(a)', 'barqueiro(a)', 'charlatão/charlatã', 'estalajadeiro(a)', 'tanoeiro(a)',
        'consultor(a)', 'oleiro(a)', 'chaveiro(a)', 'açougueiro(a)', 'cafetão', 'prostituto(a)', 'fisiculturista',
        'colecionador(a)', 'aprendiz', 'faxineiro(a)', 'pedinte', 'exorcista', 'explorador(a)', 'aventureiro(a)'
    ]

    static silabas = [
        'an', 'ra', 'ga', 'be', 'tor', 'van', 'lha', 'ti', 'to', 'fri', 'dei', 'on',
        'doi', 'fran', 'ka', 'lik', 'lic', 'nem', 'nen', 'jul', 'y', 'a', 'e', 'o', 'u', 'ne', 'na',
        'ram', 'kas', 'cas', 'co', 'grob', 'dan', 'yel', 'hu', 'go', 'ni', 'pon', 'pam', 'me',
        'la', 'pe', 'dri', 'fi', 'lo', 'pan', '-'
    ]

    static conjuntosProibidos = [
        /nm/g, /nr/g, /kli/g, /^aa/, /^ii/, /^ee/, /^oo/, /^uu/, /juljul/g, /mlh/g, /md/g, /mt/g,
        /mk/g, /^-/, /-$/, /^dribe/, /mr/g, /drigro/g, /mf/g, /gogr/g, /brf/g
    ]

    static resultado() {
        return {
            nome: BotaoPersonagem.nome(),
            estado: randomFromArray(BotaoPersonagem.estados),
            caracteristica: randomFromArray(BotaoPersonagem.caracteristicas),
            oficio: randomFromArray(BotaoPersonagem.oficios)
        }
    }

    static nome() {
        let nome = "";
        let num_silabas = parseInt(Math.random() * 3 + 2);
        for (let i = 0; i < num_silabas; i++) nome += randomFromArray(BotaoPersonagem.silabas);

        if (BotaoPersonagem.conjuntosProibidos.some(x => x.test(nome))) 
            return BotaoPersonagem.nome();

        return nome.replace(/^./,nome[0].toUpperCase());
    }

    static palavraGenero(palavra, gen) {
        if (!palavra.genero) return palavra;

        let genero = gen ? gen : (Math.random() > 0.5) ? "f" : "m";

        if (gen == "f") return palavra.f;

        return palavra.m;
    }
}