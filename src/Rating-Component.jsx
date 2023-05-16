import { useState } from "react";

export function RatingComponent () {

    const [rate, setRate] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleClick = (value) => {
      setRate(value);
      setActiveButton(value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (rate !== null) {
        setIsSubmitted(!isSubmitted);
      }
    };
  
    const RateComponent = () => {
      return (
        <>
          <div className="icon-container">
            <img
              className="icon-img"
              src="./assets/images/icon-star.svg"
              alt="icon-star"
            />
          </div>
          <div className="title-description-container">
            <h1 className="title-h1">How did we do?</h1>
            <p className="description">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="rating-buttons-container">
              <input
                className={`rating-buttons ${
                  activeButton === 1 ? "active" : ""
                }`}
                type="button"
                value={1}
                onClick={() => handleClick(1)}
              />
              <input
                className={`rating-buttons ${
                  activeButton === 2 ? "active" : ""
                }`}
                type="button"
                value={2}
                onClick={() => handleClick(2)}
              />
              <input
                className={`rating-buttons ${
                  activeButton === 3 ? "active" : ""
                }`}
                type="button"
                value={3}
                onClick={() => handleClick(3)}
              />
              <input
                className={`rating-buttons ${
                  activeButton === 4 ? "active" : ""
                }`}
                type="button"
                value={4}
                onClick={() => handleClick(4)}
              />
              <input
                className={`rating-buttons ${
                  activeButton === 5 ? "active" : ""
                }`}
                type="button"
                value={5}
                onClick={() => handleClick(5)}
              />
            </div>
            <button className="button-submit" type="submit">
              Submit
            </button>
          </form>
        </>
      );
    };
  
    const ThankYouContainer = () => {
      return (
        <section className="thank-you-container">
          <div className="illustration-container">
            <img
              className="illustration-thankYou"
              src="./assets/images/illustration-thank-you.svg"
              alt="illustrations-thank-you"
            />
          </div>
          <p className="selecition">You selected {rate} of 5</p>
          <h2 className="h2-title">Thank you!</h2>
          <p className="regards">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </section>
      );
    };

    return(
        !isSubmitted ? <RateComponent/> : <ThankYouContainer/>
    )
}