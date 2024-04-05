import NavBar1 from "./NavBar1";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <section className="nav-bar">
      <NavBar1 />
      <div className="travel-info-container">
        <img
          className="backgroundimage4-icon"
          alt=""
          src="/backgroundimage4@2x.png"
        />
        <h1 className="travel-quote">travel quote</h1>
      </div>
    </section>
  );
};

export default FrameComponent4;
