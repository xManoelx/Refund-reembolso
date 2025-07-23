// Seleciona os elementos do formulário
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

const form = document.querySelector('form');

// Seleciona os elementos da lista
const expenseList = document.querySelector('ul');

// Adiciona um evento de input para validar o campo de valor
amount.oninput = () => {
    // Remove caracteres não numéricos, exceto ponto
    let value = amount.value.replace(/[^0-9.]/g, ''); 

    // Transforma o valor em centavos (exemplo 150/100 = 1.5 que é equivalente a R$ 1,50)
    value = Number(value) / 100;

    // Formata o valor como moeda brasileira
    amount.value = formatCurrencyBRL(value); 
}

// Função para formatar o valor como moeda brasileira
function formatCurrencyBRL(value) {
    // Formata o valor como moeda brasileira
    value = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return value;
}

// Adiciona um evento de input para validar o campo de despesa
form.onsubmit = (event) => {
    event.preventDefault(); // Previne o envio do formulário

    const NewExpense = {
        id: new Date().getTime(), // Gera um ID único baseado no timestamp
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    };

    expenseAdd(NewExpense); // Adiciona a despesa à lista
}


function expenseAdd(newExpense) {
    // Adiciona a nova despesa à lista de despesas
    try{
        // Cria o elemento para adicionar na lista
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense');

        // Cria o icone da categoria
        const expenseIcon = document.createElement('img');
        expenseIcon.setAttribute('src', `./img/${newExpense.category_id}.svg`);
        expenseIcon.setAttribute('alt', newExpense.category_name);

        // Cria a informação da despesa
        const expenseInfo = document.createElement('div');
        expenseInfo.classList.add('expense-info');

        // Cria o nome da despesa
        const expenseName = document.createElement('strong');
        expenseName.textContent = newExpense.expense;

        // Cria a categoria da despesa
        const expenseCategory = document.createElement('span');
        expenseCategory.textContent = newExpense.category_name;

        // Adiciona o nome e a categoria da despesa em expenseInfo
        expenseInfo.append(expenseName);
        expenseInfo.append(expenseCategory);

        // Adiciona as informações no item da lista
        expenseItem.append(expenseIcon, expenseInfo);

        // Adiciona o item na lista
        expenseList.append(expenseItem);

    } catch (error) {
        alert("Erro ao adicionar despesa:", error);
    }
}
