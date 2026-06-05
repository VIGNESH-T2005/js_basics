//Promises

const myPromise = new Promise((resolve,reject)=>{
    let num = 333;
    if(num%2===0) resolve();
        else reject();
});

myPromise.then(()=>{console.log('Success')}).catch(()=>{console.log('Failure')});

//---------------------------------------------------------------------------

isfunction =true;
const mypromise2 =new Promise((resolve,reject) => {
    if(isfunction) resolve();
    else reject();
});
mypromise2.then(()=>{console.log('success')}).catch(()=>{console.log('failure')});

//--------------------------------------------------------------------------