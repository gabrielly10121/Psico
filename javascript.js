document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});



// Função para alternar a visibilidade do menu (ao clicar no ícone de hambúrguer)
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active'); // Alterna a classe 'active' para abrir/fechar o menu
});

// Função para fechar o menu ao clicar em uma opção, mas só em telas pequenas
function closeMenu() {
    if (window.innerWidth <= 768) { // Verifica se a largura da tela é menor ou igual a 768px (telas pequenas)
        document.querySelector('nav ul').classList.remove('active'); // Fecha o menu
    }
}

// Adicionando o evento de clique em cada link do menu
document.querySelectorAll('#menu li a').forEach(link => {
    link.addEventListener('click', closeMenu); // Fecha o menu ao clicar nas opções
});

