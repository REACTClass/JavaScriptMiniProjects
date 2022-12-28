let btnEl = document.getElementById("btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

btnEl.addEventListener("click", function () {
    let baseValue = inputEl.value

    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(2)} feet`
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(2)} gallons`
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(2)} pounds`

})