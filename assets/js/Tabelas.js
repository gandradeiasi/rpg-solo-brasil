class Tabelas {
    static botoesTabelasCustom() {
        let string_final = "";
        lista_tabelas.forEach(x => {
            string_final += `
                <button data-id=${x.id} class="btn-tabela-gerador btn-tabela-custom">
                    ${x.name}
                    <span data-id=${x.id} class="edit-table" title="Editar">
                        &#128393;
                    </span>
                    <span data-id=${x.id} class="exclude-table" title="Remover">
                        &#x1f5d1;
                    </span>
                </button>
            `
        });
        return string_final;
    }

    static remove(id) {
        for (let i = 0; i < lista_tabelas.length; i++)
            if (lista_tabelas[i].id == id)
                lista_tabelas.splice(i, 1);
        Save.save();
        Tabelas.renderizaLista();
    }

    static edita(id) {
        const table = lista_tabelas.filter(x => x.id == id)[0];

        Modal.abre(table.name, `
                <textarea class="current-table" data-id=${id} placeholder="Cada linha ecrita aqui será uma linha da tabela"></textarea>
            `);

        const txtarea = modal.querySelector('.current-table');
        const title = modal.querySelector('.title');
        title.setAttribute('contenteditable', 'true');
        title.setAttribute('data-id', id);
        title.classList.add('table-title');
        txtarea.value = table.content;
        txtarea.focus();
    }

    static renderizaLista() {
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
            <button class="btn-tabela-gerador" id="btn-horario" onclick="Modal.fecha()">Horário</button>
            <button class="btn-tabela-gerador" id="btn-chefao" onclick="Modal.fecha()">Chefão</button>
            <button class="btn-tabela-gerador" id="btn-objeto" onclick="Modal.fecha()">Objeto</button>
            <button class="btn-tabela-gerador" id="btn-deus" onclick="Modal.fecha()">Deus</button>
            <button class="btn-tabela-gerador" id="btn-temas" onclick="Modal.fecha()">Tema Narrativo</button>
            ${Tabelas.botoesTabelasCustom()}
            <button class="btn-tabela-gerador" id="btn-add-tabela">Adicionar Tabela</button>
        `);

        modal.querySelectorAll('.edit-table').forEach(x => {
            x.addEventListener('click', () => Tabelas.edita(x.dataset.id));
        });

        modal.querySelectorAll('.exclude-table').forEach(x => {
            x.addEventListener('click', () => Tabelas.remove(x.dataset.id));
        });

        modal.querySelectorAll('.btn-tabela-custom').forEach(x => {
            x.addEventListener('click', e => {
                if (!e.path.some(x => x.classList ? x.classList.contains('edit-table') || x.classList.contains('exclude-table') : false)) {
                    const tabela = lista_tabelas.filter(y => x.dataset.id == y.id)[0];
                    adicionaPergunta();
                    command_controller.adicionaAoLog(`<strong>${tabela.name}: </strong>${randomFromArray(tabela.content.split('\n').filter(x => x))}`)
                    Modal.fecha();
                }   
            })
        });

        modal.querySelector('#btn-add-tabela').addEventListener('click', e => {
            lista_tabelas.push({
                name: "Tabela Customizada",
                id: lista_tabelas.length > 0 ? lista_tabelas[lista_tabelas.length - 1].id + 1 : 0,
                content: ''
            });

            Tabelas.edita(lista_tabelas[lista_tabelas.length - 1].id);
        });

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

        modal.querySelector('#btn-horario').addEventListener('click', () => {
            adicionaPergunta();
            command_controller.adicionaAoLog(`<strong>Horário: </strong>${randomFromArray(Tabelas.horarios)}`);
        });

        modal.querySelector('#btn-chefao').addEventListener('click', () => {
            adicionaPergunta();
            command_controller.adicionaAoLog(`<strong>Chefão: </strong>${randomFromArray(Tabelas.chefoes)}`);
        });

        modal.querySelector('#btn-objeto').addEventListener('click', () => {
            adicionaPergunta();
            command_controller.adicionaAoLog(`<strong>Objeto: </strong>${randomFromArray(Tabelas.objetos)}`);
        });

        modal.querySelector('#btn-deus').addEventListener('click', () => {
            adicionaPergunta();
            command_controller.adicionaAoLog(`<strong>Deus: </strong> deus${Math.random() > .5 ? '' : 'a'} ${randomFromArray(Tabelas.deuses)}`);
        });

        modal.querySelector('#btn-temas').addEventListener('click', () => {
            adicionaPergunta();
            command_controller.adicionaAoLog(`<strong>Tema Narrativo: </strong>${randomFromArray(Tabelas.temas)}`);
        });
    }

    static temas = [
        'alta fantasia', 'baixa fantasia', 'fantasia sombria', 'horror cósmico', 'faroeste clássico',
        'steampunk', 'dieselpunk', 'space opera', 'cyberpunk', 'idade média', 'japão feudal', 'idade do bronze',
        'terror sobrenatural', 'alienigenas', 'política', 'investigação policial', 'colegial adolescente',
        'vikings', 'pós-apocalipse', 'shounen', 'mitologia grega na atualidade', 'brasil colonial fantasioso',
        'battle royale', 'afrofuturismo', 'exploração', 'espionagem', 'agentes secretos', 'super-heróis',
        'investigação sobrenatural', 'mutantes', 'tokusatsu', 'suspense', 'kaiju', 'noir', 'faroeste fantástico',
        'esportes', 'corrida', 'mafia', 'gangues', 'tribos', 'europa vitoriana fantasiosa', 'sobrevivência',
        'pérsia fantasiosa', 'antropomorfos', 'aventuras submarinas', 'reality show', 'pré-história', 'mad max',
        'urbex', 'vampiro', 'lobisomem', 'caça de monstros', 'guerra', 'viagem no tempo', 'mecha', 'negócios',
        'transporte', 'pilotagem', 'piratas', 'dobra elementar', 'dinossauros', 'wuxia', 'harry potter',
        'apostas', 'atompunk', 'egito fantasioso', 'tower defence', 'religião', 'magia', 'terra de gigantes',
        'xamanismo', 'biopunk', 'raypunk', 'solarpunk', 'pokemón-like', 'shadow of the colossus', 'grécia antiga',
        'pugilismo', 'torneio de luta', 'wrestling', 'artefatos mágicos', 'stealth', 'construção e gerenciamento de cidades',
        'anjos e demônios', 'exorcismo', 'país das maravilhas', 'civilização de robôs', 'maia/asteca/inca fantasioso',
        'mitologia eslava', 'população da terra migrou para uma nave', 'caçadores de recompensa', 'colonização de planetas',
        'star wars', 'realidade virtual', 'realidades alternativas'
    ]

    static deuses = [
        'do amor', 'do ódio', 'da morte', 'da discórdia', 'do caos', 'da esperança', 'da caridade', 'do mar',
        'do vento', 'da viajem', 'da riqueza', 'dos pobres', 'da dúvida', 'do conhecimento', 'do vinho',
        'da fartura', 'da criação', 'da sorte', 'da luz', 'da escuridão', 'do subterrâneo', 'da paz',
        'da guerra', 'do trabalho', 'da exploração', 'da beleza', 'da feiura', 'do engano', 'da fertilidade',
        'das soluções', 'da vida', 'do verão', 'do inverno', 'da primavera', 'do outono', 'das sombras',
        'da verdade', 'da mentira', 'da natureza', 'dos portais', 'do submundo', 'do sol', 'da lua',
        'das estrelas', 'das criaturas', 'da mensagem', 'da arte', 'da justiça', 'da injustiça',
        'da chuva', 'da cura', 'da doença', 'do fogo', 'do frio', 'do ciclo', 'da longevidade',
        'dos demônios', 'do equilíbrio', 'da saúde', 'da dualidade', 'do tempo', 'da trapaça',
        'da traição', 'da tradição', 'da força'
    ]

    static objetos = [
        'arma cortante pequena', 'arma cortante média', 'arma cortante grande',
        'arma disparadora de projéteis', 'arma perfurante', 'arma de arremesso', 'porrete',
        'carta', 'frasco vazio', 'frasco cheio', 'vaso', 'relíquia', 'tomo', 'pergaminho', 'varinha',
        'medicamento', 'bandagem', 'saco com moedas', 'joia falsa', 'joia preciosa', 'pequena escultura',
        'quadro', 'manto', 'cajado', 'bastão', 'mapa', 'minério', 'corda', 'instrumento', 'bumerangue',
        'chicote', 'luneta', 'vara de pesca', 'mochila', 'roda', 'item mágico', 'veste', 'calçado',
        'capacete', 'peitoral', 'ombreira', 'chapéu', 'bracelete', 'colar', 'anel', 'pacote', 'ferramenta',
        'brinquedo', 'pedra', 'pedra preciosa', 'machado', 'martelo', 'nunchaku', 'arma estrela da manhã',
        'maça', 'cartaz de procurado', 'ovo de criatura', 'cinto', 'chave', 'utensílio de cozinha',
        'utensílio de ladroagem', 'garra', 'coroa', 'charuto', 'cachimbo', 'símbolo religioso', 'baixo-relevo',
        'unha apodrecida', 'cristal', 'cristal com almas dentro', 'gnomo de jardim', 'espelho', 'pele de animal',
        'crânio', 'dispositivo tecnológico muito avançado para essa época', 'diário', 'totem de madeira',
        'busto', 'dados', 'jogo de tabuleiro', 'item amaldiçoado', 'tapete voador', 'chifre', 'presa',
        'ingrediente alquímico', 'algemas', 'ferradura', 'luva', 'pata de coelho', 'planta exótica',
        'bigorna', 'candelabro', 'círio ritualístico', 'cinzas', 'pederneira', 'tocha', 'toco de madeira',
        'fóssil', 'caixinha de música', 'rede', 'amuleto', 'poção', 'escudo', 'munição', 'projétil'
    ]

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
        'você encontra um objeto de pouco valor',
        'você encontra um objeto valioso',
        'você encontra uma pista de algo que aconteceu aqui',
        'você encontra uma pista de alguém que passou por aqui',
        'você encontra um acampamento',
        'alguém pede ajuda',
        'você ouve um grito',
        'você encontra um chefão',
        'militares passam por você'
    ];

    static climas = [
        'céu ensolarado sem nuvens, o vento está forte e quente',
        'céu ensolarado sem nuvens, o vento está forte e fresco',
        'céu ensolarado sem nuvens, o vento está leve e quente',
        'céu ensolarado sem nuvens, o vento está leve e fresco',
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
        'herbolário(a)', 'lutador(a)', 'gladiador(a)', 'mestre(a)', 'ator/atriz', 'musicista', 'joalheiro(a)', 'minerador(a)',
        'atirador(a)', 'mordomo', 'barbeiro(a)', 'guia', 'padeiro(a)', 'animador(a)', 'vidraceiro(a)', 'torturador(a)',
        'escoteiro(a)', 'jardineiro(a)', 'cervejeiro(a)', 'barqueiro(a)', 'charlatão/charlatã', 'estalajadeiro(a)', 'tanoeiro(a)',
        'consultor(a)', 'oleiro(a)', 'chaveiro(a)', 'açougueiro(a)', 'cafetão/cafetã', 'prostituto(a)', 'fisiculturista',
        'colecionador(a)', 'aprendiz', 'faxineiro(a)', 'pedinte', 'exorcista', 'explorador(a)', 'aventureiro(a)', 'investidor(a)',
        'agricultor(a)', 'negociante', 'cientista', 'alveneiro(a)', 'escultor(a)', 'ocultista', 'instrutor(a)', 'herói/heroína', 'rei/rainha',
        'prefeito(a)', 'chapeleiro(a)', 'lojista', 'especialista', 'poeta', 'escriba', 'agiota', 'político(a)', 'factótum', 'faz-tudo',
        'recepcionista', 'secretário(a)', 'ministro(a)', 'psicólogo(a)', 'arqueiro(a)', 'druida', 'xamã', 'feiticeiro(a)', 'paladino(a)',
        'piloto(a)', 'químico(a)', 'teólogo(a)', 'legista', 'detetive', 'economista', 'capitão/capitã', 'gerente', 'biólogo(a)',
        'necromante', 'bandido(a)', 'samurai', 'ninja', 'jogador(a)', 'pregador(a)'
    ]

    static racas = [
        'humano', 'metadílio', 'meio-animal', 'elfo', 'meio-elfo', 'orc', 'meio-orc', 'fada', 'gnomo', 'duende',
        'alienígena', 'meio-demônio', 'meio-bestial', 'goblin', 'hobgoblin', 'draconato', 'anão', 'tritão', 'meio-tritão',
        'meio-anjo', 'meio-jinn', 'doppelganger', 'vampiro', 'licantropo', 'forjado bélico', 'droide', 'ghoul',
        'doppelganger', 'meio-gigante', 'meio-gosma', 'semideus', 'meio-planta'
    ]

    static chefoes = [
        'dragão', 'kraken', 'verme gigante', 'beholder', 'titã', 'hidra', 'grifo', 'necromante',
        'lich', 'golem', 'minotauro', 'demônio', 'forjado bélico gigante', 'gosma gigante',
        'quimera', 'serpente gigante', 'vampiro ancião', 'bruxa', 'javali mutante', 'arranca-línguas',
        'mapinguari', 'pai do mato', 'besouro titã'
    ]

    static criaturas = [
        'troll', 'ogro', 'esqueleto', 'dragonete', 'aranha gigante', 'rato gigante', 'lobo',
        'gnoll', 'centauro', 'espírito', 'zumbi', 'elemental', 'harpia',
        'manticora', 'goblin', 'orc', 'ciclope', 'dinossauro', 'gosma',
        'armadura-viva', 'kobold', 'árvore-viva', 'inseto-gigante', 'fungoide', 'planta-carnívora',
        'gárgula', 'fogo-fátuo', 'mímico', 'múmia', 'naga', 'imp', 'murloc', 'cobra-venenosa',
        'hobgoblin', 'lagarto de pedra', 'aberração', 'capelobo', 'corpo-seco', 'labatut', 'barghest',
        'basilisco menor', 'cocatriz', 'urso-coruja', 'bugbear', 'phooka', 'gigante'
    ]

    static lugares = [
        'montanha', 'cidade', 'cripta', 'lago', 'ilha', 'continente', 'praia', 'casa', 'ruína', 'castelo',
        'torre', 'capela', 'templo', 'deserto', 'vale', 'planície', 'estrada', 'rio', 'cachoeira', 'esconderijo',
        'mercado', 'floresta', 'selva', 'mar', 'colina', 'clareira', 'fazenda', 'plantação', 'biblioteca', 'masmorra',
        'taverna', 'caverna', 'cemitério', 'prisão', 'arena', 'estábulo', 'ravina', 'ponte', 'túnel', 'esgoto', 'loja',
        'oficina', 'escola', 'praça', 'penhasco', 'laboratório', 'jardim', 'palácio', 'vila',
        'beco', 'vilarejo', 'aldeia', 'fortaleza', 'muralha', 'pântano', 'vulcão', 'geleira', 'museu'
    ]

    static horarios = [
        '00:00', '00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30',
        '05:0', '05:30', '06:00', '06:30', '07:00', '07:30', '08:00', '08:30', '09:00', '09:30',
        '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
        '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
        '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'
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
        'insano(a)', 'acelerado(a)', 'alcoólatra', 'drogado(a)', 'viciado(a)', 'gênio(a)', 'rigoroso(a)',
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
        'enjoado(a)', 'apressado(a)', 'nervoso(a)', 'ansioso(a)', 'envergonhado(a)', 'arrependido(a)', 'desanimado(a)',
        'interessado(a)', 'desinteressado(a)', 'ocupado(a)', 'incrédulo(a)', 'desolado(a)', 'iludido(a)', 'desiludido(a)',
        'famoso(a)', 'folgado(a)', 'maltrapilho(a)', 'teimoso(a)', 'supérfluo(a)', 'ignorante', 'maneiro(a)', 'deselegante',
        'inconveniente', 'útil', 'inútil', 'profissional', 'iniciante', 'lendário(a)', 'caipira', 'urbano(a)', 'nativo(a)',
        'vegetariano(a)', 'vegano(a)', 'ativista', 'aposentado(a)', 'falido(a)'
    ]
}