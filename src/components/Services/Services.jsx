import "./Services.css";
import ServiceBox from "./Service-box/Service-box";
import Button from "../Button/Button";
import info from "./data";
export default function Services() {
  return (
    <>
      <div className="services-box">
        <div className="services-text--box">
          <h5 className="services-title">خدمات</h5>
          <h1 className="services-subtitle">
            ما بهترین خدمات را ارائه می‌دهیم
          </h1>
          <p className="services-desc">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و
          </p>
          <Button>تماس با ما</Button>
        </div>

        {info.map((service, index) => (
          <ServiceBox
            key={service.title}
            {...service}
            style={{ backgroundColor: index === 0 ? "#219ebc" : "#fff" }}
            titleColor={index === 0 ? "#fff" : undefined}
            descriptionColor={index === 0 ? "#fff" : undefined}
          />
        ))}
      </div>
    </>
  );
}
