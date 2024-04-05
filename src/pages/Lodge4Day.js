import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar3 from "../components/NavBar3";
import FrameComponent6 from "../components/FrameComponent6";
import RangeSliderSet from "../components/RangeSliderSet";
import FooterFrame1 from "../components/FooterFrame1";
import "./Lodge4Day.css";

const Lodge4Day = () => {
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
    <div className="lodge4day">
      <NavBar3
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <div className="lodge4day-inner">
        <div className="day-lodge-safari-wrapper">
          <h1 className="day-lodge-safari">4-Day Lodge Safari</h1>
        </div>
      </div>
      <main className="lodge4day-child">
        <section className="frame-section">
          <FrameComponent6 />
          <RangeSliderSet />
        </section>
      </main>
      <FooterFrame1
        propMarginLeft="unset"
        propDebugCommit="unset"
        propDebugCommit1="unset"
      />
    </div>
  );
};

export default Lodge4Day;
