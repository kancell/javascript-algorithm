function stack(){
    this.store = []
    this.top = 0
}
stack.prototype = {
    peek:function(){
        return this.store[this.top - 1] 
    },
    push:function(item){
        this.store[this.top++] = item
    },
    pop:function(item){
        return this.store[--this.top] 
    },
    clear:function(){
        this.top = 0
    },
    length:function(){
        return this.top
    }
}


function mulBase(num, base) {
    var data = new stack()
    do {
        data.push(num % base);
        num = Math.floor(num /= base);
    } 
    while (num > 0);
    var converted = "";
    while (data.length() > 0) {
        converted += data.pop();
    }
    return converted;
}
 /*
 * 栈的应用:数字进制间的相互转换
 * 假设想将数字 n 转换为以 b 为基数
 * 的数字， 实现转换的算法如下:
 * (1) 最高位为 n % b， 将此位压入栈。
 * (2) 使用 n/b 代替 n。
 * (3) 重复步骤 1 和 2， 直到 n 等于 0， 且没有余数。
 * (4) 持续将栈内元素弹出， 直到栈为空， 依次将这些元素排列， 就得到转换后数字的字符
 * 串形式。
 * */