// Chuck Norris App

// All buttons
const catBtn = document.querySelectorAll('.catBtn')
// Search Text
const searchText = document.getElementById('searchText')
// Search Button
const searchBtn = document.getElementById('searchBtn')
// Joke Display
const jokeDisplay = document.getElementById('jokeDisplay')

//Get Joke Function
function getJoke(url) {
  fetch(url)
    .then((prom) => prom.json())
    .then((res) => (jokeDisplay.innerHTML = res.value))
}

// Category Joke
function addEvent() {
  catBtn.forEach((cat) =>
    cat.addEventListener('click', () => {
      joke = cat.id
      let url = `https://api.chucknorris.io/jokes/random?category=${joke}`
      getJoke(url)
    })
  )
}
addEvent()
