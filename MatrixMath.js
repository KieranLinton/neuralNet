/* eslint-env es6 */

function genarateArray(numOfElements, valueOfElements) {
    let result = [];
    for (let i = 0; i < numOfElements; i++) {
        result[i] = valueOfElements;
    }
    return result;
}

function genarateMatrix(rows, colums, valueOfElements) {
    let result = [];

    for (let row = 0; row < rows; row++) {
        result[row] = [];
        for (let colum = 0; colum < colums; colum++) {
            result[row][colum] = valueOfElements;
        }
    }
    return result;
}

function randomizeArray(array, param) {
    for (let i = 0; i < array.length; i++) {
        array[i] = random(-param, param);
    }
}

function randomizeMatrix(matrix, param) {
    for (let row = 0; row < matrix.length; row++) {
        for(let colum = 0; colum < matrix[row].length; colum ++){
            matrix[row][colum] = random(-param, param);
        }
    }
}

function addArrayElements(array){
    let result = 0;
    for (let i = 0; i < array.length; i++) {
       result += array[i] ;
    }
    return result;
}
