
        document.addEventListener('DOMContentLoaded', function() {
            
            const pageRedirects = {
                'gracias.html': '1Graciasati/gracias.html',
                'conocerte.html': '2Comoteconoci/conocerte.html', 
                'porque-contigo.html': '3Porquecontigo/porque-contigo.html',
                'significas.html': '4Quesignificasparami/significas.html',
                'planes.html': '5Planesitosinolvidables/planes.html',
                'futuro.html': '6Elfuturoatulado/futuro.html'
            };

            const linkCards = document.querySelectorAll('.link-card[data-page]');

            linkCards.forEach(card => {
                const page = card.getAttribute('data-page');
                
                card.style.cursor = 'pointer';
                
                card.addEventListener('click', function(e) {
                    if (e.target.tagName === 'A') {
                        e.preventDefault();
                    }
                    
                    this.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        if (page && pageRedirects[page]) {
                            window.location.href = pageRedirects[page];
                        } else {
                            alert('Página en construcción 💕');
                        }
                    }, 300);
                });

                const link = card.querySelector('.text-card a');
                if (link) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        card.click(); 
                    });
                }
            });
        });