import Payment from './Payment';

class CardPayment implements Payment {
    constructor() {}

    pay(data: any) {
        return `PAYMENT MADE WITH CARD ${ data.card }`
    }
}

export default CardPayment;