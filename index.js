const PASSWORD = 'password'
const [NUM_PASSWORDS, LIMIT, MIN, MAX] = [4, 12, 33, 126]

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomPassword(min, max, limit) {
  let password = ''

  for (let i = 0; i < limit; i++) {
    password += String.fromCharCode(getRandomIntInclusive(min, max))
  }

  return password
}

const button = document.querySelector('button')
const passwordsContainer = document.querySelector('.passwords-container')

button.addEventListener('click', () => {
  passwordsContainer.innerHTML = ''

  for (let i = 0; i < NUM_PASSWORDS; i++) {
    passwordsContainer.insertAdjacentHTML('beforeend', `<div><p class="grid-item">${generateRandomPassword(MIN, MAX, LIMIT)}</p></div>`)
  }
})
