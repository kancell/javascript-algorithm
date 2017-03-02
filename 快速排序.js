function quickSort(arr){
    if(arr.length <= 1) return arr
    let pivotIndex = Math.floor((arr.length-1)/2)
    let pivot = arr.splice(pivotIndex,1)[0]
    //找基准，并把基准从原数组删除
    let left = []
    let right = []
    for(let i of arr.keys()){
    //比基准小的放在left，比基准大的放在right
        if(arr[i] <= pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    //递归
    return quickSort(left).concat([pivot],quickSort(right))
}

var arr = [9,5,2,8,0,1,5,6,10]
quickSort(arr)