import './Text.css';

export default function Text (){
    return(
        <>
      <div className='text-box--items'>
          <h3 className='text-welcome'>به درینو خوش آمدید</h3>
        <h1 className='text-title'>
            بهترین خدمات در و پنجره
        </h1>
        <p className='text-desc'>
            لورم ایپسوم متن ساختگی با تولید سادگی
             نامفهوم از صنعت چاپ، و با استفاده 
            از طراحان گرافیک است، چاپگرها و
        </p>
        <a href="#" className='text-btn'>اطلاعات بیشتر</a>
      </div>
        </>
    )
}