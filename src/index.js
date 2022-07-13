const  { manyNumberToDigit } = require('./number-to-lcd')

const USAGE = 'Usage npm start numbers[Integer] width[Integer](default:1) height[Integer](default:1)'
const argv = process.argv.slice(2)

if (argv.length === 0) {
    console.info(USAGE)
} else {
    const numbers = argv[0]
    try {
        const lcdDigits = manyNumberToDigit(numbers)
        console.info(lcdDigits)
    } catch (err) {
        console.error(err)
        console.info(USAGE)
    }
}