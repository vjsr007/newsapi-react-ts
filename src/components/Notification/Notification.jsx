import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './notification.scss'

export const types = {
  sucess: 'success',
  error: 'error',
  warning: 'warning',
}

const Notification = ({ message, hide, type, children }) => {
  const [show, setShow] = useState(false)

  const executeInterval = () => {
    const interval = setInterval(() => {
      setShow(true)
      clearInterval(interval)
    }, 500)
  }

  useEffect(() => executeInterval(), [])

  useEffect(() => executeInterval(), [hide])

  const onClick = () => {
    setShow(false)
  }

  return (
    <div className={`${styles.component} ${show && !hide ? styles.show : ''} ${styles[type]}`}>
      <label>{children || message}</label>
      <button type="button" onClick={onClick}>
        X
      </button>
    </div>
  )
}

Notification.defaultProps = {
  hide: true,
  message: 'An error message',
  type: types.error,
  children: null,
}

Notification.propTypes = {
  hide: PropTypes.bool,
  message: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
}

export default Notification
