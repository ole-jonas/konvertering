document.getElementById('konverter-button').addEventListener('click', function() {
  const inches = document.getElementById('number').value;
  
  if (inches) {
    // Convert inches to centimeters (1 inch = 2.54 cm)
    const centimeters = (inches * 2.54).toFixed(2);
    
    // Display the result
    document.getElementById('result').textContent = `${inches} tommer er lik ${centimeters} cm.`;
    document.getElementById('result-container').style.display = 'block';
  } else {
    alert('Vennligst skriv inn et gyldig nummer.');
  }
});
