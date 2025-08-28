document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação simples
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Aqui você poderia enviar os dados para um servidor via AJAX ou outro método
        alert('Login realizado com sucesso!');
        // Para fins de exemplo, redirecionamos o usuário para outra página
        window.location.href = 'pagina_inicial.html';
    }
});



const supabasePublicClient=supabase.createClient("url","key")

async function pegarbanco(){
    const response= await supabasePublicClient.from("usuarios").select("*")
    data=response.data
    console.log(data[0]["nome"])
    const nomeElemento = document.getElementById("nome");
    nomeElemento.textContent = data[0]["nome"];

}

pegarbanco()






// document.getElementById('loginForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Evita o envio padrão do formulário

//     // Pega os valores dos campos do formulário
//     const id = document.getElementById('id').value;
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
    

//     // Envia os dados para o Supabase
//     const { data, error } = await supabasePublicClient
//         .from('usuarios')
//         .insert([   
//             { id:id, name: name,email: email , password:password }
//         ]);

//     if (error) {
//         console.error('Erro ao inserir dados:', error);
//     } else {
//         console.log('Dados inseridos com sucesso:', data);
//         window.location.href = 'login.html';
     
        

        
//     }
// });



document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Pega os valores dos campos do formulário
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Envia os dados para o Supabase
    const { data, error } = await supabasePublicClient
        .from('usuarios')
        .insert([
            { id: id, name: name, email: email, password: password }
        ]);

    if (error) {
        console.error('Erro ao inserir dados:', error);
    } else {
        console.log('Dados inseridos com sucesso:', data);
        // Redireciona o usuário para a página de login
        window.location.href = 'login.html';
    }
});





