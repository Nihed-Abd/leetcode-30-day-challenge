/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const pairs = nums.map((val, idx) => [val, idx]);
    pairs.sort((a, b) => b[0] - a[0]);
    const topK = pairs.slice(0, k);
    topK.sort((a, b) => a[1] - b[1]);
    return topK.map(pair => pair[0]);
};
