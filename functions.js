function myFunction() {
    document.getElementById("mod_time").innerHTML = document.lastModified;
}

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var theme;

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

myFunction()
//darkMode()