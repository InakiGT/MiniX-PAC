const contentPost = document.getElementById('create-content');
const createButton = document.getElementById('create-button');
const imgSender = document.getElementById('img');
const counter = document.getElementById('count');

let img = '';


const createPost = async () => {
    const content = contentPost.value;

    let response;
    
    if ( !img ){
        response = await api.Post({ content });
    } else {
        response = await api.Post({ content, img });
    }

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

const sendImg = async (e) => {
    const response = await uploadImg(e);
    img = response;
}

imgSender.addEventListener('input', (e) => sendImg(e));
createButton.addEventListener('click', createPost);
contentPost.addEventListener('input', setCount);