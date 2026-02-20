
function VerificarChuva(provavilidade){  

    if ( provavilidade >= 10.0 ){
        alert("Leve um guarda-chuvas!")
    }else{
        alert("Pode andara de boa na rua!")
    }

    
}
let provavilidade = Number(prompt("Qual é a provavilidades em porcentagem que há para chver? leve? forte? "))

VerificarChuva(provavilidade)

// Só funciona de rodar no navegador