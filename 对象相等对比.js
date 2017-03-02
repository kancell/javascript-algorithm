function isEqual(obja, objb) {
    var aProps = Object.getOwnPropertyNames(obja);
    var bProps = Object.getOwnPropertyNames(objb);
    if (aProps.length != bProps.length) {
        return false;
    }
    for(var i in obja){
        if(Object.prototype.toString.call(obja[i]) !== Object.prototype.toString.call(objb[i])){
            return false
        }
        else if(typeof(obja[i]) == 'object' && typeof(objb[i]) == 'object'){
            return isEqual(obja[i],objb[i])
        }
        else if(obja[i] !== objb[i]){
            return false
        }
    }
    return true;
}