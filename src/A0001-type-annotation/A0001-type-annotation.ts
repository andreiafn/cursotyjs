/*eslint-disable*/
let nome: string = 'Luiz'; // Qualquer tipo de string
let idade: number = 30; //10, 1.57
let adulto: boolean = true; //true e false
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n; //bigint

//array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

//Objetos
let pessoa: {nome:string, idade: number, adulto?: boolean} = {
    idade: 30,
    nome:'Luiz'
};

//Funções
function soma(x: number, y: number): number{
    return x + y;
}
