var arrs = [10, 8, 12, 2, 6, 1, 4, 5, 3, 9, 7, 11];
var btn = document.getElementsByTagName('button')[0];
var g;
var inde1,inde2;

/*var arrs1 = arrs.splice(0).sort(function(a,b){
        return a-b
})
splice改变了原始数组，导致indexOf arrs失效
*/
var arrs1 = arrs.join(',').split(',').map(function(item,index,array){
    return Number(item)
})
arrs1.sort(function (a,b){
    return a-b
})
function check(){
    var target = parseInt(document.getElementsByTagName('input')[1].value)
    for (var i = 0; i < arrs1.length; i++) {
        if(arrs1[i] === target/2){
            g = i;
            break
        }
        else if(arrs1[i] > target/2){
            g = i-1;
            break
        }
    }
    for(var i = 0; i <=g; i++){
        for(var j = g + 1;j < arrs1.length; j++){
            if(arrs1[i] + arrs1[j] == target){
                inde1 = '第一个数字在第' + arrs.indexOf(arrs1[i]) + '位'
                inde2 = '第二个数字在第' + arrs.indexOf(arrs1[j]) + '位'
                console.log([arrs1[i],arrs1[j],inde1,inde2])
            }   
        }
    }
}

btn.addEventListener('click',check)