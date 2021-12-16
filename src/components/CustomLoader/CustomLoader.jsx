import React from 'react'
import PropTypes from 'prop-types'

import styles from './customLoader.scss'

export const loaders = {
  spin: 'spin',
  cube: 'cube',
}

const CustomLoader = ({ defaultLoader }) => {
  const spin = () => (
    <div className={styles.sk_fading_circle}>
      <div className={`${styles.sk_circle1} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle2} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle3} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle4} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle5} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle6} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle7} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle8} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle9} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle10} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle11} ${styles.sk_circle}`} />
      <div className={`${styles.sk_circle12} ${styles.sk_circle}`} />
    </div>
  )

  const cube = () => (
    <div className={styles.sk_cube_grid}>
      <div className={`${styles.sk_cube} ${styles.sk_cube1}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube2}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube3}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube4}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube5}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube6}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube7}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube8}`} />
      <div className={`${styles.sk_cube} ${styles.sk_cube9}`} />
    </div>
  )

  const populate = () => {
    switch (defaultLoader) {
      case loaders.spin:
        return spin()
      default:
        return cube()
    }
  }

  return <div className={styles.component}>{populate()}</div>
}

CustomLoader.defaultProps = {
  defaultLoader: loaders.cube,
}

CustomLoader.propTypes = {
  defaultLoader: PropTypes.string,
}

export default CustomLoader
