function navToggle() {
    var i = document.getElementById("my-top-nav");
    if (i.className === "top-nav") {
      i.className += " responsive";
    } else {
      i.className = "top-nav";
    }
  }