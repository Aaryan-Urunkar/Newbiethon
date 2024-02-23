import Progress from './Progress'
import styles from '../css/Level.module.css'
const Level = () => {
  return (
    <div>
      <h3 className={styles.level}>Level</h3>
      <progress value={0.5} style={{ backgroundColor: 'white' }} />
    </div>
  )
}
export default Level
