const form = document.getElementById('paymentForm');

const sendPayment = async (e) => {
    e.preventDefault();

    const api = new Api('http://localhost:3000/payment/card');
    const response = await api.Post({ card: '122334123' });

    if ( response.status === 200 ) {
        window.location = 'http://127.0.0.1:5500/posts/view/posts.html'
    }
}

form.addEventListener('submit',  (e) => sendPayment(e));