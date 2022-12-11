function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    var x = document.getElementById("openbtn");
    if (x.style.display === "none") {
        x.style.display = "block"; 
    } else {
        x.style.display = "none";
    }
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    var x = document.getElementById("openbtn");
    if (x.style.display === "none") {
        x.style.display = "block"; 
    } else {
        x.style.display = "none";
    }
  }

