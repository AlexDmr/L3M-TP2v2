/* Q1: Votre code Typescript de réponse à la question 1 ici */
const operande1 = document.querySelector( "#Q1 input.operande1" ) as HTMLInputElement;
const operande2 = document.querySelector( "#Q1 input.operande2" ) as HTMLSelectElement;
const operator  = document.querySelector( "#Q1 select"          ) as HTMLInputElement;
const outputQ1  = document.querySelector( "#Q1 output"          ) as HTMLOutputElement;

// Calcul du résultat
type FctNumBinaire = (a: number, b: number) => number;
const MapOperator = new Map<string, FctNumBinaire>();
MapOperator.set("+", (a, b) => a + b);
MapOperator.set("-", (a, b) => a - b);
MapOperator.set("*", (a, b) => a * b);
MapOperator.set("/", (a, b) => a / b);
function ComputeQ1() {
    const val1 = parseFloat( operande1.value );
    const val2 = parseFloat( operande2.value );
    const fct = MapOperator.get( operator.value );
    const résultat = fct(val1, val2);
    outputQ1.textContent = "" + résultat;
}

ComputeQ1();
/*operande1.onchange = ComputeQ1;
operande2.onchange = ComputeQ1;
operator.onchange  = ComputeQ1;*/
[operator, operande2, operande1].forEach( balise => {
    balise.onchange = ComputeQ1;
    balise.onclick  = ComputeQ1;
    balise.onkeyup  = ComputeQ1;
} );


/* Q2: Votre code Typescript de réponse à la question 1 ici */
const Table1    = document.querySelector( "#Q2 table.V1"   ) as HTMLTableElement;
const Table2    = document.querySelector( "#Q2 table.V2"   ) as HTMLTableElement;
const incrBt    = document.querySelector( "#Q2 button.increase" ) as HTMLButtonElement;
const decrBt    = document.querySelector( "#Q2 button.decrease" ) as HTMLButtonElement;
const outputQ2  = document.querySelector( "#Q2 output"          ) as HTMLOutputElement;

// On crée dès le départ un tr qui va bien
const tr = document.createElement( "tr" );
tr.innerHTML = `<td><input type="number" value="3"/></td>`;

function IncrTable(table: HTMLTableElement) {
    const newTr = tr.cloneNode(true) as HTMLTableRowElement;
    const input1 = newTr.querySelector("input");
    input1.onchange = ComputeQ2;
    table.tBodies[0].appendChild( newTr );
}
incrBt.addEventListener("click", () => {
    IncrTable( Table1 );
    IncrTable( Table2 );
    ComputeQ2();
});

function DecrTable(table: HTMLTableElement) {
    const tr = table.querySelector( "tr" );
    if (tr) {
        tr.parentElement.removeChild(tr);
    }
}
decrBt.addEventListener("click", () => {
    DecrTable( Table1 );
    DecrTable( Table2 );
    ComputeQ2();
});

function VectorFromTable(table: HTMLTableElement): number[] {
    const Vinputs = [ ...table.querySelectorAll( "input" ) ] as HTMLInputElement[];
    return Vinputs.map( input => parseFloat(input.value) );
}

function ComputeQ2() {
    const V1 = VectorFromTable(Table1);
    const V2 = VectorFromTable(Table2);
    const prodScal = V1.reduce( (prod, v, i) => prod + v * V2[i], 0 );
    outputQ2.textContent = "" + prodScal;

}

ComputeQ2();


/* Q3: Votre code Typescript de réponse à la question 1 ici */





/* Q4: Votre code Typescript de réponse à la question 1 ici */



