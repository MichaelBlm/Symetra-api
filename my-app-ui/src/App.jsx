import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AdminPage from './AdminPage';
import CustomerPage from './CustomerPage';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/customer">Customer</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/customer" element={<CustomerPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
