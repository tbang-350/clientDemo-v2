import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Serengeti3Day from "./pages/Serengeti3Day";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Travelquote from "./pages/Travelquote";
import Manyara2Day from "./pages/Manyara2Day";
import Lodge4Day from "./pages/Lodge4Day";
import SafariBlue from "./pages/SafariBlue";
import Camp6Day from "./pages/Camp6Day";
import Safari7Day from "./pages/Safari7Day";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/serengeti3day":
        title = "";
        metaDescription = "";
        break;
      case "/contact":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/travelquote":
        title = "";
        metaDescription = "";
        break;
      case "/manyara2day":
        title = "";
        metaDescription = "";
        break;
      case "/lodge4day":
        title = "";
        metaDescription = "";
        break;
      case "/safariblue":
        title = "";
        metaDescription = "";
        break;
      case "/camp6day":
        title = "";
        metaDescription = "";
        break;
      case "/safari7day":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/serengeti3day" element={<Serengeti3Day />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/travelquote" element={<Travelquote />} />
      <Route path="/manyara2day" element={<Manyara2Day />} />
      <Route path="/lodge4day" element={<Lodge4Day />} />
      <Route path="/safariblue" element={<SafariBlue />} />
      <Route path="/camp6day" element={<Camp6Day />} />
      <Route path="/safari7day" element={<Safari7Day />} />
    </Routes>
  );
}
export default App;
