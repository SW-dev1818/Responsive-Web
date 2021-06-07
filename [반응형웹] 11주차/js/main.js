class Stack{
    constructor(num){
        this.stack_arr = new Array(num);
        this.stack_length = num;
        this.stack_current_item_index = 0;
    }

    pop(){
        if(this.stack_current_item_index > 0) {
            let result = this.stack_arr[this.stack_current_item_index-1];
            this.stack_current_item_index--;
            return result;
        }
        else{
            throw "Exception : Stack Underflow!"
        }
        
    }

    push(item){
        if(this.stack_current_item_index < this.stack_length) {
            this.stack_arr[this.stack_current_item_index] = item;
            this.stack_current_item_index++;
        }
        else {
            throw "Exception : Stack Overflow!"
        }
        
    }

    length(){
        return this.stack_current_item_index;
    }
}
class Queue{
    constructor(num){
        this.stack1 = new Stack(num);
        this.stack2 = new Stack(num);
        this.queue_length = num;
        this.queue_current_item_index = 0;
    }

    dequeue(){
        let length = this.stack1.length();
        if(this.stack2.length() == 0)
        {
            for(let i=0;i<length;i++)
            this.stack2.push(this.stack1.pop());
        }
        
        this.queue_current_item_index--;

        return this.stack2.pop();
        
    }

    enqueue(item){
        this.stack1.push(item);      
        this.queue_current_item_index++;
        
    }

    length(){
        return this.queue_current_item_index;
    }


}

window.onload = ()=>{

    try{
    let s = new Queue(3);
      
    s.enqueue("이은석")
    s.enqueue("강의할때")
    s.enqueue("멋지다")
    
    let length = s.length();
    
    document.write(s.dequeue());    
    document.write(s.dequeue());    

    s.enqueue("강의할때")
    s.enqueue("멋지다")
    for(let i=0; i<length;i++)
        document.write(s.dequeue());    
        
    }
    catch(e)
    {
        document.write(e);
        
    }


    
};