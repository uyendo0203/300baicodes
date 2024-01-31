
export default function BinarySearch() {
    console.log("===========bai09========");
    //Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

    // You must write an algorithm with O(log n) runtime complexity.

    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
    **/
    var search = function (nums, target) {
        let x = -1;

        // return nums.indexOf(target)
        // => Runtime: 70 ms

        // for (let i = 0; i < nums.length; i++) {
        //     if (nums[i] == target) {
        //         x = i
        //     }
        // }
        // => Runtime: 79 ms

        nums.forEach((item, index) => {
            if (item == target) {
                x = index
            }
        })
        // => Runtime: 56 ms

        return x
    };

    console.log('bai09-case1 : nums = [-1,0,3,5,9,12], target = 9 => ', search([-1, 0, 3, 5, 9, 12], 9))
    //Output: 4
    //Explanation: 9 exists in nums and its index is 4

    console.log('bai09-case2 : nums = [-1,0,3,5,9,12], target = 2 => ', search([-1, 0, 3, 5, 9, 12], 2))
    //Output: -1 
    // Explanation: 2 does not exist in nums so return -1

    console.log("===========END========");
}