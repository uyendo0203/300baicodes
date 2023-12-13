export default function MergeTwoSortedLists() {
    console.log("===========bai04========");

    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    var mergeTwoListsFunc = function (list1, list2) {
        return [].concat(list1, list2).sort()
    };

    console.log('bai04-case1 : [1,2,4] [1,3,4] -> ', mergeTwoListsFunc([1, 2, 4], [1, 3, 4])) //Output: true

    console.log("===========END========");
}