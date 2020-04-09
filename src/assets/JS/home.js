function copyEmail() {
  //Creates textarea
  let area = document.createElement('textarea');
  //Puts value into the textarea
  area.value = "js404839@dal.ca";
  //Puts the textarea onto the DOM
  document.body.appendChild(area);
  //Highlights and selects the text in the textarea
  area.select();
  document.execCommand('copy');
  document.body.removeChild(area);
  alert("Copied Joshua's email to your clipboard!");
}
