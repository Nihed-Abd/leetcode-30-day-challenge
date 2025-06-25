var kthSmallestProduct = function(nums1, nums2, k) {
    const m = nums1.length, n = nums2.length;

    const countLessEqual = (x) => {
        let count = 0;
        for (let a of nums1) {
            if (a > 0) {
                let l = 0, r = n - 1;
                while (l <= r) {
                    let mid = Math.floor((l + r) / 2);
                    if (a * nums2[mid] <= x) l = mid + 1;
                    else r = mid - 1;
                }
                count += l;
            } else if (a < 0) {
                let l = 0, r = n - 1;
                while (l <= r) {
                    let mid = Math.floor((l + r) / 2);
                    if (a * nums2[mid] <= x) r = mid - 1;
                    else l = mid + 1;
                }
                count += n - l;
            } else {
                if (x >= 0) count += n;
            }
        }
        return count;
    };

    let left = -1e10, right = 1e10;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (countLessEqual(mid) < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};
