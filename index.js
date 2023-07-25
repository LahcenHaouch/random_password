const PASSWORD = "password";
const [NUM_PASSWORDS, LIMIT, MIN, MAX] = [2, 12, 33, 126];

const gridItems = document.querySelectorAll(".grid-item");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateRandomPassword(min, max, limit) {
  let password = "";

  for (let i = 0; i < limit; i++) {
    password += String.fromCharCode(getRandomIntInclusive(min, max));
  }

  return password;
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
  gridItems.forEach((item) => {
    item.textContent = generateRandomPassword(MIN, MAX, LIMIT);
  });
});
