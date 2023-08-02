class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head
        this.length = 1
    }

    append(value) {
        const newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode
        this.length++

        return this
    }
    prepand(value) {
        const newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head
        this.head = newNode
        this.length++
        console.log(this)
        return this
    }
    printLinkedList()
    {
        const values=[]
        let currentNode = this.head
        while(currentNode!=null)
        {
            values.push(currentNode.value)
            currentNode=currentNode.next
        }

        return values
    }
}

const newLinkedList = new LinkedList(10)
newLinkedList.append(5)
newLinkedList.append(16)
newLinkedList.append(12)
newLinkedList.append(14)
newLinkedList.prepand(2)

console.log(newLinkedList.printLinkedList())