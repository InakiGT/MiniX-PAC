const postContainer = document.getElementById('specific-post');
const commentsContainer = document.getElementById('comments');
const createComment = document.getElementById('create-comment');

const id = window.location.search.replace('?id=', '');

const getComment = async (id) => {
    const api = new Api('http://localhost:3000/comments');
    const { data: { data: comments } } = await api.Get(id);

    return comments.length;
}

const getReaction = async (id) => {
    const api = new Api('http://localhost:3000/reactions');
    const { data: { data: comments } } = await api.Get(id);
    return comments.length;
}

const sendComment = async (e) => {
    if ( e.key === 'Enter' ) {
        const api = new Api('http://localhost:3000/comments');
        const response = await api.Post({
            content: e.target.value,
            postId: id,
        });

        if (response.status === 200) {
            location.reload();
        }
    }
}

const addReaction = async (id) => {
    const api = new Api('http://localhost:3000/reactions');
    const response = await api.Post({ postId: id });

    if (response.status === 200) {
        location.reload();
    }
}

const getComments = async () => {
    const api = new Api('http://localhost:3000/comments');
    const { data: { data: comments } } = await api.Get(id);

    comments.forEach((comment) => {
        const photo = comment.user[0].photo ? comment.user[0].photo : 'https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png';
        
        commentsContainer.innerHTML += `
        <div class="tweet">
            <div class="tweetAuthor">
                <img src="${photo}" />
                <p>${comment.user[0].username}</p>
            </div>
            <div class="tweetContent">
            
            <p> ${comment.content} </p>

            </div>
        </div>
      `;
    });
}

const getPost = async () => {
    const api = new Api('http://localhost:3000/posts/getOne');
    const { data: { data: post } } = await api.Get(id);

    const splitContent = post.content.split(/(#\w+)/g);
    let finalContent = '';
    splitContent.forEach((content) => {
        if ( content.startsWith('#') ) {
            finalContent += `<strong>${content}</strong>`;
        } else {
            finalContent += `<span>${content}</span>`;
        }
    });

    const img = post.img ? `<img src="${post.img}" alt="${post.authorId.username}" />` : '';
    const photo = post.detail[0].photo ? post.detail[0].photo : 'https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png';

    const comment = await getComment(post._id);
    const reaction = await getReaction(post._id);
    
    const tweet = document.createElement('div');
    tweet.classList = 'tweet noHover';

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
            <div id="comment">
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Comment_font_awesome.svg/1024px-Comment_font_awesome.svg.png'
                    class="commentIcon"
                />
                <p>${ comment }</p>
            </div>
            <div id="reaction">
                <img 
                    src='https://www.svgrepo.com/show/335228/heart-solid.svg'
                    class="heart"
                />
                <p>${ reaction }</p>
            </div>
        </div>
    `;

    postContainer.appendChild(tweet);

    const reactionEvent = document.getElementById('reaction');
    reactionEvent.addEventListener('click', () => addReaction(post._id));
}

createComment.addEventListener('keypress', (e) => sendComment(e));

getPost();
getComments();