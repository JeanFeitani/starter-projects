import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notAnumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.oninput = () => {AlertError.close()}
inputHeight.oninput = () => {AlertError.close()}

form.onsubmit = event => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value
    
    inputWeight.value = ''
    inputHeight.value = ''

    const weightOrHeightIsNotAnumber = notAnumber(weight) || notAnumber(height)
    
    if (weightOrHeightIsNotAnumber) {
        AlertError.open()
        return;
    }
    

    AlertError.close()
    
    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}

function displayResultMessage(result){


    const message = `Seu IMC é ${result}`
    Modal.message.innerText = message
    Modal.open()
}

