
import Image from 'next/image'
import styles from "../styles/about.module.css"

export default function Home() {
  return (<>
    <div className={styles.blr}>
    <div className={styles.heading}>
      <h1>ABOUT ME</h1>
      <h1>ABOUT ME</h1>
    </div>
    <div className={styles.info}>
      <h2>Pursuing Computer Science Engineering</h2>
      <h3>Full Stack Web Developer ....</h3>
      <hr />
    </div>
    <div className={styles.container}>
      <li className={styles.logo}><Image src="/me.png" alt='me' height={500} width={500} /></li>
      <p className={styles.para}> why idk Ajeet Is my name sjdhsfv eyrvewku fvda urve afds voewtg fkds gfue groewgFHHDSJ GFRTYTDGHF DSF DHSGF REGADFHDJGLlhfjdgbrue bdjh fdja fyradhf lfdalhfgdaelafgldjgfjda railgfjgdflgelrafrtgfldhg raugfaglartaf f glaretirwgfg ggflg ruglsfgre t fhg ehtu qtrjhg ueg</p>
    </div>
</div>
  </>
  )
}
