/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function(s, k) {
    let n = s.length;
    let count = 0;
    let value = 0;
    let power = 1;

    // Step 1: Try building value from the end (right to left)
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '0') {
            count++;
        } else {
            if (power <= k && value + power <= k) {
                value += power;
                count++;
            } else {
                // from here, we stop adding 1s but can continue collecting 0s
                for (let j = i - 1; j >= 0; j--) {
                    if (s[j] === '0') count++;
                }
                break;
            }
        }

        power *= 2;
        if (power > k) {
            for (let j = i - 1; j >= 0; j--) {
                if (s[j] === '0') count++;
            }
            break;
        }
    }

    return count;
};
