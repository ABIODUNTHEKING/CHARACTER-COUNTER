let totalCharacter = document.getElementById('total-char')
let remainingCharacter = document.getElementById('remaining-char')
let textbox = document.getElementById("textarea")


remainingCharacter.innerText = textbox.getAttribute('maxlength')

textbox.addEventListener("keyup", ()=>{
    totalCharacter.innerText = textbox.value.length
    let currentLength = +totalCharacter.innerText
    let maxlength = +textbox.getAttribute('maxlength')
    remainingCharacter.innerText =  maxlength - currentLength

})



