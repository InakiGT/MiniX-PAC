const form = document.getElementById('paymentForm');

const sendPayment = async (e) => {
    e.preventDefault();

    const api = new Api('http://localhost:3000/payment/paypal');
    const response = await api.Post({ email: 'correo@correo.com' });

    if ( response.status === 200 ) {
        window.location = 'http://127.0.0.1:5500/posts/view/posts.html'
    }
}

form.addEventListener('submit',  (e) => sendPayment(e));