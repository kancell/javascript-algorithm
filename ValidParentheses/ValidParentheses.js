/**********************************************************************************
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid
 * but "(]" and "([)]" are not.
 *
 *
 **********************************************************************************/

function check(str){
    var tmp = []
    for(var i = 0;i < str.length;i++){
        if(str[i] === '('||str[i] === '['||str[i] === '{'){
            tmp.push(str[i]);
        }
        else if(str[i] === ')'&&tmp[tmp.length-1] === '('){
            tmp.pop();
        }
        else if(str[i] === ']'&&tmp[tmp.length-1] === '['){
            tmp.pop()
        }
        else if(str[i] === '}'&&tmp[tmp.length-1] === '{'){
            tmp.pop()
        }
    }
    return tmp.length?false:true
}

console.log(check('()[]{}')); // true
console.log(check('[}')); // false
console.log(check('([)]'));// false
console.log(check('({[]})'));// true