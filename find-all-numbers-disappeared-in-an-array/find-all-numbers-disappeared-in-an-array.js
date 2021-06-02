/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let set = new Set(nums)
    const results = []
    let n = nums.length;
    
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) results.push(i)
    }
    
    return results;
};