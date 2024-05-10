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

const api = new Api('http://localhost:3000/register');

const setAvatar = (e) => {
    avatar.src = e.target.src;
}

const setUsername = () => {
    if ( usernameInput.value ) return userNameElement.textContent = usernameInput.value;

    userNameElement.textContent = 'Username';
}

const sendForm = async (e) => {
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
    const response = await createUser(username, email, password, avatar.src);

    if (response.status === 201) {
        window.location = 'http://127.0.0.1:5500/auth/view/login.html';
        return;
    }

    errorCard.innerHTML = '';
    errorCard.className = 'errorCard';
    pNode.innerHTML = 'Error en el servidor, favor de intentarlo más tarde';
    errorCard.appendChild(pNode);
} 

const createUser = async (username, email, password, photo) => {
    const response = await api.Post({
        username,
        email,
        password,
        photo,
    });

    return response;
}

avatar1.addEventListener('click', (e) => setAvatar(e));
avatar2.addEventListener('click', (e) => setAvatar(e));
avatar3.addEventListener('click', (e) => setAvatar(e));
usernameInput.addEventListener('change', () => setUsername());
form.addEventListener('submit', (e) => sendForm(e));