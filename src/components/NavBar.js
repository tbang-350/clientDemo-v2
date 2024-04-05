import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutText1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <header className="navbar">
      <img
        className="logo-icon2"
        loading="lazy"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <div className="navitems">
        <div className="f-r-a-m-e-packages">
          <div className="packages">Packages</div>
        </div>
        <div className="about-wrapper">
          <div className="about2" onClick={onAboutText1Click}>
            About
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="contact4" onClick={onContactText1Click}>
            Contact
          </div>
        </div>
        <button className="ctabutton1" onClick={onCTAButtonClick}>
          <div className="customize-you-trip">Customize you trip</div>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
