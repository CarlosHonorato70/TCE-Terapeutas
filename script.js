// JavaScript para funcionalidade do site
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links de navegação
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Código novo para lidar com o formulário
    const form = document.getElementById('leadForm');
    const downloadLink = "https://raw.githubusercontent.com/CarlosHonorato70/TCE-Terapeutas/main/meu-ebook.pdf";
    const formspreeUrl = "https://formspree.io/f/myzdglnv";

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        // Coleta os dados do formulário
        const formData = new FormData(form);

        try {
            // Envia os dados para o Formspree em segundo plano
            const response = await fetch(formspreeUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Se o envio for bem-sucedido, redireciona o cliente
                console.log("Dados enviados para o Formspree com sucesso. Redirecionando...");
                window.location.href = downloadLink;
            } else {
                // Se houver um erro no Formspree, ainda assim redireciona o cliente
                // Para garantir que ele tenha o e-book
                console.error("Erro ao enviar dados para o Formspree, mas redirecionando mesmo assim.");
                window.location.href = downloadLink;
            }
        } catch (error) {
            // Em caso de erro de rede, ainda assim redireciona o cliente
            console.error("Erro de rede ao tentar enviar o formulário. Redirecionando...", error);
            window.location.href = downloadLink;
        }
    });

    // Código de animação do menu e estatísticas
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        // Remove todos os caracteres não numéricos, exceto o ponto
        const finalValue = stat.textContent.replace(/[^\d.]/g, ''); 
        const isPercentage = stat.textContent.includes('%');
        const isPlus = stat.textContent.includes('+');
        const numericValue = parseFloat(finalValue);
        
        if (isNaN(numericValue)) return; // Sai se não for um número válido

        let currentValue = 0;
        const increment = numericValue / 50; // 50 passos
        
        const counter = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numericValue) {
                currentValue = numericValue;
                clearInterval(counter);
            }
            
            let displayValue = Math.floor(currentValue);
            if (isPercentage) displayValue += '%';
            if (isPlus) displayValue += '+';
            
            stat.textContent = displayValue;
        }, 50);
    });
});
