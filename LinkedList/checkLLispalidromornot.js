class Node{
   constructor(data){
    this.data=data;
    this.next=null;
   }
}
let arr=[1,2];
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

function checkpalidromorNot(head){
    let temp=head;
    let st=[];
    while(temp){
        st.push(temp.data);
        temp=temp.next;
    }
    temp=head;
    while(temp){
        let el=st[st.length-1];
        st.pop();
        if(temp.data!=el) return false;
        temp=temp.next;
    }
    return true;
}

let head=arrToLL(arr);
printll(head);
console.log(checkpalidromorNot(head));

