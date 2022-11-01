const user = JSON.parse(localStorage.getItem('currentUser'));

if(user === null || user.role !== 'ADMIN_ROLE') {
    window.location.href = `/index.html`
}