document.getElementById('konverter-button').addEventListener('click', function() {
  const inches = document.getElementById('number').value;
  
  if (inches) {
    // Convert inches to centimeters (1 inch = 2.54 cm)
    const centimeters = (inches * 2.54).toFixed(2);

    // Convert inches to decimeters (1 inch = 0.254 cm)
    const decimeters = (inches * 0.254).toFixed(2);
    
     // Convert inches to meters (1 inch = 0.0254 cm)
     const meters = (inches * 0.0254).toFixed(2);
    // Display the result
    document.getElementById('result').textContent = `${inches} tommer er lik ${centimeters} cm, ${decimeters} dm og ${meters} m.`;
    document.getElementById('result-container').style.display = 'block';
  } else {
    alert('Vennligst skriv inn et gyldig nummer.');
  }
});
