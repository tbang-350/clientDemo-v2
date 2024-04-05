import FrameComponent12 from "./FrameComponent12";
import "./FrameComponent11.css";

const FrameComponent11 = () => {
  return (
    <div className="frame-parent90">
      <div className="arusha-to-tarangire-national-p-wrapper">
        <h3 className="arusha-to-tarangire-container">
          <ol className="arusha-to-tarangire-national-p">
            <li className="arusha-to-tarangire">
              Arusha to Tarangire National Park
            </li>
            <li className="tarangire-national-park">
              Tarangire National Park to Lake Manyara National Park
            </li>
            <li className="lake-manyara-to1">
              Lake Manyara to Serengeti National Park
            </li>
            <li className="serengeti-national-park2">
              Serengeti National Park
            </li>
            <li className="serengeti-national-park3">
              Serengeti National Park to Ngorongoro Conservation Area
            </li>
            <li>Ngorongoro Conservation Area to Arusha</li>
          </ol>
        </h3>
      </div>
      <div className="frame-parent91">
        <div className="frame-parent92">
          <div className="instance-parent38">
            <img className="frame-child59" alt="" src="/group-28.svg" />
            <div className="all-meals-included-breakfast-wrapper">
              <b className="all-meals-included2">{`All Meals Included (Breakfast, Lunch & Dinner)`}</b>
            </div>
          </div>
          <div className="excluded-parent1">
            <h2 className="excluded4">EXCLUDED</h2>
            <div className="frame-parent93">
              <div className="instance-parent39">
                <div className="path-22-parent27">
                  <img
                    className="path-22-icon30"
                    loading="lazy"
                    alt=""
                    src="/path-22.svg"
                  />
                  <div className="instance-child11" />
                </div>
                <b className="international-airfare-flights4">
                  International Airfare: Flights to and from your home country
                  are typically not included.
                </b>
              </div>
              <div className="frame-parent94">
                <div className="instance-parent40">
                  <div className="path-22-parent28">
                    <img className="path-22-icon31" alt="" src="/path-22.svg" />
                    <div className="instance-child12" />
                  </div>
                  <div className="instance-parent41">
                    <div className="path-22-parent29">
                      <img
                        className="path-22-icon32"
                        alt=""
                        src="/path-22.svg"
                      />
                      <div className="instance-child13" />
                    </div>
                    <div className="path-22-parent30">
                      <img
                        className="path-22-icon33"
                        alt=""
                        src="/path-22.svg"
                      />
                      <div className="instance-child14" />
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper27">
                  <div className="frame-parent95">
                    <div className="frame-parent96">
                      <div className="optional-excursions-and-activi-wrapper">
                        <b className="optional-excursions-and3">
                          Optional excursions and activities e.g Hot Air Balloon
                        </b>
                      </div>
                      <b className="alcoholic-beverages-and3">
                        Alcoholic beverages and soft drinks
                      </b>
                    </div>
                    <div className="visa-expenses-container">
                      <b className="visa-expenses3">Visa expenses</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent97">
          <div className="instance-parent42">
            <img className="frame-child60" alt="" src="/group-28.svg" />
            <div className="professional-english-speaking-container">
              <b className="professional-english-speaking2">
                Professional, English-speaking safari cook.
              </b>
            </div>
          </div>
          <FrameComponent12 />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
