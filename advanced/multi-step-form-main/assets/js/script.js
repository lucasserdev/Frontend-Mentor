let nextButton = document.querySelector('.next');
let backButton = document.querySelector('.back');
let choosePlan = '';

let personal = document.querySelector('.personal-info');
let selectPlan = document.querySelector('.select-plan');
let addOns = document.querySelector('.add-ons');

// Step 1

function firstStep() {
    if(personal.style.display == 'block') {
        document.querySelector('[data-type="um"]').classList.add('active');
        document.querySelector('[data-type="dois"]').classList.remove('active');
        document.querySelector('.back').style.display = 'none';
        document.querySelector('.buttons').style.justifyContent = 'flex-end'
    }

    nextButton.addEventListener('click', ()=> {
        let name = document.querySelector('#name').value;
        let lName = document.querySelector('label[for="name"]');

        let email = document.querySelector('#email').value;
        let lEmail = document.querySelector('label[for="email"]');

        let phone = document.querySelector('#phone').value;
        let lPhone = document.querySelector('label[for="phone"]');

        let pass = 0

        // INPUT NAME
        if(name.trim().length < 1) {
            lName.querySelector('.error-field').style.display = 'block';
            document.querySelector('.nfield').style.border = '1px solid red';
        } else {
            lName.querySelector('.error-field').style.display = 'none';
            document.querySelector('.nfield').style.border = '1px solid var(--Cool-gray)';
            pass++
        }
        
        // INPUT EMAIL
        if(email.trim().length < 1) {
            lEmail.querySelector('.error-field').style.display = 'block';
            document.querySelector('.efield').style.border = '1px solid red';
        } else {
            lEmail.querySelector('.error-field').style.display = 'none';
            document.querySelector('.efield').style.border = '1px solid var(--Cool-gray)';
            pass++
        }


        // INPUT PHONE
        if(phone.trim().length < 1) {
            lPhone.querySelector('.error-field').style.display = 'block';
            document.querySelector('.pfield').style.border = '1px solid red';
        } else {
            lPhone.querySelector('.error-field').style.display = 'none';
            document.querySelector('.pfield').style.border = '1px solid var(--Cool-gray)';
            pass++
        }

        if(pass == 3){
            personal.style.display = 'none';
            selectPlan.style.display = 'block';
            secondStep();
        }

       
    })

}

// Step 2

function secondStep() {
    if(selectPlan.style.display == 'block') {
        document.querySelector('[data-type="um"]').classList.remove('active');
        document.querySelector('[data-type="dois"]').classList.add('active');
        document.querySelector('.back').style.display = 'block';
        document.querySelector('.buttons').style.justifyContent = 'space-between'
    }

    let contentSquare = document.querySelector('.select-plan .content');
    contentSquare.addEventListener('click', (e) => {
        let typePlan = e.target.getAttribute('data-type');
        let elementSquare = document.querySelector(`.square[data-type="${typePlan}"]`);
        
        if(elementSquare.classList.contains('active-plan')) {
            elementSquare.classList.remove('active-plan');
            elementSquare.style.border = '1px solid var(--Cool-gray)';
            choosePlan = '';
        } else {
            contentSquare.querySelectorAll('.square').forEach((square) => {
                square.classList.remove('active-plan');
                square.style.border = '1px solid var(--Cool-gray)';
            })
            elementSquare.classList.add('active-plan');
            elementSquare.style.border = '1px solid var(--Purplish-blue)';
            choosePlan = elementSquare.querySelector('.price').textContent;
        }  
    })

    nextButton.addEventListener('click', () => {
        if(choosePlan.length < 1) {
            alert('Selecione um plano');
            secondStep();
        } else {
            selectPlan.style.display = 'none';
            addOns.style.display = 'block';
            thirdStep();
        }
    })

    backButton.addEventListener('click', () => {
        location.reload();
    })


    

    
}

// Step 3

function thirdStep() {
    if(addOns.style.display == 'block') {
        document.querySelector('[data-type="um"]').classList.remove('active');
        document.querySelector('[data-type="dois"]').classList.remove('active');
        document.querySelector('[data-type="quatro"]').classList.remove('active');
        document.querySelector('[data-type="tres"]').classList.add('active');
        document.querySelector('.back').style.display = 'block';
        document.querySelector('.buttons').style.justifyContent = 'space-between';
    }

    let addOnsContent = document.querySelector('.add-ons .content');
    
}


firstStep();