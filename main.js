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

// Free Text Joke
searchBtn.addEventListener('click', getFreeTextJoke)

function getFreeTextJoke() {
    let userText = searchText.value

    if (userText !== '') {
      fetch(`https://api.chucknorris.io/jokes/search?query=${userText}`)
        .then((prom) => prom.json())
        .then((res) => {
          let totalJoke = res.total
          let randomJoke = Math.floor(Math.random() * totalJoke)
          let categoryType = res.result[randomJoke].categories[0]

          if (
            randomJoke >= 0 &&
            res.result.length !== 0 &&
            categoryType !== 'explicit' &&
            categoryType !== 'political' &&
            categoryType !== 'religion'
          ) {
            jokeDisplay.innerHTML = res.result[randomJoke].value
          } else {
            jokeDisplay.innerHTML = `There is no joke for the entered word or it belongs to the prohibited category, please try again.`
          }
        })
    }
    searchText.value = ''
}

// Random Joke
function getRandomJoke() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((prom) => prom.json())
    .then((res) => {
      let categoryType = res.categories[0]
      if (
        categoryType !== 'explicit' &&
        categoryType !== 'political' &&
        categoryType !== 'religion'
      ) {
        jokeDisplay.innerHTML = res.value
      } else {
        location.reload()
      }

    })
}
getRandomJoke()