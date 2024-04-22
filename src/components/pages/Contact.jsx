import { useState, useEffect } from "react";
import "./Contact.css";

export const Contact = () => {
  const [submitButtonText, setSubmitButtonText] = useState("Send");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log("Form submitted:", formData);

    // Change button text to "Submitted"
    setSubmitButtonText("Submitted");

    // Perform AJAX request
    fetch("https://formsubmit.co/ajax/cs.devsunite.com@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(function () {
          setSubmitButtonText("Send");
        }, 200);
      })
      .catch((error) => {
        console.log(error);
        setSubmitButtonText("Send");
      });
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);

      return () => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      };
    });
  }, []);

  return (
    <>
      <div className="container">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let&apos;s get in touch</h3>
            <p className="text">Wanna collaborate or have anything to say?</p>

            <div className="info">
              <div className="information">
                <i className="fas fa-map-marker-alt"></i> &nbsp; &nbsp;
              </div>
              <div className="information">
                <i className="fas fa-envelope"></i> &nbsp; &nbsp;
                <p>cs.devsunite.com@gmail.com</p>
              </div>
              <div className="information">
                <i className="fas fa-phone"></i>&nbsp; &nbsp;
                <p>https://devsunite.com</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form onSubmit={handleSubmit} autoComplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input
                  type="text"
                  required
                  name="name"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name">Name</label>
                <span>Name</span>
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  required
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  type="text"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Message</label>
                <span>Message</span>
              </div>
              <input type="submit" value={submitButtonText} className="btn" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
