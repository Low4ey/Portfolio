import React from "react";
import Bar from "./Bar";
import styles from "../styles/web.module.css"

function Web() {
    return (<>
        <div className={styles.web}>
            <Bar name="Mongo DB" width="90%" />
            <Bar name="Express" width="60%" />
            <Bar name="React js" width="80%" />
            <Bar name="Node js" width="70%" />
            <p>lorem ipsum asohdfosi ghfd gvlbjnd tepr4ah gfdjlnabg aeuroi fgbnadj gaerpiu tadfjlnbg alhtip aergbnfadl gbadeilfht rpeiaugfvbnldafgh aeqr4liuhtgadlkjgb </p>
        </div>
        
    </>)
}

export default Web;