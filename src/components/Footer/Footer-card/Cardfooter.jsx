import './Cardfooter.css';
import logo from '../../../assets/img/logo.jpeg';
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function CardFooter(){
    return(
        <>
        <div className='card-footer'>
            <img src={logo} alt="logo" className='card-logo' />
            <p className='card-desc'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                 و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
            </p>
<div className='card-icons'>
    <IoLogoInstagram className='footer-icon' />
    <FaTelegram className='footer-icon' />
    <FaFacebook className='footer-icon' />
    <FaYoutube className='footer-icon' />
</div>
        </div>
        </>
    )
}