import { Link } from 'react-router-dom';
import './PricingCardStyles.css';

const PricingCard = ({name, price, days, pages}) => {
  return (
    <div className='card'>
        <h3>- {name} -</h3>
        <span className='bar'></span>
        <p className='btc'>$ {price}</p>
        <p>- {days} Days -</p>
        <p>- {pages} Pages -</p>
        <p>- Featured -</p>
        <p>- Responsive Design -</p>
        <Link to="/contact" className='btn'>
            PURCHASE NOW
        </Link>
    </div>
  )
}

export default PricingCard;