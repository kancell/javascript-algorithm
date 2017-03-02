function b(num){
    var a = []
    if(num <= 1) return 1
    while(num >= 2){
        a.unshift(num%2)
        num = Math.floor(num/2)
    }
    a.unshift(num)
    console.log(a)
}
b(8)
