(() => {
    'use strict';
    const Regstration = document.querySelector('#Regstration');
    Regstration.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!Regstration.checkValidity()) {
            event.stopPropagation();
        }else{
            let data = [...event.currentTarget.elements].filter((ele) => ele.type !== "submit").map((ele) => {
                return ele.value;
            });
            submitRegistration(data);
        }
        Regstration.classList.add('was-validated');
    }, true);
})();

function submitRegistration(data){
     if(data[3] !== data[4]){
        document.getElementById("confirmPassword").value = "";
        alert("Confirm password should be same");
     }else{
        data.forEach(d1 => {
            console.log(d1);            
        });
     }        
}


(() => {
    'use strict';
    const Regstration = document.querySelector('#Login');
    Regstration.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!Regstration.checkValidity()) {
            event.stopPropagation();
        }else{
            let data = [...event.currentTarget.elements].filter((ele) => ele.type !== "submit").map((ele) => {
                return ele.value;
            });
            ProccessLogin(data);
        }
        Regstration.classList.add('was-validated');
    }, true);
})();

function ProccessLogin(data){
    data.forEach(d1 => {
        console.log(d1);            
    });       
}