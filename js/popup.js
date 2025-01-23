const token = "e4e24883b03b7cf84d3f4079a52b044d99d5f698b18a089c1cd00bdb567bb4b8"
let valideBtn = document.querySelector("#validBtn")
let input = document.querySelector ("#champs")
let textContent = document.querySelector("#contentText")
let userName = chrome.storage.local.get(["user"]) || ""
let userCity =""

function whatUser() {
    valideBtn.addEventListener ('click', () => {
        userName = input.value
        console.log(userName)
        chrome.storage.local.set({user : userName})
        textContent.innerText = `Bonjour ${userName}, quel est le nom de ta ville ?`
        whatCity()
      },{ once: true })
}

function whatCity() {
    input.value = ""
    valideBtn.addEventListener ('click', () => {
        userCity = input.value
        console.log(userCity)
        chrome.storage.local.set({city : userCity})
        textContent.innerText =""
        valideBtn.style.display = "none"
        input.style.display ="none"
        loadPage()

    },{ once: true })
}

function loadPage() {
    textContent.innerText = `Bonjour ${userName}, tu habites à ${userCity}`
}

whatUser()