class Stack{
    item=[];
    pos;
    maxsize;
    constructor(size){
      this.maxsize=size;
      this.pos=this.item.length;
    }
    push(el){
      if(this.pos>=this.maxsize){
        alert("Stack is full")
      }
      else{
        this.item[this.pos]=el;
        this.pos++;
      }
    }
    pop(){
      if(this.pos>0){
        this.pos--;
        this.item.length=this.pos
      }
      else{
        alert("Stack is Empty")
      }
    }
    display(){
      console.log(this.item)
    }
    
  }
  let st1= new Stack(5);
