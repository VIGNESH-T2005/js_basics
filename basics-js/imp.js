// call back function
function vicky(){
    console.log('hi hello')
}
vicky();

setTimeout(()=>{
    console.log(1)
    setTimeout( ()=>{
        console.log(2)
        setTimeout(()=>{
            console.log(3)
        },3000)
    }
    ,2000)
}
,1000)
// function is given input parameter to another function is call back functionn which is used untill es5+


