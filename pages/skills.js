import React, { useState } from "react";
import Web from "../Component/web";
import Programming from "../Component/programming";
import Editing from "../Component/Editing";
import styles from "../styles/skill.module.css"
import Btn from "../Component/btn";
import Tag_cloud from "../Component/Tag_cloud";
import dynamic from 'next/dynamic';

function Skill() {
    const DynamicComponentWithNoSSR = dynamic(
        () => import('../Component/text_cloud'),
        { ssr: false }
    )
    const [skill, setskill] = useState("Web")
    return (<>
        <div className={styles.main}>
            <ul className={styles.ruler}>
                <a onClick={() => setskill("Web")} className={styles.skilla}><Btn name="Web Dev" /></a>
                <a onClick={() => setskill("Programming")} className={styles.skilla}><Btn name="Programming" /></a>
                <a onClick={() => setskill("Editing")} className={styles.skilla}><Btn name="Editing" /></a>
            </ul>

            <div className={styles.cld}>
                <Tag_cloud />
            </div>
        </div>
        {skill === "Web" && <Web />}
        {skill === "Programming" && <Programming />}
        {skill === "Editing" && <Editing />}
    </>)
}

export default Skill;