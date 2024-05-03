// Avatar
const avatar = document.getElementById('user-avatar');
const avatar1 = document.getElementById('first');
const avatar2 = document.getElementById('second');
const avatar3 = document.getElementById('third');

// Username
const userNameElement = document.getElementById('usernameC');

// Form
const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorCard = document.getElementById('error');

const setAvatar = (e) => {
    avatar.src = e.target.src;
}

const setUsername = () => {
    if ( usernameInput.value ) return userNameElement.textContent = usernameInput.value;

    userNameElement.textContent = 'Username';
}

const sendForm = (e) => {
    e.preventDefault();

    const username = usernameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Validate data
    const pNode = document.createElement('p');

    if ( username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '' ) {
        errorCard.innerHTML = '';
        errorCard.className = 'errorCard';
        pNode.innerHTML = 'Todos los campos deben estar llenos';
        errorCard.appendChild(pNode);
        return;
    }
    
    if ( password !== confirmPassword ) {
        errorCard.innerHTML = '';
        errorCard.className = 'errorCard';
        pNode.innerHTML = 'Las contraseñas deben coincidir';
        errorCard.appendChild(pNode);
        return;
    }

    errorCard.className = 'displayNone';

    // Send data to API
} 

avatar1.addEventListener('click', (e) => setAvatar(e));
avatar2.addEventListener('click', (e) => setAvatar(e));
avatar3.addEventListener('click', (e) => setAvatar(e));
usernameInput.addEventListener('change', () => setUsername());
form.addEventListener('submit', (e) => sendForm(e));