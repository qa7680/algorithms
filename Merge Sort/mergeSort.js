// merge sort alogrithm
function mergeSort(arr) {
    const middle = Math.floor(arr.length/2);

    if(arr.length<2) {
        return arr;
    }
    const leftArr = mergeSort(arr.slice(0,middle));
    const rightArr = mergeSort(arr.slice(middle));

    return merge(leftArr, rightArr);
};

function merge(leftArr, rightArr) {
    var resultArr = [];

    while(leftArr.length>0 && rightArr.length>0) {
        if(leftArr[0] < rightArr[0]) {
            resultArr.push(leftArr.shift());
        }else{
            resultArr.push(rightArr.shift());            
        }
    }
    return [...resultArr, ...leftArr, ...rightArr];
};

console.log(mergeSort([1, 42, 15, -32]));
