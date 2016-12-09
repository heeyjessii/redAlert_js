console.log("Sanity Check");

function hello() {
  console.log("hello");
  var changeDiv = document.getElementById("divElement");
  changeDiv.innerHTML = "Wat";
  console.log(changeDiv);
}

function soFast(){
  console.log("Hello");
  var classElements = document.getElementByClassName('firstPeriod');
  console.log(classElements);
  classElements[0].innerHTML = "wat";
  //classElements.querySelectorAll().innerHTML= "Wat";
}

//called an event listener