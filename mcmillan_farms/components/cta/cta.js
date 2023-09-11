import Image from "next/image";
import style from "./cta.module.css";
import pumpkin from "../../public/images/pumpkins5.jpg";
import cornmaze from "../../public/images/cornmaze2.jpg";
import hayride from "../../public/images/hayride3.jpg";
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
            width={800}
            quality={100}
            className={style.image}
            alt={"pumpkins in a pile"}
            loading="lazy"
          />
        </div>
        <div className={style.contentWrapper}>
          <div className={style.textWrapper}>
            <h1>Get Your Dream Pumpkin</h1>
            <p>
              Whether you are baking the perfect pie, carving the scariest
              jack-o-lantern or looking for some festive decor, we have got you
              covered. Every pumpkin is grown right here, on our 100+ acre farm.
            </p>
          </div>
          <span>
            <Link
              href={"/faq"}
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
            alt={"cornmaze and a path"}
          />
        </div>
        <div className={style.contentWrapper}>
          <div className={style.textWrapper}>
            <h1>Join the Corn Maze Adventure</h1>
            <p>
              If you are up for an adventure, try your luck in our 5 acre corn
              maze. Experience our incredible, unique corn maze and discover the
              hidden secrets and surprises along the way
            </p>
          </div>
          <span>
            <Link
              href={"/"}
              className={`${utilStyles.alignCenter} ${utilStyles.capitalize} ${utilStyles.white} ${layoutStyles.link}`}
            >
              Learn more
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cta;
