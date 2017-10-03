//Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
function mergeArrays(a, b) {
    var resultingArray = [];
    var length;
    if (a.length <= b.length) {
        length = a.length;
    } else {
        length = b.length;
    }

    for (var i = 0; i < length; i++) {
        resultingArray.push(a[i], b[i]);
    }
    if (length !== a.length) {
        for (var i = length; i < a.length; i++) {
            resultingArray.push(a[i]);
        }
    } else {
        for (var i = length; i < b.length; i++) {
            resultingArray.push(b[i]);
        }
    }
    return resultingArray;
}
