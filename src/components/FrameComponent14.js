import { useMemo } from "react";
import "./FrameComponent14.css";

const FrameComponent14 = ({ propWidth, propAlignSelf }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className="included-parent2" style={frameDivStyle}>
      <h2 className="included4">included</h2>
      <div className="frame-parent79">
        <div className="frame-parent80">
          <div className="instance-parent30">
            <img
              className="frame-child54"
              loading="lazy"
              alt=""
              src="/group-28.svg"
            />
            <div className="ground-transportation-in-a-rob-frame">
              <b className="ground-transportation-in3">
                Ground transportation in a robust 4×4 safari Jeep.
              </b>
            </div>
          </div>
          <div className="instance-parent31">
            <img className="frame-child55" alt="" src="/group-28.svg" />
            <b className="complimentary-mineral-water3">
              Complimentary Mineral water.
            </b>
          </div>
        </div>
        <div className="frame-parent81">
          <div className="frame-parent82">
            <div className="instance-wrapper3">
              <img className="frame-child56" alt="" src="/group-28.svg" />
            </div>
            <b className="overnight-stays-in">
              Overnight stays in safari tents
            </b>
          </div>
          <div className="frame-wrapper22">
            <div className="instance-parent32">
              <img className="frame-child57" alt="" src="/group-28.svg" />
              <b className="camping-equipment-tents2">
                Camping equipment (tents, sleeping mats, chairs, tables etc.)
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent14;
