import PricingCard from './PricingCard';
import PricingCardData from '../data/PricingCardData';
import './PricingCardsStyles.css';

const PricingCards = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            {
              PricingCardData.map((item, index) => (
                <PricingCard key={index} name={item.name} price={item.price} days={item.days} pages={item.pages}/>
              ))
            }
        </div>
    </div>
  )
}

export default PricingCards;