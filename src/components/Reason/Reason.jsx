import londonImg from '../../assets/img/london-corporate-buildings.jpg';
import './Reason.css';
import Button from '../Button/Button';

export default function Reason({children}) {
    return (
        <>
  <div className='reason'>
    <div style={{ backgroundImage: `url(${londonImg})`}} className='reason-bg'></div>
            <div id="overlay"></div>
            <div className='reason-items'>
                <div className='reason-box1'>
                    <div>
                        <h1 className='reason-h1'>780K+</h1>
                        <span className='reason-span'>مشتریان ما</span>
                    </div>
                    <div>
                        <h1 className='reason-h1'>95%</h1>
                        <span className='reason-span'>سفارشات مجدد</span>
                    </div>
                    <div>
                        <h1 className='reason-h1'>12+</h1>
                        <span className='reason-span'>تجربه کار</span>
                    </div>
                    <div>
                        <h1 className='reason-h1'>99%</h1>
                        <span className='reason-span'>رضایت مشتریان</span>
                    </div>
                </div>

                <div className='reason-box2'>
                    <h1 className='reason-title'>این دلیل انتخاب ماست</h1>
                    <p className='reason-desc'>
                        لورم ایپسوم متن ساختگی با تولید سادگی
                         نامفهوم از صنعت چاپ، و با استفاده
                         از طراحان گرافیک است، چاپگرها
                         و متون بلکه روزنامه و مجله در ستون و
                    </p>

                    <Button className="reason-btn">اشتراک پروژه من</Button>
                   
                </div>
            </div>
  </div>
        </>
    );
}