document.addEventListener('DOMContentLoaded', () => {

    const applyMaskOnChange = (id, regex) => {
        const elementInput = document.querySelector(id)
        const elementButton = document.querySelector(id+"-button")

        elementInput.addEventListener('input', (event) => {
                console.log(event.target.value)

                const isValid = regex.test(event.target.value)
                
                const inputClassToRemove = isValid ? 'is-invalid' : 'is-valid'
                const inputClassToAdd = isValid ? 'is-valid' : 'is-invalid'
                const buttonClassToRemove = isValid ? 'btn-danger' : 'btn-success'
                const buttonClassToAdd = isValid ? 'btn-success' : 'btn-danger'
                const buttonText = isValid ? 'Valid' : 'Invalid'
                
                elementInput.classList.remove(inputClassToRemove)
                elementInput.classList.add(inputClassToAdd)
                elementButton.classList.remove(buttonClassToRemove)
                elementButton.classList.add(buttonClassToAdd)
                elementButton.textContent = buttonText
        })
    }
    applyMaskOnChange('#name', /^[A-Z][a-z]+(\s)[A-Z][a-z]+$/);
    applyMaskOnChange('#email', /^[a-z]+@[a-z]+(\.br)$/);
    applyMaskOnChange('#password', /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8}$/);
    applyMaskOnChange('#cpf', /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/);
    applyMaskOnChange('#phone', /^(\([0-9]{2}\)\s9[0-9]{4}-{0,1}[0-9]{4})|([0-9]{2}\s9[0-9]{8})$/);
    applyMaskOnChange('#date', /^(0[1-9]|[12][0-9]|3[01])[/.](0[1-9]|1[012])[/.]([1-9])\d{3}\s([0-1][0-9]|(2[0-3])):([0-5][0-9]):([0-5][0-9])$/);
    applyMaskOnChange('#number', /^(\+|-){0,1}(\d+|(\d+\.\d+))$/);
})