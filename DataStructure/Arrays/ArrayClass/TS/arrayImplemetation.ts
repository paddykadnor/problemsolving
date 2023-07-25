class MyArray {
    public length: number
    public data: any
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push = (element: any) => {
        this.data[this.length] = element;
        this.length++;
        return this.data;
    }
    pop = () => {
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    insert = (index: any, element: any) => {
        for (let i = this.length; i >= index; i--) {
            this.data[i] = this.data[i - 1]
        }
        this.data[index] = element
        this.length++
        return this.data
    }
    delete = (index: any) => {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--;
        return this.data;
    }
    getElementAtIndex = (index: any) => {
        return this.data[index]
    }
}