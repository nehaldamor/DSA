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
    // tail.next=head;
    return head;
}

function printll(head){
    let temp=head;
    while(temp){
        console.log(temp.data);
        temp=temp.next;
    }
    
}
function findCycleinLL(head){
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
         if(fast==slow){
            slow=head;
            while(slow!=fast){
                slow=slow.next;
                fast=fast.next;
            }
            return slow;
        };
    }
    return false;
}

let head=arrToLL(arr);
// printll(head);

console.log(findCycleinLL(head));

