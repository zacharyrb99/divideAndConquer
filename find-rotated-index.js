function findRotatedIndex(arr, val) {
    let rotatePoint = findRotationPoint(arr);
    if (rotatePoint > 0 && val >= arr[0] && val <= arr[rotatePoint - 1]) {
        return binarySearch(arr, val, 0, rotatePoint - 1);
    } else {
        return binarySearch(arr, val, rotatePoint, arr.length - 1);
    }
}

function binarySearch(arr, val, leftIdx, rightIdx) {
    if (arr.length === 0) return -1;
    if (val < arr[leftIdx] || val > arr[rightIdx]) return -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] === val) {
            return middleIdx;
        } else if (val < arr[middleIdx]) {
            rightIdx = middleIdx - 1;
        } else {
            leftIdx = middleIdx + 1;
        }
    }

    return -1;
}

function findRotationPoint(arr) {
    if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if (arr[middleIdx] > arr[middleIdx + 1]) {
            return middleIdx + 1;
        } else if (arr[leftIdx] <= arr[middleIdx]) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
}

module.exports = findRotatedIndex