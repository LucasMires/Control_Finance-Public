let section = document.getElementById("sectionValue")
let listOfValues = document.getElementById("listOfValues")
let buttons = document.querySelectorAll("div button")
let btnRegisterValues = document.querySelector("#header button")
let body = document.querySelector("body")
let sumOfValues = document.querySelector("#sumOfValues")

btnRegisterValues.addEventListener("click", () => {
    body.appendChild(modalCreator())
})

function sectionSeparator(array) {
    let all = document.getElementById("all")
    let entry = document.getElementById("entry")
    let exit = document.getElementById("exit")

    let entrySection = array.filter((element) => {
        return element.categoryID == 1
    })
    let exitSection = array.filter((element) => {
        return element.categoryID == 2
    })
    
    function primaryRender(array) {
        listOfValues.innerHTML = ""
        array.forEach((element, index) => {
            listOfValues.appendChild(createCardModels(element, index))
        })
    }
    primaryRender(insertedValues)

    all.addEventListener("click", () => {
        primaryRender(insertedValues)
        sumOfValues.innerText = `R$ ${sumItensValues(insertedValues)},00`
    })
    entry.addEventListener("click", () => {
        primaryRender(entrySection)
        sumOfValues.innerText = `R$ ${sumItensValues(entrySection)},00`
    })
    exit.addEventListener("click", () => {
        primaryRender(exitSection)
        sumOfValues.innerText = `R$ ${sumItensValues(exitSection)},00`
    })
}

function createCardModels(object, index) {
    
    let li = document.createElement("li")
    let p = document.createElement("p")
    let div = document.createElement("div")
    let span = document.createElement("span")
    let button = document.createElement("button")

    li.id = "card"
    li.classList = "flex space-between container"
    div.classList = "flex"
    p.classList = "title-weight-2 title-2"
    span.classList = "general-btn"
    p.innerText = `R$ ${object.value},00`

    if (object.categoryID == 1) {
        span.innerText = "Entrada"
    }
    if (object.categoryID == 2) {
        span.innerText = "Saída"
    }

    li.append(p, div)
    div.append(span, button)

    button.addEventListener("click", () => {
        insertedValues.splice(index, 1)
        button.closest("li").remove()
        sumOfValues.innerText = `R$ ${sumItensValues(insertedValues)},00`
    })
    return li
}

function sumItensValues(array) {
    const filter = array.map((element) => {
        return element.value
    })
    let result = filter.reduce((acumulator, initialValue) => acumulator + initialValue, 0)
    return result
}