
export default function MaximumSubarray() {
  console.log("===========bai11========");
  // Given an integer array nums, find the subarray with the largest sum, and return its sum.
  /**
* @param {number[]} nums
* @return {number}
**/
  var maxSubArray = function (nums) {
    let len = nums.length;
    let sum = 0;
    let max = 0;
    // i is starting index for the sub array
    // subarray of every size starting from i
    // will be used to calculate the sum
    for (let i = 0; i < len; i++) {
      sum = 0;
      // j represents size of subarray
      // starting from i - subarray of size 1
      // to len - 1 - biggest subarray possible
      // starting from i
      for (let j = i; j < len; j++) {
        sum += nums[j];
        // compare sum till now againt
        // the max till now
        if (sum > max)
          max = sum;
      }
    }
    return max
  };

  console.log('bai11-case1 : [-2,1,-3,4,-1,2,1,-5,4] => ', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  console.log('bai11-case2 : [1] => ', maxSubArray([1]));
  console.log('bai11-case2 : [5,4,-1,7,8] => ', maxSubArray([5, 4, -1, 7, 8]));

  //     Example 1:
  // Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  // Output: 6
  // Explanation: The subarray [4,-1,2,1] has the largest sum 6.

  // Example 2:
  // Input: nums = [1]
  // Output: 1
  // Explanation: The subarray [1] has the largest sum 1.

  // Example 3:
  // Input: nums = [5,4,-1,7,8]
  // Output: 23
  // Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

  console.log("===========END========");
}