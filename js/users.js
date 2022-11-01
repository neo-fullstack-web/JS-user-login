const adminUser = {
    name: `John Doe`,
    email: `johndoe@gmail.com`,
    password: `alfabeta`,
    active: true,
    role: `ADMIN_ROLE`
}

const usersOriginal = JSON.parse(localStorage.getItem('users')) || [];

console.log(usersOriginal)
if(usersOriginal.length === 0) {
    usersOriginal.push(adminUser);
    localStorage.setItem('users', JSON.stringify(usersOriginal))
}

const users = [
    {
        name: `John Doe`,
        email: `johndoe@gmail.com`,
        password: `alfabeta`,
        active: true,
        role: `ADMIN_ROLE`
    },
    {
        name: `Jose Perez`,
        email: `joseperez@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`
    },
    {
        name: `Usuario Inactivo`,
        email: `inactivo@gmail.com`,
        password: `1234`,
        active: false,
        role: `USER_ROLE`
    },
    {
        name: `Maria Gimenez`,
        email: `mariagimenez@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`

    },
    {
        name: `Eusebio Cobos`,
        email: `eusebio@gmail.com`,
        password: `alfabeta`,
        active: false,
        role: `USER_ROLE`
    },
    {
        name: `Usuario Registrado`,
        email: `usuario@gmail.com`,
        password: `1234`,
        active: true,
        role: `USER_ROLE`
    }
];

const user = JSON.parse(localStorage.getItem('currentUser'));
if(user) window.location.href = `/index.html`
// // loginDataSaved y si existe prerellenas el formulario
// // Obtener el botón de ingresar y habilitarlo según el formulario sea válido
// Obtener el formulario desde JS y guardarlo en una variable
const loginForm = document.querySelector('#login-form');
// Debería escuchar el evento submit
loginForm.addEventListener('submit', (evt)=> {
    // if(loginForm.checkValidity() === false) return    // ** Si usamos el validador de boostrap y aplicamos el "novalidate" al html del form
    evt.preventDefault();
    // Obtener lo que el user puso en los campos
    const emailInput = loginForm.elements.email.value;
    const passwordInput = evt.target.elements.password.value;

// Verificar si existe un usuario con ese email
const user = users.find((usr) => {
    if(usr.email === emailInput) {
        return true
    }
    return false
});

if(user.active === false) {

}

if(user === undefined) {
    // A- Que no encuentre el correo
    swal('Error en el login', 'los datos ingresados no sson correctos', 'error');
    return
}

// B- Encuentro un usuario (objeto) con ese correo
// ?Ahora debo confirmar si la contraseña que la persona me envía coincide con la contraseña que yo tengo guarda en mi array de usuarios (LOCALSTORAGE)
if(user.password === passwordInput) {
    // 2-  La persona es quien dice ser y lo debería terminar de loguear
    
    swal('Login correcto!', `Bienvenido ${user.name}, Sera redireccinado al home`, 'success');
     // Voy a guardar el usuario logueado en el localStorage currentUser
    localStorage.setItem('currentUser', JSON.stringify(user))

    // Si el user es admin tenemos que llevarlo al admin de productos
    // si es un usario normal lo llevamos al home
    setTimeout(function() {
        if(user.role === 'ADMIN_ROLE') {
            window.location.href = '/pages/admin-products/admin-products.html'
        } else {
            window.location.href = '/index.html'
        }
    }, 2000)
} else {
    // Le deberé informar que los datos ingresados no correctos
     // 1 - No coincida. Debo notificar al usuario que verifique los datos.
    swal('Error en el login', 'los datos ingresados no sson correctos', 'error');
    return
}


console.log(`User encontrado`, user)



    



   
    
       
    // //3- Tiene ese checkbox localStorage loginDataSaved



})

    // Levantar el usuario logueado currentUser y mostrar su nombre   



// Registrando un usuarios


