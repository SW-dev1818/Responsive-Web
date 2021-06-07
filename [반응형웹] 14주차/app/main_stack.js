class Node{
  constructor(name){
    this.name = name;
    this.nextNode = null;
  }
  getName(){
    return this.name;
  }
  setNextNode(node){
    this.nextNode = node;
  }
}

class Stack
{
  constructor(){
    this.head = null;
    this.length = 0;
  }

  push(name){
    let node = new Node(name);

    if(this.length == 0){
      this.head = node;
    }
    else{

      node.setNextNode = this.head;
      this.head = node;
    }

    this.length++;

  }

  pop(){
    let result = this.head.getName();

    this.head = this.head.nextNode;
    this.length--;

    return result
  }

}

var onPuBtnClick = ()=>{
  let name = document.getElementById('name').value;
  console.log(name);
  s.push(name);
}

var onPoBtnClick = ()=>{
  let ptag = document.createElement('p');
  let ptext = document.createTextNode(s.pop());
  document.body.appendChild(ptag);
  ptag.appendChild(ptext);
}

var s = new Stack();
