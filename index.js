const PASSWORD = 'password'
const [LIMIT, MIN, MAX] = [12, 33, 126]

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

button.addEventListener('click', () => {
  console.log('I\'m clicked')
  for (let i = 0; i < 4; i++) {
    document.querySelector(`#${PASSWORD}-${i}`).textContent = generateRandomPassword(MIN, MAX, LIMIT)
  }
})



