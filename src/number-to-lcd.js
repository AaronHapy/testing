const lcdDigitList = require('./digits')

const SPACE = ' '
const CARRIAGE_RETURN = '\n'

const numberToDigit = function (number) {
    return lcdDigitList[number]
}

const manyNumberToDigit = function (numbers) {
    const digitLines = []
    let numberIndex = 0

    // fill every digit lines
    for (const number of numbers) {
        // get right sized digit
        const digit = numberToDigit(Number(number))
        const digitSplit = digit.split(CARRIAGE_RETURN)

        for (let heightIndex = 1; heightIndex < digitSplit.length - 1; heightIndex++) {
            // first digit position y=0 x=0 need \n and to be assigned
            if (numberIndex === 0 && heightIndex === 1 && !digitLines[heightIndex]) {
                digitLines[heightIndex] = CARRIAGE_RETURN + digitSplit[heightIndex] + SPACE

            // other first digit in position y need to be assigned
            } else if (!digitLines[heightIndex]) {
                    digitLines[heightIndex] = digitSplit[heightIndex]  + SPACE

            // if its not the last word, a space to improve lisibility
            } else if (numberIndex + 1 < numbers.length) {
                digitLines[heightIndex] += digitSplit[heightIndex] + SPACE

            // last words don't need extra space
            } else {
                digitLines[heightIndex] += digitSplit[heightIndex]
            }
        }
        numberIndex++
    }
    return digitLinesToString(digitLines)
}

const digitLinesToString= function (digitLines) {
    return digitLines.reduce((result, line) => {
        result += `${line}\n`
        return result
    }, '')
}

module.exports = {
    numberToDigit,
    manyNumberToDigit
}