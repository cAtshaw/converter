
//html ids
const convertBtn = document.getElementById("convert-btn")
const inputBtn = document.getElementById("enterbox")
const lengthReturn = document.getElementById("lengthreturn")
const volReturn = document.getElementById("volreturn")
const massReturn = document.getElementById("massreturn")

//conversions
const meterToFeet = 3.281
const litreToGallon = 0.264
const kiloToPound = 2.204



//conversion function
convertBtn.addEventListener("click", () => {
    let baseValue = inputBtn.value
    lengthReturn.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet`
    volReturn.textContent = `${baseValue} liter = ${(baseValue * litreToGallon).toFixed(2)} gallon`
    massReturn.textContent = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(2)} pound`
})