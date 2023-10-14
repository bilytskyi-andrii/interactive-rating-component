const numbers = document.querySelectorAll(".number")
const button = document.querySelector("button")
const component = document.querySelector(".rating-component")
const thanks = document.querySelector(".thanks")
const span = document.querySelector("span")

let score = null

const selectScore = (e) => {
    let element = e.srcElement
    score = element.dataset.value
    
    numbers.forEach((num) => {
        num.classList.remove("grey")
    })

    element.classList.add("grey")
}

const submit = () => {
    if (score !== null) {
        component.classList.add("hidden")
        thanks.classList.remove("hidden")
        span.textContent = score
    }
}

numbers.forEach((num) => {
    num.addEventListener('click', selectScore)
})

button.addEventListener("click", submit)