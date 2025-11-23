let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = [];

async function iniciarBusca() {
    // Se os dados ainda não foram carregados, busca do JSON.
    if (dados.length === 0) {
        try {
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            return; // Interrompe a execução se houver erro
        }
    }

    // Converte o termo de busca para minúsculas para uma busca case-insensitive.
    const termoBusca = campoBusca.value.toLowerCase();

    // Filtra os dados convertendo os campos para minúsculas antes de comparar.
    const dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes antes de renderizar novos
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.especialidade}</p>
        <p><span>Descrição:</span><br> ${dado.descricao}</p>
        <p><span>Plano médico:</span><br>${dado.plano_medico}</p>
        <p><span>Endereço:</span><br>${dado.endereco}</p>
        <p><span>Contat:</span><br>${dado.contato}</p>
        <p><strong>Atenção!!</strong> Este é um projeto piloto. Algumas informações podem não refletirem a realidade</p>
        `
                cardContainer.appendChild(article);
            }
        }
        


        
// Lógica para controlar o Modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cadastro-modal');
    const openModalButton = document.querySelector('.castrado-pais');
    const closeModalButton = document.querySelector('.close-button');
    const form = document.getElementById('cadastro-form');
    const lgpdCheckbox = document.getElementById('lgpd-check');
    const submitButton = form.querySelector('button[type="submit"]');

    // URL do seu Google Apps Script Web App
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxa7r-ekt_vlrmIgsA1VFIAtL52tVjvogPsIe7_ImUI-de_ozNbLfCAWGOIhMq4qSKS/exec';

    // Desabilita o botão de envio inicialmente
    submitButton.disabled = true;

    // Habilita/desabilita o botão com base no checkbox
    lgpdCheckbox.addEventListener('change', () => {
        submitButton.disabled = !lgpdCheckbox.checked;
    });

    // Abre o modal
    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Fecha o modal pelo botão (X)
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Fecha o modal clicando fora dele
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Lida com o envio do formulário para o Google Sheets
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        // Cria o objeto de dados para enviar.
        // IMPORTANTE: Os IDs ('professional-name', etc.) devem ser os mesmos dos seus campos no HTML.
        const formData = {
            nome: document.getElementById('professional-name').value,
            descricao: document.getElementById('professional-description').value,
            especialidade: document.getElementById('professional-specialty').value,
            contato: document.getElementById('professional-contact').value,
            endereco: document.getElementById('professional-address').value,
            plano_medico: document.getElementById('medical-plan').value,
            termo_LGBD: document.getElementById('lgpd-check').checked
        };

        // Envia os dados para o Google Script
        fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Essencial para evitar erros de CORS com Google Scripts
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(res => {
                console.log("Dados enviados com sucesso!");
                alert("Obrigado! Sua indicação foi enviada com sucesso.");
                
                form.reset(); // Limpa o formulário
                modal.style.display = 'none'; // Fecha o modal
            })
            .catch(error => {
                console.error('Erro ao enviar os dados:', error);
                alert("Ocorreu um erro ao enviar sua indicação. Por favor, tente novamente.");
            })
            .finally(() => {
                // Reabilita o botão de envio, independentemente do resultado
                submitButton.disabled = true; // Mantém desabilitado pois o checkbox foi resetado
                submitButton.textContent = 'Enviar Indicação';
            });
    });
});
