function sortedFrequency(arr, val) {
    let firstValIdx = findFirstVal(arr, val);
    if(firstValIdx == -1) {
        return -1;
    }
    let lastValIdx = findLastVal(arr, val);
    return lastValIdx - firstValIdx + 1;
}

function findFirstVal(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if ((middleIdx === 0 || val > arr[middleIdx - 1]) && arr[middleIdx] === val) {
            return middleIdx;
        } else if (val > arr[middleIdx]) {
            return findFirstVal(arr, val, middleIdx + 1, rightIdx);
        } else {
            return findFirstVal(arr, val, leftIdx, middleIdx - 1); 
        }
    }
    return -1;
}

function findLastVal(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if ((middleIdx === arr.length - 1 || val < arr[middleIdx + 1]) && arr[middleIdx] === val) {
            return middleIdx;
        } else if (val < arr[middleIdx]) {
            return findLastVal(arr, val, leftIdx, middleIdx - 1);
        } else {
            return findLastVal(arr, val, middleIdx + 1, rightIdx);
        }
    }
    return -1;
}

module.exports = sortedFrequency;