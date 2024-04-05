import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="button-signup-wrapper">
      <div className="button-signup">
        <div className="aboutimage-5-wrapper">
          <img
            className="aboutimage-5-icon"
            loading="lazy"
            alt=""
            src="/aboutimage-5@2x.png"
          />
        </div>
        <div className="ctabutton-parent">
          <button className="ctabutton2" onClick={onCTAButtonClick}>
            <div className="request-a-quote2">Request a quote</div>
          </button>
          <button className="ctabutton3">
            <div className="talk-to-an1">talk to an expert</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
