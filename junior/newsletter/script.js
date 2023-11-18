function clicar() {
    let emailInput = document.getElementById('iemail')
    let msgInvalid = document.getElementById('error')
    let sub = document.getElementById('sub')
    let principal = document.getElementById('principal')
    let myemail = document.getElementById('myemail')

    let email = emailInput.value
    let encontrar = email.indexOf('@')

    if (encontrar == -1){
        msgInvalid.innerHTML = 'Valid email required'
        emailInput.style.background = 'rgba(255, 98, 87, 0.288)'
        emailInput.style.color = 'rgb(255, 98, 87)'
        emailInput.style.border = '1px solid rgb(255, 98, 87)'
        
    } else {
        sub.style.display = 'block'
        principal.style.display = 'none'
        myemail.innerHTML = `<strong>${email}</strong>`
    }
    
}