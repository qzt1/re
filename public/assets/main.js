var input = document.querySelector('#url');
var body = document.querySelector('body')

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`/prox/?url=${btoa(input.value)}`);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    body.innerHTML = `<iframe class="emPage" src="/prox/?url=${btoa(input.value)}"></iframe>`
    
});

console.log(body.innerHTML)