/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let pos = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[pos++] = nums[i]
        }
    }
    for (let i = pos; i < nums.length; i++) {
        nums[i] = 0
    }
};


//case 1
//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]


//case 2
//Input: nums = [0]
//Output: [0]

