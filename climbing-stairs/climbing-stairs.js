/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo={}) {
        if (n <= 3) return n;
        if (n in memo) return memo[n];
        
        if (n === 4) {
            n = 4
        }
        
        memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
        return memo[n];
};