const contentPost = document.getElementById('create-content');
const createButton = document.getElementById('create-button');
const counter = document.getElementById('count');

const createPost = async () => {
    const content = contentPost.value;

    const response = await api.Post({ content });

    if (response.status === 201) {
        window.location.reload(true);

        return;
    }

    console.error('ALGO HA SALIDO MAL');
}

const setCount = () => {
    const count = contentPost.value.length
    if (count >= 500) {
        contentPost.readOnly = true;
    }
    counter.innerHTML = `${count} / 500`;

}

createButton.addEventListener('click', createPost);
contentPost.addEventListener('input', setCount);