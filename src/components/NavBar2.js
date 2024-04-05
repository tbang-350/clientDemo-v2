import "./NavBar2.css";

const NavBar2 = ({
  onLogoClick,
  onAboutTextClick,
  onContactText1Click,
  onCTAButtonClick,
}) => {
  return (
    <header className="navbar2">
      <img
        className="logo-icon6"
        loading="lazy"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <nav className="navitems2">
        <div className="logo-and-nav">
          <div className="packages2">Packages</div>
        </div>
        <div className="about-container">
          <div className="about4" onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <div className="contact-container">
          <div className="contact8" onClick={onContactText1Click}>
            Contact
          </div>
        </div>
        <button className="ctabutton5" onClick={onCTAButtonClick}>
          <div className="customize-you-trip2">Customize you trip</div>
        </button>
      </nav>
    </header>
  );
};

export default NavBar2;
