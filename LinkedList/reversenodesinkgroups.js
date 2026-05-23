class Node{
   constructor(data){
    this.data=data;
    this.next=null;
   }
}
let arr=[1,2,3,4,5,6,7];
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

function reverseLL(head){
    let prev=null;
    let temp=head;
    while(temp!=null){
        let front=temp.next;
        temp.next=prev;
        prev=temp;
        temp=front;
    }
    return prev;;
}
function findkthnode(head,k){
    let temp=head;
    k-=1;
    while(temp!=null && k>0){
        k--;
       temp=temp.next;
    }
    return temp;
}
function reverseLLinKgropups(head,k){
    let temp=head;
    let c=0;
    let pre=null;
    while(temp!=null){
       let kthnod=findkthnode(temp,k);
       if(kthnod==null){
        if(pre!=null){
            pre.next=temp;
        }
        break;
       }
       let nextnode=kthnod.next;
       kthnod.next=null;
       reverseLL(temp);
       if(temp===head) head=kthnod;
       else{
        pre.next=kthnod;
       
       }
        pre=temp
        temp=nextnode;
    }
    return head;
}

let head=arrToLL(arr);
head=reverseLLinKgropups(head,3);
printll(head)

