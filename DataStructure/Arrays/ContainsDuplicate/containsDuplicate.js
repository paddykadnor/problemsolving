/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b)=>a-b)
    for(let i=1;i<nums.length;i++)
    {
       if(nums[i]=== nums[i-1])  return true
    }

    return false
};


//case 1
//Input: nums = [1,2,3,1]
//Output: true

//case 2
//Input: nums = [1,2,3,4]
//Output: false


//case 3
//Input: nums = [1,1,1,3,3,4,3,2,4,2]
//Output: true