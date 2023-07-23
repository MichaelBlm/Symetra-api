import { useState } from 'react';
import axios from 'axios';

function CustomerPage() {
    const [purchaseResponse, setPurchaseResponse] = useState("");

    const handleCheckDiscount = async () => {
        const response = await axios.get('/api/customer/check-discount');
        if(response.data.hasDiscount) {
            console.log(`You have a discount! The code is ${response.data.discountCode}`);
        } else {
            console.log('No discount available');
        }
    };

    const handleMakePurchase = async () => {
        const response = await axios.post('/api/customer/make-purchase');
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
