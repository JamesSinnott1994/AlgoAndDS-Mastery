/*
The way we will do it is add from the end i.e. the tail, and remove from the start i.e. the head

Enqueue (Add), Dequeue (Remove)
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null; // Tracker to first element added
        this.last = null;
        this.size = 0;
    }
    enqueue(val){ // Add
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){ // Remove first thing added in
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}