//example throw understanding promise

let p = new Promise((res,rej)=>{
    let a = 1
    if(a===1){
        res('sucess')
    }
    else{
        rej('failed')``
    }
})

p.then((message)=>{
    console.log('this is an msg'+ message);
})
.catch((message)=>{
console.log('this is an catch error'+ message);
})
//this is an msgsucess

//prmosie constructor

const promise = new Promise((res, rej)=>{
    setTimeout(() => {
        res('krunal')
    }, 3000);
})

promise
.then((value)=>{
    console.log(value);
})

//krunal

// promsie understanding with simple example
let promsie = new Promise((res, rej) => {
  res(50);
  console.log("HII KRUNAL");
});

promsie.then((message) => {
  console.log(message);
});
console.log('HII KRUNAL');

setTimeout(function(){
    console.log('kese hu app sab');

}, 2000)
// HII KRUNAL
// HII KRUNAL
// 50
// kese hu app sab

//PROMISE CHAIN UNDERSTANDING
function krunal(value) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (value) {
        res(value);
      } else {
        rej("new error ");
      }
    }, 3000);
  });
}
krunal("hello")
.then((result) => {
  console.log(result);
  return 'world';
})
.then((result) => {
  console.log(result);

 return new Promise((res) => {
    setTimeout(() => {
      res("completed");
    },2000);
  });
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//hello
//world
//completed

// promsie understabding with another example
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
          console.log("Resolved after 2 seconds")
          resolve(56)
  }, 2000)
})

p1.then((value) => {
  console.log(value)
  return new Promise((resolve, reject) => {
          setTimeout(() => { resolve("Promise 2") }, 2000)
  }) 
})

.then((value) => {
  console.log("We are done")
  
}).then((value)=>{
  console.log("Now we are pakka done")
})
// Resolved after 2 seconds
// 56
// We are done
// Now we are pakka done

//promise understanding  promise.all()

const promise1 = Promise.resolve(3)
const promise2 = 42
const prmosie3 = new Promise((res, rej)=>{
    setTimeout(res,100, 'foo')
})

Promise.all([prmosie3,promise2,promise1])

.then((data)=>{
    console.log(data);
})

[ 'foo', 42, 3 ]

return new Promise((res, rej) =>{
    setTimeout(() => {
        res('krunalkem6e');
    },2000);

})

.then (data => {
console.log(data);
})
.catch((err)=>{
console.log(err);
})

// krunalkem6e

//promsie all Settled 

promsie1 = Promise.resolve(3)
promise2 = 33
promsie3 = new Promise((res, rej) => {
    res('krunal-majama-ne')
})

Promise.allSettled([promsie1, promise2, promsie3])

.then((data)=>{
console.log(data);
})

// [
//     { status: 'fulfilled', value: 3 },
//     { status: 'fulfilled', value: 33 },
//     { status: 'fulfilled', value: 'krunal-majama-ne' }
//   ]

//Promise explain with any() explain me 
//syntex Promise.any() 
//fire one first promise by promise.any()


const promise4 = new Promise((req, rej) => {
    req('krunal-majam-ne')
})
const promise3 = new Promise((req, res) => {
    req('kem-cho-ahmedabad')
})

Promise.any([ promise4, promise3])

.then((values) => {
    console.log(values);
})

//krunal-majam-ne 

// catch error in promise now understand 
const promise6 = new Promise((res, rej) => {
 throw new Error('uh-ohhh')
})

promise6.catch((error) => {
    console.log(error);
})

//Error: uh-ohhh

//promise understanding finnaly() how it, works these way it,s work 
//fire if opretion suceess or not 
function krunal(){
    return new Promise((res, rej) =>{
        if(true){
            res('mail is arrived')
        }else{
            rej(new Error('failed to arrive'))
        }
    })
}
krunal()
.then((data)=>{
console.log(data);
})
.catch((err) => {
 console.log(err);
})
.finally(()=>{
    console.log('your experiment done');
})

 // mail is arrived
// your experiment done