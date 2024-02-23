import { useState } from 'react'
import styles from '../css/Medication.module.css'
const Appointments = () => {
  const alerts = [
    { id: 1, alert: 'Doctor Dre', date: '22/10/22' },
    { id: 2, alert: 'Doctor Sins ', date: ' 20/6/23' },
    { id: 3, alert: 'Doctor Kapadia ', date: '12/1/24' },
  ]

  const [deadline, setDeadline] = useState(alerts)
  return (
    <div
      className={styles.box}
      style={{ width: '300px', backgroundColor: 'black' }}
    >
      <h2>Your Appointmnets</h2>
      <div className={styles.dates} style={{ color: 'white' }}>
        {alerts.map((alert) => {
          return (
            <div id={alert.id} className={styles.date}>
              {alert.alert}
              <span>{alert.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Appointments
