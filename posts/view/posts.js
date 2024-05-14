const userPhoto = document.getElementById('userphoto');
const api = new Api('http://localhost:3000/posts');

const postsContainer = document.getElementById('posts');

const getUserPhoto = async () => {
    const userId = decodeToken(localStorage.getItem('token'));

    const api = new Api('http://localhost:3000/users');
    const response = await api.Get(userId.sub);
    const pUser = response.data.data.photo

    if ( pUser ) {
        userPhoto.src = pUser;
    }
}

const selectPost = (id) => {
    window.location = `http://127.0.0.1:5500/posts/view/post.html?id=${ id }`;
}


const getComments = async (id) => {
    const api = new Api('http://localhost:3000/comments');
    const { data: { data: comments } } = await api.Get(id);

    return comments.length;
}

const getReaction = async (id) => {
    const api = new Api('http://localhost:3000/reactions');
    const { data: { data: comments } } = await api.Get(id);

    return comments.length;
}

const getPosts = async () => {
    const response = await api.Get();
    const { data: { data: posts } } = response;

    posts.forEach(async (post) => {

        const splitContent = post.content.split(/(#\w+)/g);
        let finalContent = '';
        splitContent.forEach((content) => {
            if ( content.startsWith('#') ) {
                finalContent += `<strong>${content}</strong>`;
            } else {
                finalContent += `<span>${content}</span>`;
            }
        });

        const comment = await getComments(post._id);
        const reaction = await getReaction(post._id);
        const img = post.img ? `<img src="${post.img}" alt="${post.authorId.username}" />` : '';
        const photo = post.detail[0].photo ? post.detail[0].photo : 'https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png';

        const tweet = document.createElement('div');
        tweet.classList = 'tweet';

        tweet.innerHTML += `
            <div class="tweetAuthor">
                <img src="${photo}" />
                <p>${post.detail[0].username}</p>
                </div>
                <div class="tweetContent">
                
                <p> ${finalContent} </p>
    
                ${ img }
                </div>
                <div class="icons">
                <div>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Comment_font_awesome.svg/1024px-Comment_font_awesome.svg.png'
                        class="commentIcon"
                    />
                    <p>${ comment }</p>
                </div>
                <div>
                    <img 
                        src='https://www.svgrepo.com/show/335228/heart-solid.svg'
                        class="heart"
                    />
                    <p>${ reaction }</p>
                </div>
            </div>
        `;

        postsContainer.appendChild(tweet);
        tweet.addEventListener('click', () => selectPost(post._id));
    });
}

getPosts();
getUserPhoto();