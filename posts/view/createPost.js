const contentPost = document.getElementById('create-content');
const createButton = document.getElementById('create-button');

const createPost = async () => {
    const content = contentPost.value;

    const response = await api.Post({ content });

    if (response.status === 201) {
        window.location.reload(true);

        return;
    }

    console.error('ALGO HA SALIDO MAL');
}

createButton.addEventListener('click', createPost);