class Node{
   constructor(data){
    this.data=data;
    this.next=null;
   }
}
let arr=[2,1,3,5,6,4,7];
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

function arrgeoddeven(head){
    let temp=head;
    let even=null;
    let odd=null;
    let eventail=null;
    let oddtail=null;
    while(temp!=null){
        let nextnode=temp.next;
        temp.next=null;
        if(temp.data%2==0){
            if(!even){
                even=temp;
            }else{
                 eventail.next=temp;
            }
            eventail=temp;
        }else{
            if(!odd){
                odd=temp;
            }else{
                oddtail.next=temp;
            }
            oddtail=temp;
        }
        temp=nextnode;
       
    }

    if(!even) return odd;
    if(!odd) return even;

    oddtail.next=even;
    return odd;
}

let head=arrToLL(arr);
head=arrgeoddeven(head);
printll(head);

