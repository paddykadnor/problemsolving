/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length
    k = k % nums.length
    let arr = []
    for (let index = 0; index < nums.length; index++) {
        if (index < k) {
            arr.push(nums[len + index - k])

        } else {
            arr.push(nums[index - k])
        }
    }

    for (let index = 0; index < arr.length; index++) {
        nums[index] = arr[index]
    }
};

//case 1
//Input: nums = [1,2,3,4,5,6,7], k = 3
//Output: [5,6,7,1,2,3,4]


//case 2
//Input: nums = [-1,-100,3,99], k = 2
//Output: [3,99,-1,-100]