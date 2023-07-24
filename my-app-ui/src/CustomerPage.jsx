import { useState } from 'react';
import axios from 'axios';


function CustomerPage() {
    const [purchaseResponse, setPurchaseResponse] = useState("");

    const handleCheckDiscount = async () => {
        const response = await axios.get('http://localhost:3000/customer/check-discount');
        if(response.data.hasDiscount) {
            setPurchaseResponse(`You have a discount! The code is ${response.data.discountCode}`);
        } else {
            setPurchaseResponse(`No discount available!`);
        }
    };

    const handleMakePurchase = async () => {
        const response = await axios.post('http://localhost:3000/customer/make-purchase');
        setPurchaseResponse(response.data);
    };

    return (
        <div>
            <h1>Customer Page</h1>
            <button onClick={handleCheckDiscount}>Check Discount</button>
            <button onClick={handleMakePurchase}>Make Purchase</button>
            <p>{purchaseResponse}</p>
        </div>
    );
}

export default CustomerPage;
