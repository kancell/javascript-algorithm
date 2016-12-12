function twosum(nums, target) {
    var hash = {};
    var result = [];

    for (var i = 0, l = nums.length; i < l; ++i) {
        var n = nums[i];
        if (hash[n] > 0) {
            result.push(hash[n], i + 1);
            break;
        } 
        else {
            hash[target - n] = i + 1;
        }
    }
    return result;
};

var testCase = [2, 7, 11, 15];
var result = twosum(testCase, 9);

console.log(result.toString());