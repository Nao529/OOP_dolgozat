

export default class TesztKerdesek{
    #lista=[]
    #pElem
    constructor(lista, pElem){
        this.#pElem=pElem;
        this.#lista=lista;
        this.megjelenit();
    }

    megjelenit(){
        let html = `<div class="card">
                        
                    </div>
        `
        this.#pElem.insertAdjacentHTML("beforeend",html)
    }
}