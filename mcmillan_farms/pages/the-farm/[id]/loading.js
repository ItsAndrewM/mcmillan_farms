import styles from "../../../styles/activities.module.css"
import layoutStyles from "@/components/layout/layout.module.css";
import utilStyles from "../../../styles/utils.module.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <li>
            <Skeleton count={10} />
        </li>
    );
}

export default Loading;