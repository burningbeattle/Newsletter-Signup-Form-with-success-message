const form = document.querySelector('#newsletter-form');
        const emailInput = document.querySelector('#email');
        const errorMessage = document.querySelector('.error-message');
        const card1 = document.querySelector('.card');
        const card2 = document.querySelector('.card-2');
        const confirmedEmail = document.querySelector('#confirmed-email');
        const dismissBtn = document.querySelector('#dismiss-btn');

        function validateEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value;

            if (!validateEmail(email)) {
                emailInput.classList.add('error-message');
                errorMessage.style.display = 'block';
                return;
            }

            confirmedEmail.textContent = email;
            card1.classList.add('hide');
            card2.classList.remove('hide');
        });

        emailInput.addEventListener('input', () => {
            emailInput.classList.remove('error-message');
            errorMessage.style.display = 'none';
        });

        dismissBtn.addEventListener('click', () => {
            card2.classList.add('hide');
            card1.classList.remove('hide');
            emailInput.value = '';
        });
