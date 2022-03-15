import React from "react";
import styles from "../styles/btn.module.css"
function Button(props) {
  return (<>
    <div className={styles.btn}>
      <a style={{fontSize:"48px",fontWeight:"bold"}}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.btn}
      </a></div>
  </>)
}

export default Button;