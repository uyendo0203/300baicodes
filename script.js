console.log("===========input: AAAABBBCDDDA; output: 4A3B1C3D1A========");
const bai0 = ()=>{
    let str = 'AAAABBBCDDDA'
    let count = 1;
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            count++;
        } else {
            result += (count++) + str[i]
            count = 1;
        }
    }
    console.log({ result });
}
bai0()

console.log("===========END========");

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
var bai01 = function (nums, target) {
    // console.log(nums, target)
    const arrResult = []
    for (let i = 0; i <= nums.length; i++) {
        for (let j = 1; j <= nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                arrResult.push(i, j)
            }
        }
    }
    return arrResult;
};

console.log(1,bai01([2, 7, 11, 15], 9)) //Output: [0,1]
console.log(2,bai01([3,2,4], 6)) //Output: [1,2]
console.log(3,bai01([3,3],6)) //Output: [0,1]

console.log("===========END========");
