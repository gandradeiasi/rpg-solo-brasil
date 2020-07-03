btn_tabelas_geradores.addEventListener('click', () => {
    Modal.abre('Tabelas e Geradores', `
        <br>
        <button class="btn-tabela-gerador" id="btn-inspiracoes" onclick="Modal.fecha()">Inspiração</button>
        <button class="btn-tabela-gerador" id="btn-missao" onclick="Modal.fecha()">Missão</button>
        <button class="btn-tabela-gerador" id="btn-profissao" onclick="Modal.fecha()">Profissão</button>
        <button class="btn-tabela-gerador" id="btn-nome" onclick="Modal.fecha()">Nome</button>
        <button class="btn-tabela-gerador" id="btn-adjetivo" onclick="Modal.fecha()">Adjetivo para NPC</button>
        <button class="btn-tabela-gerador" id="btn-lugar" onclick="Modal.fecha()">Lugar</button>
        <button class="btn-tabela-gerador" id="btn-raca" onclick="Modal.fecha()">Raça</button>
        <button class="btn-tabela-gerador" id="btn-criatura" onclick="Modal.fecha()">Criatura</button>
        <button class="btn-tabela-gerador" id="btn-clima" onclick="Modal.fecha()">Clima</button>
        <button class="btn-tabela-gerador" id="btn-encontro" onclick="Modal.fecha()">Encontro</button>
    `);

    modal.querySelector('#btn-inspiracoes').addEventListener('click', () => {
        adicionaPergunta();
        const resultado = BotaoInspiracoes.resultado();
        command_controller.adicionaAoLog(`<strong>Inspiração: </strong>${resultado.substantivo} / ${resultado.verbo}`);
    });
    
    modal.querySelector('#btn-missao').addEventListener('click', () => {
        adicionaPergunta();
        const resultado = BotaoMissoes.resultado();
        command_controller.adicionaAoLog(`<strong>Missão: </strong>${resultado.verbo} / ${resultado.substantivo}`);
    });
    
    modal.querySelector('#btn-nome').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Nome: </strong>${Nome.nome()}`);
    });

    modal.querySelector('#btn-profissao').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Profissão: </strong>${randomFromArray(Tabelas.profissoes)}`);
    });

    modal.querySelector('#btn-adjetivo').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Adjetivo: </strong>${randomFromArray(Tabelas.adjetivos)}`);
    });

    modal.querySelector('#btn-lugar').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Lugar: </strong>${randomFromArray(Tabelas.lugares)}`);
    });

    modal.querySelector('#btn-raca').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Raça: </strong>${randomFromArray(Tabelas.racas)}`);
    });

    modal.querySelector('#btn-criatura').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Criatura: </strong>${randomFromArray(Tabelas.criaturas)}`);
    });

    modal.querySelector('#btn-clima').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Clima: </strong>${randomFromArray(Tabelas.climas)}`);
    });

    modal.querySelector('#btn-encontro').addEventListener('click', () => {
        adicionaPergunta();
        command_controller.adicionaAoLog(`<strong>Encontro: </strong>${randomFromArray(Tabelas.encontros)}`);
    });
});


class Tabelas {
    static encontros = [
        'um grupo de bandidos tenta de roubar',
        'alguém tenta de matar',
        'alguém te entrega uma mensagem',
        'você encontra alguém morto',
        'você encontra alguém ferido',
        'você encontra um mercador ambulante',
        'você encontra um viajante',
        'você encontra alguém sendo atacado',
        'você encontra alguém sendo roubado',
        'você encontra uma caravana indo para um festival',
        'uma criatura aparece',
        'algo sobrenatural acontece',
        'você encontra um objetro de pouco valor',
        'você encontra um objetro valioso',
        'você encontra uma pista de algo que aconteceu aqui',
        'você encontra uma pista de alguém que passou por aqui',
        'você encontra um acampamento',
        'alguém pede ajuda'
    ];

    static climas = [
        'céu ensolarado sem nuvens, o vento está forte e quente',
        'céu ensolarado sem nuvens, o vento está forte e fesco',
        'céu ensolarado sem nuvens, o vento está leve e quente',
        'céu ensolarado sem nuvens, o vento está leve e fesco',
        'céu ensolarado sem nuvens, o vento está forte',
        'céu ensolarado sem nuvens, o vento está leve',
        'céu ensolarado sem nuvens e sem vento',
        'céu nublado com o sol a mostra',
        'céu nublado com o sol a mostra, o vento está forte e quente',
        'céu nublado com o sol a mostra, o vento está forte e frio',
        'céu nublado com o sol a mostra, o vento está leve e quente',
        'céu nublado com o sol a mostra, o vento está leve e frio',
        'céu nublado com o sol a mostra, o vento está forte',
        'céu nublado com o sol a mostra, o vento está leve',
        'céu nublado com as nuvens escondendo o sol e sem vento',
        'céu nublado com as nuvens escondendo o sol, o vento está forte e quente',
        'céu nublado com as nuvens escondendo o sol, o vento está forte e frio',
        'céu nublado com as nuvens escondendo o sol, o vento está leve e quente',
        'céu nublado com as nuvens escondendo o sol, o vento está leve e frio',
        'céu nublado com as nuvens escondendo o sol, o vento está forte',
        'céu nublado com as nuvens escondendo o sol, o vento está leve',
        'nuvens negras cobrem o céu',
        'flocos de nevem começam a cair',
        'nevasca',
        'um furacão se aproxima',
        'chuva de granizo',
        'cuva fraca',
        'tempestade',
        'chuvisco',
        'neblina'
    ];

    static profissoes = [
        'estudante', 'cultista', 'monge/monja', 'sacerdote/sacerdotisa', 'militar',
        'mercador(a)', 'cozinheiro(a)', 'artesão/artesã', 'arquiteto(a)', 'pintor(a)', 'engenheiro(a)', 'caçador(a)',
        'inventor(a)', 'médico(a)', 'curandeiro(a)', 'guarda', 'nobre', 'governante', 'cidadão/cidadã', 'coronel',
        'fazendeiro(a)', 'alquimista', 'professor(a)', 'pirata', 'contrabandista', 'mago(a)', 'marceneiro(a)',
        'carpinteiro(a)', 'mensageiro(a)', 'marinheiro(a)', 'pescador(a)', 'taverneiro(a)', 'cartógrafo(a)', 'paleontólogo(a)',
        'arqueólogo(a)', 'historiador(a)', 'escritor(a)', 'filósofo(a)', 'adivinho(a)', 'mágico(a)', 'tradutor(a)', 'linguista(a)',
        'bibliotecário(a)', 'adestrador(a)', 'babá', 'lenhador(a)', 'condutor(a)', 'administrador(a)', 'feirante', 'asceta',
        'ferreiro(a)', 'alfaiate', 'costureiro(a)', 'tecelão/tecelã', 'criminoso(a)', 'ladrão/ladra', 'espião/espiã', 'comunicador(a)',
        'vendedor(a)', 'fabricante(a)', 'fornecedor(a)', 'investigador(a)', 'mercenário(a)', 'pesquisador(a)', 'fiscal', 'atleta',
        'herbolario(a)', 'lutador(a)', 'gladiador(a)', 'mestre(a)', 'ator/atriz', 'musicista', 'joalheiro(a)', 'minerador(a)',
        'atirador(a)', 'mordomo', 'barbeiro(a)', 'guia', 'padeiro(a)', 'animador(a)', 'vidraceiro(a)', 'torturador(a)',
        'escoteiro(a)', 'jardineiro(a)', 'cervejeiro(a)', 'barqueiro(a)', 'charlatão/charlatã', 'estalajadeiro(a)', 'tanoeiro(a)',
        'consultor(a)', 'oleiro(a)', 'chaveiro(a)', 'açougueiro(a)', 'cafetão/cafetã', 'prostituto(a)', 'fisiculturista',
        'colecionador(a)', 'aprendiz', 'faxineiro(a)', 'pedinte', 'exorcista', 'explorador(a)', 'aventureiro(a)', 'investidor(a)',
        'agricultor(a)', 'negociante', 'cientista', 'alveneiro(a)', 'escultor(a)', 'ocultista', 'instrutor(a)', 'herói/heroína', 'rei/rainha',
        'prefeito(a)', 'chapeleiro(a)', 'lojista', 'especialista', 'poeta', 'escriba', 'agiota', 'político(a)', 'factótum', 'faz-tudo',
        'recepcionista', 'secretário(a)', 'ministro(a)', 'psicólogo(a)', 'arqueiro(a)', 'druída', 'xamã', 'feiticeiro(a)', 'paladino(a)',
        'piloto(a)', 'químico(a)', 'teólogo(a)', 'legista', 'detetive', 'economista', 'capitão/capitã', 'gerente', 'biólogo(a)',
        'necromante'
    ]

    static racas = [
        'humano', 'metadílio', 'meio-animal', 'elfo', 'meio-elfo', 'orc', 'meio-orc', 'fada', 'gnomo', 'duende',
        'alienígena', 'meio-demônio', 'meio-criatura', 'goblin', 'hobgoblin', 'draconato', 'anão', 'tritão', 'meio-tritão',
        'meio-anjo', 'meio-jinn', 'doppelganger', 'vampiro', 'licantropo', 'forjado bélico', 'droide', 'ghoul',
        'doppelganger', 'gigante', 'meio-gosma', 'semideus', 'meio-planta'
    ]

    static criaturas = [
        'troll', 'ogro', 'esqueleto', 'dragão', 'demônio', 'aranha-gigante', 'rato-gigante', 'lobo',
        'gnoll', 'minotauro', 'centauro', 'espírito', 'zumbi', 'elemental', 'golem', 'tarrasque', 'harpia',
        'mantícora', 'hidra', 'kraken', 'goblin', 'orc', 'ciclope', 'titã', 'dinossauro', 'lich', 'gosma',
        'armadura-viva', 'kobold', 'árvore-viva', 'inseto-gigante', 'fungóide', 'quimera', 'planta-carnívora',
        'gárgula', 'fogo-fátuo', 'grifo', 'vorme', 'mímico', 'beholder', 'múmia', 'naga', 'imp', 'murloc', 'cobra-venenosa',
        'hobgoblin', 'lagarto de pedra'
    ]

    static lugares = [
        'montanha', 'cidade', 'cripta', 'lago', 'ilha', 'continente', 'praia', 'casa', 'ruína', 'castelo',
        'torre', 'capela', 'templo', 'deserto', 'vale', 'planície', 'estrada', 'rio', 'cachoeira', 'esconderijo',
        'mercado', 'floresta', 'selva', 'mar', 'colina', 'clareira', 'fazenda', 'plantação', 'biblioteca', 'masmorra',
        'taverna', 'caverna', 'cemitério', 'prisão', 'arena', 'estábulo', 'ravina', 'ponte', 'túnel', 'esgoto', 'loja',
        'oficina', 'escola', 'praça', 'penhasco'
    ]

    static adjetivos = [
        'pragmático(a)', 'metódico(a)', 'religioso(a)',
        'avarento(a)', 'compreensivo(a)', 'dedicado(a)',
        'chorão/chorona', 'medroso(a)', 'corajoso(a)', 'estrangeiro(a)', 'paciente',
        'honesto(a)', 'mentiroso(a)', 'raivoso(a)', 'comportado(a)',
        'agressivo(a)', 'pacifista', 'rebelde', 'cínico(a)',
        'consumista', 'guloso(a)', 'tarado(a)', 'sorridente', 'inseguro(a)', 'questionador(a)', 'mau/má',
        'bom/boa', 'caridoso(a)', 'amigável', 'antissocial', 'egoísta', 'energético(a)',
        'hipócrita', 'cleptomaníaco(a)', 'carismático(a)', 'tagarela', 'detalhista', 'perfeccionista',
        'emotivo(a)', 'frio(a)', 'indiferente', 'calculista', 'exigente', 'estudioso(a)', 'pomposo(a)',
        'ingênuo(a)', 'manipulável', 'manipulador(a)', 'insensível', 'sensato(a)', 'esforçado(a)',
        'bruto(a)', 'perturbado(a)', 'sagaz', 'mesquinho(a)', 'astuto(a)', 'trabalhador(a)', 'caolho(a)',
        'técnico(a)', 'cético(a)', 'legal', 'chato(a)', 'irritante', 'proativo(a)', 'lento(a)',
        'insano(a)', 'acelerado(a)', 'alcólatra', 'drogado(a)', 'viciado(a)', 'gênio(a)', 'rigoroso(a)',
        'risonho(a)', 'disciplinado(a)', 'caótico(a)', 'leal', 'baderneiro(a)', 'apostador(a)', 'vulgar',
        'supersticioso(a)', 'atencioso(a)', 'avoado(a)', 'fútil', 'nojento(a)', 'traumatizado(a)', 'orgulhoso(a)',
        'humilde', 'prolixo(a)', 'prolífico(a)', 'fofo(a)', 'grosso(a)', 'gentil', 'mimado(a)', 'arteiro(a)',
        'cuidadoso(a)', 'previsível', 'imprevisível', 'monótono(a)', 'monossilábico(a)', 'romântico(a)',
        'adaptável', 'talentoso(a)', 'resistente', 'criança', 'idoso(a)', 'gago(a)', 'atraente', 'rico(a)',
        'vesgo(a)', 'estrábico(a)', 'tímido(a)', 'extrovertido(a)', 'introvertido(a)', 'burro(a)', 'inteligente',
        'pobre', 'musculoso(a)', 'ágil', 'flexível', 'reflexivo(a)', 'atlético(a)', 'habilidoso(a)', 'manco(a)',
        'alérgico(a)', 'míope', 'estiloso(a)', 'corcunda', 'líder', 'exibido(a)', 'convencido(a)',
        'afobado(a)', 'sábio(a)', 'invejoso(a)', 'curioso(a)', 'conhecido(a)', 'desconhecido(a)',
        'pessimista', 'otimista', 'covarde', 'distraído(a)', 'empolgado(a)', 'pensante', 'cansado(a)', 'preocupado(a)', 'ferido(a)', 'magoado(a)',
        'doente', 'debilitado(a)', 'elegante', 'desleixado(a)', 'revoltado(a)', 'desconfiado(a)',
        'sujo(a)', 'arrumado(a)', 'alegre', 'impressionado(a)', 'animado(a)', 'concentrado(a)',
        'dolorido(a)', 'indeciso(a)', 'esperançoso(a)', 'impaciente', 'exausto(a)', 'alucinado(a)',
        'apaixonado(a)', 'calmo(a)', 'tranquilo(a)', 'bravo(a)', 'feliz', 'infeliz', 'satisfeito(a)', 'insatisfeito(a)',
        'ejoado(a)', 'apressado(a)', 'nervoso(a)', 'ansioso(a)', 'envergonhado(a)', 'arrependido(a)', 'desanimado(a)',
        'interessado(a)', 'desinteressado(a)', 'ocupado(a)', 'incrédulo(a)', 'desolado(a)', 'iludido(a)', 'desiludido(a)',
        'famoso(a)', 'folgado(a)', 'maltrapilho(a)', 'teimoso(a)', 'supérfulo(a)', 'ignorante', 'maneiro(a)', 'deselegante',
        'inconveniente', 'útil', 'inútil', 'profissional', 'iniciante', 'lendário(a)', 'caipira', 'urbano(a)', 'nativo(a)', 
        'vegetarian(a)', 'vegano(a)', 'ativista', 'aposentado(a)', 'falido(a)'
    ]
}