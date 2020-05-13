function getContent(elementId, fileName) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      document.getElementById(elementId).innerHTML = xhttp.responseText;
    }
  };
  xhttp.open('GET', fileName, true);
  xhttp.send();
}
setTimeout(() => {
  getContent('content', 'content.html');
}, 3000);
