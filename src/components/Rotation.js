import MatrixManipulator from "./MatrixManipulator";
import "./Rotation.css";

const Rotation = () => {
  return (
    <div className="rotation">
      <div className="condition-evaluator">
        <div className="day-3-serengeti-national-park-container">
          <h2 className="day-3-serengeti1">Day 3: Serengeti National Park</h2>
        </div>
        <div className="transform-sequencer-parent">
          <img
            className="transform-sequencer-icon"
            loading="lazy"
            alt=""
            src="/rectangle-454@2x.png"
          />
          <img
            className="data-preprocessor-icon"
            loading="lazy"
            alt=""
            src="/rectangle-464@2x.png"
          />
        </div>
      </div>
      <div className="scale">
        <h3 className="embark-on-a2">
          Embark on a scenic drive to Serengeti, with a picnic lunch break.
          Arrive at Seronera Campsite for a captivating afternoon game drive,
          followed by a delightful dinner and a comfortable overnight stay.
        </h3>
      </div>
      <div className="frame-parent104">
        <div className="day-4-serengeti-national-park-wrapper">
          <h2 className="day-4-serengeti">Day 4: Serengeti National Park</h2>
        </div>
        <div className="rectangle-parent14">
          <img
            className="frame-child67"
            loading="lazy"
            alt=""
            src="/rectangle-471@2x.png"
          />
          <img
            className="frame-child68"
            loading="lazy"
            alt=""
            src="/rectangle-481@2x.png"
          />
        </div>
      </div>
      <div className="scale1">
        <h3 className="dedicate-the-entire-container">
          <p className="dedicate-the-entire1">
            Dedicate the entire day to exploring the Serengeti. Witness the Big
            Five and over 500 bird species. Return to camp for a hearty lunch
            and afternoon game drive. Enjoy a delicious dinner and a peaceful
          </p>
          <p className="overnight-stay">overnight stay.</p>
        </h3>
      </div>
      <MatrixManipulator
        day1LakeManyaraNationalPa="Day 5: Serengeti National Park"
        rectangle41="/rectangle-511@2x.png"
        rectangle42="/rectangle-521@2x.png"
        propPadding="0rem var(--padding-base) 0rem var(--padding-xs)"
        propPadding1="0rem var(--padding-xl)"
        propAlignSelf="stretch"
        propWidth="unset"
      />
      <div className="scale2">
        <h3 className="experience-a-magical">
          Experience a magical sunrise with an early start at 6:00 am. Enjoy a
          bush breakfast and continue wildlife exploration. Return to camp for a
          satisfying hot lunch. Prepare for a journey to Ngorongoro, where Simba
          Campsite awaits for a delightful dinner and overnight stay.
        </h3>
      </div>
      <MatrixManipulator
        day1LakeManyaraNationalPa="Day 6: Ngorongoro Crater"
        rectangle41="/rectangle-531@2x.png"
        rectangle42="/rectangle-54@2x.png"
        propPadding="0rem var(--padding-9xl) 0rem 0rem"
        propPadding1="0rem var(--padding-xl) 0rem var(--padding-25xl)"
        propAlignSelf="stretch"
        propWidth="unset"
      />
      <div className="scale3">
        <h3 className="start-the-day-container">
          <p className="start-the-day">
            Start the day with an early breakfast and head to the awe-inspiring
            Ngorongoro Crater for wildlife sightings. Enjoy a hot lunch at the
            camp or a picturesque picnic at Hippo Lake. Relax at Fig Tree
          </p>
          <p className="lodge-for-a">
            Lodge for a delightful dinner and a restful night.
          </p>
        </h3>
      </div>
      <MatrixManipulator
        day1LakeManyaraNationalPa="Day 7: Lake Manyara National Park"
        rectangle41="/rectangle-55@2x.png"
        rectangle42="/rectangle-421@2x.png"
        propPadding="0rem var(--padding-base) 0rem var(--padding-xs)"
        propPadding1="0rem var(--padding-xl)"
        propAlignSelf="stretch"
        propWidth="unset"
      />
      <div className="scale4">
        <h3 className="after-breakfast-visit">
          After breakfast, visit Lake Manyara, known for tree-climbing lions and
          diverse wildlife. Aim to return to Arusha by 4:00 pm, allowing
          flexibility for adjustments, especially for those with flights to
          catch.
        </h3>
      </div>
    </div>
  );
};

export default Rotation;
