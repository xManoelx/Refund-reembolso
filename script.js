// Seleciona os elementos do formulário
const amount = document.getElementById('amount');
const expense = document.getElementById('expense');
const category = document.getElementById('category');

const form = document.querySelector('form');

// Seleciona os elementos da lista
const expenseList = document.querySelector('ul');
const expenseTotal = document.querySelector('aside header h2');
const expenseQuantity = document.querySelector('aside header p span');

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

// Adiciona a nova despesa à lista de despesas
function expenseAdd(newExpense) {
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

        // Cria o valor da despesa
        const expenseAmount = document.createElement('span');
        expenseAmount.classList.add('expense-amount');
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace('R$', '')}`;

        // Cria o icone de remover a despesa
        const removeIcon = document.createElement('img');
        removeIcon.classList.add('remove-icon');
        removeIcon.setAttribute('src', './img/remove.svg');
        removeIcon.setAttribute('alt', 'Remover');

        // Adiciona as informações no item da lista
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);

        // Adiciona o item na lista
        expenseList.append(expenseItem);

        // Atualiza o total de despesas
        updateTotal();

    } catch (error) {
        alert("Erro ao adicionar despesa:", error);
    }
}

// Atualiza o valor total das despesas
function updateTotal() {
    try{
        // Recupera todos os itens de despesa
        const items = expenseList.children;

        // Atualiza a quantidade de despesas
        expenseQuantity.textContent = `${items.length} ${items.length > 1 ? 'Despesas' : 'Despesa'}`;

        // Variavel para incrementar o total
        let total = 0;

        // Percorre cada item de despesa
        for(let item = 0; item < items.length; item++) {
            // Recupera o valor da despesa
            const expenseAmount = items[item].querySelector('.expense-amount');

            // Remove caracteres não numéricos e formata o valor - Exemplo: R$ 1.500,00 -> 1500.00
            let value = expenseAmount.textContent.replace(/[^\d]/g, '').replace(',', '.');

            // Converte o valor para float
            value = parseFloat(value);

            // Verifica se o valor é um número válido
            if (isNaN(value)) {
                return alert("Valor inválido encontrado em uma das despesas.");
            }

            // Incrementa o total
            total += Number(value);
        }

        // Formata o total como moeda brasileira
        total = total / 100; // Converte de centavos para reais

        // Exibe o total formatado como moeda brasileira
        total = formatCurrencyBRL(total);
        expenseTotal.textContent = total;

    } catch (error) {
        alert("Erro ao atualizar o total:", error);
    }
}
