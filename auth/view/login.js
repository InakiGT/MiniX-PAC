// Form
const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Error
const errorCard = document.getElementById('error');

// API
const api = new Api('http://localhost:3000/login');

const sendForm = async (e) => {
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

    const token = await doLogin(email, password);
    localStorage.setItem('token', token);
    window.location = 'http://127.0.0.1:5500/posts/view/posts.html';
}

const doLogin = async (email, password) => {
    const response = await api.Post({ email, password });

    return response.data.token;
}

form.addEventListener('submit', (e) => sendForm(e));