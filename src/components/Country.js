import styles from './Country.module.css'
import { Link, useLocation } from "react-router-dom";

const Country = () => {

  const location = useLocation();
  const item = location.state?.data;
  const renderLanguage = () => {
    return Object.values(item.languages).map((e) => (<span key={e}> {e} </span>))
  }

  return (
    <div className={styles.root}>
      <div className={styles.back}> <Link to="/" > Back</Link></div>
      <div><p className={styles.flag}><img src={item.flags.png} alt='flaga' /></p></div>
      <div className={styles.main}>
        <p className={styles.mainObj}> <span className={styles.obj}>Official name </span> : {item.name.official} </p>
        <p className={styles.mainObj}>  <span className={styles.obj}>google maps </span> : <a className={styles.link} href={item.maps.googleMaps}> link</a></p>
        <p className={styles.mainObj}> <span className={styles.obj}>continents </span> : {item.continents} </p>
        <p className={styles.mainObj}> <span className={styles.obj}>common name </span> : {item.name.common} </p>
        <p className={styles.mainObj}> <span className={styles.obj}>capital </span> : {item.capital} </p>
        <p className={styles.mainObj}> <span className={styles.obj}>languages </span> : {renderLanguage()} </p>
        <p className={styles.mainObj}> <span className={styles.obj}>population </span> : {item.population} </p>
      </div>
    </div>
  )
}

export default Country