import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Wallet from './components/MyWallet'; 
import Transfer from './components/Transfer'; 
import Transaction from './components/TransactionHistory'; 
import Logout from './components/Logout'; 
import Profile from './components/Profile';


function App() {
  return (
    <div className="App">
      <nav className='sidebare'>
        <div className='sidebar-header'>
          <h2>Digital Financial Wallet</h2>
        </div>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/wallet">MyWallet</Link></li>
          <li><Link to="/transfer">Transfer</Link></li>
          <li><Link to="/transaction">Transaction History</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/logout">Log Out</Link></li>
        </ul>
      </nav>
      <div className='content'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
