let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");

stopButton.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
  let clickRed = (stopLight.classList.contains("stop"));
  if (clickRed === true){
    console.log(`${event.target.textContent} bulb on`);
  } else {
    console.log(`${event.target.textContent} bulb off`);
  }
});


let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");

slowButton.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
  let clickYellow = (slowLight.classList.contains("slow"));
  if (clickYellow === true){
    console.log(`${event.target.textContent} bulb on`);
  } else {
    console.log(`${event.target.textContent} bulb off`);
  }
});

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");

goButton.addEventListener("click", function () {
  goLight.classList.toggle("go");
  let clickGreen = (goLight.classList.contains("go"));
  if (clickGreen === true){
    console.log(`${event.target.textContent} bulb on`);
  } else {
    console.log(`${event.target.textContent} bulb off`);
  }
});

function handleMouseEntered(event){
  console.log(`Entered ${event.target.textContent} button`);
}
function handleMouseLeft(event){
  console.log(`Left ${event.target.textContent} button`);
}


stopButton.addEventListener("mouseenter",  handleMouseEntered);
slowButton.addEventListener("mouseenter",  handleMouseEntered);
goButton.addEventListener("mouseenter",  handleMouseEntered);

stopButton.addEventListener("mouseleave", handleMouseLeft);
slowButton.addEventListener("mouseleave", handleMouseLeft);
goButton.addEventListener("mouseleave", handleMouseLeft);

