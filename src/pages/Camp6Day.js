import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar3 from "../components/NavBar3";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import PackageCTA from "../components/PackageCTA";
import FooterFrame1 from "../components/FooterFrame1";
import "./Camp6Day.css";

const Camp6Day = () => {
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

  const onGridSystemClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="camp6day">
      <NavBar2
        frameDivMargin="unset"
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <div className="camp6day-inner">
        <div className="day-camp-safari-wrapper">
          <h1 className="day-camp-safari">6-Day Camp Safari</h1>
        </div>
      </div>
      <div className="camp6day-child">
        <div className="frame-parent26">
          <FrameComponent13 />
          <FrameComponent11 />
        </div>
      </div>
      <main className="frame-main">
        <section className="frame-parent27">
          <div className="frame-parent28">
            <div className="day-1-arusha-to-tarangire-nat-wrapper">
              <h2 className="day-1-arusha1">
                Day 1: Arusha to Tarangire National Park
              </h2>
            </div>
            <div className="rectangle-parent6">
              <img
                className="frame-child18"
                loading="lazy"
                alt=""
                src="/rectangle-411@2x.png"
              />
              <img
                className="frame-child19"
                loading="lazy"
                alt=""
                src="/rectangle-423@2x.png"
              />
            </div>
          </div>
          <FrameComponent10 />
          <FrameComponent9 />
          <PackageCTA
            propAlignSelf="stretch"
            propFlexWrap="wrap"
            propPadding="var(--padding-8xl) var(--padding-26xl) var(--padding-16xl) var(--padding-19xl)"
            propFlex="unset"
            propMarginLeft="unset"
            propRight="1rem"
            propWidth="calc(100% - 16px)"
            onSpacingManagerClick={onGridSystemClick}
          />
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

export default Camp6Day;
