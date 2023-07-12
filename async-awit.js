// async and awit example with understand 
//function krunal2 waiting excutes of krunal() after, excuting krunal() also, executing krunal2()
function krunal(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('krunal-kem-cho')
        }, 3000);
    })
}

async function krunal2(){
           const result =  await krunal()
           console.log(result);
}

krunal2()

//krunal-kem-cho

async function krunal() {
    const p1 = new Promise((res, rej) =>  setTimeout(() => {res('7') },3000))
    const p2 = new Promise((res, rej) => setTimeout(() => {res('6')}, 7000))

       Promise.allSettled([await p1,  await p2])
        
       .then((data)=>{
            console.log(data);
        }) 

    
}
krunal()

// [
//     { status: 'fulfilled', value: '7' },
//     { status: 'fulfilled', value: '6' }
//   ]

function krunal(){
    return new Promise((res, rej) =>
     setTimeout(()=>{
        res('krunal1')
     }, 4000)
    )
}

function krunal1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('krunal2')
        }, 4000);
    })
}

async function krunal3() {
     let don = await krunal()
     console.log(don);
     let don1 = await krunal1()
     console.log(don1);
}
krunal3()
//krunal1
//krunal2

async function krunal3() {
    let don = krunal()
     console.log(await don);

     let don1 = krunal1()
     console.log(await don1);


}
krunal3()

//krunal1
//krunal2


async function krunal4() {
       return  Promise.all([krunal(), krunal1()])

       .then((data)=>{
         console.log(data);
       })
         

}
krunal4()

//[ 'krunal1', 'krunal2' ]