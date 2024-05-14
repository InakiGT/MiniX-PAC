const chatsContainer = document.getElementById('chats');
const chatContainer = document.getElementById('currentChat');

const id = decodeToken(localStorage.getItem('token'));

const getChat = async (id) => {
    const api = new Api('http://localhost:3000/chats');
    const response = await api.Get(id);

    return response.data.data;
}

const selectChat = async (id) => {
    chatContainer.innerHTML = '';
    const api = new Api('http://localhost:3000/users');
    const { data: { data: user } } = await api.Get(id);

    const chat = await getChat(id);

    chatContainer.innerHTML += `
        <div>
            <div class="chatHeader">
                <div> 
                    <img src="${ user.photo ? user.photo : 'https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png' }" />
                </div>
                <p>${ user.username }</p>
            </div>

            <div id="y" style="margin-bottom: 5rem">
            </div>

            <div class="chatInput">
                <input
                    id="sender"
                    type='text'
                    placeholder='Escribe un nuevo mensaje' 
                />
            </div>
        </div>
    `;

    const chats = document.getElementById('y');
    const sender = document.getElementById('sender');

    const receiver = user._id;
    sender.addEventListener('keypress', (e) => sendMessage(e, receiver, chats));

    chat.forEach((message) => {
        let content;

        if (message.sender[0]._id !== id) {
            content = `            
            <div class="rightMessage">
                <p>${ message.content }</p>
            <div>`
        } else {
            content = `
            <div class="leftMessage">
                <p>${ message.content }</p>
            </div>`;
        }
        chats.innerHTML += content;
    });
}

const sendMessage = async (e, receiver, container) => {
    if (e.key === 'Enter') {
        const data = {
            receiver,
            content: e.target.value,
        }

        const api = new Api('http://localhost:3000/chats');
        const response = await api.Post(data);
        console.log(response)
        if (response.status === 201) {
            container.innerHTML += `
                <div class="rightMessage">
                    <p>${ e.target.value }</p>
                <div>
            `;
        }
    }
}