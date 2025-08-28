

const supabasePublicClient = supabase.createClient("url","key");

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Pega os valores dos campos do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifica os dados no Supabase
    const { data, error } = await supabasePublicClient
        .from('usuarios')
        .select('*')
        .eq('email', email)
        .eq('password', password);

    const loginMessage = document.getElementById('loginMessage');

    if (error) {
        console.error('Erro ao fazer login:', error);
        loginMessage.textContent = 'Erro ao fazer login. Tente novamente.';
    } else if (data.length > 0) {
        console.log('Login bem-sucedido:', data);
        loginMessage.textContent = 'Login bem-sucedido!';
        
        
        // Salva o nome do usuário no localStorage
        localStorage.setItem('userName', data[0].name);

        // Redireciona para a página de interface inicial
        window.location.href = 'interface_inicial.html';
        // window.location.assign("interface");
    } else {
        console.log('Credenciais inválidas');
        loginMessage.textContent = 'Credenciais inválidas. Tente novamente.';
    }
});




















































































$(function(){
    $('[placeholder]').parents('form').bind('submit', function(e) {
      var $form = $(e.target);
      if(!!$form.data('binded') == false){
        $(e.target).find('[placeholder]').each(function(i,el) {
          if (el.val() == el.attr('placeholder')) {
            el.val('');
          }
        });
        $form.data('binded',true);
      }
    });
  });

  
  

