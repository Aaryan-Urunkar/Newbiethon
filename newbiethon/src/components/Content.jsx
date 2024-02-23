import styles from '../css/Content.module.css'
import Prescriptions from './Prescriptions'
import Deadlines from './Deadlines'
import Level from './Level'
import DashboardNotifcation from './DashboardNotifcation'
import Progress from './Progress'
import MedicationHistory from './MedicationHistory'
import Appointments from './Appointments'
const Content = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.upperGrid}>
        <Prescriptions />
        <Deadlines />
        <div className={styles.topRight}>
          <Level />
          <DashboardNotifcation />
        </div>
      </div>
      <div className={styles.lowerGrid}>
        <Progress />
        <MedicationHistory />
        <Appointments />
      </div>
    </div>
  )
}
export default Content
