function bubbleSort(arr){
    for(let i = 0;i < arr.length;i++){
        for(let j = 0;j < arr.length - 1 - i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr
}
var arr = [9,5,2,8,0,1,5,6,10]
bubbleSort(arr)