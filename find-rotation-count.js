function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if (leftIdx > rightIdx) return 0;
    if (leftIdx === rightIdx) return leftIdx;
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (middleIdx < rightIdx && arr[middleIdx + 1] < arr[middleIdx]) {
        return middleIdx + 1;
    }

    if (middleIdx > leftIdx && arr[middleIdx] < arr[middleIdx - 1]) {
        return middleIdx;
    }

    if (arr[rightIdx] > arr[leftIdx]) {
        return findRotationCount(arr, leftIdx, middleIdx - 1);
    }

    return findRotationCount(arr, middleIdx + 1, rightIdx);
}

module.exports = findRotationCount