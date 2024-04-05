import { useMemo } from "react";
import "./FrameComponent12.css";

const FrameComponent12 = ({ propAlignSelf, propPadding, propWidth }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div className="frame-wrapper24" style={frameDiv1Style}>
      <div className="frame-parent87">
        <div className="frame-wrapper25">
          <div className="frame-parent88">
            <div className="frame-wrapper26">
              <div className="frame-parent89">
                <div className="instance-parent34">
                  <div className="path-22-parent23">
                    <img className="path-22-icon26" alt="" src="/path-22.svg" />
                    <div className="input-processor" />
                  </div>
                  <div className="output-handler">
                    <b className="gratuities-tips4">Gratuities (tips)</b>
                  </div>
                </div>
                <div className="instance-parent35">
                  <div className="path-22-parent24">
                    <img className="path-22-icon27" alt="" src="/path-22.svg" />
                    <div className="instance-child8" />
                  </div>
                  <div className="personal-funds-for-souvenirs-a-frame">
                    <b className="personal-funds-for3">
                      Personal funds for souvenirs and additional purchases
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="instance-parent36">
              <div className="path-22-parent25">
                <img className="path-22-icon28" alt="" src="/path-22.svg" />
                <div className="instance-child9" />
              </div>
              <div className="travel-insurance-wrapper">
                <b className="travel-insurance3">Travel insurance</b>
              </div>
            </div>
          </div>
        </div>
        <div className="instance-parent37">
          <div className="path-22-parent26">
            <img className="path-22-icon29" alt="" src="/path-22.svg" />
            <div className="instance-child10" />
          </div>
          <div className="sleeping-bags-wrapper">
            <b className="sleeping-bags2">Sleeping bags</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
