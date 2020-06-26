class Save {
    static log = Save.getLog();

    static notas = Save.getNotas();

    static getLog() { if (localStorage) return localStorage.getItem('log'); }

    static getNotas() { if (localStorage) return localStorage.getItem('notas'); }

    static save() {
        if (localStorage) {
            localStorage.setItem('log', txtarea_log.innerHTML);
            localStorage.setItem('notas', JSON.stringify(lista_notas));
        }
    }
}

if (Save.log && !Save.log.includes("undefined")) {
    txtarea_log.innerHTML = Save.log;
    txtarea_log.scrollBy(0, 99999);
}

if (Save.notas && !Save.notas.includes("undefined")) {
    lista_notas = JSON.parse(Save.notas);
}