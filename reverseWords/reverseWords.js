/**********************************************************************************
 *
 * Given an input string, reverse the string word by word.
 *
 * For example,
 * Given s = "the sky is blue",
 * return "blue is sky the".
 *
 *
 * Clarification:
 *
 * What constitutes a word?
 * A sequence of non-space characters constitutes a word.
 * Could the input string contain leading or trailing spaces?
 * Yes. However, your reversed string should not contain leading or trailing spaces.
 * How about multiple spaces between two words?
 * Reduce them to a single space in the reversed string.
 *
 *
 **********************************************************************************/

/*use javascript reverse()*/
function reverseWords(string) {
    var strarr = string.split(' ');
    return strarr.reverse().join(' ')
}

/*use arr*/
function reverseWords(string) {
    var strarr = string.split(' ');
    var cache = [];
    for(var i = strarr.length-1;i >= 0;i--){
        cache.push(strarr[i])
    }

    return cache.join(' ')
}

console.log(reverseWords('the sky is blue') === 'blue is sky the'); // true