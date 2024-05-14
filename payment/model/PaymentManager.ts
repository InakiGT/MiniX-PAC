import Payment from "./Payment";

class PaymentManager {
    private payMethod: Payment;

    constructor(payMehtod: Payment) {
        this.payMethod = payMehtod;
    }

    pay(data: any) {
        return this.payMethod.pay(data);
    }
}

export default PaymentManager;