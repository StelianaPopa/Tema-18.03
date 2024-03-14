// Folosind un for loop sa se afișeze multiplii de 5 de la 1 la 48 ( 5, 10, 15 … 45 )
for (let i = 1; i <= 48; i++){
    if (i % 5 ===0){
        console.log(i);
    };
};

// Creează o funcție care primește ca parametru un număr, iar funcția afișează în consola 
// numerele de la zero pana la valoarea parametrului. Dacă funcția este apelată, iar 
// parametrul are valoarea 12, în consola o sa vedem 0, 1, 2 ….. 12.

let afiseazaNumere = (x) => {
    for (let i = 0; i<= x; i++){
        console.log(i);
    };
};
afiseazaNumere(12);

// Creează o funcție care primește ca parametru un array și returnează lungimea array-ului.

let lungimeArray = (lista) => {
    return lista.length;
};
let listaCumparaturi = ["Lapte", "Carne", "Branza", "Oua", "Rosii"];
console.log(lungimeArray(listaCumparaturi));

// Creează o funcție care primește ca parametru un array și returnează suma numerelor pare din el

let varianta1SumaNumerePare = [1, 3, 4, 7, 8, 10, 13];
let sumaNumerePare = (numere) => {
    let suma = 0;
    for (let i = 0; i < numere.length; i++) {
         if (numere[i] % 2 === 0) {
            suma += numere[i];
         };
    };
    return suma;
};
console.log(sumaNumerePare(varianta1SumaNumerePare));

let varianta2 = [2, 4, 4, 11, 40];
console.log(sumaNumerePare(varianta2));

// Creează o funcție care primește ca parametru un array și încă un parametru număr. Funcția sa 
// returneze suma numerelor mai mari decât acel număr. Dacă array-ul este [5, 3, 10, 17, 4], iar 
// numărul este 9, funcția sa returneze 27 ( 10 + 17 )

let numereVersiunea2 = [5, 3, 10, 17, 4];
let comparaSiAduna = (numere, x) => {
    let suma = 0;
    for (let i = 0; i < numere.length; i++) {
        if (numere[i] > x) {
            suma += numere[i];
         };
    }  return suma;
}
console.log(comparaSiAduna(numereVersiunea2, 9));

// Creează o funcție care primește ca parametru un array și returnează suma numerelor impare și 
// pozitive din el

let sirNumere = [-3, -7, 0, 2, 3, 7, 23];
let adunaImparePozitive = (numere) => {
    suma = 0;
    for (let i = 0; i < numere.length; i++) {
        if (numere[i] % 2 !== 0 && numere[i] > 0) {
            suma += numere[i];
        };
   }  return suma;
}
console.log(adunaImparePozitive(sirNumere));

// Creează o funcție care primește ca parametru un array și returnează diferența dintre suma numerelor
// pare și suma numerelor impare

let sirDeNumere = [1, 2, 3, 4, 5, 6];
let adunaSumaPareImpare = (numere) => {
    sumaPare = 0;
    sumaImpare = 0;
    for (let i = 0; i < numere.length; i++) {
        if (numere[i] % 2 === 0) {
            sumaPare += numere[i];
        } else {
            sumaImpare += numere[i];
        };
    };
    return sumaPare - sumaImpare;
};
console.log(adunaSumaPareImpare(sirDeNumere));

// Creează o funcție care primește ca parametru un array de string-uri și returnează suma caracterelor. 
// De exemplu: [“Cristian”, “SkillBrain!”, “dEv”] -> 8 + 11 + 3 = 22

let arrayStringuri = ["Cristian", "SkillBrain!", "dEv"];
let sumaCaractere = (string) => {
    suma = 0;
    for (let i = 0; i < string.length; i++) {
        suma += string[i].length;
    };
    return suma;
}
console.log(sumaCaractere(arrayStringuri));
