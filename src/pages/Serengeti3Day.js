import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar2 from "../components/NavBar2";
import FooterFrame from "../components/FooterFrame";
import "./Serengeti3Day.css";

const Serengeti3Day = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="serengeti3day">
      <NavBar2
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactText1Click={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <section className="network-manager-wrapper">
        <div className="network-manager">
          <h1 className="day-serengeti-camping">
            3-Day Serengeti Camping Tour
          </h1>
        </div>
      </section>
      <section className="variable-storage-wrapper">
        <div className="variable-storage">
          <div className="function-caller">
            <div className="embark-on-an-exclusive-private-wrapper">
              <h3 className="embark-on-an-container">
                <span className="e">e</span>
                <span className="mbark-on-an">
                  mbark on an exclusive private safari adventure starting and
                  ending in Arusha, with flexible departure times. Enjoy a
                  seamless, fully serviced journey suitable for all ages.
                  Special discounts are available for children (0-12) and larger
                  families in triple or quad rooms.
                </span>
              </h3>
            </div>
            <div className="frame-parent">
              <div className="itinerary-wrapper">
                <h2 className="itinerary">itinerary</h2>
              </div>
              <h3 className="arusha-to-seremgeti-container">
                <ol className="arusha-to-seremgeti-national-p">
                  <li className="arusha-to-seremgeti">
                    arusha to seremgeti national park
                  </li>
                  <li className="serengeti-national-park">
                    serengeti national park
                  </li>
                  <li>Ngorongoro crater</li>
                </ol>
              </h3>
            </div>
          </div>
          <div className="randomizer">
            <div className="calculator">
              <div className="included-parent">
                <h2 className="included">included</h2>
                <div className="transformer">
                  <div className="instance-parent">
                    <img
                      className="frame-child"
                      loading="lazy"
                      alt=""
                      src="/group-28.svg"
                    />
                    <div className="filter">
                      <b className="ground-transportation-in">
                        Ground transportation in a robust 4×4 safari Jeep.
                      </b>
                    </div>
                  </div>
                  <div className="instance-group">
                    <img
                      className="frame-item"
                      loading="lazy"
                      alt=""
                      src="/group-28.svg"
                    />
                    <b className="complimentary-mineral-water">
                      Complimentary Mineral water.
                    </b>
                  </div>
                </div>
              </div>
              <div className="multi-queue">
                <div className="instance-container">
                  <img
                    className="frame-inner"
                    loading="lazy"
                    alt=""
                    src="/group-28.svg"
                  />
                  <div className="queue">
                    <b className="accomodation">Accomodation</b>
                  </div>
                </div>
                <div className="frame-div">
                  <img
                    className="group-icon"
                    loading="lazy"
                    alt=""
                    src="/group-28.svg"
                  />
                  <b className="round-trip-airport-transfer">
                    Round-trip Airport transfer
                  </b>
                </div>
              </div>
              <div className="hashing-table">
                <div className="graph">
                  <div className="heap">
                    <div className="trie">
                      <div className="deque">
                        <div className="instance-parent1">
                          <img
                            className="frame-child1"
                            loading="lazy"
                            alt=""
                            src="/group-28.svg"
                          />
                          <b className="knowledgeable-and-fluent">
                            Knowledgeable and fluent English-speaking guide.
                          </b>
                        </div>
                      </div>
                      <img className="trie-child" alt="" src="/group-28.svg" />
                    </div>
                    <div className="shortest-path-finder">
                      <div className="depth-first-traversal">
                        <div className="instance-parent2">
                          <img
                            className="frame-child2"
                            loading="lazy"
                            alt=""
                            src="/group-28.svg"
                          />
                          <div className="input-filter">
                            <b className="professional-english-speaking">
                              Professional, English-speaking safari cook.
                            </b>
                          </div>
                        </div>
                      </div>
                      <img
                        className="shortest-path-finder-child"
                        alt=""
                        src="/group-28.svg"
                      />
                    </div>
                  </div>
                  <div className="instance-parent3">
                    <img
                      className="frame-child3"
                      loading="lazy"
                      alt=""
                      src="/group-28.svg"
                    />
                    <div className="error-handler">
                      <b className="all-meals-included">{`All Meals Included (Breakfast, Lunch & Dinner)`}</b>
                    </div>
                  </div>
                </div>
                <div className="function-applier">
                  <div className="loop-manager">
                    <b className="full-coverage-of">
                      Full coverage of National park fees.
                    </b>
                    <b className="camping-equipment-tents">
                      Camping equipment (tents, sleeping mats, chairs, tables
                      etc.)
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="excluded-parent">
              <h2 className="excluded">EXCLUDED</h2>
              <div className="connection-creator">
                <div className="connector">
                  <div className="instance-parent4">
                    <div className="path-22-parent">
                      <img
                        className="path-22-icon"
                        loading="lazy"
                        alt=""
                        src="/path-22.svg"
                      />
                      <div className="instance-child" />
                    </div>
                    <div className="instance-parent5">
                      <div className="path-22-group">
                        <img
                          className="path-22-icon1"
                          loading="lazy"
                          alt=""
                          src="/path-22.svg"
                        />
                        <div className="instance-item" />
                      </div>
                      <div className="instance-parent6">
                        <div className="path-22-container">
                          <img
                            className="path-22-icon2"
                            loading="lazy"
                            alt=""
                            src="/path-22.svg"
                          />
                          <div className="instance-inner" />
                        </div>
                        <div className="group-div">
                          <img
                            className="path-22-icon3"
                            loading="lazy"
                            alt=""
                            src="/path-22.svg"
                          />
                          <div className="rectangle-div" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connection-creator-inner">
                  <div className="frame-group">
                    <div className="frame-container">
                      <div className="frame-wrapper">
                        <div className="international-airfare-flights-parent">
                          <b className="international-airfare-flights">
                            International Airfare: Flights to and from your home
                            country are typically not included.
                          </b>
                          <b className="optional-excursions-and">
                            Optional excursions and activities e.g Hot Air
                            Balloon
                          </b>
                        </div>
                      </div>
                      <b className="alcoholic-beverages-and">
                        Alcoholic beverages and soft drinks
                      </b>
                    </div>
                    <div className="visa-expenses-wrapper">
                      <b className="visa-expenses">Visa expenses</b>
                    </div>
                  </div>
                </div>
                <div className="instance-parent7">
                  <div className="path-22-parent1">
                    <img className="path-22-icon4" alt="" src="/path-22.svg" />
                    <div className="instance-child1" />
                  </div>
                  <div className="frame-parent1">
                    <div className="instance-wrapper">
                      <div className="path-22-parent2">
                        <img
                          className="path-22-icon5"
                          alt=""
                          src="/path-22.svg"
                        />
                        <div className="instance-child2" />
                      </div>
                    </div>
                    <div className="instance-parent8">
                      <div className="path-22-parent3">
                        <img
                          className="path-22-icon6"
                          loading="lazy"
                          alt=""
                          src="/path-22.svg"
                        />
                        <div className="instance-child3" />
                      </div>
                      <div className="path-22-parent4">
                        <img
                          className="path-22-icon7"
                          loading="lazy"
                          alt=""
                          src="/path-22.svg"
                        />
                        <div className="instance-child4" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="data-aggregator">
                  <div className="input-filter1">
                    <div className="gratuities-tips-wrapper">
                      <b className="gratuities-tips">Gratuities (tips)</b>
                    </div>
                    <div className="condition-splitter">
                      <div className="error-handler1">
                        <div className="data-transformer">
                          <b className="personal-funds-for">
                            Personal funds for souvenirs and additional
                            purchases
                          </b>
                        </div>
                        <b className="travel-insurance">Travel insurance</b>
                      </div>
                      <b className="sleeping-bags">Sleeping bags</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="serengeti3day-inner">
        <div className="frame-parent2">
          <div className="frame-wrapper1">
            <div className="frame-parent3">
              <div className="frame-wrapper2">
                <div className="frame-parent4">
                  <div className="day-1-arusha-to-serengeti-nat-wrapper">
                    <h2 className="day-1-arusha">
                      Day 1: Arusha to Serengeti National Park
                    </h2>
                  </div>
                  <div className="rectangle-parent">
                    <img
                      className="rectangle-icon"
                      loading="lazy"
                      alt=""
                      src="/rectangle-41@2x.png"
                    />
                    <img
                      className="frame-child4"
                      loading="lazy"
                      alt=""
                      src="/rectangle-42@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent5">
                <div className="begin-your-morning-with-a-pick-wrapper">
                  <h3 className="begin-your-morning-container">
                    <p className="begin-your-morning">
                      Begin your morning with a pick-up from your accommodation
                      and head to the renowned Serengeti National Park, a
                      premier African wildlife destination. Traverse the
                      Ngorongoro Conservation Area,
                    </p>
                    <p className="experiencing-the-vastness">
                      experiencing the vastness and diversity of wildlife and
                      flora. Enjoy a game drive en route to the Serengeti,
                      immersing yourself in the landscape. Arrive in the
                      Serengeti for a half-day game drive,
                    </p>
                    <p className="staying-overnight-in">
                      staying overnight in comfortable full-service campsites
                      amid the wilderness.
                    </p>
                  </h3>
                </div>
                <div className="day-2-serengeti-national-park-wrapper">
                  <h2 className="day-2-serengeti">
                    Day 2: Serengeti National Park
                  </h2>
                </div>
                <div className="rectangle-group">
                  <img
                    className="frame-child5"
                    loading="lazy"
                    alt=""
                    src="/rectangle-43@2x.png"
                  />
                  <img
                    className="frame-child6"
                    loading="lazy"
                    alt=""
                    src="/rectangle-44@2x.png"
                  />
                </div>
              </div>
              <div className="prepare-for-a-full-day-wildlif-wrapper">
                <h3 className="prepare-for-a-container">
                  <p className="prepare-for-a">
                    Prepare for a full-day wildlife exploration in the iconic
                    Serengeti. As Tanzania's ancient and UNESCO World Heritage
                    Site, the Serengeti offers year-round wildlife encounters,
                    with the annual wildebeest
                  </p>
                  <p className="migration-being-a">
                    migration being a highlight. Spend the night at Serengeti
                    National Park's full-service campsites, fully immersed in
                    the extraordinary landscape.
                  </p>
                </h3>
              </div>
              <div className="frame-wrapper3">
                <div className="frame-parent6">
                  <div className="day-3-ngorongoro-crater-wrapper">
                    <h2 className="day-3-ngorongoro">
                      Day 3: Ngorongoro Crater
                    </h2>
                  </div>
                  <div className="rectangle-container">
                    <img
                      className="frame-child7"
                      loading="lazy"
                      alt=""
                      src="/rectangle-45@2x.png"
                    />
                    <img
                      className="frame-child8"
                      loading="lazy"
                      alt=""
                      src="/rectangle-46@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="set-off-on-a-full-day-wildlife-wrapper">
                <h3 className="set-off-on-container">
                  <p className="set-off-on">
                    Set off on a full-day wildlife expedition in the
                    awe-inspiring Ngorongoro Crater, a UNESCO World Heritage
                    site. Experience the harmonious coexistence of humans and
                    wild animals in this natural
                  </p>
                  <p className="wonder-in-the">
                    wonder. In the late afternoon, journey back to Arusha,
                    concluding your remarkable safari adventure filled with
                    extraordinary encounters and the unique beauty of the
                    Ngorongoro Crater.
                  </p>
                </h3>
              </div>
            </div>
          </div>
          <div className="packagecta">
            <div className="packagecta-child" />
            <div className="make-your-dream-trip-come-true-parent">
              <h2 className="make-your-dream">{`MAKE YOUR DREAM TRIP COME TRUE WITH ISLES & SAVANNAH`}</h2>
              <div className="at-isles">{`At Isles & Savannah t, you can customize your trip. Our sample itineraries are adjustable to your preferences. Our specialists work together with you to create your dream journey!`}</div>
            </div>
            <div className="packagecta-inner">
              <button
                className="request-this-trip-wrapper"
                onClick={onFrameButtonClick}
              >
                <div className="request-this-trip">request this trip</div>
              </button>
            </div>
          </div>
        </div>
      </section>
      <FooterFrame
        propDebugCommit="unset"
        propDebugCommit1="unset"
        propDebugCommit2="unset"
        propDebugCommit3="unset"
        propDebugCommit4="unset"
        propDebugCommit5="unset"
      />
    </div>
  );
};

export default Serengeti3Day;
