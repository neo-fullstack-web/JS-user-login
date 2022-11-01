const userOptionHTML = document.getElementById('user-options')

function checkUserLogin() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    userOptionHTML.innerHTML = '';
    if(user) {
        userOptionHTML.innerHTML = `
        <li class='text-dark'>Bienvenido ${user.name}</li>
        <li class="nav-item">
        <a class="nav-link" href="#" onclick="logout()">Logout</a>
      </li>`
      if(user.role === 'ADMIN_ROLE') {
        userOptionHTML.innerHTML += `<li class="nav-item">
        <a class="nav-link" href="/pages/admin-products/admin-products.html">Admin Products</a>
      </li>`
      }
    } else {
        userOptionHTML.innerHTML = `<li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/pages/login/login.html">Login</a>
      </li>`
    }
}
checkUserLogin();


function logout() {
    localStorage.removeItem('currentUser');
    checkUserLogin()
}
