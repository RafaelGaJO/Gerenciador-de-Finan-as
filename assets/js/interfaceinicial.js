document.addEventListener('DOMContentLoaded', function() {
    // Recupera o nome do usuário do localStorage
    const userName = localStorage.getItem('userName');
    console.log(userName);

    // Exibe o nome do usuário na página
    if (userName) {
        document.getElementById('userName').textContent = userName;
    } else {
        document.getElementById('userName').textContent = 'Visitante';
    }
});


