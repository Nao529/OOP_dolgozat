import TesztKerdes from "./TesztKerdes.js";

export default class TesztKerdesek {
    constructor(lista, szuloElem) {
        this.lista = lista;
        this.szuloElem = szuloElem;
        this.render();
    }

    render() {
        this.lista = this.shuffleArray(this.lista);
        this.lista.forEach(adat => {
            if (typeof adat === "object" && adat.mondat) {
                new TesztKerdes(adat, this.szuloElem);
            }
        });
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}
