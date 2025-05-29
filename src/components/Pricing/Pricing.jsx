import './Pricing.css';
import Card from './Card/Card';
import info from './data';
export default function Pricing() {
    return(
        <>
       <div className='container'>
         <div className='pricing-text'>
            <h4 className='pricing-h4'>قیمت ها</h4>
            <h1 className='pricing-h1'>قیمت مقرون به صرفه</h1>
        </div>
        <div className='pricing-cards'>
            <Card {...info[0]}/>
            <Card {...info[1]} className='card-special' />
            <Card {...info[2]}/>
        </div>
       </div>
        </>
    )
}