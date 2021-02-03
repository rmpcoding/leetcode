/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [2, 7, 11, 15];
// target = 9;

var twoSum = function(nums, target) {
//     create var results array
//     create outer for loop
//          let i = 0; iterate until condition is met (array's length)
//     create inner for loop
//          let j = 1; iterate until condition is met (array's length)
//     if i + j = target
//          push numbers into results array
//          return array
//     else j > 9 
//          return no solution (IF POSITIVE INTEGERS ONLY)
//     else continue summing i + j;
    
    let resultsArray = [];
    
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target && resultsArray <= 2) {
                resultsArray.push(i, j)
            }
        }
    }
    return resultsArray;  
};

