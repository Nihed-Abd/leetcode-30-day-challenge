/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var longestSubsequenceRepeatedK = function(s, k) {
    const n = s.length;
   
    const nextPos = Array.from({ length: n + 1 }, () => new Array(26).fill(-1));
    for (let c = 0; c < 26; c++) nextPos[n][c] = -1;
    for (let i = n - 1; i >= 0; i--) {
        for (let c = 0; c < 26; c++) {
            nextPos[i][c] = nextPos[i + 1][c];
        }
        nextPos[i][s.charCodeAt(i) - 97] = i;
    }

    let best = "";

    function canRepeat(seq) {
        let idx = 0;
        for (let rep = 0; rep < k; rep++) {
            for (let j = 0; j < seq.length; j++) {
                const c = seq.charCodeAt(j) - 97;
                if (idx > n) return false;
                const p = nextPos[idx][c];
                if (p === -1) return false;
                idx = p + 1;
            }
        }
        return true;
    }

    function dfs(prefix) {
        if (
            prefix.length > best.length ||
            (prefix.length === best.length && prefix > best)
        ) {
            best = prefix;
        }
        for (let c = 25; c >= 0; c--) {
            const ch = String.fromCharCode(97 + c);
            const nextSeq = prefix + ch;
            if (canRepeat(nextSeq)) {
                dfs(nextSeq);
            }
        }
    }

    dfs("");
    return best;
};
