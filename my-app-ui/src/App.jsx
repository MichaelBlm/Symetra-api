import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
                <Route path="/admin" exact component={AdminPage} />
                <Route path="/customer" exact component={CustomerPage} />
            </div>
        </Router>
    );
}

export default App;
