// noZeros(1505000) , 1505
function noZeros(num){
    let str = String(num)
    while(str.endsWith(0)){
        str = str.slice(0,str.length-1)
    }
    return Number(str)
}


console.log(noZeros(1505000));
