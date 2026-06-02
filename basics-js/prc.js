const obj1={
    id   : 1,
    title: "vicky"
};
const obj2 ={
    age:20,
    city:"neyveli"
}
const title=obj1.title
const mergobj={title,...obj2}
console.log(mergobj)