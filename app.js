var secretCode = '';
document.addEventListener('keydown', function(event) {
  if (event.keyCode >= 49 && event.keyCode <= 53) {
    secretCode += String.fromCharCode(event.keyCode);
    if (secretCode === '12345') {
      window.location.href = 'secret.html';
    }
  }
});
