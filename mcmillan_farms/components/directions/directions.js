import styles from "./directions.module.css";
import ctaLeftStyles from "../ctaLeft/ctaLeft.module.css";
import layoutStyles from "../layout/layout.module.css";
import Link from "next/link";

const Directions = () => {
  const content =
    "From KLO road, turn onto Spiers road and follow for 1.1km.  Before spiers begins to turn, continue straight onto Berard road and watch for signs for McMillan Farms.  Parking is available in the large field before McMillan Farms and in the farm, follow signs for parking for both.";
  const headline = "Directions to McMillan Farms";
  const link =
    "https://maps.google.com/maps?ll=49.863973,-119.443991&z=12&t=m&hl=en&gl=CA&mapclient=embed&saddr=&daddr=3690%20Berard%20Rd%2C%20Kelowna%2C%20BC%20V1W%204A9&dirflg=d";
  const linkText = "Directions from your location";
  return (
    <div className={styles.wrapper}>
      <div className={ctaLeftStyles.container}>
        <h1>{headline}</h1>
        <p>{content}</p>
        <span>
          <Link href={link} className={`${layoutStyles.link}`}>
            {linkText}
          </Link>
        </span>
      </div>
      <div className={ctaLeftStyles.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d41149.67603664258!2d-119.44399100000001!3d49.863973!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x537d8c81892438fd%3A0xff76bf9b17d74875!2s3690%20Berard%20Rd%2C%20Kelowna%2C%20BC%20V1W%204A9!3m2!1d49.8501763!2d-119.4439187!5e0!3m2!1sen!2sca!4v1694229709246!5m2!1sen!2sca"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          id={styles.iframe}
        ></iframe>
      </div>
    </div>
  );
};

export default Directions;
