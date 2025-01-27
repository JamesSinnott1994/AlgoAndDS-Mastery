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
        if (!this.head) {
            return undefined;
        }

        var current = this.head;
        var newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) { // Special case
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this; // Returns list
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        // Edge cases
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val); // !! means double negation i.e !!0 = false, !!1 = true
        if(index === 0) return !!this.unshift(val); // !! a way of converting something to a boolean
        
        var newNode = new Node(val);
        var prev = this.get(index - 1); // Gets node before the index where we are inserting
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
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
list.push("!")

// console.log(list.unshift("WELL"));
console.log(list.set(2, "!!!!!!!"));
