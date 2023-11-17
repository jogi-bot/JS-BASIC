// async and awit example with understand
//function krunal2 waiting excutes of krunal() after, excuting krunal() also, executing krunal2()
function krunal() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("krunal-kem-cho");
    }, 3000);
  });
}

async function krunal2() {
  const result = await krunal();
  console.log(result);
}

krunal2();

//krunal-kem-cho

async function krunal() {
  const p1 = new Promise((res, rej) =>
    setTimeout(() => {
      res("7");
    }, 3000)
  );
  const p2 = new Promise((res, rej) =>
    setTimeout(() => {
      res("6");
    }, 7000)
  );

  Promise.allSettled([await p1, await p2])
  .then((data) => {
    console.log(data);
  });
}
krunal();

// [
//     { status: 'fulfilled', value: '7' },
//     { status: 'fulfilled', value: '6' }
//   ]

function krunal() {
  return new Promise((res, rej) =>
    setTimeout(() => {
      res("krunal1");
    }, 4000)
  );
}

function krunal1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("krunal2");
    }, 4000);
  });
}

async function krunal3() {
  let don = await krunal();
  console.log(don);
  let don1 = await krunal1();
  console.log(don1);
}
krunal3();
//krunal1
//krunal2

async function krunal3() {
  let don = krunal();
  console.log(await don);

  let don1 = krunal1();
  console.log(await don1);
}
krunal3();

//krunal1
//krunal2

async function krunal4() {
  return Promise.all([krunal(), krunal1()])
  .then((data) => {
    console.log(data);
  });
}
krunal4();

//[ 'krunal1', 'krunal2' ]



//just tricky

// Here's a step-by-step explanation:
// foo is a function that contains a setTimeout with a delay of 1000 milliseconds (1 second).
// When await foo(); is encountered in the main function, it means that the execution of main will pause at that point until the promise returned by foo is resolved.
// The crucial point here is that await only pauses the execution of the async function (main in this case), not the entire program or event loop.

//understanding function one after another function run step by step how work

function foo() {
  setTimeout(() => {
    console.log("kem cho");
  }, 1000);
}
async function main() {
  await foo();
  //console.log(person);
  console.log("hii");
}
main();

//output : -
//hii
//kem cho

function foo() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("kem bapu");
      res();
    }, 1000);
  });
}

async function main() {
  await foo();
  console.log("majama");
}
main();

//output : -
//kem bapu
//majama
