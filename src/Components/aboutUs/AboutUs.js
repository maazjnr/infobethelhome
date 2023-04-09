import { aboutus } from "@/constants/images";
import Image from "next/image";
import styles from "./styles.module.css";

export const AboutUs = () => {
  return (
    <div id="About" className={styles.aboutusContainer}>
      <Image src={aboutus} alt="image" className={styles.aboutUsImage} />
      <div className={styles.container}>
        <div
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
          className={styles.card}
        >
          <h2 className={styles.about}>About us</h2>
          <p className={styles.firstPara}>
            BETHEL HOME RESIDENTIAL, a supportive accommodation for young
            children aged 16 and over. Our Mission is to provide a safe and
            nurturing environment where young people can thrive and reach their
            full potentials.
          </p>
          <p className={styles.secondPara}>
            At BETHEL HOME RESIDENTIAL we understand that transitioning into
            adulthood can be challenging, especially for those who have
            experienced trauma or difficult circumstances. thats why we offer a
            range of services and programs to help our resident succeed and
            thrive.
          </p>
        </div>
      </div>
    </div>
  );
};
