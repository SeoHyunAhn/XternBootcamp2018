//console.log('ot works');
//hw: make button change text in the heading
function changeh1() {
  const header = document.querySelector('h1')
  header.textContent = "changed"
}
// add multiple heading to the page and make the button change the second one
function changeh2() {
  const header = document.querySelector('h2')
  header.textContent = "Changing the second heading"
}

//add a form to the page, text input in form, update the heading with the text typeed
function changeTitle(ev) {
  const header = document.getElementById('input').value
  // debugger
  document.getElementById('h1').innerHTML = header
}

const form = document.querySelector('form#userForm')
const handlesubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')

  const ul = document.createElement('ul');
  const li = document.createElement('li')
  li.textContent = `Name: ${ev.target.userName.value}`

  const age = document.createElement('li')
  age.textContent = `age: ${form.age.value}`

  const color = document.createElement('li')
  color.textContent = `color: ${form.favoriteColor.value}`
  ul.appendChild(li)
  ul.appendChild(age)
  ul.appendChild(color)
  // li.textContent +=`Age: ${form.age.value}, ${form.favoriteColor.value}`
  users.appendChild(ul)

  // const p = document.createElement('p');
  // p.style.backgroundColor = form.favoriteColor.value
  // p.textContent = `${ev.target.userName.value}, ${form.age.value}, ${form.favoriteColor.value}`
  // users.appendChild(p)
  // users.innerHTML += `<p>${ev.target.userName.value}, ${form.age.value}</p>`
  form.reset()
  form.userName.focus()
}
form.addEventListener('submit', handlesubmit)
