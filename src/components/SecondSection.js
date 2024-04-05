import "./SecondSection.css";

const SecondSection = () => {
  return (
    <section className="secondsection">
      <div className="secondsection-child" />
      <div className="flex-wrap">
        <div className="order">
          <div className="heading1">
            <h1 className="get-to-know">{`Get To Know Isles & Savannah `}</h1>
          </div>
          <div className="heading2">
            <div className="your-gateway-to">
              {" "}
              Your Gateway to Unforgettable Adventures
            </div>
          </div>
        </div>
        <div className="content">
          <h3 className="discover-more-with-container">
            <p className="discover-more-with">{`Discover more with Isles & Savannah, where we redefine travel beyond conventional sightseeing. Immerse yourself in the wild beauty of Tanzania, feel the warmth of its people, and experience the thrill of adventure.`}</p>
            <p className="blank-line">&nbsp;</p>
            <p className="we-are-committed">
              We are committed to providing bespoke tour packages tailored to
              your unique interests and budget, whether you crave a safari of a
              lifetime or a rejuvenating beach vacation.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="our-tailor-made-tour">
              Our tailor-made tour packages ensure an unforgettable journey,
              perfectly aligned with your preferences. Whether you're an avid
              wildlife enthusiast or seeking relaxation on the beach, we have
              the ideal experience for you.
            </p>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
