import "./Header.css";
import headerBg from "../../assets/img/header-bg.jpg";
import logo from "../../assets/img/logo.jpeg";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Text from "./Text/Text";
import Features from "./Features/Features";
import info from './data';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
// Menu handler
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <img className="header-img" src={headerBg} alt="header-img" />
          {/* Menu */}
          <div className="box-menu">
            <div>
              <img className="logo" src={logo} alt="logo" />
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
              <IoIosMenu />
            </div>

            <div>
              <ul className={`menu ${isMenuOpen ? "open" : "close"}`}>
                <li>
                  <a href="#">خانه</a>
                </li>
                <li>
                  <a href="#">درباره ی ما</a>
                </li>
                <li>
                  <a href="#">خدمات</a>
                </li>
                <li>
                  <a href="#">پیشنهادات</a>
                </li>
                <li>
                  <a href="#">پروژه ها</a>
                </li>
                <li>
                  <a href="#">ارتباط با ما</a>
                </li>
                <a href="#" className="menu-btn">
                  شروع کنید
                </a>
              </ul>
            </div>
          </div>
        </div>
        <Text/>
        <div className="feature-box">
          <Features {...info[0]}/>
        <Features {...info[1]}/>
        <Features {...info[2]} className="special-feature" />
        </div>
      </header>
    </>
  );
}
