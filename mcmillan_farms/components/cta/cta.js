import Image from "next/image";
import style from "./cta.module.css";
import pumpkin from "../../public/images/pumpkins2.jpg";
import sunflower from "../../public/images/sunflower.jpg";
import Link from "next/link";
import heroStyles from "../hero/hero.module.css";
import utilStyles from "../../styles/utils.module.css";

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
          <Link
            href={"/"}
            className={`${utilStyles.alignCenter} ${utilStyles.capitalize} ${utilStyles.white}`}
          >
            Directions to your dream pumpkin
          </Link>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.imageWrapper}>
          <Image
            src={sunflower}
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
              sunflowers! You won&apos;t find a more beautiful spot in all of
              Kelowna.
            </p>
          </div>
          <Link
            href={"/"}
            className={`${utilStyles.alignCenter} ${utilStyles.capitalize} ${utilStyles.white}`}
          >
            Book Your Sunflower Adventure
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
