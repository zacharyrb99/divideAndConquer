function findFloor(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx > rightIdx) return -1;
    if (val >= arr[rightIdx]) return arr[rightIdx];

    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] === val) return arr[middleIdx];
    if (middleIdx > 0 && arr[middleIdx - 1] <= val && val < arr[middleIdx]) {
        return arr[middleIdx - 1];
    }

    if (val < arr[middleIdx]) {
        return findFloor(arr, val, leftIdx, middleIdx - 1);
    }

    return findFloor(arr, val, middleIdx + 1, rightIdx);
}

module.exports = findFloor