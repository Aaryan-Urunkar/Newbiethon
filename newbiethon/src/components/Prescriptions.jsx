import styles from '../css/Prescriptions.module.css'
import { BsCapsule } from 'react-icons/bs'
const Prescriptions = () => {
  return (
    <div className={styles.box}>
      <h2>Prescriptions</h2>
      <ul className="pres">
        <li>
          <BsCapsule />
          Crocin
          <span>2-1-0</span>
        </li>
        <li>
          <BsCapsule />
          Cyclopalm
          <span>2-0-3</span>
        </li>
        <li>
          <BsCapsule />
          Azithromycin
          <span>1-1-0</span>
        </li>
        <li>
          <BsCapsule />
          Soframycin
          <span>1-0-1</span>
        </li>
        <li>
          <BsCapsule />
          Painkiller
          <span>2-2-2</span>
        </li>
      </ul>
    </div>
  )
}
export default Prescriptions
