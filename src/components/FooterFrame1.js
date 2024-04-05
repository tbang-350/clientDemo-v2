import { useMemo } from "react";
import "./FooterFrame1.css";

const FooterFrame1 = ({
  propMarginLeft,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const footerFrameStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const signUpFor1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const receiveTravelIdeas1Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <footer className="footerframe1" style={footerFrameStyle}>
      <div className="footer4">
        <div className="frame-parent56">
          <div className="logo-container">
            <img className="logo-icon7" alt="" src="/logo-1.svg" />
          </div>
          <div className="phonenumber1">
            <div className="call-undefined-glyph-unde-container">
              <img
                className="call-undefined-glyph-unde4"
                loading="lazy"
                alt=""
                src="/call--undefined--glyph-undefined.svg"
              />
            </div>
            <div className="container">
              <div className="div4">+255 757 738 345</div>
            </div>
          </div>
        </div>
        <div className="footer-inner4">
          <div className="travel-information-parent7">
            <div className="travel-information18">
              <p className="travel-information19">TRAVEL INFORMATION</p>
            </div>
            <div className="travel-advice-yellow-container8">
              <p className="travel-advice9">Travel Advice</p>
              <p className="yellow-fever-requirements8">
                Yellow fever requirements
              </p>
              <p className="tanzania-weather8">Tanzania weather</p>
              <p className="when-to-visit8">When to visit Tanzania?</p>
              <p className="flying-doctors-services8">
                Flying Doctors Services
              </p>
            </div>
          </div>
        </div>
        <div className="footer-inner5">
          <div className="travel-information-parent8">
            <div className="travel-information20">
              <p className="travel-information21">TRAVEL INFORMATION</p>
            </div>
            <div className="travel-advice-yellow-container9">
              <p className="travel-advice10">Travel Advice</p>
              <p className="yellow-fever-requirements9">
                Yellow fever requirements
              </p>
              <p className="tanzania-weather9">Tanzania weather</p>
              <p className="when-to-visit9">When to visit Tanzania?</p>
              <p className="flying-doctors-services9">
                Flying Doctors Services
              </p>
            </div>
          </div>
        </div>
        <div className="footer-inner6">
          <div className="frame-parent57">
            <div className="frame-parent58">
              <div className="frame4">
                <div className="sign-up-for4" style={signUpFor1Style}>
                  sign up for our waitlist
                </div>
                <div
                  className="receive-travel-ideas4"
                  style={receiveTravelIdeas1Style}
                >
                  Receive travel ideas, destination guides, and inspiration
                  directly in your inbox
                </div>
              </div>
              <form className="frame5">
                <div className="frame6">
                  <div className="your-name-container">
                    <input
                      className="your-name4"
                      placeholder="your name"
                      type="text"
                    />
                  </div>
                  <div className="your-email-container">
                    <input
                      className="your-email4"
                      placeholder="your Email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="frame7">
                  <div className="frame8">
                    <div className="by-signing-up-for-our-mailing-container">
                      <div className="by-signing-up-container4">
                        By signing up for our mailing list, you agree to our 
                        <span className="privacy-policy8">privacy policy</span>
                      </div>
                    </div>
                    <button className="sign-up-frame">
                      <div className="sign-up4">Sign up</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="frame-wrapper16">
              <img
                className="frame-child30"
                loading="lazy"
                alt=""
                src="/group-12.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerframe-inner">
        <div className="isles-savannah-parent">
          <div className="isles-savannah4">{`© 2024 Isles & Savannah.`}</div>
          <div className="terms-and-condition-group">
            <div className="terms-and-condition4">Terms and Condition</div>
            <div className="privacy-policy9">Privacy Policy</div>
            <div className="contact9">Contact</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFrame1;
