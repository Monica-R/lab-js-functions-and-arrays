// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    return num1 > num2 ? num1 : num2;
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayWords) {
    let longestWord = '';
    if (arrayWords.length === 0) {
        return null;
    } else {
       for (let i = 0; i < arrayWords.length; i++) {
            if (longestWord.length === arrayWords[i].length) {
                continue;
            } else if (arrayWords[i].length > longestWord.length) {
                longestWord = arrayWords[i];
            }
        }
    }
    return longestWord;
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrayNumbers) {
    result = 0;
    if (arrayNumbers.length === 1) {
        return arrayNumbers[0];
    }
    // In case of arrayNumbers length > 1...
    for (let i = 0; i < arrayNumbers.length; i++) {
        result += arrayNumbers[i];
    }
    return result;
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrayNumbers) {
    if (arrayNumbers.length === 0) {
        return 0;
    }
    let result = sumNumbers(arrayNumbers) / arrayNumbers.length;
    return result;
}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayWords2, word) {
    if (arrayWords2.length === 0) {
        return null;
    }
    return arrayWords2.includes(word);
}
