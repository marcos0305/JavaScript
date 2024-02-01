function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        
        var gênero = ''
        if(fsex [0].checked){
            gênero = 'Homem'

            if(idade >= 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', 'bebe.jpg')
            }else if (idade < 20){
                //JOVEM
                img.setAttribute('src', 'jovem-m.jpg')
            }else if (idade < 60){
                //ADULTO
                img.setAttribute('src', 'adulto-m.jpg')
            }else if (idade < 100){
                //IDOSO
                img.setAttribute('src', 'idoso-m.jpg')
            }

        }else if(fsex [1].checked){
                gênero = 'Mulher'

                if(idade >= 0 && idade <= 10){
                    //CRIANÇA
                    img.setAttribute('src',  'bebe.jpg')
                }else if (idade < 20){
                    //JOVEM
                    img.setAttribute('src', 'jovem-f.jpg')
                }else if (idade < 60){
                    //ADULTO
                    img.setAttribute('src', 'adulto-f.jpg')
                }else if (idade < 100){
                    //IDOSO
                    img.setAttribute('src', 'idoso-f.jpg')
                }
            }
            res.innerHTML =`Detectamos ${gênero} com ${idade} ano`
            res.appendChild(img)
            res.style.textAlign = 'center'
        }
    }
