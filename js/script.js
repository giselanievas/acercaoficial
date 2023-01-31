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




const formulario = document.getElementById('formulario');

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userTelefono = document.getElementById('userTelefono');
const regUserTelefono = / ^\d{10}$/;
const regUserName = /[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
const regUserEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const alertSuccess = document.getElementById('alertSuccess');
const alertEmail = document.getElementById('alertEmail');
const alertName = document.getElementById('alertName');
const alertTelefono = document.getElementById('alertTelefono');







const mostrarAlertExito = () =>{

    alertSuccess.classList.remove("d-none");
    alertSuccess.innerHTML = "Mensaje enviado con éxito";
  
    
}



const mostrarAlertError = (errores) => {
   
    errores.forEach((item) =>{
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
       
        
    });
};





formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
  
    alertSuccess.classList.add("d-none");

    const errores = [];

    if (!regUserName.test(userName.value)|| !userName.value.trim() ){
           
            errores.push({
            tipo: alertName,
            msg:"Formato no válido en el campo nombre, solo letras",
                  
        });
       
             
       } else{
            alertName.classList.add('d-none');
    
       }
    if (!regUserTelefono.test(userTelefono.value)|| !userTelefono.value.trim() ){
           
            errores.push({
            tipo: alertTelefono,
            msg:"Formato de teléfono inválido",
                  
        });
       
             
       } else{
            alertTelefono.classList.add('d-none');
    
       }

    if (!regUserEmail.test(userEmail.value)|| !userEmail.value.trim() ){
      
        errores.push({
            tipo: alertEmail,
            msg:"Escriba un correo válido",
        });

        } else{
             alertEmail.classList.add('d-none');
         
        }

          if(errores.length !== 0){
            mostrarAlertError(errores)
          
            return;
           } else{
            mostrarAlertExito();

           }

       
            
    }
  
  
   
);








