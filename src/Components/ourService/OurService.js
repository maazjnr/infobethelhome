import styles from "./styles.module.css";
import {
  accomodation,
  supportservice,
  communityinvolvement,
  recreationalactivity,
} from "@/constants/images";
import Image from "next/image";

export const OurService = () => {
  return (
    <div id="Services" className={styles.aboutUs}>
      <div className={styles.titleContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>Our Service</h2>
          <p className={styles.subText}>
            Our team of dedicated professionals is committed to creating a warm
            welcoming environment where residents feels valued and supported, we
            offers range of services, including:
          </p>
        </div>
      </div>

      <div className={styles.mainColorContainer}>
        <div className={styles.colorContainer}>
          <div className={styles.color} />

          <div className={styles.imageTextConatinera1}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.accomodationContainer}
            >
              <Image
                alt="image"
                className={styles.accomodationImage}
                src={accomodation}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.serviceTitleConatainer}
            >
              <div className={styles.numbercontainer}>
                <div className={styles.imageContainer}>
                  <h3 className={styles.number}>1</h3>
                </div>
                <div className={styles.serviceTitleCon}>
                  <h3 className={styles.serviceText}>Accommodation</h3>
                </div>
              </div>
              <div className={styles.serviceDesc}>
                <p className={styles.desc}>
                  We provide Comfortable and safe accommodation for our
                  residents, with a range of options to suit their individual
                  needs.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.imageTextConatinera2}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.accomodationContainer}
            >
              <Image
                alt="image"
                className={styles.accomodationImage}
                src={supportservice}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.serviceTitleConatainer}
            >
              <div className={styles.numbercontainer}>
                <div className={styles.imageContainer}>
                  <h3 className={styles.number}>2</h3>
                </div>
                <div className={styles.serviceTitleCon}>
                  <h3 className={styles.serviceText}>Support Services</h3>
                </div>
              </div>
              <div className={styles.serviceDesc}>
                <p className={styles.desc}>
                  Our staff provides individualize support services to help our
                  residents achieve their goals, including education and career
                  support, life skills training, and emotional support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.mainColorContainer}>
        <div className={styles.colorContainer2}>
          <div className={styles.color2} />

          <div className={styles.imageTextConatinerb1}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.accomodationContainer}
            >
              <Image
                alt="image"
                className={styles.accomodationImage}
                src={recreationalactivity}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.serviceTitleConatainer2}
            >
              <div className={styles.numbercontainer}>
                <div className={styles.imageContainer}>
                  <h3 className={styles.number}>3</h3>
                </div>
                <div className={styles.serviceTitleCon}>
                  <h3 className={styles.serviceText}>Recreational Activities</h3>
                </div>
              </div>
              <div className={styles.serviceDesc}>
                <p className={styles.desc}>
                  We believe in the importance of having fun and staying active,
                  thats why we offer a range of recreational activities, such as
                  sports, arts and crafts, and movie nights.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className={styles.imageTextConatinerb2}
          >
            <div className={styles.accomodationContainer}>
              <Image
                alt="image"
                className={styles.accomodationImage}
                src={communityinvolvement}
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className={styles.serviceTitleConatainer2}
            >
              <div className={styles.numbercontainer}>
                <div className={styles.imageContainer}>
                  <h3 className={styles.number}>4</h3>
                </div>
                <div className={styles.serviceTitleCon}>
                  <h3 className={styles.serviceText}>Community Involvement</h3>
                </div>
              </div>
              <div className={styles.serviceDesc}>
                <p className={styles.desc}>
                  We encourage our residents to become involved in the
                  community, and we provides opportunities for them to volunteer
                  and give back.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
