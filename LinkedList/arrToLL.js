class Node{
   constructor(data){
    this.data=data;
    this.next=null;
   }
}
let arr=[1,2,3,4,5,6];
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

let move=arrToLL(arr);
console.log(move);
while(move!=null){
    console.log(move.data);
    move=move.next;
}
