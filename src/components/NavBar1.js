import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar1.css";

const NavBar1 = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <header className="navbar1">
      <img
        className="logo-icon4"
        loading="lazy"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <nav className="navitems1">
        <div className="packages-wrapper">
          <div className="packages1">Packages</div>
        </div>
        <div className="c-t-a-button-customize">
          <div className="about3" onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <div className="c-t-a-button-customize1">
          <div className="contact6" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <button className="ctabutton4" onClick={onCTAButtonClick}>
          <div className="customize-you-trip1">Customize you trip</div>
        </button>
      </nav>
    </header>
  );
};

export default NavBar1;
