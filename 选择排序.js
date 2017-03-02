function selectionSort(arr){
    let len = arr.length 
    let minIndex
    for(let i = 0;i < len - 1;i++){
        minIndex = i
        for(let j = i + 1;j < len;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}
var arr = [9,5,2,8,0,1,5,6,10]
selectionSort(arr)