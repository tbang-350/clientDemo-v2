import { useMemo } from "react";
import "./NavBar21.css";

const NavBar3 = ({
  frameDivMargin,
  onLogoClick,
  onAboutTextClick,
  onContactTextClick,
  onCTAButtonClick,
}) => {
  const navItemsStyle = useMemo(() => {
    return {
      margin: frameDivMargin,
    };
  }, [frameDivMargin]);

  return (
    <header className="navbar3">
      <img
        className="logo-icon8"
        loading="lazy"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <nav className="navitems3" style={navItemsStyle}>
        <div className="packages-container">
          <div className="packages3">Packages</div>
        </div>
        <div className="about-frame">
          <div className="about5" onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <div className="contact-frame">
          <div className="contact10" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <button className="ctabutton6" onClick={onCTAButtonClick}>
          <div className="customize-you-trip3">Customize you trip</div>
        </button>
      </nav>
    </header>
  );
};

export default NavBar3;
