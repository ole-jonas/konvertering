const konverteringButton = document.querySelector('#konverter-button')

const numberInput = document.querySelector("#number")

function konvertering (event) {
    event.preventDefault() 
  
    const number = numberInput.value
  
    const cm = number * 2.54
  
    konverteringButton.textContent = number + " Tommer = " + cm + " Cm"
  
  }
  
  konverteringButton.addEventListener("click", konvertering)
  submitBtn.addEventListener('click', submit);
