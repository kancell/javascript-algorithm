function binarySearch(arr, item){
    let start = 0
    let end = arr.length - 1
    let mid = 0
    while(start <= end){
        mid = Math.floor((start + end)/2)
        if(arr[mid] == item){
            return mid
        }
        else if(arr[mid] > item){
            end = mid - 1
        }
        else{
            start = mid + 1
        }
    }
    return 'notfound'
}
binarySearch([1,2,5,7,8,9,11],2) 