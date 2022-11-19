let userInput = document.querySelectorAll('button')
let options = ['rock', 'paper', 'scissor']
let randomNumber = Math.floor(Math.random() * 3)
let attempts = parseInt(1)
let score = parseInt(100)

//console.log(randomNumber)

userInput.forEach(button=>{
    button.addEventListener('click', ()=>{
        let computerPick = options[randomNumber]
        if (computerPick == button.innerText.toLowerCase()){
            document.querySelector('h2').innerHTML = `Waoh!! Congratulations,
             You picked ${button.innerText.toUpperCase()} while the Computer also picked ${computerPick.toUpperCase()}`;

            document.querySelector('h3').innerHTML = `You scored ${score} in :${attempts} attempts.`
             

        }else{
            
            document.querySelector('h2').innerHTML = `Oops!! We are sorry,
             you did not get it. You picked ${button.innerText.toUpperCase()} 
             while the Computer picked ${computerPick.toUpperCase()}`
             document.querySelector('h3').innerHTML = `${attempts ++} attempts!
             `
             score --;
            document.createElement('h3').innerHTML = `Score= ${score}`
            
        }
    })
})