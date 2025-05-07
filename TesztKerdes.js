import szenvedoMondatok from "TesztKerdes.js";

export default class TesztKerdes{
    #adatObj={}
    #pElem
    constructor(adatObj, pElem){
        this.#pElem=pElem;
        this.#adatObj=adatObj;
        this.megjelenit();
    }

    megjelenit(){
        let html = `<div class="card">
                        <div class="card-header">
                            <p>${this.#adatObj.mondat}</p>
                        </div>
                        <div class="card-body">
                            <p><a href="#" class="btn btn-primary">${this.#adatObj.valasztas[0]}</a></p>
                        </div>
                    </div>
        `
        this.#pElem.insertAdjacentHTML("beforeend",html)
    }
}