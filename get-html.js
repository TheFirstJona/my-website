function includeHTML() {
    var theHTMLs, i, elmnt, file, xhttp;
    theHTMLs = document.getElementsByTagName("*"); /*star makes it loop through all html elements*/
    for (i = 0; i < theHTMLs.length; i++) {
      elmnt = theHTMLs[i];
      file = elmnt.getAttribute("w3-include-html"); /* searches for htmls with the w3*/
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
  }
includeHTML();