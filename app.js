//html
const allElements = document.querySelectorAll("*")

const mainBox = document.createElement("div")
mainBox.classList.add("container")
document.body.appendChild(mainBox)

const quoteBox = document.createElement("div")
quoteBox.classList.add("quoteBox")
mainBox.appendChild(quoteBox)

const quote = document.createElement("div")
quote.classList.add("quote")
quoteBox.appendChild(quote)

const quoteContent = document.createElement("p")
quoteContent.classList.add("quoteContent")
quote.appendChild(quoteContent)

const author = document.createElement("div")
author.classList.add("author")
quoteBox.appendChild(author)

const authorContent = document.createElement("p")
authorContent.classList.add("authorContent")
author.appendChild(authorContent)

const randomButton = document.createElement("i")
randomButton.classList.add("bx")
randomButton.classList.add("bx-loader")
mainBox.appendChild(randomButton)

//css

for (let i = 0; i < allElements.length; i++) {
    allElements[i].style.margin = 0
    allElements[i].style.padding = 0
    allElements[i].style.boxSizing = "border-box"
    allElements[i].style.fontFamily = "Helvetica, sans-erif"
}

document.body.style.backgroundColor = "rgb(255, 0, 0)"
document.body.style.display = "flex"
document.body.style.alignItems = "center"
document.body.style.justifyContent = "center"
document.body.style.width = "100%"
document.body.style.height = "100vh"
document.body.style.transition = "background-color ease-in-out 0.5s"

mainBox.style.backgroundColor = "white"
mainBox.style.width = "45%"
mainBox.style.height = "200px"
mainBox.style.boxShadow = "3px 3px 11px 1px rgba(0,0,0,0.75)"
mainBox.style.borderRadius = "10px"
mainBox.style.textAlign = "center"
mainBox.style.position = "relative"

quoteBox.style.width = "90%"
quoteBox.style.margin = "0 auto"
quoteBox.style.textAlign = "center"

quote.style.width = "100%"
quote.style.marginBottom = "2px"

quoteContent.style.width = "100%"
quoteContent.style.fontSize = "20px"

author.style.width = "100%"
author.style.textAlign = "right"

authorContent.style.width = "100%"
authorContent.style.fontSize = "16px"

randomButton.style.position = "absolute"
randomButton.style.bottom = "10%"
randomButton.style.left = "5%"
randomButton.style.fontSize = "50px"
randomButton.style.cursor = "pointer"

//js
const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

//API Çağırma
fetch(url)
.then(response => response.json())
.then(data => {
    //Rastgele söz
    let randomNumberQuote = Math.floor(Math.random() * data["quotes"].length) + 1
    quoteContent.innerHTML = `<strong>"</strong>${data["quotes"][randomNumberQuote]["quote"]}<strong>"</strong>`
    authorContent.innerHTML = `-${data["quotes"][randomNumberQuote]["author"]}`
    //Buton Fonksiyonu
    randomButton.addEventListener("click", () => 
    {let number = Math.floor(Math.    random() * data["quotes"].length) + 1
    console.log(number)
    quoteContent.innerHTML = `<strong>"</strong>${data["quotes"][number]["quote"]}<strong>"</strong>`
    authorContent.innerHTML = `-${data["quotes"][number]["author"]}`
    //Renk Değişimi
    let r = Math.floor(Math.random() * 255) + 1
    let g = Math.floor(Math.random() * 255) + 1
    let b = Math.floor(Math.random() * 255) + 1
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    })
})