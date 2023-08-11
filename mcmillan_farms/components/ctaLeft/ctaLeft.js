import Image from "next/image";
import style from "./ctaLeft.module.css";

const CtaLeft = () => {
  return (
    <div className={style.wrapper}>
      <div>
        <Image />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default CtaLeft;
