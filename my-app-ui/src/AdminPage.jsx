import { useState } from 'react';
import axios from 'axios';

function AdminPage() {
    const [n, setN] = useState(0);
    const [discountCode, setDiscountCode] = useState("");
    const [report, setReport] = useState({});

    const handleSetN = async () => {
        const response = await axios.post('http://localhost:3000/admin/set-n', { n });
        console.log(response.data);
    };
    
    const handleSetDiscountCode = async () => {
        const response = await axios.post('http://localhost:3000/admin/set-discount-code', { discountCode });
        console.log(response.data);
    };
    
    const handleGetReport = async () => {
        const response = await axios.get('http://localhost:3000/admin/report');
        setReport(response.data);
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <input value={n} onChange={e => setN(e.target.value)} placeholder="Set N for discount" />
            <button onClick={handleSetN}>Set N</button>
            <input value={discountCode} onChange={e => setDiscountCode(e.target.value)} placeholder="Set discount code" />
            <button onClick={handleSetDiscountCode}>Set Discount Code</button>
            <h2>Report</h2>
            <button onClick={handleGetReport}>Get Report</button>
            <p>Total Purchases: {report.totalPurchases}</p>
            <p>Total Discounts Given: {report.totalDiscountsGiven}</p>
        </div>
    );
}

export default AdminPage;
