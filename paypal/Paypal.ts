
class Paypal {
    constructor() {}

    payment(data: any) {
        return `PAYMENT MADE ${ data.email }`;
    }
}

export default Paypal;