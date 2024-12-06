import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function CaptchaComponent() {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [nextPage, setNextpage] = useState("");

  // Function to generate a random 6-digit alphanumeric captcha
  function generateCaptcha() {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  }

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle refresh captcha
  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setInputValue("");
    setErrorMessage("");
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === captcha) {
      alert("Captcha verified successfully!");
      setErrorMessage("");
      // setNextpage("/ugRegular/profile");
    } else {
      setErrorMessage("Captcha does not match. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="col-12 d-flex flex-column gap-1">
          <div className="d-flex gap-1 align-items-center">
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
                userSelect: "none",
                backgroundColor: "#fff",
                maxWidth: "300px",
                height: "100%",
                padding: "0 30px",
                borderRadius: "5px",
              }}
            >
              {captcha}
            </span>

            <button
              type="button"
              onClick={refreshCaptcha}
              className="btn rounded "
              style={{
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              ⟳
            </button>
          </div>
          <div className="d-flex justify-content-between gap-2">
            <input
              type="text"
              id="captchaInput"
              className="form-control"
              value={inputValue}
              onChange={handleChange}
              placeholder="Enter Captcha"
              required
              style={{ maxWidth: "200px" }}
            />
            <button
              // to={nextPage}
              type="submit"
              className="btn bg-124E66 text-white"
            >
              Submit
            </button>
          </div>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </form>
    </div>
  );
}

export default CaptchaComponent;
