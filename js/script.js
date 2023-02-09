//Interación de Modales //
const cerrar = document.querySelectorAll('#cerrar');
const  modal_container = document.querySelectorAll('#modal_container');
const abrir = document.querySelectorAll('#abrir');

for(let i= 0; i < abrir.length; i++){
      abrir[i].addEventListener('click', function(){
        modal_container[i].classList.add('show');
        });
      cerrar[i].addEventListener('click', function(){
        modal_container[i].classList.remove('show');
      });  

};

//Fin de interaccion de Modales //

// Script de formulario//














/***SCROLL */

const toTop = (() => {
  let button = document.getElementById("toTop");
  window.onscroll = () => {
    button.classList[
        (document.documentElement.scrollTop > 200) ? "add" : "remove"
      ]("is-visible")
  }
  button.onclick = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }
})();
/**FIN SCROLL */



/****FORMULARIO DE ENVIO */
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        const buttonSubmit = form.querySelector('button.button-submit');

        buttonSubmit.addEventListener('click', event => {
        })
        form.addEventListener('submit', async (event) => {
            event.preventDefault()
            event.stopPropagation()
            if (!form.checkValidity()) {
                form.querySelector("div.acerca-alert-invalid").classList.remove("visually-hidden");
                form.classList.add('was-validated')
            } else {
                form.querySelector("div.acerca-alert-invalid").classList.add("visually-hidden");
                form.querySelector("div.acerca-alert-error").classList.add("visually-hidden");
                const spinner = document.createElement('SPAN');
                spinner.classList.add('spinner-border');
                spinner.classList.add('spinner-border-sm');
                while (buttonSubmit.firstChild) {
                    buttonSubmit.removeChild(buttonSubmit.firstChild);
                }
                buttonSubmit.appendChild(spinner);
                buttonSubmit.appendChild(document.createTextNode(' Enviando...'))
                const data = new FormData(event.currentTarget);

                let goodResponse = true;
                const resData = await fetch('http://acerca.grupodev:1717', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(Object.fromEntries(data))
                })
                    .then(r => {
                        if (r.status != 200) {
                            throw new Error('');
                        }
                        return r.json();
                    })
                    .catch(() => { goodResponse = false; });
                if (goodResponse) {
                    form.querySelector("div.acerca-alert-success").classList.remove("visually-hidden");
                    form.reset();
                    form.classList.remove('was-validated')
                    setTimeout(() => {
                        form.querySelector("div.acerca-alert-success").classList.add("visually-hidden");
                    }, 5000)
                } else {
                    form.querySelector("div.acerca-alert-error").classList.remove("visually-hidden");
                }
                while (buttonSubmit.firstChild) {
                    buttonSubmit.removeChild(buttonSubmit.firstChild);
                }
                buttonSubmit.appendChild(document.createTextNode('Enviar'))
            }

        }, false)
    })
})()

/***FORMULARIO DE ENVIO */


