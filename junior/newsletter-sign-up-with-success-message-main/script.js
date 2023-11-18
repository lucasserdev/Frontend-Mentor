function clicar() {
    let emailInput = document.getElementById('iemail')
    let msgInvalid = document.getElementById('error')

    let email = emailInput.value
    let encontrar = email.indexOf('@')

    if (encontrar == -1){
        msgInvalid.innerHTML = 'Valid email required'
        
    } else {
        msgInvalid.innerHTML = 'Tudo ok'
    }
    
}