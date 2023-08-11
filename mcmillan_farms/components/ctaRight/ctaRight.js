import Image from "next/image";
import style from "../ctaLeft/ctaLeft.module.css";
import utilStyles from "../../styles/utils.module.css"
import pumpkin from "../../public/images/pumpkins.jpg"
import Link from "next/link";

const CtaRight = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.textContainer}>
          <h1>
            Now Available In Washington D.C.
          </h1>
          <p>The refreshingly sweet, subtly tart Koyo Berry is now available in Washington D.C. at three new Whole Foods Market locations!</p>
          <Link href={"/"} className={`${utilStyles.paddingTop1}`}>Learn More</Link>
        </div>
      </div>
      <div className={style.container}>
        <Image src={pumpkin} height={800}
          quality={100} alt={"small orange pumpkins in a pile"} />
      </div>

    </div>
  );
};

export default CtaRight;
