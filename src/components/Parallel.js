import FrameComponent14 from "./FrameComponent14";
import DataHub from "./DataHub";
import Listener from "./Listener";
import FrameComponent12 from "./FrameComponent12";
import "./Parallel.css";

const Parallel = () => {
  return (
    <div className="parallel">
      <div className="split-parent">
        <div className="split">
          <h3 className="experience-the-best-container">
            <span className="e4">e</span>
            <span className="xperience-the-best">
              xperience the best of Africa's wilderness on this captivating
              7-day safari adventure. Your journey begins with a visit to the
              rejuvenating Kikuletwa Hot Springs and the picturesque Materuni
              Waterfalls. Following this, a 7-day safari adventure awaits you in
              a pop-up roof 4x4 safari vehicle, traversing the breathtaking
              landscapes of Tarangire, Serengeti, Ngorongoro, and Lake Manyara.
            </span>
          </h3>
          <div className="loop-end">
            <h2 className="itinerary5">itinerary</h2>
            <h3 className="materuni-waterfalls-container">
              <ol className="materuni-waterfalls-kikuletw">
                <li className="materuni-waterfalls">{`Materuni Waterfalls & Kikuletwa Hot Springs`}</li>
                <li className="tarangire-national-park1">
                  Tarangire National Park
                </li>
                <li className="serengeti-national-park4">
                  Serengeti National Park
                </li>
                <li className="serengeti-national-park5">
                  Serengeti National Park
                </li>
                <li className="serengeti-national-park6">
                  Serengeti National Park
                </li>
                <li className="ngorongoro-crater">Ngorongoro Crater</li>
                <li>Lake Manyara National Park</li>
              </ol>
            </h3>
          </div>
        </div>
        <div className="frame-parent100">
          <div className="frame-parent101">
            <FrameComponent14 propWidth="unset" propAlignSelf="stretch" />
            <div className="frame-parent102">
              <div className="instance-parent43">
                <img className="frame-child65" alt="" src="/group-28.svg" />
                <b className="knowledgeable-and-fluent3">
                  Knowledgeable and fluent English-speaking guide.
                </b>
              </div>
              <div className="frame-wrapper29">
                <div className="instance-parent44">
                  <img className="frame-child66" alt="" src="/group-28.svg" />
                  <div className="full-coverage-of-national-park-container">
                    <b className="full-coverage-of4">
                      Full coverage of National park fees.
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="data-aggregator2">
            <DataHub
              mealsAsSpecifiedInTheItin={`All Meals Included (Breakfast, Lunch & Dinner)`}
              propAlignSelf="unset"
              propWidth="20.063rem"
              propMinWidth="20.063rem"
            />
            <div className="frame-parent103">
              <Listener
                flyingDoctorsInsuranceAMR="Flying Doctors insurance (AMREF) throughout the safari."
                overnightStaysAlignedWith="Professional, English-speaking safari cook."
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="13.313rem"
                propWidth="20.188rem"
                propHeight="2.313rem"
                propFlex2="unset"
              />
              <FrameComponent12
                propAlignSelf="unset"
                propPadding="0rem var(--padding-11xs)"
                propWidth="22.125rem"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallel;
