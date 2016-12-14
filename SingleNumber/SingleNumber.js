/**********************************************************************************
 *
 * Given an array of integers, every element appears twice except for one. Find that single one.
 *
 * Note:
 * Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 *
 *
 **********************************************************************************/
function singleNumber(arr){
    return arr.reduce(function(pre,cur){
        return pre^cur
    })
}
/***************found single dog****************
function singleNumber2(input){
    var tmp = [];
    var arr = input.sort()
    for(var i = 0;i < arr.length;i++){
        if(tmp.indexOf(arr[i]) == -1){
            tmp.push(arr[i])
        }
        else if(arr[i] == tmp[tmp.length-1]){
            tmp.pop()
        }
    }
    return tmp
}
**********************************************/
var testCase = [1, 1, 2, 2, 3];
console.log(singleNumber(testCase))