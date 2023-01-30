function myFunction() { //This function is to return last time it was modified
    document.getElementById("mod_time").innerHTML = document.lastModified;
}

var theme; //this variable is global so that textChange() can access it
function darkMode() { //This function is to enable toggle on/off for dark mode
  var element = document.body;
  element.classList.toggle("dark-mode");
  

  if(element.classList.contains("dark-mode")){
    console.log("Dark Mode");
    theme="DARK"
  }else{
    console.log("Light Mode");
    theme="LIGHT"
  }

  localStorage.setItem("PageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

if(GetTheme === "DARK"){
  document.body.classList = "dark-mode";
}

function textChange(){ //This function changes the text on the button to show whether dark mode is on/off
  var y = document.getElementById("buttonDIV");
  if(theme == "DARK"){
    y.innerHTML = "Dark Mode On";
  }else{
    y.innerHTML = "Dark Mode Off";
  }
}

myFunction()