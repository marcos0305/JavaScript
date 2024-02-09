var valor = [0, 1, 2, 3, 4, 5]

for(var pos=0; pos < valor.length; pos++){   
    console.log(`A posição ${pos} tem o seguinte valor ${valor[pos]}`)
}

 for(var pos in valor){
    console.log(`A posição ${pos} tem o seguinte valor ${valor[pos]}`)
 } 