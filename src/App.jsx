import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ThankYouPage from './components/ThankYouPage';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/thank-you/:productName" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
