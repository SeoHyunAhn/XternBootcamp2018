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
  const ul = document.createElement('dl');
  Object.keys(user).map(key => {
    const item = renderListIterm(key, user[key])
    ul.appendChild(item)
  })
  return ul
}

function renderListIterm(ul, items) {
  const li = document.createElement('li')
  const term = document.createElement('dt')
  term.textContent = ul
  const desc = document.createElement('dd')

  // li.textContent = `${ul}: `
  try {
    desc.appendChild(items)
  } catch (e) {
    desc.textContent += items
  }
  li.appendChild(term)
  li.appendChild(desc)
  return li;
}

function renderColor(color) {
  const colordiv = document.createElement('div')
  colordiv.style.backgroundColor = color
  colordiv.style.width = '6rem'
  colordiv.style.height = '3rem'
  return colordiv;
}


// const doTheThing=()=>{}
