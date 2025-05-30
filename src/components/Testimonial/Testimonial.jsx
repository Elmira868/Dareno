import "./Testimonial.css";
import Testimonialimg from "../../assets/img/testimonial.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import comments from "./data";

export default function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div>
          <img
            src={Testimonialimg}
            alt="Testimonial"
            className="testimonial-img"
          />
        </div>
        <div className="testimonial-text">
          <h5 className="testimonial-h5">رضایتمندی</h5>
          <h1 className="testimonial-h1">مشتریان درباره ما چه می‌گویند</h1>
          <p className="testimonial-p">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته، حال واقعی شده است
          </p>

          {/* Slider */}
          <div className="testimonial-slider">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
            >
              {comments.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="testimonial-slide">
                    <h3 className="testimonial-slide-name"> :{item.name}</h3>
                    <p className="testimonial-slide-comment">{item.comment}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
