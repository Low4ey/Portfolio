import React from 'react'
import styles from "../styles/bt.module.css"

const Btn = (props) => {
  return (
      <div className={styles.btn}>
    <button>{props.name}
</button></div>
  )
}

export default Btn;