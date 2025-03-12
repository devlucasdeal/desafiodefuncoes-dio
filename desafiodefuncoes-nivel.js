let saldoVitorias = jogada(135, 50)
let nivel = ""

function jogada(vitorias, derrotas){
    let saldoRankeadas = vitorias - derrotas
    return saldoRankeadas
}

if (saldoVitorias <= 10){
    nivel = "Ferro"
}

else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"
}

else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"
}

else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "ouro"
}

else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
}

else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Lendário"
}

else if(saldoVitorias >= 101){
    nivel = "Imortal"
}

else{
    console.log("O heroi não existe!")
}

console.log(`O herói tem o saldo de ${saldoVitorias} e está no nível de ${nivel}`)