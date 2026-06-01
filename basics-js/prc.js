const num = [10,21,32,43,54];
const sumarr = arraysum();
function arraysum(){
    let sum=0;
    for(let i=0;i<num.length;i++){
        sum+=num[i];
    }
    return sum;

}

console.log(sumarr);
