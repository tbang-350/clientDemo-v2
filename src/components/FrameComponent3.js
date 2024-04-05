import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <form className="frame-parent35">
      <div className="frame-wrapper12">
        <div className="do-you-have-any-preferences-fo-parent">
          <h2 className="do-you-have">
            DO YOU HAVE ANY PREFERENCES FOR YOUR TRIP?
          </h2>
          <div className="preferencetextarea">
            <img className="textarea-icon" alt="" src="/textarea.svg" />
            <i className="placeholdertext">
              For example, any specific animals you would like to see, dietary
              preferences, specific accommodation you like, budget wishes etc.
              Or any other wishes you would like to mention to make this an
              unforgettable trip!
            </i>
          </div>
        </div>
      </div>
      <div className="frame-wrapper13">
        <div className="your-contact-details-parent">
          <h2 className="your-contact-details">your contact details</h2>
          <div className="frame-wrapper14">
            <div className="frame-parent36">
              <div className="frame-parent37">
                <div className="frame-parent38">
                  <div className="first-name-group">
                    <div className="first-name1">first name *</div>
                    <input className="textinput-2" type="text" />
                  </div>
                  <div className="email1">email *</div>
                </div>
                <div className="last-name-input">
                  <div className="last-name1">last name *</div>
                  <input className="textinput-1" type="text" />
                </div>
              </div>
              <div className="emailinput1" />
            </div>
          </div>
        </div>
      </div>
      <div className="permission-checkbox">
        <div className="submit-proposal">
          <div className="phone-number-parent">
            <div className="phone-number">phone number *</div>
            <div className="phonenumberinput" />
          </div>
          <div className="sign-up-form1">
            <div className="country1">Country *</div>
            <img className="sign-up-form-child" alt="" src="/frame-26.svg" />
          </div>
        </div>
        <div className="permission-checkbox-inner">
          <div className="frame-parent39">
            <input className="frame-input" type="checkbox" />
            <div className="i-hereby-give">
              I hereby give permission to receive a travel proposal for a safari
              and/or beach vacation, as well as any other relevant news
              regarding my holiday.
            </div>
          </div>
        </div>
      </div>
      <div className="submit-proposal-button-wrapper">
        <button className="submit-proposal-button">
          <div className="submit-this-travel">submit this travel proposal</div>
        </button>
      </div>
    </form>
  );
};

export default FrameComponent3;
