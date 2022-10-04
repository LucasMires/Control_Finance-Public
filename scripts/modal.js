const modalCreator = () => {
    let sectionModelWrapper = document.createElement("section")
    let articleModel = document.createElement("article")

    let divInitial = document.createElement("div")
    let h2Title = document.createElement("h2")
    let paragraphDescription = document.createElement("p")
    let btnCloseModel = document.createElement("button")

    let formValues = document.createElement("form")
    let divValues = document.createElement("div")
    let labelValues = document.createElement("label")
    let divCoin = document.createElement("div")
    let spanCoin = document.createElement("span")
    let inputValues = document.createElement("input")

    let divOptions = document.createElement("div")
    let h2Options = document.createElement("h2")
    let labelEntry = document.createElement("label")
    let inputEntry = document.createElement("input")
    let labelExit = document.createElement("label")
    let inputExit = document.createElement("input")

    let divSubmit = document.createElement("div")
    let btnCancel = document.createElement("button")
    let btnInsert = document.createElement("button")

    sectionModelWrapper.id = "modelWrapper"
    articleModel.id = "model"
    divInitial.id = "modelDivInitial"
    divValues.id = "modelDivValues"
    divOptions.id = "modelDivOptions"
    divSubmit.id = "modelDivSubmit"

    body.classList = "relative"
    sectionModelWrapper.classList = "flex model-wrapper w-screen h-screen fixed"
    articleModel.classList = "flex flex-col gap-2 radius-1 relative"

    divInitial.classList = "flex flex-col gap-1"
    h2Title.classList = "title-3 title-weight-3"
    paragraphDescription.classList = "title-2 title-weight-1"
    btnCloseModel.classList = "btn-close-modal absolute flex justify-center align-center general-btn title-2 title-weight-3"

    formValues.classList = "flex flex-col"
    divValues.classList = "flex flex-col gap"
    labelValues.classList = "title-2 title-weight-2"
    divCoin.classList = "inputValueBox flex"
    spanCoin.classList = "coinValueReference"
    inputValues.classList = "radius-1"
    inputValues.type = "number"

    divOptions.classList = "flex flex-col gap"
    h2Options.classList = "title-2 title-weight-2"
    labelEntry.classList = "title-3 title-weight-3 flex align-center justify-center financial"
    labelExit.classList = "title-3 title-weight-3 flex align-center justify-center financial"

    divSubmit.classList = "flex gap-1"
    btnCancel.classList = "general-btn title-weight-3"
    btnInsert.classList = "button-primary title-weight-3"

    h2Title.innerText = "Registro de valor"
    paragraphDescription.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor"
    btnCloseModel.innerText = "X"

    spanCoin.innerText = "R$"
    labelValues.innerText = "Valor"
    inputValues.placeholder = "00.00"

    formValues.action = "#"
    h2Options.innerText = "Tipo de valor"

    inputEntry.name = "Entrada"
    inputExit.name = "Saída"

    inputEntry.type = "radio"
    inputExit.type = "radio"
    inputEntry.id = "1"
    inputExit.id = "2"
    inputEntry.hidden = true
    inputExit.hidden = true

    labelEntry.innerText = "Entrada"
    labelExit.innerText = "Saída"
    labelEntry.htmlFor = "1"
    labelExit.htmlFor = "2"
    labelEntry.tabIndex = 0
    labelExit.tabIndex = 0

    btnCancel.innerText = "Cancelar"
    btnInsert.innerText = "Inserir valor"

    sectionModelWrapper.append(articleModel)
    articleModel.append(divInitial, formValues)
    formValues.append(divValues, divOptions, divSubmit)
    divInitial.append(h2Title, paragraphDescription, btnCloseModel)
    divValues.append(labelValues, divCoin)
    divCoin.append(spanCoin, inputValues)
    divOptions.append(h2Options, labelEntry, inputEntry, labelExit, inputExit)
    divSubmit.append(btnCancel, btnInsert)

    labelEntry.addEventListener("click", () => {
        inputExit.checked = false
    })
    labelExit.addEventListener("click", () => {
        inputEntry.checked = false
    })

    btnCancel.addEventListener("click", () => {
        btnCloseModel.offsetParent.offsetParent.remove()
    })
    btnCloseModel.addEventListener("click", () => {
        btnCloseModel.offsetParent.offsetParent.remove()
    })

    btnInsert.addEventListener("click", (event) => {
        event.preventDefault()
        const value = {
            id: 0,
            value: 0
        }
        const numberTratament = () => {
            let tratament = inputValues.value
            return value.value = Number(tratament)
        }
        numberTratament()

        if (inputEntry.checked == true) {
            value.categoryID = 1
        } else if (inputExit.checked == true) {
            value.categoryID = 2
        }

        const verificador = () => {
            const values = insertedValues.forEach((element, index) => {

                value.id = index + 1
            })
        }
        verificador()

        insertedValues.push(value)
        sumOfValues.innerText = `R$ ${sumItensValues(insertedValues)},00`
        btnInsert.offsetParent.offsetParent.remove()
        sectionSeparator(insertedValues)
    })
    return sectionModelWrapper
}