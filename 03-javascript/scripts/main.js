// Click event handler for the image
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// Local storage handler
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// 设置 onclick 事件处理器，按钮点击时，运行 setUserName() 函数。这样用户就可以通过点击按钮设置新的名字了。
myButton.onclick = function () {
  setUserName();
};

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}