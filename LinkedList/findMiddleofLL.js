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

function printll(head){
    let temp=head;
    while(temp){
        console.log(temp.data);
        temp=temp.next;
    }
    
}

function findmiddle(head){
    let slow=head;
    let fast=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    console.log(slow.data);
}

let head=arrToLL(arr);
printll(head);
findmiddle(head);
