// {/* <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// /> */}

const refs = {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur', onInputBlur);



function onInputBlur(event) {
    const inputLength = Number(refs.input.dataset.length); 
    
    if(event.currentTarget.value.length === inputLength) {
        refs.input.classList.add('valid');
        refs.input.classList.remove('invalid');
    } else {
        refs.input.classList.add('invalid')
        refs.input.classList.remove('valid');
    };
}



