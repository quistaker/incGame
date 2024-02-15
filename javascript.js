const startButton = document.getElementById("startButton")
const moneyStat = document.getElementById("money")
const bribeButton = document.getElementById("bribeButton")
const candleFactoryButton = document.getElementById("candleFactoryButton")
const candleFactory = document.getElementById("candleFactory")

let money = 400
let numCandleFactory = 0

startButton.addEventListener("click", display)
bribeButton.addEventListener("click", addMoney)
candleFactoryButton.addEventListener("click", startMakeMoney)

function startMakeMoney() {
    console.log("function startMakeMoney")
    addCandleFactory()
    moneyIncrementer()
}

function addCandleFactory() {
    numCandleFactory++
    candleFactory.textContent = `Свечной завод: x${numCandleFactory}`
}

async function moneyIncrementer() {
    console.log("function moneyIncrementer()")
    let i = 0
    let interval = setInterval(function() {
        addMoney()
        if (money >= 450) {
            clearInterval(interval)
            console.log("clearInterval(interval)")
        }
    }, 100)
}

function addMoney() {
    console.log("function addMoney")
    money += 1
    moneyStat.textContent = `Денег: ${money} рублей`
    if (money > 402) {
        console.log("420!")
        candleFactory.style.display = "inline"
        candleFactoryButton.style.display = "inline"
    }
}

function display() {
    console.log("function display")
    moneyStat.style.display = "inline"
    bribeButton.style.display = "inline"
    startButton.style.display = "none"
}
