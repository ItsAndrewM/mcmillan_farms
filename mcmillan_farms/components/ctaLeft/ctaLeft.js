import Image from "next/image";
import style from "./ctaLeft.module.css";
import utilStyles from "../../styles/utils.module.css";
import layoutStyles from "../layout/layout.module.css";
import pumpkin from "../../public/images/pumpkins4.jpg";
import Link from "next/link";

const CtaLeft = () => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.container}`}>
        <Image
          src={pumpkin}
          height={800}
          width={800}
          quality={100}
          alt={"small orange pumpkins in a pile"}
          loading="lazy"
        />
      </div>
      <div className={`${style.container}`}>
        <div className={style.textContainer}>
          <h1>Every type of Pumpkin you could ever imagine</h1>
          <p>
            Prepare to be overwhelmed by pumpkins. We have got your baking,
            cooking, carving, decorating, painting, roasting, smashing pumpkin
            needs covered. Seriously, we have got it all.
          </p>
          <span>
            <Link
              href={"/the-farm/fall-attractions/pumpkins"}
              className={` ${layoutStyles.checkout} ${layoutStyles.largeCheckout}`}
            >
              learn more about our varieties, sizes, and prices
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CtaLeft;
