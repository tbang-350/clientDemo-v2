import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar3 from "../components/NavBar3";
import Parallel from "../components/Parallel";
import Rotation from "../components/Rotation";
import PackageCTA from "../components/PackageCTA";
import FooterFrame1 from "../components/FooterFrame1";
import "./Safari7Day.css";

const Safari7Day = () => {
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

  const onScalePropertiesClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="safari7day">
      <NavBar3
        frameDivMargin="unset"
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <div className="safari7day-inner">
        <div className="day-materuni-tarangire-seren-wrapper">
          <h1 className="day-materuni-tarangire">{`7-Day Materuni, Tarangire, Serengeti & Lake Manyara`}</h1>
        </div>
      </div>
      <Parallel />
      <main className="triangle-shape">
        <div className="star-shape-parent">
          <div className="star-shape">
            <div className="frame-parent29">
              <div className="frame-parent30">
                <div className="day-1-materuni-waterfalls-k-wrapper">
                  <h2 className="day-1-materuni">{`Day 1: Materuni Waterfalls & Kikuletwa Hot Springs`}</h2>
                </div>
                <div className="condition-chain-parent">
                  <img
                    className="condition-chain-icon"
                    loading="lazy"
                    alt=""
                    src="/rectangle-413@2x.png"
                  />
                  <img
                    className="condition-chain-icon1"
                    loading="lazy"
                    alt=""
                    src="/rectangle-424@2x.png"
                  />
                </div>
              </div>
              <div className="shadow">
                <h3 className="begin-your-safari-container">
                  <p className="begin-your-safari">
                    Begin your safari with a morning journey to the Tarangire
                    National Park, a vast wilderness spanning 2,600km². Marvel
                    at the diverse landscape, including savannah, seasonal
                    swamps, and iconic
                  </p>
                  <p className="baobab-trees-encounter">
                    baobab trees. Encounter a variety of wildlife, with
                    Tarangire being renowned for its awe-inspiring elephant
                    herds. Spend the night in comfortable tents within the park,
                    surrounded by the enchanting
                  </p>
                  <p className="wilderness">wilderness.</p>
                </h3>
              </div>
              <div className="frame-parent31">
                <div className="day-2-tarangire-national-park-wrapper">
                  <h2 className="day-2-tarangire">
                    Day 2: Tarangire National Park
                  </h2>
                </div>
                <div className="value-graph-creator-parent">
                  <img
                    className="value-graph-creator"
                    loading="lazy"
                    alt=""
                    src="/rectangle-435@2x.png"
                  />
                  <img
                    className="value-graph-creator1"
                    loading="lazy"
                    alt=""
                    src="/rectangle-444@2x.png"
                  />
                </div>
              </div>
              <div className="opacity">
                <h3 className="after-breakfast-embark-container">
                  <p className="after-breakfast-embark">
                    After breakfast, embark on a two-hour drive to Tarangire
                    National Park, known for ancient baobab trees and vast
                    elephant herds. Enjoy open-top vehicle game drives,
                    observing diverse wildlife. Stay at
                  </p>
                  <p className="the-fig-tree">
                    the Fig Tree Lodge for a delightful dinner and overnight
                    rest in the heart of Tarangire.
                  </p>
                </h3>
              </div>
            </div>
          </div>
          <Rotation />
          <div className="fill-properties">
            <PackageCTA
              propAlignSelf="unset"
              propFlexWrap="unset"
              propPadding="var(--padding-8xl) var(--padding-10xl) var(--padding-16xl) var(--padding-19xl)"
              propFlex="1"
              propMarginLeft="unset"
              propRight="0rem"
              propWidth="100%"
              onSpacingManagerClick={onScalePropertiesClick}
            />
            <PackageCTA
              propAlignSelf="unset"
              propFlexWrap="unset"
              propPadding="var(--padding-8xl) var(--padding-10xl) var(--padding-16xl) var(--padding-19xl)"
              propFlex="1"
              propMarginLeft="-80.875rem"
              propRight="0rem"
              propWidth="100%"
              onSpacingManagerClick={onFrameButtonClick}
            />
          </div>
        </div>
      </main>
      <FooterFrame1
        propMarginLeft="unset"
        propDebugCommit="unset"
        propDebugCommit1="unset"
      />
    </div>
  );
};

export default Safari7Day;
