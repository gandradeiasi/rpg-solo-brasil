class Save {
    static log = Save.getLog();

    static notes = Save.getNotes();

    static getLog() { if (localStorage) return localStorage.getItem('log'); }

    static getNotes() { if (localStorage) return localStorage.getItem('notes'); }

    static save() {
        if (localStorage) {
            localStorage.setItem('log', txtarea_log.innerHTML);
            localStorage.setItem('notes', txtarea_notes.value);
        }
    }
}

if (Save.log && !Save.log.includes("undefined")) {
    txtarea_log.innerHTML = Save.log;
    txtarea_log.scrollBy(0, 99999);
}
if (Save.notes && !Save.notes.includes("undefined")) {
    txtarea_notes.value = Save.notes;
    txtarea_notes.scrollBy(0, 99999);
}


