class Node{
   constructor(data){
    this.data=data;
    this.next=null;
   }
}
let arr=[1,12,7,3,5,0];
function arrToLL(arr){
    let head=new Node(arr[0]);
    let tail=head;
    for(let i=1;i<arr.length;i++){
        let newNode=new Node(arr[i]);
        tail.next=newNode;
        tail=newNode;
    }
    return head;
}

let head=arrToLL(arr);
let s=3;

let temp=head;
while(temp){
    if(temp.data===s){
        console.log(temp.data+" yes present");
        break;
    }

    temp=temp.next;
}