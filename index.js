//console.log('ot works');
//hw: make button change text in the heading
function changeh1(){
  const header = document.querySelector('h1')
  header.textContent = "changed"
}
// add multiple heading to the page and make the button change the second one
function changeh2(){
  const header = document.querySelector('h2')
  header.textContent = "Changing the second heading"
}

//add a form to the page, text input in form, update the heading with the text typeed
function changeTitle(ev){
  const header = document.getElementById('input').value
  // debugger
  document.getElementById('h1').innerHTML = header
}
