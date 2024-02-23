import Progress from './Progress'
import styles from '../css/Level.module.css'
const Level = () => {
  return (
    <div class={styles.box}>
      <h2 className={styles.level} style={{ textAlign: 'center' }}>
        Level
      </h2>
      <progress value={0.5} style={{ backgroundColor: 'white' }} />
    </div>
  )
}
export default Level
