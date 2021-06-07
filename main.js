// 클래스영역
class Queue {
  constructor()
  {
     this.arr = [];
  }

  enqueue(item)
  {
     this.arr.push(item);
  }

  dequeue()
  {
    return this.arr.shift();
  }

}

// 메인함수영역
const queue = new Queue();
queue.enqueue("개자식");
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

document.write(queue.dequeue() + "<br/>");
document.write(queue.dequeue() + "<br/>");
document.write(queue.dequeue() + "<br/>");
document.write(queue.dequeue() + "<br/>");
document.write(queue.dequeue() + "<br/>");



// //클래스영역
//
// class Queue{   //큐 클래스
//
//   constructor(){
//     this.mempool_size = 0;
//     this.mempool=[];
//   }
//
//   enqueue(item){
//     let arr = new Array(this.mempool_size+1);
//     for(let i=0;i<this.mempool_size;i++)
//       arr[i] = this.mempool[i];
//     arr[this.mempool_size] = item;
//     this.mempool_size++;
//     this.mempool = arr;
//   }
//
//   dequeue()
//   {
//     let return_val = this.mempool[0];
//     let arr = new Array(this.mempool_size-1);
//     for(let i=1;i<this.mempool_size;i++)
//       arr[i-1] = this.mempool[i];
//     this.mempool_size--;
//     this.mempool = arr;
//     return return_val;
//   }
//
//   length()
//   {
//       return this.mempool_size;
//   }
// }
//
//
// //메인함수영역
// let queue = new Queue();
// queue.enqueue("바보");
// queue.enqueue("멍청이");
// queue.enqueue("말미잘");
// queue.enqueue("형성원");
// queue.enqueue("박민재");
//
// let length = queue.length();
// for(let i=0; i<length;i++)
//   document.write(queue.dequeue() + "<br/>");
