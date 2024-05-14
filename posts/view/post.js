const postContainer = document.getElementById('specific-post');
const commentsContainer = document.getElementById('comments');

const id = window.location.search.replace('?id=', '');

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
                <p>300k</p>
            </div>
            <div>
                <img 
                    src='https://www.svgrepo.com/show/335228/heart-solid.svg'
                    class="heart"
                />
                <p>200k</p>
            </div>
        </div>
    `;

    postContainer.appendChild(tweet);
}

getPost();
getComments();