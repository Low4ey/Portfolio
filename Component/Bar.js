import React from "react";
import styles from "../styles/bar.module.css"
function Bar(props) {
    return (<>
        <div className={styles.skills}>
            <div className={styles.skill}>
                <div className={styles.skillame}>{props.name}</div>
                <div className={styles.skillar}>
                    <div className={styles.skillper} per={props.width} style={{"maxWidth":props.width}}></div>
                </div>
            </div>
        </div>
    </>)
}
export default Bar;