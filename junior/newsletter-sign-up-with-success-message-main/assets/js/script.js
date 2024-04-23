document.querySelector('.right-body button').addEventListener('click', enviar);
document.querySelector('.dismiss button').addEventListener('click', () => {
    location.reload();
})

function enviar() {
    let email = document.querySelector('#email').value;
    if(email.indexOf('@') !== -1) {
        document.querySelector('.dismiss').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
        document.querySelector('.dismiss p span').innerHTML = `<strong>${email}</strong>`
    } else {
        document.querySelector('#email').style.border = '1px solid hsl(4, 100%, 67%)';
        document.querySelector('#email').classList.add('error');
        document.querySelector('.address span').style.display = 'block';
    }
}