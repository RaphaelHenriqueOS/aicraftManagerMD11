


let paxButton = document.querySelector('input#buttonPax');
let cargoButton = document.querySelector('input#buttonCargo');

paxButton.addEventListener('click', () => {
    window.location.href = './index.html'
})

cargoButton.addEventListener('click', () => {
    window.location.href = './cargo.html'
})

//Pax Random Function

function paxRadom(){

    let total = document.querySelector('#totalPaxOnboad').value;
    let outra = Number(total);
    let economy = outra;
    let first = 0;
    let business = 0;
    
    do {
        first = Math.floor(16* Math.random());
        outra -= first;

        business = Math.floor(56* Math.random());
        outra -= business;
        
        economy = outra;

    } while (economy > 221 || economy < 0);

    let firstClass = document.querySelector('#qtdFirst').setAttribute('value', first);
    let bussinesClass = document.querySelector('#qtdBusiness').setAttribute('value', business);
    let economyClass = document.querySelector('#qtdEconomy').setAttribute('value', economy)

    let firstKg = document.querySelector('#firstKg').setAttribute('value', (first * 80));
    let businessKg = document.querySelector('#businessKg').setAttribute('value', (business * 80));
    let economyKg = document.querySelector('#economyKg').setAttribute('value', (economy * 80));
  
  
}


function calcularPax() {
    let totalPax = document.querySelector('div#totalPax');
    let firstPax = document.querySelector('input#qtdFirst');
    let businessPax = document.querySelector('input#qtdBusiness');
    let economyPax = document.querySelector('input#qtdEconomy');

    let firstKg = document.querySelector('input#firstKg');
    let businessKg = document.querySelector('input#businessKg');
    let economyKg = document.querySelector('input#economyKg');

    let numFirst = Number(firstPax.value);
    let numBusiness = Number(businessPax.value);
    let numEconomy = Number(economyPax.value);

    let somatorio = numFirst + numBusiness + numEconomy
    
    totalPax.innerHTML = somatorio
    firstKg.setAttribute('value', Math.round(numFirst * 80));
    businessKg.setAttribute('value', Math.round(numBusiness * 80));
    economyKg.setAttribute('value', Math.round(numEconomy * 80));

}


function calcularCargoPax() {
    let totalCargo = document.querySelector('input#totalCargo');
    let numTotalCargo = Number(totalCargo.value);
    let porcentagemFWD = Math.round(numTotalCargo * (68.77 / 100)).toFixed(0)
    let porcentagemAFT = Math.round(numTotalCargo * (31.22 / 100)).toFixed(0)

    let qtdFWD = document.querySelector('input#qtdFWD')
    qtdFWD.setAttribute('value', porcentagemFWD)
    

    let qtdAFT = document.querySelector('input#qtdAFT')
    qtdAFT.setAttribute('value', porcentagemAFT)
}

// calculo de combustível

let botaoCalcularFuel = document.querySelector('input#calcularFuel');
botaoCalcularFuel.addEventListener('click', () =>{
    let fuelOnboard = document.querySelector('input#fuelOnboard').value;
    let converteFuelOnboard = Number(fuelOnboard);
    let fuelCenter = document.querySelector('div#fuelCenter').innerHTML = converteFuelOnboard * (25.14 / 100) + ' kg'
    let fuelLeft = document.querySelector('div#fuelLeft').innerHTML = converteFuelOnboard * (15.9 / 100) + ' kg'
    let fuelRigth = document.querySelector('div#fuelRigth').innerHTML = converteFuelOnboard * (15.9 / 100) + ' kg'
    let fuelCenter2 = document.querySelector('div#fuelCenter2').innerHTML = converteFuelOnboard * (5.15 / 100) + ' kg'
    let fuelCenter3 = document.querySelector('div#fuelCenter3').innerHTML = converteFuelOnboard * (38.52 / 100) + ' kg'
})


// Cargo Mode

function calcularCargo(){
    let totalCargoInsert = document.querySelector('input#totalCargoInsert').value;
    let frontDeck = document.querySelector('input#frontDeck');
    let middletDeck = document.querySelector('input#middleDeck');
    let backtDeck = document.querySelector('input#backDeck');
    let fwdCargo = document.querySelector('input#fwdCargo2');
    let aftCargo = document.querySelector('input#aftCargo2');

    frontDeck.setAttribute('value', Math.round(totalCargoInsert * 0.0647));
    middletDeck.setAttribute('value', Math.round(totalCargoInsert * 0.2194));
    backtDeck.setAttribute('value', Math.round(totalCargoInsert * 0.4769));
    fwdCargo.setAttribute('value', Math.round(totalCargoInsert * 0.1625));
    aftCargo.setAttribute('value', Math.round(totalCargoInsert * 0.074));



    
    

}