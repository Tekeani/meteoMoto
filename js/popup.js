const token = "e4e24883b03b7cf84d3f4079a52b044d99d5f698b18a089c1cd00bdb567bb4b8"
let valideBtn = document.querySelector("#validBtn")
let input = document.querySelector ("#champs")

valideBtn.addEventListener ('click', () => {
    let userName = input.value
    console.log(userName)
})