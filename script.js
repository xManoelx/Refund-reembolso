// Seleciona os elementos do formulário
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

const form = document.querySelector('form');

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
}
