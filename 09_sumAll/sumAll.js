const sumAll = function(startIdx, endIdx) {
    if (!Number.isInteger(startIdx) || !Number.isInteger(endIdx)) return "ERROR";
    if (startIdx < 0 || endIdx < 0) return "ERROR";
    if (startIdx > endIdx) {
        const temp = startIdx;
        startIdx = endIdx;
        endIdx = temp;
    }
    let sum = 0;
    for(let i = startIdx; i<endIdx + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
