const numberButtons = document.getElementsByClassName('button')
const numberDisplay = document.getElementById('number')
const resetBtn = document.getElementById('reset-btn')
const deleteBtn = document.getElementById('action-btn')
const plusButton = document.getElementById('plus-button')
const subButton = document.getElementById('sub-button')
const multButton = document.getElementById('mult-button')
const divButton = document.getElementById('div-button')
const resultBtn = document.getElementById('result-btn')

const arrayNumberButtons = Array.from(numberButtons)

const switchBtn = document.getElementById('toggle_switch')

let isSwitched = false



arrayNumberButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        var btnValue = btn.innerHTML
        toString(btnValue)
        
        if(numberDisplay.innerHTML == "--") {
            numberDisplay.innerText = ''
        }
        numberDisplay.innerHTML += btnValue

        var arrayDisplay = numberDisplay.innerHTML.split('')
        if(arrayDisplay.includes('+') || arrayDisplay.includes('/') || arrayDisplay.includes('x') || arrayDisplay.includes('-')) {
            multButton.disabled = true
            divButton.disabled = true
            subButton.disabled = true
            plusButton.disabled = true
        }
    })
})

resetBtn.addEventListener("click", () => {
    numberDisplay.innerHTML = '--'

    multButton.disabled = false
    divButton.disabled = false
    subButton.disabled = false
    plusButton.disabled = false
})


deleteBtn.addEventListener("click", () => {
    if(numberDisplay.innerHTML == '--' || numberDisplay.innerHTML == '') {
        numberDisplay.innerHTML = '--'

    } else if(numberDisplay.innerHTML.split('').length == 1) {
        numberDisplay.innerHTML = '--'

        multButton.disabled = false
        divButton.disabled = false
        subButton.disabled = false
        plusButton.disabled = false

    } else {
        var arrayNum = numberDisplay.innerHTML.split('')
        console.log(arrayNum)

        var lastNum = parseInt(arrayNum.length) - 1
        if(arrayNum[lastNum] == '.') {
            arrayNum.pop()
            arrayNum.pop()
            var newDisplayNum = arrayNum.join('')  
            numberDisplay.innerHTML = parseFloat(newDisplayNum)
            return
        }

        arrayNum.pop()
        var newDisplayNum = arrayNum.join('')
        numberDisplay.innerHTML = parseFloat(newDisplayNum)

    }
})

var oldNum = numberDisplay.innerHTML


resultBtn.addEventListener("click", () => {
    if(numberDisplay.innerHTML.split('').includes('+')) {

        var arrayNumbers = numberDisplay.innerHTML.split('+')
        var first = parseFloat(arrayNumbers[0])
        var lastPosition = arrayNumbers.length - 1
        var last = parseFloat(arrayNumbers[lastPosition])

        console.log(first, last)

        var result = first + last
        numberDisplay.innerHTML = result
    } else if(numberDisplay.innerHTML.split('').includes('-')) {
        var arrayNumbers = numberDisplay.innerHTML.split('-')
        var first = parseFloat(arrayNumbers[0])
        var lastPosition = arrayNumbers.length - 1
        var last = parseFloat(arrayNumbers[lastPosition])

        var result = first - last
        numberDisplay.innerHTML = result
    } else if(numberDisplay.innerHTML.split('').includes('x')) {
        var arrayNumbers = numberDisplay.innerHTML.split('x')
        var first = parseFloat(arrayNumbers[0])
        var lastPosition = arrayNumbers.length - 1
        var last = parseFloat(arrayNumbers[lastPosition])

        var result = first * last
        numberDisplay.innerHTML = result
    } else if(numberDisplay.innerHTML.split('').includes('/')) {
        var arrayNumbers = numberDisplay.innerHTML.split('/')
        var first = parseFloat(arrayNumbers[0])
        var lastPosition = arrayNumbers.length - 1
        var last = parseFloat(arrayNumbers[lastPosition])

        var result = first / last

        numberDisplay.innerHTML = result
    }
})

switchBtn.addEventListener("click", () => {
    isSwitched = !isSwitched
    Switched()
})



var styleLink = document.getElementById('style-link')

function Switched() {
    if(isSwitched == false) {
        styleLink.href = "./css/styles.css"
    } else if(isSwitched == true){
        styleLink.href = "./css/styles2.css"
    }
}
