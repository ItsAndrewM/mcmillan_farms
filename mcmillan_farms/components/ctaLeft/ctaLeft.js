import Image from "next/image";
import style from "./ctaLeft.module.css";
import pumpkin from "../../public/images/pumpkins.jpg"

const CtaLeft = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <Image src={pumpkin} height={800}
          quality={100} alt={"small orange pumpkins in a pile"} />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default CtaLeft;
