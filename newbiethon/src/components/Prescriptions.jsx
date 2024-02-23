import styles from '../css/Prescriptions.module.css'
import { BsCapsule } from 'react-icons/bs'
const Prescriptions = () => {
  return (
    <div className={styles.box}>
      <h2>Prescriptions</h2>
      <ul className="pres">
        <li>
          <BsCapsule />
          Lorem
          <span>2-2-2</span>
        </li>
        <li>
          <BsCapsule />
          Lorem
          <span>2-2-2</span>
        </li>
        <li>
          <BsCapsule />
          Lorem
          <span>2-2-2</span>
        </li>
        <li>
          <BsCapsule />
          Lorem
          <span>2-2-2</span>
        </li>
        <li>
          <BsCapsule />
          Lorem
          <span>2-2-2</span>
        </li>
      </ul>
    </div>
  )
}
export default Prescriptions
