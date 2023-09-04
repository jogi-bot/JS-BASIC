const obj = {
  log: [1, 2, 3, 4],
  get laetst() {
    return  this.log.length

  }

}
console.log(obj.laetst);  //4



class withGEtSet {
  #msg = 'hello-world'

  get msg () {
    return this.#msg
  }

  set msg (x) {
    return this.#msg = x
  }

}

const instance = new withGEtSet();

console.log(instance.msg)  //hello-world

instance.msg = "cake"

console.log(instance.msg);  //


//MAP IN JS EXPLAIN WITH LITTLE EXAMPLE

const map = new Map()

map.set('a', 1)
map.set('b', 2)
map.set('c', 3)

console.log(map.get('a'));  //1

map.set('d', 4)

console.log(map.get('d')); //4

console.log(map.size); // 4

console.log(map.delete('c'));   //true

console.log(map.size);  // 3
