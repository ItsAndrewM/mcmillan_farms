import layoutStyles from "@/components/layout/layout.module.css";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import styles from "./recommended.module.css"
import { useEffect, useState } from "react";
import { random } from "@/lib/random";

export const featuredProducts = (list, emptyList) => {
    while (emptyList.length !== 5) {
        const num = random(list.length)
        const find = emptyList.find((val) => {
            return val === list[num]
        })
        if (!find) {
            emptyList.push(list[num])
            featuredProducts(list, emptyList)
        }
        else {
            featuredProducts(list, emptyList);
        }
        return emptyList;
    }
}

const Recommended = ({ arr, child }) => {
    const [reccomend, setReccomend] = useState(new Array(5));

    useEffect(() => {
        const array = [];
        let filtered = arr.filter((val) => {
            return val.name !== child
        })
        filtered = featuredProducts(filtered, array)
        setReccomend(filtered)
        console.log(reccomend)
    }, [])

    return (
        <div className={styles.wrapper} >
            <div className={styles.textWrapper}>
                <h1>Learn what else is at the farm</h1>
            </div>
            <ul className={styles.list}>
                {reccomend.map((item, index) => {
                    return (
                        <li key={index}
                            className={`${styles.listItem} ${utilStyles.columnFlex} ${utilStyles.alignCenter} ${utilStyles.marginBottom1} ${utilStyles.width20}`}
                        >
                            <Link href={item.link} className={styles.image}>
                                <div className={`${styles.imageWrapper}`}>
                                    <Image src={item.image} alt={""} key={item.image} />
                                </div>
                            </Link>
                            <span>
                                <h3>
                                    <Link
                                        href={item.link}
                                        className={`${utilStyles.capitalize} ${layoutStyles.link}`}
                                    >
                                        {item.name}
                                    </Link>
                                </h3>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Recommended;