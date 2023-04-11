import Image from "next/image";
import styles from "./styles.module.css";
import {
  facebook2,
  link,
  loc,
  mai,
  pho,
  twitter2,
} from "../../constants/icons";
import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [state, updateState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const notify = () => toast("Success");
  const errorNotify = () => toast("Error submitting details, try again");

  const _textUpdate = (e) => {
    console.log(state);
    e.preventDefault();
    if (
      state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
      !state.message === ""
    ) {
      emailjs
        .send("service_yenmcob", "template_0l8a18s", state, "b5Mol-K4MxtcNsj9_")
        .then(
          (result) => {
            notify();
            updateState({ ...state, name: "", email: "", message: "" });
            setError("");
          },
          (error) => {
            errorNotify();
            setError(error.text);
          }
        );
    } else {
      setError(
        state.message === "" ? "message must not be empty" : "email not valid"
      );
    }
  };

  const _onChangeText = (e) => {
    updateState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div id="Contact" className={styles.contact}>
      <div className={styles.contactInnerContainer}>
        <div className={styles.title}>
          <h3 className={styles.text}>Contact Us</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.subText}>
            {/* <p className={styles.subTextText}>
              If you have a question, concern, or comment, please don't hesitate
              to reach out to us using one of the methods listed below.
            </p> */}
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.contactUsAddress}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.card}
            >
              <h4 className={styles.conUs}>Contact Us</h4>
              <input
                name="name"
                onChange={_onChangeText}
                className={styles.nameInput}
                placeholder="Your name"
                value={state.name}
              />
              <input
                onChange={_onChangeText}
                name="email"
                type={"email"}
                className={styles.nameInput}
                placeholder="Your email"
                value={state.email}
              />
              <textarea
                name="message"
                onChange={_onChangeText}
                className={styles.textarea}
                placeholder="Message"
                value={state.message}
              />
              <p className={styles.error}>{error ? error : null}</p>
              <div>
                <button
                  onClick={_textUpdate}
                  className={styles.buttonContainer}
                >
                  Send
                </button>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.di}
            >
              <div className={styles.contDetails}>
                <div className={styles.cont}>
                  <Image src={loc} alt="icon" className={styles.icon} />
                </div>
                <p className={styles.addressText}>
                  3 Bray Drive SG1 6DJ Stevenage, Hertfordshire, United Kingdom
                </p>
              </div>

              <div className={styles.contDetails}>
                <div className={styles.cont}>
                  <Image src={pho} alt="icon" className={styles.icon} />
                </div>
                <a className={styles.addressText} href="tel:+447896562035">
                  +447896562035
                </a>
              </div>
              <div className={styles.contDetails}>
                <div className={styles.cont}>
                  <Image src={mai} className={styles.icon} alt="icon" />
                </div>
                <a
                  className={styles.addressText}
                  href="mailto:  info@bethelhomeresidential.com
                  "
                >
                  info@bethelhomeresidential.com
                </a>
              </div>

              <div className={styles.smContainer}>
                <a target={"_blank"} href="https://twitter.com/BethelHome98786">
                  <Image
                    alt="icon"
                    src={twitter2}
                    className={styles.socialMediaIcon}
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=1000090056718353"
                  target={"_blank"}
                >
                  <Image
                    alt="icon"
                    src={facebook2}
                    className={styles.socialMediaIcon}
                  />
                </a>
                <a
                  target={"_blank"}
                  href="https://linkedin.com/company/bethel-home-residentials/"
                >
                  <Image
                    alt="icon"
                    src={link}
                    className={styles.socialMediaIcon}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
