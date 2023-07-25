/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0;
    let max = -Number.MAX_VALUE-1;

    for (let index = 0; index < nums.length; index++) {
        sum += nums[index]
        if (sum < 0) {
            sum = 0
        }

        if (sum > max) {
            max = sum
        }
    }
    return max
 };


//case 1
//Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//Output: 6

let nums1 = [-2,1,-3,4,-1,2,1,-5,4]

 console.log(maxSubArray(nums1))


 //case 2
//Input: nums = [1]
//Output: 1

let nums2 = [1]

console.log(maxSubArray(nums2))

//case 3
//Input: nums = [5,4,-1,7,8]
//Output: 23

let nums3 = [5,4,-1,7,8]

console.log(maxSubArray(nums3))



