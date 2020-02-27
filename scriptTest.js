
let paragraph = document.getElementById('para1');
let okButton = document.getElementById('ok-button');
paragraph.style.display = 'none';
okButton.addEventListener('click', function() {
  // paragraph.innerText = 'Button clicked!';
  paragraph.style.display = 'block';
});
// paragraph.innerText = 'Hello World!';