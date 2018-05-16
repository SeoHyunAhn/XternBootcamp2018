const form = document.querySelector('form#userForm')
let index = 0;
const handlesubmit = function(ev) {
  ev.preventDefault()
  const users = document.querySelector('#users')
  const user = {
    name: form.userName.value,
    age: form.age.value,
    favoriteColor: renderColor(form.favoriteColor.value),
  }

  users.appendChild(renderList(user))
  form.reset()
  form.userName.focus()
}
form.addEventListener('submit', handlesubmit)

function renderList(user) {
  const ul = document.createElement('ul');
  Object.keys(user).map(function(key) {
    const item = renderListIterm(key, user[key])
    ul.appendChild(item)
  })
  return ul
}

function renderListIterm(ul, items) {
  const li = document.createElement('li')
  li.textContent = `${ul}: `
  try {
    li.appendChild(items)
  } catch (e) {
    li.textContent += items
  }
  return li;
}

function renderColor(color) {
  const colordiv = document.createElement('div')
  colordiv.style.backgroundColor = color
  colordiv.style.width = '6rem'
  colordiv.style.height = '3rem'
  return colordiv;
}
