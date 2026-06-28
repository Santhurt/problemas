export class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
    print() {
        let current = this;
        while(current != null) {
            console.log(current.val);
            current = current.next;
        }
    }
}
