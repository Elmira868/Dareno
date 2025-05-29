import "./Service-box.css";

export default function ServiceBox({
  title,
  description,
  image,
  style,
  titleColor,
  descriptionColor,
}) {
  return (
    <>
      <div className="service-box" style={style}>
        <img src={image} alt={title} className="service-img" />
        <h3 className="service-title" style={{ color: titleColor }}>
          {title}
        </h3>
        <p className="service-desc" style={{ color: descriptionColor }}>
          {description}
        </p>
      </div>
    </>
  );
}
