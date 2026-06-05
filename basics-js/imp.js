
// call back function
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

//Promises

const myPromise = new Promise((resolve,reject)=>{
    let num = 333;
    if(num%2===0) resolve();
        else reject();
});

myPromise.then(()=>{console.log('Success')}).catch(()=>{console.log('Failure')});


// existing inbuild promises

const url = ''