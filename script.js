document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove a classe ativa de todos os botões e painéis de conteúdo
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));

            // Adiciona a classe ativa ao botão que foi clicado
            tab.classList.add('active');

            // Captura o id do painel correspondente ao botão e o torna visível
            const targetId = tab.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});