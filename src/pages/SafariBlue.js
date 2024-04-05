import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar3 from "../components/NavBar3";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import PackageCTA from "../components/PackageCTA";
import FooterFrame1 from "../components/FooterFrame1";
import "./SafariBlue.css";

const SafariBlue = () => {
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

  const onSpacingManagerClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="safariblue">
      <NavBar2
        frameDivMargin="0"
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <section className="safariblue-inner">
        <div className="safari-blue-wrapper">
          <h1 className="safari-blue">Safari Blue</h1>
        </div>
      </section>
      <FrameComponent8 />
      <section className="flow-container-wrapper">
        <div className="flow-container">
          <FrameComponent7 />
          <PackageCTA onSpacingManagerClick={onSpacingManagerClick} />
        </div>
      </section>
      <FooterFrame1
        propMarginLeft="-0.562rem"
        propDebugCommit="unset"
        propDebugCommit1="unset"
      />
    </div>
  );
};

export default SafariBlue;
