import './Card.css';
import Button from '../../Button/Button';
export default function Card({title , price , feature1 , feature2 , feature3 , feature4 , feature5 , className=''}){
    return(
        <>
        <div className={`card ${className}`}>
            <h1 className='card-title'>{title}</h1>
            <h2 className='card-price'>{price}</h2>
            <ul className='card-list'>
                <li className='card-item'>{feature1}</li>
                <li className='card-item'>{feature2}</li>
                <li className='card-item'>{feature3}</li>
                <li className='card-item'>{feature4}</li>
                <li className='card-item'>{feature5}</li>
            </ul>
            <Button className='card-btn'>خرید</Button>
            
        </div>
        </>
    )
}