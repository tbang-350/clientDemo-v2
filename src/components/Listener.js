import { useMemo } from "react";
import "./Listener.css";

const Listener = ({
  flyingDoctorsInsuranceAMR,
  overnightStaysAlignedWith,
  propFlex,
  propFlex1,
  propMinWidth,
  propWidth,
  propHeight,
  propFlex2,
}) => {
  const listenerStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const handlerStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const flyingDoctorsInsuranceStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const stackStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      flex: propFlex2,
    };
  }, [propWidth, propHeight, propFlex2]);

  return (
    <div className="listener" style={listenerStyle}>
      <div className="handler" style={handlerStyle}>
        <img className="handler-child" alt="" src="/group-28.svg" />
        <b
          className="flying-doctors-insurance"
          style={flyingDoctorsInsuranceStyle}
        >
          {flyingDoctorsInsuranceAMR}
        </b>
      </div>
      <div className="stack1" style={stackStyle}>
        <img className="stack-child" alt="" src="/group-28.svg" />
        <div className="overnight-stays-aligned-with-t-wrapper">
          <b className="overnight-stays-aligned">{overnightStaysAlignedWith}</b>
        </div>
      </div>
    </div>
  );
};

export default Listener;
