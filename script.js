window.onload = () => {
  let range = document.createRange();
  let sel = window.getSelection();
  let p = document.getElementById('email');

  range.setStart(p.lastChild, p.lastChild.length); 
  sel.removeAllRanges();
  sel.addRange(range);
}
