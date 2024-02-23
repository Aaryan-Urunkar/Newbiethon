import { useState } from 'react'
import styles from '../css/Medication.module.css'
const MedicationHistory = () => {
  const alerts = [
    { id: 1, alert: 'MRI scan for Cancer', date: '22/10/22' },
    { id: 2, alert: 'Health Checkup ', date: ' 20/6/23' },
    { id: 3, alert: 'Stomach Ache ', date: '12/1/24' },
  ]

  const [deadline, setDeadline] = useState(alerts)
  return (
    <div
      className={styles.box}
      style={{ width: '380px', backgroundColor: 'black' }}
    >
      <h2>Medication History:</h2>
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
export default MedicationHistory
