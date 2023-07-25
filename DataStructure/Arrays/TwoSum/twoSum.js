/**
 * @description Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
 * @param {number[]} num1 
 * @param {number} target 
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
    const track = new Map()
    for (let index = 0; index < nums.length; index++) {
        const reminder = target - nums[index]
        if (track.has(reminder)) {
            return [track.get(reminder), index]
        }
        track.set(nums[index], index)
    }
    return []
}



//case 1
// Input: nums = [2,7,11,15], target = 9
//Output: [0,1]

let nums1 = [2, 7, 11, 15]
let target1 = 9

console.log(twoSum(nums1, target1)) 

//case 2
//Input: nums = [3,2,4], target = 6
//Output: [1,2]

let nums2 = [3,2,4] 
let target2 = 6

console.log(twoSum(nums2, target2)) 


//case 3
//Input: nums = [3,3], target = 6
//Output: [0,1]

let nums3 = [3,3]
 let target3 = 6

 console.log(twoSum(nums3, target3)) 


