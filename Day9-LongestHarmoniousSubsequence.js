/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const freq = new Map();
    let maxLen = 0;

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let [key, value] of freq) {
        if (freq.has(key + 1)) {
            maxLen = Math.max(maxLen, value + freq.get(key + 1));
        }
    }

    return maxLen;
};
