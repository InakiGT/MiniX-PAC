// Form
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Error
const errorCard = document.getElementById('error');

const sendForm = (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    
    if ( email.trim() === '' || password.trim() === '' ) {
        const pNode = document.createElement('p');
        errorCard.innerHTML = '';
        errorCard.className = 'errorCard';
        pNode.innerHTML = 'Los campos no pueden ir vacios';
        errorCard.appendChild(pNode);
        return;
    }

    errorCard.className = 'displayNone';

    // TODO: Auth
}

form.addEventListener('submit', (e) => sendForm(e));