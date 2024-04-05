import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MatrixManipulator from "./MatrixManipulator";
import PackageCTA from "./PackageCTA";
import "./RangeSliderSet.css";

const RangeSliderSet = () => {
  const navigate = useNavigate();

  const onCardContainerSetClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="range-slider-set">
      <div className="progress-bar-batch">
        <div className="stepper-control-seq">
          <div className="day-1-arusha-to-lake-manyara-wrapper">
            <h2 className="day-1-arusha2">Day 1: Arusha to Lake Manyara</h2>
          </div>
          <div className="rectangle-parent8">
            <img
              className="frame-child39"
              loading="lazy"
              alt=""
              src="/rectangle-411@2x.png"
            />
            <img
              className="frame-child40"
              loading="lazy"
              alt=""
              src="/rectangle-421@2x.png"
            />
          </div>
        </div>
        <div className="accordion-panel-set">
          <div className="start-your-adventure-with-a-mo-wrapper">
            <h3 className="start-your-adventure-container1">
              <p className="start-your-adventure1">
                Start your adventure with a morning briefing, then journey to
                Lake Manyara National Park. Marvel at the alkaline Lake Manyara
                adorned with vibrant flamingos and encounter diverse wildlife,
                including
              </p>
              <p className="monkeys-giraffes-and">
                monkeys, giraffes, and elephants. Look out for the elusive
                Manyara lions in trees. In the late afternoon, head to the
                Kirurumu Manyara Lodge for overnight accommodation.
              </p>
            </h3>
          </div>
          <MatrixManipulator
            day1LakeManyaraNationalPa="Day 2: Lake Manyara to Serengeti National Park"
            rectangle41="/rectangle-432@2x.png"
            rectangle42="/rectangle-441@2x.png"
            propPadding="0rem var(--padding-base) 0rem 0rem"
            propPadding1="0rem var(--padding-3xl) 0rem var(--padding-xl)"
            propAlignSelf="stretch"
            propWidth="unset"
          />
          <div className="after-breakfast-traverse-the-wrapper">
            <h3 className="after-breakfast-traverse">
              After breakfast, traverse the lush crater highlands, passing the
              Ngorongoro Crater en route to Serengeti National Park. Experience
              the park's varied habitats and landscapes, from plains and
              savannahs to dense bush and wetlands. Witness the unique rock
              formations called Kopjes, often serving as prime hunting grounds
              for predators. Depending on the season, witness the spectacular
              animal migration. Overnight at Kati Kati Tented Camp.
            </h3>
          </div>
          <div className="tabbed-container">
            <div className="day-3-serengeti-national-park-wrapper">
              <h2 className="day-3-serengeti">
                Day 3: Serengeti National Park to Ngorongoro Conservation Area
              </h2>
            </div>
            <div className="rectangle-parent9">
              <img
                className="frame-child41"
                loading="lazy"
                alt=""
                src="/rectangle-451@2x.png"
              />
              <img
                className="frame-child42"
                loading="lazy"
                alt=""
                src="/rectangle-461@2x.png"
              />
            </div>
          </div>
          <div className="early-morning-game-drives-in-s-wrapper">
            <h3 className="early-morning-game">
              Early morning game drives in Serengeti offer encounters with
              wildebeests, zebras, and predators like lions, leopards, and
              cheetahs. After a picnic lunch, journey to the majestic Ngorongoro
              Crater for breathtaking views from the rim. Accommodate at Ang’ata
              Ngorongoro Camp on the crater's rim.
            </h3>
          </div>
          <div className="tabbed-container1">
            <div className="day-4-ngorongoro-conservation-wrapper">
              <h2 className="day-4-ngorongoro">
                Day 4: Ngorongoro Conservation Area to Arusha
              </h2>
            </div>
            <div className="rectangle-parent10">
              <img
                className="frame-child43"
                loading="lazy"
                alt=""
                src="/rectangle-432@2x.png"
              />
              <img
                className="frame-child44"
                loading="lazy"
                alt=""
                src="/rectangle-441@2x.png"
              />
            </div>
          </div>
          <div className="commence-the-day-with-an-early-wrapper">
            <h3 className="commence-the-day-container">
              <p className="commence-the-day">
                Commence the day with an early breakfast before descending into
                the Ngorongoro Crater for an unforgettable wildlife observation.
                Spot the Big Five and a variety of other animals amidst stunning
              </p>
              <p className="savannah-terrain-conclude">
                savannah terrain. Conclude the morning with a picnic lunch
                before departing for Arusha in the early afternoon, arriving in
                the evening to wrap up an extraordinary safari experience.
              </p>
            </h3>
          </div>
        </div>
        <div className="loading-spinner-set">
          <PackageCTA
            propAlignSelf="unset"
            propFlexWrap="wrap"
            propPadding="var(--padding-8xl) var(--padding-10xl) var(--padding-16xl) var(--padding-19xl)"
            propFlex="1"
            propMarginLeft="unset"
            propRight="0rem"
            propWidth="100%"
            onSpacingManagerClick={onCardContainerSetClick}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSliderSet;
