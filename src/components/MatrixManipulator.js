import { useMemo } from "react";
import "./MatrixManipulator.css";

const MatrixManipulator = ({
  day1LakeManyaraNationalPa,
  rectangle41,
  rectangle42,
  propPadding,
  propPadding1,
  propAlignSelf,
  propWidth,
}) => {
  const matrixManipulatorStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const numericCalculatorStyle = useMemo(() => {
    return {
      padding: propPadding1,
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propPadding1, propAlignSelf, propWidth]);

  return (
    <div className="matrix-manipulator" style={matrixManipulatorStyle}>
      <div className="string-processor">
        <div className="numeric-calculator" style={numericCalculatorStyle}>
          <h2 className="day-1-lake">{day1LakeManyaraNationalPa}</h2>
        </div>
        <div className="rectangle-parent7">
          <img
            className="frame-child28"
            loading="lazy"
            alt=""
            src={rectangle41}
          />
          <img
            className="frame-child29"
            loading="lazy"
            alt=""
            src={rectangle42}
          />
        </div>
      </div>
    </div>
  );
};

export default MatrixManipulator;
