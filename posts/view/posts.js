const api = new Api('http://localhost:3000/posts');

const postsContainer = document.getElementById('posts');

const getPosts = async () => {
    const response = await api.Get();
    const { data: { data: posts } } = response;

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


        const img = post.img ? `<img src="${post.img}" alt="${post.authorId.username}" />` : '';

        postsContainer.innerHTML += `
        <div class="tweet">
            <div class="tweetAuthor">
                <img src="${post.detail[0].photo}" />
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
        </div>
    `;
    })
}

getPosts();