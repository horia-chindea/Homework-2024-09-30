// Concatenare arrayuri:
const array1 = ["măr","portocală"];
const array2 = ["morcov","broccoli"];
const arrayConcat = array1+array2;
console.log("Arrayuri adunate: ", arrayConcat);
const alimente = array1.concat(array2);
console.log("Arrayuri concatenate: ", alimente);
console.log("----------------");

// Verificare existenta valoare in array:
let fructe = ["măr","portocală","banană"];
let idx = fructe.indexOf("struguri");
if(idx >= 0){
    console.log("Elementul \"struguri\" se regăsește în arrayul \"fructe\" la indexul", idx);
} else{
    console.log("Elementul \"struguri\" nu se regăsește în arrayul \"fructe\"");
}
console.log("----------------");

// Afisare an curent dintr-o variabila Date
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
console.log("Anul curent este:", currentYear);
console.log("----------------");

// Adaugare 5 zile la data curenta:
let date5DaysTimestamp = currentDate.setDate(currentDate.getDate() + 5);
let date5DaysDate = new Date(date5DaysTimestamp);
console.log("Peste 5 zile va fi data de ", date5DaysDate.getDate());
console.log("----------------");

// Diferenta intre doua timestampuri:
let date1 = new Date();
let date1Timestamp = date1.getTime();
let date2 = new Date("2024-10-26");
let date2Timestamp = date2.getTime();
let differenceTimestamp = date2Timestamp - date1Timestamp;
console.log("Diferenta dintre cele doua timestampuri este:", differenceTimestamp, "milisecunde");
console.log("----------------");

// Crearea unui obiect:
let person = {
    nume:"Horia",
    varsta:25,
    oras:"Miercurea Ciuc"
}
console.log("Person:", person);
console.log("----------------");

// Modificare proprietate obiect:
person.varsta = 49;
console.log("Modified person:", person);
console.log("----------------");

// Adaugare un obiect intr-un array de obiecte:
let carti = [
    {
        titlu:"Carte1",
        autor:"Autor1",
        anPublicare:2000
    },
    {
        titlu:"Carte2",
        autor:"Autor2",
        anPublicare:1995
    }
];
console.log("Array-ul de obiecte:", carti);
carti.push(
    {
        titlu:"Carte3",
        autor:"Autor3",
        anPublicare:1822
    }
);
console.log("Noul array de obiecte:", carti);