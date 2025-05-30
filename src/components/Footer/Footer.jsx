import './Footer.css';
import CardFooter from './Footer-card/Cardfooter';
export default function Footer(){
    return(
        <>
        <div className='footer'>
            <div className='footer-contact'>
                <h1 className='footer-contact-title'>ارتباط با ما</h1>
                <h2>+98 123 456 789</h2>
                <h2>KxNtX@example.com</h2>
            </div>

            <div className='footer-card'>
                <CardFooter/>
            </div>

            <div className='footer-address'>
<h1 className='footer-address-title'>آدرس</h1>
<h2>تهران، خیابان اصفهان، پلاک ۱</h2>
            </div>
            
        </div>
        </>
    )
}