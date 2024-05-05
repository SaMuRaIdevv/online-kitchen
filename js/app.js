"use strict"

const foodName = document.querySelector(".form-select"),
numberOfFood = document.querySelector("#floatingInput"),
btn = document.querySelector(".btn"),
numberOfSomsa = document.querySelector("#numberOfSomsa"),
priceOfSomsa = document.querySelector("#priceOfSomsa"),
numberOfPalov = document.querySelector("#numberOfPalov"),
priceOfPalov = document.querySelector("#priceOfPalov"),
numberOfGumma = document.querySelector("#numberOfGumma"),
priceOfGumma = document.querySelector("#priceOfGumma"),
allPrice = document.querySelector("#allPrice"),
somsa = document.querySelector("#somsa"),
palov = document.querySelector("#palov"),
gumma = document.querySelector("#gumma")

// btn.addEventListener("click", ()=> {
//     if(foodName.value === somsa.value){
//         numberOfSomsa.textContent = numberOfFood.value
//         priceOfSomsa.textContent = 3000 * numberOfFood.value
//         let somsaPrice = 3000 * numberOfFood.value
//         allPrice.textContent = somsaPrice + (somsaPrice * 0.1)
//     }else if(foodName.value === palov.value){
//         numberOfPalov.textContent = numberOfFood.value
//         priceOfPalov.textContent = 15000 * numberOfFood.value
//         let palovPrice = 15000 * numberOfFood.value
//         allPrice.textContent = palovPrice + (palovPrice * 0.1)
//     }else if(foodName.value === gumma.value){
//         numberOfGumma.textContent = numberOfFood.value
//         priceOfGummnumberOfGumma.textContent = 2000 * numberOfFood.value
//         let gummaPrice = 3000 * numberOfFood.value
//         allPrice.textContent = gummaPrice + (gummaPrice * 0.1)
//     }
// })

btn.addEventListener("click", ()=> {
    if(foodName.value === somsa.value){
        numberOfSomsa.textContent = numberOfFood.value
        priceOfSomsa.textContent = 3000 * numberOfFood.value
        let somsaPrice = 3000 * numberOfFood.value
        allPrice.textContent = somsaPrice + (somsaPrice * 0.1)
    }else if(foodName.value === palov.value){
        numberOfPalov.textContent = numberOfFood.value
        priceOfPalov.textContent = 15000 * numberOfFood.value
        let palovPrice = 15000 * numberOfFood.value
        allPrice.textContent = palovPrice + (palovPrice * 0.1)
    }else if(foodName.value === gumma.value){
        numberOfGumma.textContent = numberOfFood.value
        priceOfGumma.textContent = 2000 * numberOfFood.value
        let gummaPrice = 2000 * numberOfFood.value
        allPrice.textContent = gummaPrice + (gummaPrice * 0.1)
    }
})