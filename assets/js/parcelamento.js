let debts = [];

function addDebt() {
   
    const description = document.getElementById("debtDescription").value;
    const totalAmount = parseFloat(document.getElementById("totalAmount").value);
    const numInstallments = parseInt(document.getElementById("numInstallments").value);

    
    if (description === "" || isNaN(totalAmount) || isNaN(numInstallments) || numInstallments <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    
    const installmentAmount = totalAmount / numInstallments;

    
    debts.push({
        description: description,
        totalAmount: totalAmount,
        numInstallments: numInstallments,
        installmentAmount: installmentAmount,
        remainingInstallments: numInstallments
    });

   
    document.getElementById("debtDescription").value = "";
    document.getElementById("totalAmount").value = "";
    document.getElementById("numInstallments").value = "";

    
    updateDebtList();
}

function updateDebtList() {
    
    const debtList = document.getElementById("debtList");
    debtList.innerHTML = "";

   
    debts.forEach((debt, index) => {
        const listItem = document.createElement("li");

        
        listItem.innerHTML = `
            <strong>${debt.description}</strong>: R$${debt.installmentAmount.toFixed(2)} por ${debt.remainingInstallments} meses restantes.
            <button onclick="payInstallment(${index})">Pagar Parcela</button>
        `;

        debtList.appendChild(listItem);
    });
}

function payInstallment(index) {
    
    debts[index].remainingInstallments -= 1;

   
    if (debts[index].remainingInstallments === 0) {
        debts.splice(index, 1);
    }

   
    updateDebtList();
}