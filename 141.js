/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head
    let slow = head

    // 快慢指针，快指针每次走两步，慢指针每次走一步，快指针与慢指针相遇，说明有环
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next

        if (slow == fast) {
            return true
        }
    }
    return false
};