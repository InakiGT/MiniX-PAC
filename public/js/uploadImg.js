const uploadImg = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const api = new Api('http://localhost:4000/upload-img');

    const formData = new FormData();
    formData.append('myFile', file);

    const url = await api.SendData(formData);
    
    const setImage = url.response.data;
    return setImage;
}