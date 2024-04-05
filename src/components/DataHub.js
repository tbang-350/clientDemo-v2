import { useMemo } from "react";
import "./DataHub.css";

const DataHub = ({
  mealsAsSpecifiedInTheItin,
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const dataHubStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propWidth, propMinWidth]);

  return (
    <div className="data-hub" style={dataHubStyle}>
      <div className="feature-set">
        <div className="instance-parent15">
          <img
            className="frame-child31"
            loading="lazy"
            alt=""
            src="/group-28.svg"
          />
          <div className="output-port">
            <b className="participation-in-all">
              Participation in all listed activities.
            </b>
          </div>
        </div>
        <div className="instance-parent16">
          <img
            className="frame-child32"
            loading="lazy"
            alt=""
            src="/group-28.svg"
          />
          <div className="meals-as-specified-in-the-itin-wrapper">
            <b className="meals-as-specified">{mealsAsSpecifiedInTheItin}</b>
          </div>
        </div>
      </div>
      <div className="excluded-group">
        <h2 className="excluded2">EXCLUDED</h2>
        <div className="frame-parent59">
          <div className="instance-parent17">
            <div className="path-22-parent13">
              <img
                className="path-22-icon16"
                loading="lazy"
                alt=""
                src="/path-22.svg"
              />
              <div className="subtree" />
            </div>
            <b className="international-airfare-flights2">
              International Airfare: Flights to and from your home country are
              typically not included.
            </b>
          </div>
          <div className="pathway">
            <div className="network">
              <div className="path-22-parent14">
                <img
                  className="path-22-icon17"
                  loading="lazy"
                  alt=""
                  src="/path-22.svg"
                />
                <div className="component" />
              </div>
              <div className="algorithm">
                <div className="path-22-parent15">
                  <img
                    className="path-22-icon18"
                    loading="lazy"
                    alt=""
                    src="/path-22.svg"
                  />
                  <div className="instructions" />
                </div>
                <div className="path-22-parent16">
                  <img
                    className="path-22-icon19"
                    loading="lazy"
                    alt=""
                    src="/path-22.svg"
                  />
                  <div className="instance-child7" />
                </div>
              </div>
            </div>
            <div className="procedure1">
              <div className="function">
                <div className="variable1">
                  <div className="constant">
                    <b className="optional-excursions-and2">
                      Optional excursions and activities e.g Hot Air Balloon
                    </b>
                  </div>
                  <b className="alcoholic-beverages-and2">
                    Alcoholic beverages and soft drinks
                  </b>
                </div>
                <div className="argument">
                  <b className="visa-expenses2">Visa expenses</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHub;
