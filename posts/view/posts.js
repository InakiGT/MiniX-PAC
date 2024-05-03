const posts = [
    {
        authorId: {
            photo: 'https://cdn1.iconfinder.com/data/icons/halloween-2330/512/50-Halloween_Icons_49-1024.png',
            username: 'Inakikiriki'
        },
        content: 'Hola amigos del #AMLOCO youtube',
        img: ''
    },
    {
        authorId: {
            photo: 'https://cdn1.iconfinder.com/data/icons/halloween-2330/512/50-Halloween_Icons_49-1024.png',
            username: 'Inakikiriki'
        },
        content: 'Hola amigos del #AMLOCO youtube',
        img: ''
    },
];

const postsContainer = document.getElementById('posts');

const getPosts = () => {
    posts.forEach((post) => {

        const splitContent = post.content.split(/(#\w+)/g);
        let finalContent = '';
        splitContent.forEach((content) => {
            if ( content.startsWith('#') ) {
                finalContent += `<strong>${content}</strong>`;
            } else {
                finalContent += `<span>${content}</span>`;
            }
        });


        const img = post.img ? `<img src="img" />` : '';

        postsContainer.innerHTML += `
        <div class="tweet">
            <div class="tweetAuthor">
                <img src="${post.authorId.photo}" />
                <p>${post.authorId.username}</p>
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
        </div>
    `;
    })
}

getPosts();