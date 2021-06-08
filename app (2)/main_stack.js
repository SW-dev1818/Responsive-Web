
var arrLeft = [];
var arrRight = [];

function Move(){
  const toNodes = document.getElementsByName('hanoi');

  if(toNodes[0].checked)
    arrRight.push(arrLeft.pop());
  if(toNodes[1].checked)
    arrLeft.push(arrRight.pop());

  Draw()
}


function Init(){
  arrLeft = [];
  arrRight = [];

  arrLeft.push("■■■■■■■")
  arrLeft.push("□■■■■■□")
  arrLeft.push("□□■■■□□")
  arrLeft.push("□□□■□□□")

  Draw();
}

function Draw()
{

  var ui_side_left = document.getElementById("side_left")
  while ( ui_side_left.hasChildNodes() ) { ui_side_left.removeChild( ui_side_left.firstChild ); }
  var ui_side_right = document.getElementById("side_right")
  while ( ui_side_right.hasChildNodes() ) { ui_side_right.removeChild( ui_side_right.firstChild ); }


  for(var i=0;i<arrLeft.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrLeft[i]));
    ui_side_left.appendChild(ptag);
  }

  for(var i=0;i<arrRight.length;i++){
    let ptag = document.createElement('p');

    ptag.appendChild(document.createTextNode(arrRight[i]));
    ui_side_right.appendChild(ptag);
  }

}


// class Node{
//   constructor(name){
//     this.name = name;
//     this.nextNode = null;
//   }
//   getName(){
//     return this.name;
//   }
//   setNextNode(node){
//     this.nextNode = node;
//   }
// }
//
// class Queue
// {
//   constructor(){
//     this.head = null;
//     this.length = 0;
//   }
//
//   enqueue(name){
//     let node = new Node(name);
//
//     if(this.length == 0){
//       this.head = node;
//
//     }
//     else{
//       let currentNode = this.head;
//       while(currentNode.nextNode != null){
//         currentNode = currentNode.nextNode;
//       }
//       currentNode.setNextNode(node);
//
//
//     }
//     this.length++;
//   }
//   dequeue(){
//     //length가 0이라면 오류를 출력한다.
//
//     let result = this.head.getName();
//
//     this.head = this.head.nextNode;
//     this.length--;
//
//     return result
//   }
//
// }
//
// var onEnqBtnClick = ()=>{
//   let name = document.getElementById('name').value;
//   console.log(name);
//   q.enqueue(name);
// }
//
// var onDeqBtnClick = ()=>{
//
//   let ptag = document.createElement('p');
//   let ptext = document.createTextNode(q.dequeue());
//   document.body.appendChild(ptag);
//   ptag.append-Child(ptext);
//
//
//
// }
//
//
// var q = new Queue();
