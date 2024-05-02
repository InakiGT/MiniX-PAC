const avatar = document.getElementById('user-avatar');
const avatar1 = document.getElementById('first');
const avatar2 = document.getElementById('second');
const avatar3 = document.getElementById('third');

const setAvatar = (e) => {
    avatar.src = e.target.src;
}

avatar1.addEventListener('click', (e) => setAvatar(e));
avatar2.addEventListener('click', (e) => setAvatar(e));
avatar3.addEventListener('click', (e) => setAvatar(e));