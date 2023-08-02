function navToggle() {
    var i = document.getElementById("the-top-nav");
    if (i.className === "top-nav") {
      i.className += " responsive";
    } else {
      i.className = "top-nav";
    }
  }