/* eslint-disable no-unused-vars */
import { useParams, Link } from 'react-router-dom';
import './ThankYouPage.css';

const ThankYouPage = () => {
    const { productName } = useParams();
    
    return (
      <center>
        <div className="thank-you-page">
          <h1>Congratulations Order Placed! !</h1>
          
        <center>
        <img src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1729437061/14d6293522911d4a2548b9b1cf65a33a_ptgwth.png" alt="order image" className="thank-you-image" />
        </center>
        <p className='para'>
            Thank you for choosing Chaperone services.
            We will soon get in touch with you!
          </p>
          
          <Link to="/" className="back-to-shopping">
            Continue Shopping
          </Link>
        </div>
      </center>
    );
  };
export default ThankYouPage  