// drawback of promise to avoid callback hell we use async await
const fs= require('fs');
const axios = require('axios');

const url='https://jsonplaceholder.typicode.com/users/'

/*fs.promises.readFile('txt1.txt','utf-8')
.then((data)=>{axios.get(url+data)
    .then(resp =>console.log(resp.data))
    .catch(err=>console.log(err));})
.catch((error)=>{console.log(error)});*/


// async and await

const getuser = async ()=>{
   try{
 const fileValue= await fs.promises.readFile('txt1.txt','utf-8');
   console.log(fileValue)
    const userData= await axios.get(url + fileValue);
   console.log(userData.data)
}
catch(error){
    console.log(error)
}
}
getuser()