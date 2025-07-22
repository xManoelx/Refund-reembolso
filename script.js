// Seleciona os elementos do formulário
const amount = document.getElementById('amount');


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
