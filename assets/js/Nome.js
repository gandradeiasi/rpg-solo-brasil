class Nome {
    static soft = [
        'a', 'e', 'i', 'o', 'u', 'y'
    ]

    static hard = [
        'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q',
        'r', 's', 't', 'v', 'x', 'z', 'w'
    ]

    static conjuntosProibidos = [
        /^-/, /-$/, /n[bpmhrlh]/, /m[cdfghjklnqrstvxz]/,
        /[aeiouyáäêéëíiüúôóýÿ]{4}/, /[áäêéëíiüúôóýÿ].*[áäêéëíiüúôóýÿ]/,
        /[a-z][aeiou]s[a-z][aeiou]s/, /[a-z]r[aeiou][a-z]r[aeiou]/, /l[mr]/, /kli/, /ljul/,
        /^dribe/, /drigro/, /ogr/, /brf/, /yelyel/, /^i/, /lhaye/, /robforga/, /kq/,
        /[a-z]w/, /w[bcdfghjklmnpqrstwyvzux]/, /[a-z]h./, /.r.+r./, /^k[bcdfghjklmnpqrstwyvzx]/,
        /ng.$/, /peid/, /put/, /merd/, /porr/, /caral/, /buce/, /o[sz][aeiou]/, /aeu/,
        /meme/, /mene/, /memi/, /ceio/, /seio/, /yi/, /iy/, /hole$/, /asma/,
        /aa$/, /oo$/, /uu$/, /ee$/, /ii$/, /^aa/, /^ee/, /^ii/, /^uu/, /^oo/, /cg/, /^que/, /^heto/,
        /^reto/, /deita$/, /deito$/, /.f.+f./, /sce/, /sci/, /mega/, /loc[auo]/, /-.$/, /pa[nm]$/,
        /sr/, /[ck]ju/, /pedof/, /ant[ao]/, /ta[ul]co/, /let[ei]/, /tara/, /n.+n.+n/, /mam[aioue]/,
        /^kv/, /orma/, /bv$/, /[bcdfghjklmnpqrstwyvzx]{3}/, /[bcdfghjklmnpqrstwyvzx]{2}-[bcdfghjklmnpqrstwyvzx]{2}/,
        /[bcdfghjklmnpqrstwyvzx][skqwtpsdfgjkzxcvbnm]/, /pica/, /^-/, /-$/, /^[bcdfghjklmnpqrstwyvzx]-/,
        /pa[ul]$/, /[sc]entona/, /[bcdfghjklmnpqrstwyvzx]x/, /x[bcdfghjklmnpqrstwyvzx]/, /a{3}/,
        /e{3}/, /o{3}/, /i{3}/, /u{3}/, /y{2}/, /[bcdfghjklmnpqrstwyvzx]h$/, /[bcdfhjkmnpqstwyvzx][nm]/, /cq/, /qc/,
        /([áäêéëíiüúôóýÿ])[áäêéëíiüúôóýÿ]\1/, /q[abcdefghijklmnopqrstvxywvz]/, /qu[bcdfghjklmnpqrstwyvzxáäêéëíiüúôóýÿ]/,
        /cu$/, /cu-/, /[bcdfghjklmnpqrstwyvzx]j$/, /j[bcdfghjklmnpqrstwyvzx]/, /q.*$/, /(.).+\1/,

    ]

    static nome(comprimento) {
        try {
            let nome = "";
            let num = comprimento ? comprimento : parseInt(Math.random() * 7 + 3);

            for (let i = 0; i < num; i++) nome += Nome.obtemProximo(nome);

            if (
                (nome.match(/y/) && Math.random() > 0.3) ||
                Nome.conjuntosProibidos.some(x => nome.match(x))
            )
                return Nome.nome(num);

            if (nome.includes('-')) nome = nome.split('-')[0] + '-' + nome.split('-')[1].replace(/^./, nome.split('-')[1][0].toUpperCase());

            return nome.replace(/^./, nome[0].toUpperCase());
        }
        catch (e) {
            return Nome.nome();
        }
    }

    static obtemProximo(string) {
        if (string.length == 0) {
            if (Math.random() > 0.5) return randomFromArray(Nome.soft);
            else return randomFromArray(Nome.hard);
        }
        else {
            if (Nome.soft.includes(string[string.length - 1])) {
                if (Math.random() > 0.2) return randomFromArray(Nome.hard);
                else return randomFromArray(Nome.soft);
            }
            else {
                if (Math.random() > 0.1) return randomFromArray(Nome.soft);
                else return randomFromArray(Nome.hard);
            }
        }
    }
}