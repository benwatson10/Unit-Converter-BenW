

let startNum = document.getElementById("starter-num")
let userNum = document.getElementById("user-num")
let convLength = document.getElementById("conv-length")
let convVolume = document.getElementById("conv-volume")
let convMass = document.getElementById("conv-mass")
    
   
    
userNum.addEventListener("input", () => {
   
  
   let num = parseInt(userNum.value)
   
   if(userNum.value === ""){
        startNum.innerText = 0
        num = 0
    } else {
        startNum.innerText = userNum.value
    }
   
   let feet = num * 3.281
   let meters = num / 3.281
   let liters = num * 0.219969
   let gallons = num / 0.219969
   let kilo = num * 2.20462
   let pounds = num / 2.20462
   
   let conversionA = ` 
   
      ${num} Meters = ${feet.toFixed(3)} Feet | ${num} Feet = ${meters.toFixed(3)} Meters 
 
   `
     let conversionB = ` 
   
         ${num} Liters = ${liters.toFixed(3)} Gallons | ${num} Gallons = ${gallons.toFixed(3)} Liters 
 
   `
   
   let conversionC = ` 
   
         ${num} Kilograms = ${kilo.toFixed(3)} Pounds | ${num} Pounds = ${pounds.toFixed(3)} Kilograms
 
   `
    
    
   convLength.innerHTML = conversionA
   convVolume.innerHTML = conversionB
   convMass.innerHTML = conversionC
   
})

