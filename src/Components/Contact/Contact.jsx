import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import send from "../../assets/send.svg";
import "./Contact.css";
const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9vgtlkw', 'template_g941ckp', form.current, {
        publicKey: 'eBdy_3c9lgKkoSH00',
      })
      e.target.reset()
        };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                jallasaisandeep@gmail.com
              </span>

              <a
                href="mailto:jallasaisandeep@gmail.com"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__content">

              <div className="contact__info">
                <div className="contact__card">
                  <i className="bx bxl-whatsapp contact__card-icon"></i>

                  <h3 className="contact__card-title">Whatsapp</h3>
                  <span className="contact__card-data">8919087589</span>

                  <a
                    href="https://api.whatsapp.com/send?phone=918919087589&text=Hello, more information!"
                    className="contact__button"
                  >
                    Write me{" "}
                    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div ">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                aria-label=""
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                aria-label=""
                placeholder="Insert your mail"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Insert your project"
              />
            </div>

            <button className="button button--flex">
              Send Message
              <img
                src={send}
                alt=""
                style={{
                  marginLeft: "8px",
                  width: "20px",
                  height: "20px",
                  filter: "invert(100%)",
                }}
                className="button__icon"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
