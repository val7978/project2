document.addEventListener('DOMContentLoaded', function() {
    // Анимация для карточек
    const artCards = document.querySelectorAll('.art-card');
    artCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Валидация формы поиска
    const searchForm = document.querySelector('.search-of-parametrs-search');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            const input = this.querySelector('.search-input');
            if (input.value.trim() === '') {
                e.preventDefault();
                input.style.border = '1px solid red';
                setTimeout(() => {
                    input.style.border = '';
                }, 2000);
            }
        });
    }
});