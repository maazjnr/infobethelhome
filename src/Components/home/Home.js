import Image from "next/image";
import { large } from "@/constants/images";
import styles from "./styles.module.css";

export const Home = () => {
  return (
    <div id="Home" className={styles.homeContainer}>
      <div className={styles.one}>
        <div>
          <h1
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className={styles.welcome}
          >
            Welcome to
          </h1>
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className={styles.bethel}
          >
            Bethel Home<br/> Residential
          </h1>

          <h1
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className={styles.semi}
          >
            Semi independent accommodation
          </h1>

        </div>
      </div>
      {/* <div className={styles.two}>
        <Image alt="image" className={styles.image} src={large} />
      </div> */}
    </div>
  );
};
