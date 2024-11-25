const konverteringButton = document.querySelector('#konverter-button')

const numberInput = document.querySelector("#number")

function konvertering (event) {
    event.preventDefault() 
  
    const number = numberInput.value
  
    const feet = number * 3.2
  
    konverteringButton.textContent = number + " meter = " + feet + " feet"
  
  }
  
  konverteringButton.addEventListener("click", konvertering)
  submitBtn.addEventListener('click', submit);
