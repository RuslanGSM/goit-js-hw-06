const fontSizeControl = document.getElementById('font-size-control');
  const text = document.getElementById('text');

  fontSizeControl.addEventListener('input', function(event) {
    const fontSize = event.target.value;
    text.style.fontSize = `${fontSize}px`;
  });