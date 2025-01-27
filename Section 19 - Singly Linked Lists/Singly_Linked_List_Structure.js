// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; // Returns whole list
    }

    pop() {
        if (this.length == 0) {
            return undefined;
        }

        var current = this.head;
        while (current) {
            if (current.next == this.tail) {
                var valueRemoved = this.tail.val;
                current.next = null;
                this.tail = current;
                this.length -= 1;
                return valueRemoved;
            }
            current = current.next;
        }
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")

console.log(list.pop());


