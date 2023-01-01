class Calculator {
    constructor(previousEl, currentEl) {
        this.previousEl = previousEl
        this.currentEl = currentEl
        this.clear()
    }
    clear() {
        this.currentOp = ''
        this.previousOp = ''
        this.operation = undefined

    }

    delete() {
        this.currentOp = this.currentOp.toString().slice(0, -1) /* index 0 to 1 from the end, remove (deletes last number) */

    }

    appendNumber(number) {
        if (number === '.' && this.currentOp.includes('.')) return
        this.currentOp = this.currentOp.toString() + number.toString()  /* convert to string or JS will add instead of append */

    }

    chooseOp(operation) {
        if (this.currentOp === '') return
        if (this.previousOp !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOp = this.currentOp
        this.currentOp = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOp)
        const curr = parseFloat(this.currentOp)
        if (isNaN(prev) || isNaN(curr)) return
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break;
            case '-':
                computation = prev - curr
                break;
            case '*':
                computation = prev * curr
                break;
            case '/':
                computation = prev / curr
            default:
                return
        }
        this.currentOp = computation
        this.operation = undefined
        this.previousOp = ''

    }

    getComma(number) {
        const strNum = number.toString()
        const wholeNum = parseFloat(strNum.split('.')[0])   /* take the string and turn it into an array. First part before the (.), second part after the (.). [0] to get the first part. */
        const decimalNum = strNum.split('.')[1]             /* [1] return the second part after the decimal. */
        let wholeNumDisplay
        if (isNaN(wholeNum)) {                              /*if the user inputs nothing or just a decimal */
            wholeNumDisplay = ''
        } else {
            wholeNumDisplay = wholeNum.toLocaleString('en', {    /* set to english, inserts comma. */
                maximumFractionDigits: 0                         /* no decimals after the value when it gets converted to a string. (sets the maximum number of fraction digits to use) */
            })
        }
        if (decimalNum != null) {
            return `${wholeNumDisplay}.${decimalNum}`           /*If there's a decimal return the the whole number, the(.) and the decimal digits */
        } else {
            return wholeNumDisplay
        }
    }

    updateDisplay() {
        this.currentEl.innerText =
            this.getComma(this.currentOp)
        if (this.operation != null) {
            this.previousEl.innerText =
                `${this.getComma(this.previousOp)} ${this.operation}`   /* if there's a number in current, display previous and the operand */
        } else {
            this.previousEl.innerText = ''    /*clears previous value */
        }
    }
}


const numBtns = document.querySelectorAll('[data-num]')
const opBtns = document.querySelectorAll('[data-op]')
const equalsBtn = document.querySelector('[data-equal]')
const delBtn = document.querySelector('[data-del]')
const allClearBtn = document.querySelector('[data-clear]')
const previousEl = document.querySelector('[data-previous]')
const currentEl = document.querySelector('[data-current]')

const calculator = new Calculator(previousEl, currentEl)

numBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


opBtns.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOp(button.innerText)
        calculator.updateDisplay()
    })
})

equalsBtn.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearBtn.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

delBtn.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
}) 