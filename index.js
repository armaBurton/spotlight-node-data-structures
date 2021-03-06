class LinkedList {
  #data = '';
  #next = null;

  constructor(data){
    this.#data = data;
  }

  add(node){
    !this.#next ? this.#next = node : this.#next.add(node);
  }

  getList() {
    if(!this.next) return this.#data;

    return `${this.#data} ${this.#next.getList()}`;
  }
  
}

const root = new LinkedList('A');
const nodeB = new LinkedList('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedList('C');
const nodeD = new LinkedList('D');
const nodeE = new LinkedList('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  add(node) {
    //We are checking if the node is greater than this.value.
    // If it is we check if this.right is null.
    // If it is, this.right = node
    // otherwise we add another node to this.right
    // Then do the same for the left but for the node < this.value situation
    if (node.value > this.value) {
      if (!this.right) {
        this.right = node;
      } else {
        this.right.add(node);
      }
    } else if (node.value < this.value) {
      if (!this.left) {
        this.left = node;
      } else {
        this.left.add(node);
      }
    }
    // node > this.value && this.right === null
    //   ? (this.right = node)
    //   : this.right.add(node);
    // node < this.value && this.left === null
    //   ? (this.left = node)
    //   : this.left.add(node);
  }
}
const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

class PersonTreeNode {
  constructor (person){
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  logThis(){
    console.log(`|| this >`, this);
  }

  add(person){
    const dir = (person.person.name > this.value) ? 'right' : 'left';
    return !this[dir] ? this[dir] = person : this[dir].add(person);

    // if (person.person.name > this.value){
    //   if (!this.right){
    //     this.right = person;
    //   } else {
    //     this.right.add(person);
    //   }
    // } else if (person.person.name < this.value){
    //   if(!this.left){
    //     this.left = person;
    //   } else {
    //     this.left.add(person)
    //   }
    // }
  }

  getPerson(name){
    if (this.value === name){
      return this.person;
    }

    const dir = (name > this.value) ? 'right' : 'left';
    return !this[dir] ? null : this[dir].getPerson(name);

    // if (this.value === name){
    //   return this.person;
    // } else if (name < this.value){
    //   if(!this.left) return null;
    //   return this.left.getPerson(name);
    // } else if (name > this.value){
    //   if(!this.right) return null;
    //   return this.right.getPerson(name);
    // }
  }
};

const jones = new PersonTreeNode({ 
    name: 'Jones', 
    phone: '555-1212', 
    address: '123 Main St' 
  })

const brook = new PersonTreeNode({ 
    name: 'Brook', 
    phone: '123-4568', 
    address: '666 Pit of Fire st' 
  })

const smith = new PersonTreeNode({ 
    name: 'Smith', 
    phone: '999-1111', 
    address: '987 se 6th ave' 
  })

const nelson = new PersonTreeNode({ 
    name: 'Nelson', 
    phone: '555-5555', 
    address: '13013 se Bob st' 
  })

 
  jones.add(brook);
  jones.add(smith);
  jones.add(nelson);
  
  console.log(jones.getPerson('Nelson'));
  console.log(jones.getPerson('Smith'));
  console.log(jones.getPerson('Brook'));
