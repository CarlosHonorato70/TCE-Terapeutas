// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Formulário de captura de leads
document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coleta os dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        area: document.getElementById('area').value
    };
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.area) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Simula o envio do formulário
    const submitButton = document.querySelector('.cta-button');
    const originalText = submitButton.innerHTML;
    
    // Loading state
    submitButton.innerHTML = '<span>Enviando...</span>';
    submitButton.classList.add('loading');
    
    // Simula uma requisição (substitua por sua integração real)
    setTimeout(() => {
        // Aqui você integraria com seu sistema de email marketing
        // Por exemplo: Mailchimp, RD Station, ActiveCampaign, etc.
        
        console.log('Dados do lead:', formData);
        
        // Mostra mensagem de sucesso
        showSuccessMessage();
        
        // Reset do formulário
        document.getElementById('leadForm').reset();
        
        // Restaura o botão
        submitButton.innerHTML = originalText;
        submitButton.classList.remove('loading');
        
        // Opcional: redirecionar para página de obrigado
        // window.location.href = 'obrigado.html';
        
    }, 2000);
});

// Função para mostrar mensagem de sucesso
function showSuccessMessage() {
    const form = document.getElementById('leadForm');
    
    // Remove mensagem anterior se existir
    const existingMessage = form.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Cria nova mensagem
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message show';
    successMessage.innerHTML = `
        <strong>✅ Sucesso!</strong><br>
        Seu ebook foi enviado para seu email.<br>
        Verifique sua caixa de entrada (e spam também).
    `;
    
    form.appendChild(successMessage);
    
    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        successMessage.classList.remove('show');
        setTimeout(() => {
            successMessage.remove();
        }, 300);
    }, 5000);
}

// Animação de entrada dos elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.benefit-item, .highlight-card, .bonus-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Inicializa animações quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
});

// Tracking de eventos (opcional - para Google Analytics)
function trackEvent(eventName, eventData = {}) {
    // Integração com Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Integração com Facebook Pixel
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, eventData);
    }
    
    console.log('Event tracked:', eventName, eventData);
}

// Eventos de tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    trackEvent('page_view', {
        page_title: 'Landing Page TCE',
        page_location: window.location.href
    });
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', function() {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (maxScroll >= 25 && maxScroll < 50) {
                trackEvent('scroll_25');
            } else if (maxScroll >= 50 && maxScroll < 75) {
                trackEvent('scroll_50');
            } else if (maxScroll >= 75) {
                trackEvent('scroll_75');
            }
        }
    });
    
    // Track CTA clicks
    document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                button_location: this.closest('section')?.className || 'unknown'
            });
        });
    });
});

// Função para integração com sistemas de email marketing
function integrateWithEmailService(leadData) {
    // Exemplo de integração com RD Station
    /*
    fetch('https://api.rd.services/platform/conversions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: {
                conversion_identifier: 'landing-page-tce',
                email: leadData.email,
                name: leadData.nome,
                phone: leadData.telefone,
                custom_fields: {
                    area_atuacao: leadData.area
                }
            }
        })
    });
    */
    
    // Exemplo de integração com Mailchimp
    /*
    fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
    });
    */
    
    // Por enquanto, apenas log dos dados
    console.log('Lead data to be sent to email service:', leadData);
}

// Validação em tempo real dos campos
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const nomeInput = document.getElementById('nome');
    
    // Validação de email em tempo real
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#dc2626';
            showFieldError(this, 'Por favor, insira um email válido');
        } else {
            this.style.borderColor = '#e2e8f0';
            hideFieldError(this);
        }
    });
    
    // Validação de nome em tempo real
    nomeInput.addEventListener('blur', function() {
        if (this.value.length < 2) {
            this.style.borderColor = '#dc2626';
            showFieldError(this, 'Nome deve ter pelo menos 2 caracteres');
        } else {
            this.style.borderColor = '#e2e8f0';
            hideFieldError(this);
        }
    });
});

function showFieldError(field, message) {
    hideFieldError(field); // Remove erro anterior
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.color = '#dc2626';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

function hideFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

