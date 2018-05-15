const form = document.querySelector('form#userForm')
const ul = document.createElement('ul');
let index = 0;
const handlesubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const name = ev.target.userName.value
  const age = form.age.value
  const color = form.favoriteColor.value
  renderListIterm(name)
  renderListIterm(age)
  renderListIterm(color)
  users.appendChild(ul)
  form.reset()
  form.userName.focus()
}
form.addEventListener('submit', handlesubmit)

function renderListIterm(items) {
  const list = ["Name: ", "Age: ", "Color: "]
  let flag = 0;
  const li = document.createElement('li')
  li.textContent = `${list[index]} ${items}`
  if (list[index] == "Color: ") {
    li.appendChild(renderColor(items))
    flag = 1;
  }
  ul.appendChild(li)
  index += 1;
  if (flag == 1) {
    index = 0;
  }
}

function renderColor(color) {
  const colordiv = document.createElement('div')
  colordiv.style.backgroundColor = color
  colordiv.style.width = '6rem'
  colordiv.style.height = '3rem'
  return colordiv;
}
