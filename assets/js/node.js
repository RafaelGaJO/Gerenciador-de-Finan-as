const transactionList = document.getElementById("transactionList");
const balanceEl = document.getElementById("balance");
const expenseChartCtx = document.getElementById("expenseChart").getContext("2d");

let balance = 0;
let transactions = [];
let categoryTotals = { Alimentação: 0, Lazer: 0, Transporte: 0, Outros: 0 };

function addTransaction() {
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (!description || isNaN(amount)) {
        alert("Por favor, insira uma descrição e um valor válido.");
        return;
    }

    const transaction = { description, amount, category };
    transactions.push(transaction);

    balance += amount;
    balanceEl.innerText = `R$ ${balance.toFixed(2)}`;

    categoryTotals[category] += amount;
    displayTransaction(transaction);
    updateChart();

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function displayTransaction(transaction) {
    const transactionItem = document.createElement("li");
    transactionItem.classList.add(transaction.amount < 0 ? "expense" : "income");
    transactionItem.innerHTML = `
        ${transaction.description} - R$ ${transaction.amount.toFixed(2)}
        <span>${transaction.category}</span>
    `;
    transactionList.appendChild(transactionItem);
}

const expenseChart = new Chart(expenseChartCtx, {
    type: 'pie',
    data: {
        labels: Object.keys(categoryTotals),
        datasets: [{
            data: Object.values(categoryTotals),
            backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0"]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

function updateChart() {
    expenseChart.data.datasets[0].data = Object.values(categoryTotals);
    expenseChart.update();
}


const supabasePublicClient=supabase.createClient("https://vrguayypljtcouzusomj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZ3VheXlwbGp0Y291enVzb21qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3MjYyMjgsImV4cCI6MjA0NjMwMjIyOH0.b0Dk8Ne8cdrKopCkE980e9KZwvTpHXeaJ8RlQ-LP568")

// Função para obter os dados do usuário e atualizar o site
async function updateUserSite() {
  // Obter o usuário logado
  const user = supabase.auth.user();
  
  if (user) {
    // Obter os dados do usuário do banco de dados
    const { data, error } = await supabasePublicClient
      .from('usuarios')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Erro ao obter dados do usuário:', error);
      return;
    }

    // Atualizar o site com os dados do usuário
    document.getElementById('username').textContent = data.username;
    document.getElementById('email').textContent = data.email;
    // Faça outras atualizações necessárias no site aqui
  } else {
    console.log('Nenhum usuário logado');
  }
}

// Chamar a função para atualizar o site
updateUserSite();