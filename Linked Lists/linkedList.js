class Node {
    constructor(value, next = null) {
        this.value = value,
        this.next = next
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node (prepend)
    prepend(value) {
        this.head = new Node(value, this.head);
        this.size+=1
    };

    // Insert last node (append)
   append(value) {
        let node = new Node(value);
        let current;
        
        // if list is empty 
        if(this.head == null) {
            this.head = node;
        } else{
            current = this.head

            while(current.next) {
                current = current.next;
            }
            current.next = node;        
        }
        this.size +=1;
   }

    // Insert at index
    insertAt(value, index) {
        // if index is out of range
        if(index > 0 && index> this.size) {
            return;
        }

        // if index is 0
        if(index === 0) {
            this.head = new Node(value, this.head);
            this.size +=1;
            return;
        }

        const node = new Node(value);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;
        while(count < index) {
            previous = current; // Node before index
            count +=1;
            current = current.next; // Node after index
        };
        node.next = current;
        previous.next = node;
        this.size+=1;
    }

    // Get at index
    getAt(index) {
        // get node at certain index
        if(this.head == null) { return null};
        if(index > 0 && index > this.size) { return null};
        let current = this.head;
        let count = 0;
        while(current) {
            if(count === index) {
                console.log(current)
            };
            current = current.next
            count +=1;
        };
    };

    // Remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(index === 0) {
            this.head = current.next;
        }else{
            while(count < index) {
                count +=1;
                previous = current;
                current = current.next;                                
            }
            previous.next = current.next;
        }
        this.size -=1;
    };

    // returns size of lsit
    listSize() {
        console.log({ size: this.size });
    };

    // returns head node
    headNode() {
        if(this.head == null) {
            return null;            
        }else{
            console.log(this.head);
        }
    }

    // returns last node
    tailNode() {
        if(this.size == 0) {return;}
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        console.log(current);
    };

    // remove last node from list
    popNode() {
        let current = this.head;
        let previous;

        while(current.next) {
            previous = current;
            current = current.next
        };
        previous.next = null;
        this.size -=1;
    }

    // contains value 
    contains(value) {
        if(this.head == null) { return; }

        let current = this.head;

        while(current) {
            if(value == current.value) {
                return true;
            };
            current = current.next;
        }
        return false;
    }

    // return index of node containing value
    find(value) {
        if(this.head == null) { return; }
        let count = 0;
        let current = this.head;

        while(current) {
            if(current.value === value) {
                return count;
            }
            count +=1;
            current = current.next;
        }
        return `${value} not in list` ;
    }

    // Print list data
    printListData() {
        let current = this.head;
        let result = "";
        while(current) {
            result = result.concat(`(${current.value}) => `)
            current = current.next;
        };
        console.log(`${result}null`);
    }
}

const ll = new LinkedList();

ll.prepend(100);
ll.prepend(200);
ll.append(500);
ll.prepend(150);
ll.append(8000);
ll.popNode();
ll.listSize();
ll.headNode();
ll.tailNode();
console.log(ll.find(150));
console.log(ll.contains(8000));
console.log(ll.contains(150));

ll.printListData();