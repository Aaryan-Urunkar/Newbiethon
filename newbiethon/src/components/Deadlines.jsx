import { useState } from 'react'
import styles from '../css/Deadlines.module.css'
const Deadlines = () => {
  const alerts = [
    { id: 1, alert: 'Soframycin should be taken today!' },
    { id: 2, alert: 'Paracetamol should be taken today!' },
    { id: 3, alert: 'Crocin should be taken today!' },
  ]
  const erasePerson = (id) => {
    setDeadline(
      deadline.filter((dealine) => {
        return deadline.id !== id
      })
    )
  }
  const [deadline, setDeadline] = useState(alerts)
  return (
    <div className={styles.box}>
      <h2>Deadlines</h2>
      <div className={styles.dates} style={{ width: '100%' }}>
        {alerts.map((alert) => {
          return (
            <div id={alert.id} className={styles.date}>
              {alert.alert}
              <button
                onClick={() => {
                  erasePerson(alert.id)
                }}
              >
                Taken!
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Deadlines
