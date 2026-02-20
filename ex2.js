
function VerificarChuva(provavilidade){  

    if ( provavilidade >= 10.0 ){
        alert("Leve um guarda-chuvas!")
    }else{
        alert("Pode andara de boa na rua!")
    }

    
}
let provavilidade = Number(prompt("Qual é a provavilidades em porcentagem que há para chover? (0 a 100) "))

VerificarChuva(provavilidade)

// Só funciona de rodar no navegador