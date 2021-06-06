/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let dynamicMap = new Map();
    let answer;

    
    for (let i = 0; i < nums.length; i++) {
        if (dynamicMap.has(nums[i])){
            dynamicMap.delete(nums[i])
        } else {
            dynamicMap.set(nums[i], 1)
        }
    }
    
    dynamicMap.forEach((value, key) => {
        answer = key
    })
    
    return answer;  
};