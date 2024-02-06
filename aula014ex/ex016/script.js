 function contar(){
    var ini = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var pas = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('ERRO')
    }else{
        res.innerHTML= 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p =  Number(pas.value)
        var c = i
        
        if ( p <= 0){
            window.alert('Passo invalido!ConsiderandO PASSO1')
            p = 1
        }
        while(c <= f){
            res.innerHTML += (c)
            c += p
        } 

        /*for(var c = i; c <= f; c += p){
            res.innerHTML += (c)
        }*/
    }
    
 }