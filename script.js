const h1element = document.querySelector('h1')
const h2element = document.querySelector('h2')
const h1 = document.querySelector('#hello')
const container = document.querySelector('#container')
for (i = 0; i < 10; i++) {
  let card = document.createElement('div')
  card.classList.add('card')
  card.innerText = Math.floor(Math.random() * 6) + 1
  container.append(card)
}

h1element.addEventListener('click', () => {
  let card = document.createElement('div')
  card.classList.add('card')
  card.innerText = Math.floor(Math.random() * 6) + 1
  container.append(card)
})
h2element.addEventListener('click', function clickkezelo() {
  alert('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
})
