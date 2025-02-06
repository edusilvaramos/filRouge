
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lido").forEach(button => {
        button.addEventListener("click", function () {
            let notificationId = this.dataset.id;
            // Obtém o ID da notificação a partir do atributo "data-id" do botão clicado
            
            fetch(`/notifications/read/${notificationId}`, {
                method: "POST", // Faz uma requisição POST para marcar a notificação como lida
                headers: {
                    "X-Requested-With": "XMLHttpRequest", // Indica que é uma requisição AJAX
                }
            })
            .then(response => response.json()) // Converte a resposta para JSON
            .then(data => {
                if (data.success) {
                    // Se a resposta indicar sucesso, remove a notificação da lista
                    
                    this.closest("li").remove(); // Remove o elemento <li> mais próximo do botão clicado
                    
                    let badge = document.querySelector(".badge.bg-danger");
                    // Seleciona o badge (contador de notificações) na navbar
                    
                    if (badge) {
                        let count = parseInt(badge.innerText) - 1;
                        // Diminui o número de notificações no badge
                        
                        if (count > 0) {
                            badge.innerText = count; // Atualiza o número do badge
                        } else {
                            badge.remove(); // Remove o badge se não houver mais notificações
                        }
                    }
                }
            });
        });
    });
});

