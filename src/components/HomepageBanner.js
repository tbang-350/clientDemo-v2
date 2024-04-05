import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HomepageBanner.css";

const HomepageBanner = () => {
  const navigate = useNavigate();

  const onConstraintsClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <section className="homepagebanner">
      <div className="homepagebanner-child" />
      <div className="homepagebanner-item" />
      <img
        className="backgroundimage-icon"
        loading="lazy"
        alt=""
        src="/backgroundimage@2x.png"
      />
      <div className="homepagebanner-inner">
        <div className="frame-parent43">
          <div className="karibu-isles-savannah-wrapper">
            <h1 className="karibu-isles">{`Karibu Isles & Savannah`}</h1>
          </div>
          <div className="opacity1">
            <div className="embark-on-a">
              Embark on a journey crafted uniquely for you
            </div>
          </div>
        </div>
      </div>
      <button className="constraints" onClick={onConstraintsClick}>
        <div className="build-your-safari">Build your safari</div>
      </button>
    </section>
  );
};

export default HomepageBanner;
