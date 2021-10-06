function countZeroes(arr) {
    let firstZero = findFirstZero(arr);
    if (firstZero != -1) {
        return arr.length - firstZero;
    } else {
        return 0;
    }
}

function findFirstZero(arr, leftIdx = 0, rightIdx = arr.length - 1) {
    if(rightIdx >= leftIdx) {
        let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
        if ((middleIdx == 0 || arr[middleIdx - 1]) && arr[middleIdx] == 0) {
            return middleIdx;
        } else if (arr[middleIdx] == 1) {
            return findFirstZero(arr, middleIdx + 1, rightIdx);
        } else {
            return findFirstZero(arr, leftIdx, middleIdx - 1)
        }
    }

    return -1;
}

module.exports = countZeroes