function unique(arr){
    var obj = {}
    var arrs = []
    arr.forEach(function(value){
        if(!obj[value]){
            arrs.push(value)
            obj[value] = true
        }
    })
    return arrs
}

unique([0,2,2,3,4,9,1,1])