import { facebook, instagram, linkedIn, twitter } from "@/constants/icons";
import { logo } from "@/constants/images";
import Image from "next/image";
import styles from "./styles.module.css";

export const About = () => {
  return (
    <div id="Foot" className={styles.foot}>
      <div className={styles.mainFooterContainer}>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className={styles.one}
        >
          <div>
            <Image alt="logo" src={logo} className={styles.logo} />
          </div>
          <div>
            <p className={styles.para}>
              BETHEL HOME RESIDENTIAL, a supportive accommodation for young
              children aged 16 and over. Our Mission is to provide a safe and
              nurturing environment where young people can thrive and reach their
              full potentials.
            </p>
          </div>
          <div className={styles.iconContainer}>
            <Image alt="facebook" className={styles.icon} src={facebook} />
            <Image alt="linkedin" className={styles.icon} src={linkedIn} />
            <Image alt="twitter" className={styles.icon} src={twitter} />
            <div className={styles.coveredIcon}>
              <Image alt="ig" className={styles.icon} src={instagram} />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className={styles.two}
        >
          <div>
            <h5 className={styles.title}>Our Company</h5>
            <ul className={styles.list}>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className={styles.three}
        >
          <div>
            <h5 className={styles.title}>Our Services</h5>
            <ul className={styles.list}>
              <li>Accommodation</li>
              <li>Support Service</li>
              <li>Recreational Activities</li>
              <li>Community Involvement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
