//if
var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é extrangeiro")
}else{
    console.log("Você é Brasileiro")
}

var idade = 22;

if(idade < 16){
    console.log("Não vota")
}else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}

// switch

var diaSem = 1;

switch(diaSem){
    case 1 :
        console.log("Domingo");
        break;
    case 2 :
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
    console.log("Esse dia da semana não existe!")
}

var carro = [{modelo: "Audi A3", marca: "Audi", ano:2020},
{modelo: "xompass", marca: "jepp", ano:2021}]

for(let caracteristica in carro){
console.log(carro[caracteristica]);
}


for(let c of carro){
    console.log(c.ano)
}

var c = 1;
while(c<=10){
    console.log(c);
    c++;
}

var t = 1;
do{
    console.log(t);
    t++
}while(t< 6)