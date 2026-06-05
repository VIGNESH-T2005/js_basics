//Promises 
// new promise((resolve,reject)=>{condition?resolve():reject()}) 
// .then(()=>{success code}).catch(()=>{failure code});

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

const newPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let num = 333;
        if(num%2===0) resolve();
        else reject();
    },1000)
});
newPromise.then(()=>{console.log('success')}).catch(()=>{console.log('failure')});

// in built promises

