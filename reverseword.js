function reverse(string){
    let arr = string.split(' ')
    return arr.map((item, index, arr) => {
        return item.split('').reverse().join('')
    }).join(' ')    
}