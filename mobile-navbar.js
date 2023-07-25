function myFunction() {
    var x = document.getElementById("my-top-nav");
    if (x.className === "top-nav") {
      x.className += " responsive";
    } else {
      x.className = "top-nav";
    }
  }