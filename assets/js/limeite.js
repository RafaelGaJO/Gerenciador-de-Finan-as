// Variáveis para armazenar o limite do cartão e o saldo disponível
let cardLimit = 0;
let availableBalance = 0;

// Seleciona os elementos onde serão exibidos o limite e o saldo disponível
const cardLimitEl = document.getElementById("cardLimit");
const availableBalanceEl = document.getElementById("availableBalance");
const expenseList = document.getElementById("expenseList");

// Função para definir o limite do cartão e o saldo disponível
function setLimit() {
    cardLimit = parseFloat(document.getElementById("limitAmount").value) || 0;
    availableBalance = parseFloat(document.getElementById("availableAmount").value) || 0;

    // Atualiza os elementos na página com os valores definidos
    cardLimitEl.innerText = cardLimit.toFixed(2);
    availableBalanceEl.innerText = availableBalance.toFixed(2);

    // Limpa os campos de entrada após definir os valores
    document.getElementById("limitAmount").value = "";
    document.getElementById("availableAmount").value = "";
}

// Função para adicionar uma despesa
function addExpense() {
    const description = document.getElementById("expenseDescription").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);

    // Verifica se a descrição está vazia, o valor é válido, e se o valor não excede o saldo disponível
    if (!description || isNaN(amount) || amount > availableBalance) {
        alert("Por favor, insira uma descrição e um valor válido ou verifique se o valor não excede o saldo disponível.");
        return;
    }

    // Subtrai a despesa do saldo disponível
    availableBalance -= amount;
    availableBalanceEl.innerText = availableBalance.toFixed(2);

    // Cria e exibe um novo item na lista de despesas
    const expenseItem = document.createElement("li");
    expenseItem.innerHTML = `
        ${description} - R$ ${amount.toFixed(2)}
    `;
    expenseList.appendChild(expenseItem);

    // Limpa os campos de entrada após adicionar a despesa
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";
}