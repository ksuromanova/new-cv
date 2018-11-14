function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("container").style.display = "block";
}

var angleBorder = document.getElementsByClassName("angle-border-top");
for(i=0; i<angleBorder.length; i++) {
  var bottomAngle = document.createElement("span");
  angleBorder[i].appendChild(bottomAngle).classList.add('angle-border-bottom');
  }

function displayData(param) {
  
  var menuItems=param.parentNode.getElementsByTagName('li');  
  var dataItems=param.parentNode.parentNode.parentNode.getElementsByTagName('section');   
 
  for(var i=0;i<menuItems.length; i++)
  {      
    menuItems[i].className=param==menuItems[i]?'active':'';
    dataItems[i].className=param==menuItems[i]?'active':'';
      
  }
}

function changeTheme() {
  var element =  document.getElementsByTagName("body");
 
  for(i=0; i<element.length; i++) {
    if(element[i].classList.contains('night')) {
      element[i].classList.remove('night');
      element[i].classList.add('day');
    } else {
      element[i].classList.remove('day');
      element[i].classList.add('night');
    }
  }
}

function toogleMenu() {
  var elementsMenu = document.getElementsByClassName("menu-item");  
  for(i=0; i<elementsMenu.length; i++) {
    elementsMenu[i].classList.toggle("open");
  }
  var menubar = document.getElementById("menu-toggle");
  menubar.classList.toggle("open");
}
