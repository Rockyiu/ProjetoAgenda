import validator from 'validator';

export default class Login {
    constructor(formClass){
        this.form = document.querySelector(formClass);
    }

    inti(){
        this.events();

    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate();
        });
    }

    validate() {
        const el = e.target;
        const emailInput = el.querySelector('input[name = "email"]');
        const passwordInput = el.querySelector('input[name = "password"]');
        let error = false;
        if(!validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if(passwordInput.value.length < 8 || passwordInput.value.length > 50) {
            alert('Senha precisa ter entre 8 e 50 caracteres');
            error = true;
        }
        if(!error) el.submit();
    }
}