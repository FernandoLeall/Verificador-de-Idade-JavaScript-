function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // A informação de ano que usuário informou no campo "ANO"
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) { //Aqui o comando vai verificar se a data digitada é um valor válido {
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName(`radsex`) // Aqui será feita a verificação de sexo do usuário
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}` // Essa linha só serve para testar o código
        var gênero = ``
        var img = document.createElement (`img`)
        img.setAttribute(`id`, `foto`)
        if (fsex[0].checked) {
            gênero = `Homem`
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute (`src`, `foto-bebe-m.png`)
            } else if (idade < 21) {
                //Jovem
                img.setAttribute (`src`, `foto-jovem-m.png`)
            } else if (idade < 50){
                //Adulto
                img.setAttribute (`src`, `foto-adulto-m.png`)
            } else { 
                //Idoso
                img.setAttribute (`src`, `foto-idoso-m.png`)
            }  
        }else if (fsex [1].checked) {
            gênero = `Mulher`
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute (`src`, `foto-bebe-f.png`)
            } else if (idade < 21) {
                //Jovem
                img.setAttribute (`src`, `foto-jovem-f.png`)
            } else if (idade < 50){
                //Adulta
                img.setAttribute (`src`, `foto-adulto-f.png`)
            } else { 
                //Idosa
                img.setAttribute (`src`, `foto-idosa-f.png`)
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}

