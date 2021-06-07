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

class Queue
{
  constructor(){
    this.head = null;
    this.length = 0;
  }

  enqueue(name){
    let node = new Node(name);

    if(this.length == 0){
      this.head = node;

    }
    else{
      let currentNode = this.head;
      while(currentNode.nextNode != null){
        currentNode = currentNode.nextNode;
      }
      currentNode.setNextNode(node);


    }
    this.length++;
  }
  dequeue(){
    //length가 0이라면 오류를 출력한다.

    let result = this.head.getName();

    this.head = this.head.nextNode;
    this.length--;

    return result
  }

}

var onEnqBtnClick = ()=>{
  let name = document.getElementById('name').value;
  console.log(name);
  q.enqueue(name);
}

var onDeqBtnClick = ()=>{

  let ptag = document.createElement('p');
  let ptext = document.createTextNode(q.dequeue());
  document.body.appendChild(ptag);
  ptag.append-Child(ptext);



}


var q = new Queue();
