/*  

Insert Element in Singly Linked List in a Given Index
Create a method in a LinkedList class called insert that adds an element to the given index of the linked list and returns the added element. The LinkedList class is created for you. The first parameter is index and the second is element to be added.



Examples
Suppose data = [1, 2, 3]    // Just for explanation.

insert(10, 10) ➞ "Element cannot be added"
// index = 10 and element = 10
// Therefore, we cannot insert 10 because index > size of
// data and return msg.

insert(-1, 10) ➞ "Element cannot be added"
// index = -1 and element = 10
// Therefore, we cannot insert 10 because index is negative
// (less than zero) return msg.

insert(0, 0) ➞ 0
// index = 0 and element = 0
// Therefore, we insert 0 at index 0 (beginning of the linked

// list) and return element.



Notes
Element is an integer.

*/






//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    let length = 0;
    let head = null;

    this.push = function(element) {
        const node = new Node(element);
        if (!head) {
            head = node;
            length++;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            length++;
        }
    }

    // Start

    this.insert = function(index, element) {
        //going to travel through the linked list
        let current = head;
        let i = 0;
        if (index === 0) {

            const headnode = new Node(element);
            headnode.next = head;
            head = headnode;
            length++;
            return element;

        }
        if (index < 0) {
            return 'Element cannot be added'
        }
        if (index > length) {
            return 'Element cannot be added'
        }

        while (i < index - 1) {
            current = current.next;
            i++;
        }

        const node = new Node(element);
        node.next = current.next;
        current.next = node;
        length++;
        return element;

        //until you get to one less than your index
        //then create a new path that points to your new element
        //previous node points to your new locations
        //your new element has node that point to what 
        //the last element's node 
        //used to point to



    };
    // End

    this.check = function() {
        const sol = [];
        let current = head;
        while (current) {
            sol.push(current.element);
            current = current.next;
        }
        return sol.join("");
    }
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    let length = 0;
    let head = null;

    this.push = function(element) {
        const node = new Node(element);
        if (!head) head = node;
        else {
            let current = head;
            while (current.next) current = current.next;
            current.next = node;
        }
        length++;
        return element;
    }

    this.insert = function(i, el) {
        if (i < 0 || i > length) return `Element cannot be added`;
        if (i === length) return this.push(el);
        let newNode = new Node(el),
            curr = head;
        if (!i) {
            head = newNode;
            newNode.next = curr;
        } else {
            for (let n = 0; n < i - 1; n++) curr = curr.next;
            newNode.next = curr.next;
            curr.next = newNode;
        }
        return (length++, el);
    };

    this.check = function() {
        const sol = [];
        let current = head;
        while (current) {
            sol.push(current.element);
            current = current.next;
        }
        return sol.join("");
    }
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    let length = 0;
    let head = null;

    this.push = function(element) {
        const node = new Node(element);
        if (!head) {
            head = node;
            length++;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            length++;
        }
    }

    // Start
    this.insert = function(index, element) {
        const newNode = new Node(element);

        if (length === 0) {
            head = newNode;
            length++;
            return element;
        }

        if (index === 0) {
            var oldHead = head;
            head = newNode;
            head.next = oldHead;
            length++;
            return element;
        }

        if (index > length || index < 0) {
            return "Element cannot be added";
        }

        let current = head;
        let preCurrent = head;
        var count = 0;

        while (current.next) {
            if (count === index) {
                var temp = current;
                current = newNode;
                current.next = temp;
                length++;
                return element;
            }
            preCurrent = current;
            current = current.next;
            count++;
        }

        if (index === length) {
            current.next = newNode;
            length++;
            return element;
        }

        preCurrent.next = newNode;
        newNode.next = current;
        length++;
        return element;
    };
    // End

    this.check = function() {
        const sol = [];
        let current = head;
        while (current) {
            sol.push(current.element);
            current = current.next;
        }
        return sol.join("");
    }
}