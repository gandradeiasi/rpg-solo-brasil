class Nome {
    static soft = [
        'a', 'e', 'i', 'o', 'u'
    ]

    static hard = [
        'b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q',
        'r', 's', 't', 'v', 'z', 'w', 'y'
    ]

    static conjuntosProibidos = [
        /^-/, /-$/, /n[bpmhrlh]/, /m[cdfghjklnqrstvxz]/,
        /[aeiouyáäêéëíiüúôóýÿ]{3}/, /[áäêéëíiüúôóýÿ].*[áäêéëíiüúôóýÿ]/, /([aeiouyw])\1/,
        /[a-z][aeiouyw]s[a-z][aeiouyw]s/, /[a-z]r[aeiouyw][a-z]r[aeiouyw]/, /l[mr]/, /kli/, /ljul/,
        /^dribe/, /drigro/, /ogr/, /brf/, /yelyel/, /^i/, /lhaye/, /robforga/, /kq/,
        /[a-z]w/, /w[bcdfghjklmnpqrstwyvzux]/, /[abd-rt-z]h./, /.r.+r./, /^k[bcdfghjklmnpqrstwvzx]/,
        /ng.$/, /peid/, /put/, /merd/, /porr/, /caral/, /buce/, /o[sz][aeiouyw]/, /aeu/,
        /meme/, /mene/, /memi/, /ceio/, /seio/, /yi/, /iy/, /hole$/, /asma/,
        /aa$/, /oo$/, /uu$/, /ee$/, /ii$/, /^aa/, /^ee/, /^ii/, /^uu/, /^oo/, /cg/, /^que/, /^heto/,
        /^reto/, /deita$/, /deito$/, /.f.+f./, /sce/, /sci/, /mega/, /loc[auo]/, /-.$/, /pa[nm]$/,
        /sr/, /[ck]ju/, /pedof/, /ant[ao]/, /ta[ul]co/, /let[ei]/, /tara/, /n.+n.+n/, /mam[aioue]/,
        /^kv/, /orma/, /bv$/, /[bcdfghjklmnpqrstwvzx]{3}/, /[bcdfghjklmnpqrstwvzx]{2}-[bcdfghjklmnpqrstwvzx]{2}/,
        /[bcdfghjklmnpqrtwyvzx][kqwtpsdfgjkzxcvbnm]/, /pica/, /^-/, /-$/, /^[bcdfghjklmnpqrstwvzx]-/,
        /pa[ul]$/, /[sc]entona/, /[bcdfghjklmnpqrstwvzx]x/, /x[bcdfghjklmnpqrstwvzx]/, /a{3}/,
        /e{3}/, /o{3}/, /i{3}/, /u{3}/, /y{2}/, /[bcdfghjklmnpqrstwvzx]h$/, /[bcdfhjkmnpqstwyvzx][nm]/, /cq/, /qc/,
        /([áäêéëíiüúôóýÿ])[áäêéëíiüúôóýÿ]\1/, /q[abcdefghijklmnopqrstvxywvz]/, /qu[bcdfghjklmnpqrstwvzxáäêéëíiüúôóýÿ]/,
        /cu$/, /cu-/, /[bcdfghjklmnpqrstwvzx]j$/, /j[bcdfghjklmnpqrstwvzx]/, /q.*$/, /[qwrtpsdfghjklzxcvbnmv]r$/,
        /([aeiuy]).*\1/, /[kc]ud$/, /.{5}[pbv]$/, /ov[ou]/, /sj/, /em[ou]/, /toba$/, /([jyk]).*\1/, /([aeiouyw]).{0,4}\1/,
        /zr/, /kl$/, /tl/, /[ck]uh*$/, /ji*ade[iu]/, /[uo].+a.+e/, /v[bcdfghjklmnpqrstwvzx]$/,
        /[aeiouyw].*[aeiouyw].*[aeiouyw].*[aeiouyw].*[aeiouyw]/, /[kc]u/, /pu[mn]$/, /dou$/,
        /[qwetyuiopasdfghjklzxcvbnm]r.r$/, /(.).*\1.*\1/, /^[hlmnqrswzx][bcdfghjklmnpqrstwvzx]/, /z[sz]/, /sz/,
        /[lqwyipdgjxcvm]y/, /g[ei]j/, /[zs].[zs][aeiouyw]/, /dur[uoa]/
    ]

    static nome(comprimento) {
        try {
            let nome = "";
            let num = Nome.obtemNumero();

            for (let i = 0; i < num; i++) {
                nome += Nome.obtemProximo(nome);
                if (Nome.conjuntosProibidos.some(x => nome.match(x))) return Nome.nome(num);
            }

            return nome.replace(/^./, nome[0].toUpperCase());
        }
        catch (e) {
            return Nome.nome();
        }
    }

    static obtemNumero() {
        let num = 9;

        while (true) {
            if (num > 3 && Math.random() > .5)
                num--;
            else return num;
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