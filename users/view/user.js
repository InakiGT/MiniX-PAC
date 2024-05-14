const usersApi = new Api('http://localhost:3000/users');
const id = decodeToken(localStorage.getItem('token')).sub;

// Avatar
const avatar = document.getElementById('user-avatar');
const avatar1 = document.getElementById('first');
const avatar2 = document.getElementById('second');
const avatar3 = document.getElementById('third');

// Username
const userNameElement = document.getElementById('usernameC');

// Form
const form = document.getElementById('form');
const error = document.getElementById('error');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorCard = document.getElementById('error');
const del = document.getElementById('delete');

const getData = async () => {
    const { data: { data: response } } = await usersApi.Get(id);

    if ( response ) {
        avatar.src = response.photo ? response.photo : "https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png";
        usernameInput.value = response.username;
        userNameElement.textContent = usernameInput.value
        emailInput.value = response.email;

        return;
    }
    
    errorCard.innerHTML = '';
    errorCard.className = 'errorCard';
    pNode.innerHTML = 'Hubo un error al hacer la solicitud al servidor, favor de intentarlo más tarde';
    errorCard.appendChild(pNode);
}

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

    if ( username.trim() === '' || email.trim() === '' ) {
        errorCard.innerHTML = '';
        errorCard.className = 'errorCard';
        pNode.innerHTML = 'Todos los campos deben estar llenos';
        errorCard.appendChild(pNode);
        return;
    }
    
    if ((password.trim() !== '' || confirmPassword.trim() !== '') && (password !== confirmPassword) ) {
        errorCard.innerHTML = '';
        errorCard.className = 'errorCard';
        pNode.innerHTML = 'Las contraseñas deben coincidir';
        errorCard.appendChild(pNode);
        return;
    }

    errorCard.className = 'displayNone';

    // Send data to API
    let response;

    if ( password.trim() === '' ) {
        response = await usersApi.Put(id, { username, email, photo: avatar.src });
    } else {
        response = await usersApi.Put(id, { username, email, password, photo: avatar.src });
    }

    errorCard.innerHTML = '';
    errorCard.className = 'okCard';
    pNode.innerHTML = 'Usuario actualizado correctamente';
    errorCard.appendChild(pNode);
    setTimeout(() => {
        errorCard.innerHTML = '';
        errorCard.className = '';
        window.location = `http://127.0.0.1:5500/users/view/user.html?userId=${id}`
    }, 2000);

}

const deleteUser = async () => {
    const response = await usersApi.Delete(id);

    if ( response.status === 200 ) {
        window.location = 'http://127.0.0.1:5500/auth/view/login.html';
    }
}

getData();

avatar1.addEventListener('click', (e) => setAvatar(e));
avatar2.addEventListener('click', (e) => setAvatar(e));
avatar3.addEventListener('click', (e) => setAvatar(e));
usernameInput.addEventListener('change', (e) => setUsername());
form.addEventListener('submit', (e) => sendForm(e));
del.addEventListener('click', deleteUser); 