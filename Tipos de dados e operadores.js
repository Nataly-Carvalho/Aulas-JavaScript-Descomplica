var nome = "Ana";
console.log (typeof(nome));

console.log(nome.toLocaleUpperCase());

if(typeof(nome) == "string"){
    console.log(nome.toLocaleUpperCase()); 
}else{
    console.log("voce precisa usra uma string");
}

//operadores

var n = 3;
//n = n - 10;
//n = n + 5;
n*=10;
console.log(n)

var x = 10;
x--
b=20;
c=60;

console.log(x)

console.log(!(n <= x || b  != c));

//verificar se a é maior que b e b é divisivel por 2
console.log(a > b && b % 2 == 0);
// verificar se b é maior igual a ou b dividido por 2 o resultado é 2
console.log(a <= b || b / 2 == 2)
//  verificar se a é maior que b e b é maior = 5
console.log(a > b && 5 <=b);
// verificar se b é par ou impa usando ternario
resultado = b % 2 == 0? "par": "Impar"
console.log(resultado)