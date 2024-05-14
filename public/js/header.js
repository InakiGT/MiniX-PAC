const navPhoto = document.getElementById('navPhoto');
const navigator = document.getElementById('userNavigator');

const getUserPhotoHeader = async () => {
    const userId = decodeToken(localStorage.getItem('token'));

    const api = new Api('http://localhost:3000/users');
    const response = await api.Get(userId.sub);
    const pUser = response.data.data.photo
    navigator.href += response.data.data._id;

    if ( pUser ) {
        navPhoto.src = pUser;
    }
}

getUserPhotoHeader();