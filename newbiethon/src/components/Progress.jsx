import { useState } from 'react'
import styles from '../css/Deadlines.module.css'
const Progress = () => {
  const alerts = [
    { id: 1, alert: 'Paracetamol', date: '22/10/22' },
    { id: 2, alert: 'ReVital Age ', date: ' 20/6/23' },
    { id: 3, alert: 'Cyclopalm', date: '12/1/24' },
  ]

  const [deadline, setDeadline] = useState(alerts)
  return (
    <div className={styles.box}>
      <h2>You took:</h2>
      <div
        className={styles.dates}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {alerts.map((alert) => {
          return (
            <div id={alert.id} className={styles.date} style={{}}>
              {alert.alert}
              <span>{alert.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Progress
