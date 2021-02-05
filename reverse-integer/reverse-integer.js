/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
//     take x
//     turn into string
//     split into array
//     use array reverse method
//     join as a string
//     convert back to number
    let result = '';
    
    let newString = x.toString();
    let array = newString.split('');
    array.reverse();
    if (array[array.length - 1] === '-') {
        let pop = array.pop()
        array.unshift(pop);
    }
    result = array.join('');
    parseInt(result)
    
    if (result === NaN) {
        return 0;
    }
    
    if (result > Math.pow(2, 31) - 1) {
        return 0;
    }
    
    if (result < Math.pow(-2, 31)) {
        return 0;
    }

    return result;
};