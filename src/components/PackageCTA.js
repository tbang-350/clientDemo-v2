import { useMemo } from "react";
import "./PackageCTA.css";

const PackageCTA = ({
  propAlignSelf,
  propFlexWrap,
  propPadding,
  propFlex,
  propMarginLeft,
  propRight,
  propWidth,
  onSpacingManagerClick,
}) => {
  const packageCTAStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flexWrap: propFlexWrap,
      padding: propPadding,
      flex: propFlex,
      marginLeft: propMarginLeft,
    };
  }, [propAlignSelf, propFlexWrap, propPadding, propFlex, propMarginLeft]);

  const rectangleDivStyle = useMemo(() => {
    return {
      right: propRight,
      width: propWidth,
    };
  }, [propRight, propWidth]);

  return (
    <div className="packagecta1" style={packageCTAStyle}>
      <div className="packagecta-item" style={rectangleDivStyle} />
      <div className="make-your-dream-trip-come-true-group">
        <h2 className="make-your-dream1">{`MAKE YOUR DREAM TRIP COME TRUE WITH ISLES & SAVANNAH`}</h2>
        <div className="at-isles1">{`At Isles & Savannah t, you can customize your trip. Our sample itineraries are adjustable to your preferences. Our specialists work together with you to create your dream journey!`}</div>
      </div>
      <div className="spacing-manager-wrapper">
        <button className="spacing-manager" onClick={onSpacingManagerClick}>
          <div className="request-this-trip1">request this trip</div>
        </button>
      </div>
    </div>
  );
};

export default PackageCTA;
