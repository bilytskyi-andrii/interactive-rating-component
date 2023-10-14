const numbers = document.querySelectorAll(".number")
let score = null

const selectScore = (e) => {
    let element = e.srcElement
    score = element.dataset.value
    
    numbers.forEach((num) => {
        num.classList.remove("grey")
    })

    element.classList.add("grey")
}

numbers.forEach((num) => {
    num.addEventListener('click', selectScore)
})