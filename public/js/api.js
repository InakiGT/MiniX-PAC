

class Api {
    constructor(url) {
        this.baseUrl = url;
        this.url = url;
    }

    async Get(id) {
        try {
            this.url = id ? this.baseUrl + `/${id}` : this.baseUrl;
            const token = localStorage.getItem('token');

            const response = await axios.get(this.url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                } 
            });

            return response;
        } catch(err) {
            console.log('Error al hacer la solicitud');
        }
    }

    async Post(data) {
        try {
            this.url = this.baseUrl;
            const token = localStorage.getItem('token');

            const response = await axios.post(this.url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                } 
            });

            return response;
        } catch(err) {
            console.log('Error al hacer la solicitud', err);
        }
    }

    async Put(id, data) {
        try {
            this.url = this.baseUrl + `/${id}`;
            const token = localStorage.getItem('token');

            const response = await axios.put(this.url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                } 
            });

            return response;
        } catch(err) {
            console.log('Error al hacer la solicitud');
        }
    }

    async Delete(id, author) {
        try {
            this.url = this.baseUrl + `/${id}`;
            const token = localStorage.getItem('token');


            const response = await axios.delete(this.url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                } 
            });

            return response;
        } catch(err) {
            console.log('Error al hacer la solicitud');
        }
    }

    async SendData(data) {
        try {
            this.url = this.baseUrl;
            const response = await axios.post(this.url, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            return {
                status: 'OK',
                response,
            }
        } catch(err) {
            console.error(err);
            return {
                error: 'Error en la consulta',
            }
        }
    }
}