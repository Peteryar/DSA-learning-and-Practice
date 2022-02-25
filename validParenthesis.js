//Given a string s containing just the characters '(', ')'
//'{', '}', '[', and  ']', determine if the input string is valid.

// An input string is valid
// open brackets must be closed by the same type of brackets
// open brackets must be closed in the corect order

// Example1
// input s = '()'
//output valid


function isValidParenthesis(str) {

    let isValid = true;

    let verifyParen = []

    let counter = {};

    for (let i = 0; i < str.length; i++) {
        counter[str[i]] = counter[str[i]] + 1 || 1
    }

    let openBraces = counter['{'];
    let closeBraces = counter['}'];

    let openSquares = counter['['];
    let closeSquares = counter[']'];

    let openParen = counter['('];
    let closeParen = counter[')'];

    if (openBraces == closeBraces) {
        verifyParen.push('valid')
    } else {
        verifyParen.push('invalid')
    }

    if (openParen == closeParen) {
        verifyParen.push('valid')
    } else {
        verifyParen.push('invalid')
    }

    if (openSquares == closeSquares) {
        verifyParen.push('valid')
    } else {
        verifyParen.push('invalid')
    }
    for (let i = 0; i < verifyParen.length; i++) {
        if (verifyParen[i] == 'invalid') {
            isValid = false
        }
    }

    if (isValid) {
        return 'valid'
    } else {
        return 'invalid'
    }
}

isValidParenthesis('([{(]]')