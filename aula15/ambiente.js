var num =  [5, 2, 1, 4, 3]

num.push(0)

num.sort()

console.log (num)

console.log (`O vetor tem ${num.length} posições`)

console.log (`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(2)
if(pos == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`o valor esta na posição ${pos}`)
}
