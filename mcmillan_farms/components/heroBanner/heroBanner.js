import Link from "next/link";
import style from "./heroBanner.module.css"
import utilStyles from "../../styles/utils.module.css"
import Image from "next/image";
import collab from "../../public/images/lentelusXmf.png"
import sunflower from "../../public/images/sunflower.jpg"

const HeroBanner = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Image src={collab} width={470} alt={"lentelus collab with McMillan Farms"} />
            </div>
            <div className={style.skinnyContainer}>
                <Image src={sunflower} alt={"picture of sunflowers"} height={700} width={690} className={`${utilStyles.imageCover}`} />
            </div>
            <div className={style.container}>
                <div>
                    <h1>Find Oishii at Whole Foods Market</h1>
                    <p>Oishii and Whole Foods have partnered to bring our berries to locations throughout New York City, New Jersey, Connecticut, and D.C.</p>
                    <Link href={"/"}>Find Oishii at Whole Foods Market</Link>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;