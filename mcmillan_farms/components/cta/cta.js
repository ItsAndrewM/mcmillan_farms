import Image from "next/image";
import style from "./cta.module.css";
import pumpkin from "../../public/images/pumpkins5.jpg";
import cornmaze from "../../public/images/cornmaze2.jpg";
import Link from "next/link";
import heroStyles from "../hero/hero.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";

const Cta = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <Image
            src={pumpkin}
            height={800}
            quality={100}
            className={style.image}
            alt={"pumpkins in a pile"}
          />
        </div>
        <div className={style.contentWrapper}>
          <div className={style.textWrapper}>
            <h1>Get Your Perfect Pumpkin</h1>
            <p>
              Are you looking for a fresh, local, and organic pumpkin to
              decorate your home, carve a jack-o-lantern, or make a delicious
              pie? Look no further with our vast and varied selection.
            </p>
          </div>
          <span>
            <Link
              href={"/"}
              className={`${utilStyles.alignCenter} ${utilStyles.capitalize} ${utilStyles.white} ${layoutStyles.link}`}
            >
              Directions to your dream pumpkin
            </Link>
          </span>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <Image
            src={cornmaze}
            height={800}
            quality={100}
            className={style.image}
            alt={"One sunflower in a field"}
          />
        </div>
        <div className={style.contentWrapper}>
          <div className={style.textWrapper}>
            <h1>Walk Among the Sunflowers</h1>
            <p>
              Grab your sunglasses and come on out to see all 5 acres of our
              sunflowers! You wont find a more beautiful spot in all of Kelowna.
            </p>
          </div>
          <span>
            <Link
              href={"/"}
              className={`${utilStyles.alignCenter} ${utilStyles.capitalize} ${utilStyles.white} ${layoutStyles.link}`}
            >
              Book Your Sunflower Adventure
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cta;
