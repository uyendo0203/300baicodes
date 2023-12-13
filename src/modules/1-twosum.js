
export default function twosum(){

    console.log("**Bai:1**");
    /*
    Example 1:
    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
    Example 2:
    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    
    Example 3:
    Input: nums = [3,3], target = 6
    Output: [0,1]
    */
    
    /*Cach 1*/
    var bai01 = function (nums, target) {
        // console.log(nums, target)
        const arrResult = []
        for (let i = 0; i <= nums.length; i++) {
            for (let j = i+1; j <= nums.length; j++) {
                if ((nums[i] + nums[j]) == target) {
                    arrResult.push(i, j)
                }
            }
        }
        return arrResult;
    };
    
    /*Cach 2: ca https://techmaster.vn/posts/37603/cung-giai-leetcode-bai-1-two-sum*/
    
    // var bai01 = function (nums, target) {
    //     // console.log(nums, target)
    //     const arrResult = []
    //     for (let i = 0; i <= nums.length; i++) {
    //         for (let j = i+1; j <= nums.length; j++) {
    //             if ((target - nums[i]) ==nums[j]) {
    //                 arrResult.push(i, j)
    //             }
    //         }
    //     }
    //     return arrResult;
    // };
    
    console.log('bai01-case1', bai01([2, 7, 11, 15], 9)) //Output: [0,1]
    console.log('bai01-case2', bai01([3, 2, 4], 6)) //Output: [1,2]
    console.log('bai01-case3', bai01([3, 3], 6)) //Output: [0,1]
    
    console.log("===========END========");
}

