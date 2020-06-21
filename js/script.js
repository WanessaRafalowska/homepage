console.log("Hello World");
let button = document.querySelector(".button");
let logo = document.querySelector(".logo");
let body = document.querySelector("body")


button.addEventListener("click", () => {
  if (button.innerText === "Click here to change the backround!") {
    button.innerText = "Bring back the original backround!";
  } else {
    button.innerText = "Click here to change the backround!";
  }
  body.classList.toggle("differentBackround");
});