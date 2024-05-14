const search = document.getElementById('searcher');

const searchUsers = async () => {
    chatsContainer.innerHTML = '';
    const api = new Api(`http://localhost:3000/users?username=${search.value}`);
    const response = await api.Get();
    const users = response.data.data;

    users.forEach((user) => {
        const card = createChatCard(user);
        chatsContainer.appendChild(card);
    });

    if ( !search.value ) {
        chatsContainer.innerHTML = '';
    }
}

const createChatCard = (user) => {
    // Suponiendo que 'photo' es la URL de la foto del usuario
    const photo = user.photo ? user.photo : 'https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png';

    // Crear el elemento div para la tarjeta de chat
    const chatCard = document.createElement('div');
    chatCard.classList.add('chatCard');
    chatCard.classList.add('clickable');
    chatCard.id = `card-${user._id}`;

    // Crear la imagen del usuario
    const img = document.createElement('img');
    img.src = photo;

    // Crear el contenedor de contenido de la tarjeta
    const contentCard = document.createElement('div');
    contentCard.classList.add('contentCard');

    // Crear el contenedor del título de la tarjeta
    const titleCard = document.createElement('div');
    titleCard.classList.add('titleCard');

    // Crear el párrafo con el nombre de usuario
    const usernamePara = document.createElement('p');
    usernamePara.textContent = user.username;

    // Construir la estructura de la tarjeta
    titleCard.appendChild(usernamePara);
    contentCard.appendChild(titleCard);
    chatCard.appendChild(img);
    chatCard.appendChild(contentCard);

    chatCard.addEventListener('click', () => selectChat(user._id));

    // Devolver el elemento de la tarjeta de chat completamente construido
    return chatCard;
}

search.addEventListener('input', searchUsers)