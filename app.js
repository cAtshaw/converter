
//html ids
const convertBtn = document.getElementById("convert-btn")
const inputBtn = document.getElementById("enterbox")
const lengthOutput = document.getElementById("length")
const volumeOutput = document.getElementById("volume")
const massOutput = document.getElementById("mass")


//conversions
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204



//conversion function
convertBtn.addEventListener("click", () => {
    let baseValue = inputBtn.value;
    lengthOutput.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`
    volumeOutput.textContent = `${baseValue} liter = ${baseValue * literToGallon} gallon`
    massOutput.textContent = `${baseValue} kilograms = ${baseValue * kiloToPound} pound`
})