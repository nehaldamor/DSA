class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }
    addfirst(data){
        const newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size++;
   }

   addlast(data){
    const newNode=new Node(data);
        if(this.head===null){
            this.head=newNode;
        }
        else{
            let currNode=this.head;
            while(currNode.next !== null){
                currNode=currNode.next;
            }
            currNode.next=newNode;
        }
        this.size++;
   }
   deletefirst(){
    if(this.head==null){
        console.log("no items to delete");
        return;
    }
    else{
        this.head=this.head.next;
        this.size--;
    }
    
   }

   deletelast(){
    if(this.head===null){
        console.log("no list to delete");
        return;
    }
    else if(this.head.next===null){
        this.head=null;
        this.size--;
        return;
    }
    else{
        let curr=this.head;
        while(curr.next.next !== null){
            curr=curr.next;
        }
        curr.next=null;
        this.size--;
    }
   }
   getsize(){
    console.log(`Size is  ${this.size}`)
   }
   print(){
    // const newNode=new Node();
    let currNode=this.head;
    while(currNode!==null){
        console.log(currNode.data + "-->");
        currNode=currNode.next;
    }
    console.log("Null")
   }
}
const list =new linkedlist();
list.addfirst("a");
list.addfirst("b");
list.addfirst("c");
list.print();
list.addlast("d");
list.print();
list.deletelast();
list.print();
list.deletefirst();
list.print();
list.deletelast();
list.print();
list.deletelast();
list.print();
list.deletelast();
list.deletefirst()
list.addfirst("x")
list.addfirst("y")
list.addfirst("z")
list.print();
list.getsize()




