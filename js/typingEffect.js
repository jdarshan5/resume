let i = 0;
const DATA = "Hello, I'm Darshan Javiya.";
const SPEED = 100;

function typeWriter() {
  if (i < DATA.length) {
    document.getElementById("name").innerHTML += DATA.charAt(i);
    i++;
    setTimeout(typeWriter, SPEED);
  }
}