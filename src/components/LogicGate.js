import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar3 from "./NavBar3";
import "./LogicGate.css";

const LogicGate = () => {
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
    <section className="logic-gate">
      <NavBar3
        frameDivMargin="unset"
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <div className="day-lake-manyara-ngorongoro-wrapper">
        <h1 className="day-lake-manyara1">{`2-Day Lake Manyara & Ngorongoro Camping Tour`}</h1>
      </div>
    </section>
  );
};

export default LogicGate;
