# Landing Page - Guia Completo da TCE para Terapeutas

## Descrição
Landing page profissional para captação de leads oferecendo o ebook "Guia Completo da TCE para Terapeutas" como isca digital.

## Arquivos Inclusos
- `index.html` - Estrutura HTML da landing page
- `styles.css` - Estilos CSS responsivos
- `script.js` - Funcionalidades JavaScript
- `landing_page_wireframe.png` - Wireframe da página
- `README.md` - Esta documentação

## Características da Landing Page

### Design
- Layout responsivo (desktop e mobile)
- Cores profissionais (azul, branco, cinza)
- Tipografia moderna (Inter)
- Elementos visuais atraentes
- Formulário destacado

### Seções Incluídas
1. **Header** - Navegação fixa
2. **Hero Section** - Título principal + formulário
3. **Sobre o Ebook** - Informações do autor e conteúdo
4. **Benefícios** - O que o leitor vai aprender
5. **Garantias** - Benefícios adicionais
6. **CTA Final** - Chamada para ação adicional
7. **Footer** - Links e informações legais

### Formulário de Captura
- Nome Completo (obrigatório)
- Email Profissional (obrigatório)
- Telefone (opcional)
- Área de Atuação (obrigatório)
- Validação em tempo real
- Mensagem de sucesso
- Proteção contra spam

### Funcionalidades JavaScript
- Validação de formulário
- Smooth scrolling
- Animações de entrada
- Tracking de eventos (preparado para GA4 e Facebook Pixel)
- Mensagens de feedback

## Como Usar

### 1. Hospedagem Simples
Faça upload dos arquivos para qualquer servidor web:
- Hostinger
- GoDaddy
- Netlify (gratuito)
- Vercel (gratuito)

### 2. Integração com Email Marketing
Edite o arquivo `script.js` na função `integrateWithEmailService()` para conectar com:
- RD Station
- Mailchimp
- ActiveCampaign
- HubSpot
- Outros sistemas

### 3. Personalização
- **Cores**: Edite as variáveis CSS no início do `styles.css`
- **Textos**: Modifique diretamente no `index.html`
- **Imagens**: Substitua os ícones e elementos visuais

## Integração com Sistemas de Email

### RD Station
```javascript
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
            // ... outros campos
        }
    })
});
```

### Mailchimp
```javascript
fetch('/api/mailchimp/subscribe', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(leadData)
});
```

## Analytics e Tracking

### Google Analytics 4
Adicione no `<head>` do HTML:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel
```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## Otimizações de Conversão

### Elementos Testados
- Formulário no hero (acima da dobra)
- Cores contrastantes para CTAs
- Prova social (estatísticas)
- Benefícios claros
- Garantias de segurança
- Múltiplos CTAs

### Sugestões de Teste A/B
1. **Título**: Testar variações do headline principal
2. **CTA**: "Baixar Agora" vs "Quero o Ebook"
3. **Cores**: Vermelho vs Verde para botões
4. **Formulário**: Campos obrigatórios vs opcionais

## Responsividade
- Breakpoints: 768px (tablet) e 480px (mobile)
- Grid flexível
- Imagens responsivas
- Formulário adaptável
- Navegação mobile-friendly

## Performance
- CSS otimizado
- JavaScript minificado
- Fontes web otimizadas
- Imagens comprimidas
- Carregamento assíncrono

## Suporte
Para dúvidas ou customizações, consulte:
- Documentação HTML/CSS/JS
- Guias de integração dos sistemas de email marketing
- Ferramentas de analytics

## Próximos Passos
1. Fazer upload para servidor
2. Configurar integração de email
3. Instalar analytics
4. Testar formulário
5. Divulgar no Instagram
6. Monitorar conversões

---
**Desenvolvido para**: Captação de leads com ebook TCE
**Compatibilidade**: Todos os navegadores modernos
**Responsivo**: Desktop, Tablet, Mobile

