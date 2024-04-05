import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CarouselContainer.css";

const CarouselContainer = () => {
  const navigate = useNavigate();

  const onCarouselItem7ContainerClick = useCallback(() => {
    navigate("/serengeti3day");
  }, [navigate]);

  const onCarouselItem8ContainerClick = useCallback(() => {
    navigate("/camp6day");
  }, [navigate]);

  const onCarouselItem9ContainerClick = useCallback(() => {
    navigate("/manyara2day");
  }, [navigate]);

  const onCarouselItem11ContainerClick = useCallback(() => {
    navigate("/lodge4day");
  }, [navigate]);

  const onCarouselItem12ContainerClick = useCallback(() => {
    navigate("/safari7day");
  }, [navigate]);

  const onCarouselItem10ContainerClick = useCallback(() => {
    navigate("/safariblue");
  }, [navigate]);

  return (
    <section className="carouselcontainer">
      <div className="transitions">
        <h1 className="our-vacation-packages">Our Vacation Packages</h1>
      </div>
      <div className="carouselitems">
        <div className="carouselitem-7" onClick={onCarouselItem7ContainerClick}>
          <img
            className="carouselitem-7-child"
            loading="lazy"
            alt=""
            src="/rectangle-9@2x.png"
          />
          <div className="day-serengeti-camping1">
            3-Day Serengeti Camping Tour
          </div>
          <div className="carouselitem-7-inner">
            <div className="per-person-wrapper">
              <div className="per-person">$1,050 per person</div>
            </div>
          </div>
        </div>
        <div className="carouselitem-8" onClick={onCarouselItem8ContainerClick}>
          <img
            className="carouselitem-8-child"
            loading="lazy"
            alt=""
            src="/rectangle-10@2x.png"
          />
          <div className="day-camp-safari1">6-Day Camp Safari</div>
          <div className="carouselitem-8-inner">
            <button className="per-person-container">
              <div className="per-person1">$400 per person</div>
            </button>
          </div>
        </div>
        <div className="carouselitem-9" onClick={onCarouselItem9ContainerClick}>
          <img
            className="carouselitem-9-child"
            loading="lazy"
            alt=""
            src="/rectangle-11@2x.png"
          />
          <div className="day-lake-manyara">{`2-Day Lake Manyara & Ngorongoro Camping Tour`}</div>
          <div className="carouselitem-9-inner">
            <button className="per-person-frame">
              <div className="per-person2">$1,050 per person</div>
            </button>
          </div>
        </div>
        <div
          className="carouselitem-11"
          onClick={onCarouselItem11ContainerClick}
        >
          <img
            className="carouselitem-11-child"
            loading="lazy"
            alt=""
            src="/rectangle-13@2x.png"
          />
          <div className="day-lodge-safari1">4-Day Lodge Safari</div>
          <div className="carouselitem-11-inner">
            <button className="frame-button">
              <div className="per-person3">$1,900 per person</div>
            </button>
          </div>
        </div>
        <div
          className="carouselitem-12"
          onClick={onCarouselItem12ContainerClick}
        >
          <img
            className="carouselitem-12-child"
            loading="lazy"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <div className="day-materuni-tarangire1">{`7-Day Materuni, Tarangire, Serengeti & Lake Manyara`}</div>
          <div className="carouselitem-12-inner">
            <button className="per-person-wrapper1">
              <div className="per-person4">$1,300 per person</div>
            </button>
          </div>
        </div>
        <div
          className="carouselitem-10"
          onClick={onCarouselItem10ContainerClick}
        >
          <img
            className="carouselitem-10-child"
            alt=""
            src="/rectangle-12@2x.png"
          />
          <div className="safari-blue1">Safari Blue</div>
          <div className="carouselitem-10-inner">
            <div className="per-person-wrapper2">
              <div className="per-person5">$110 per person</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselContainer;
