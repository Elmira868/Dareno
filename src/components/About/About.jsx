import './About.css';
import about2 from '../../assets/img/about2.jpg';
import about1 from '../../assets/img/about-1.avif';

export default function About(){
    return(
        <>
        <div className='about-box'>
            <div className='about-box--img'>
                <img src={about1} alt="window" className='window-img'/>
                <img src={about2} alt="about" className='about-img' />
            </div>
            <div className='about-us--texts'>
                <h5 className='about-us'>درباره ی ما</h5>
                <h1 className='about-us--title'>
                    تعهد ما به ارائه بهترین خدمات
                </h1>
                <p className='about-us--desc'>
                    لورم ایپسوم متن ساختگی با
                     تولید سادگی نامفهوم از صنعت چاپ،
                     و با استفاده از طراحان گرافیک است،
                     لورم ایپسوم متن
                      ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است،
                      چاپگرها و متون بلکه روزنامه و مجله
                </p>

                {/* <ul>

                </ul> */}

            </div>
        </div>
        </>
    )
}