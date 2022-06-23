function verificar()  {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    
    if(fAno.value.lenght == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados novamente!')

    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')



        if(fsex[0].checked) { //fsex[0] = masculino fsex[1] = feminino
            genero = 'Homem'

            if(idade >= 0 && idade <= 9) {
                img.setAttribute('src','imagens/bebem.jpg')
                //criança
            }else if(idade <18) {
                img.setAttribute('src','imagens/jovemM.jpg')
                //jovem
            }else if(idade < 50) {
                img.setAttribute('src','imagens/adultoM.jpg')
                //adulto
            }else {
                img.setAttribute('src','imagens/idoso.jpg')
                //idoso
            }



        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 9) {
                img.setAttribute('src','imagens/bebef.jpg')
                //criança
            }else if(idade <18) {
                img.setAttribute('src','imagens/jovemf.jpg')
                //jovem
            }else if(idade < 50) {
                img.setAttribute('src','imagens/adultoF.jpg')
                //adulto
            }else {
                img.setAttribute('src','imagens/idosa.jpg')
                //idoso
            }


        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.</br>`
        res.appendChild(img)//faz com que as imagens apareçam 
    }
    
}