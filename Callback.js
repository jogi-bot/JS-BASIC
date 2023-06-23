function krunal(name, callback){
    console.log("hello"+name+"!");
     callback()
}

function krunal2(){
    console.log('hii i krunal2');
}
 
krunal("krunal", krunal2)
// hellokrunal!
// hii i krunal2

function server(callback){
    setTimeout(()=>{
    const data = 'server now on'
      callback(data)
    },3000)
}

function cetch(data){
    console.log('Received:'+ data);
}

server(cetch)
console.log('fetching data from server');

// fetching data from server
// Received:server now on

function krunal(callback) {
  console.log("you are in krunal");
  callback(krunal3);
}
function krunal2(callback) {
  console.log("you are in krunal2");
  krunal3();
}
function krunal3() {
  console.log("you are in krunal 3");
}
krunal(krunal2)


// you are in krunal
// you are in krunal2
// you are in krunal 3
