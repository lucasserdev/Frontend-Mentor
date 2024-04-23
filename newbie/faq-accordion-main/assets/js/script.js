document.querySelectorAll('.faq').forEach(item => {
    item.addEventListener('click', clicou);
})

function clicou(e) {
    let storage = e.target.getAttribute('id');
    let b = document.querySelector(`.${storage}`);
    if(b.style.display == 'none') {
        b.style.display = 'block';
        document.querySelector(`#${storage}`).setAttribute('src', 'assets/images/icon-minus.svg');
    } else {
        b.style.display = 'none';
        document.querySelector(`#${storage}`).setAttribute('src', 'assets/images/icon-plus.svg');
    }
}