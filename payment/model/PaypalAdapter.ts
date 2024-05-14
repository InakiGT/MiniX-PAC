import Paypal from "../../paypal/Paypal";
import Payment from "./Payment";

class PaypalAdapter implements Payment {
    private paypal: Paypal;

    constructor() {
        this.paypal = new Paypal();
    }

    pay(data: any) {
        return this.paypal.payment(data);
    }
}

export default PaypalAdapter;