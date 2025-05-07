export default class TesztKerdes {
    constructor(adat, szuloElem) {
        this.adat = adat;
        this.szuloElem = szuloElem;
        this.valaszok = this.kevertValaszok();
        this.render();
    }

    kevertValaszok() {
        return this.adat.valasztas
            .map(v => ({ valasz: v, sorrend: Math.random() }))
            .sort((a, b) => a.sorrend - b.sorrend)
            .map(v => v.valasz);
    }
    render() {
        let html = `
            <div class="card shadow-sm mb-4" data-correct="${this.adat.valasztas[0]}">
                <div class="card-body">
                    <h5 class="card-title">${this.adat.mondat}</h5>
                    <p class="card-subtitle mb-2 text-muted">(${this.adat.alap})</p>
                    <div class="row g-2 mt-3">
                        ${this.valaszok.map(valasz => `
                            <div class="col-12 col-md-6">
                                <button class="btn btn-outline-primary w-100">${valasz}</button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        this.szuloElem.insertAdjacentHTML("beforeend", html);
        const buttons = this.szuloElem.querySelectorAll('.card button');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => this.handleAnswerClick(event));
        });
    }

    handleAnswerClick(event) {
        const valasz = event.target.textContent;
        console.log("Kattintott válasz:", valasz);
        const questionCard = event.target.closest('.card');
        const correctAnswer = questionCard.getAttribute('data-correct');
        if (valasz === correctAnswer) {
            event.target.style.backgroundColor = 'green';
            console.log("Helyes válasz!");
        } else {
            event.target.style.backgroundColor = 'red';
            console.log("Helytelen válasz!");
        }
    }
}
