import React, { FunctionComponent, useEffect, useState } from 'react'

import styles from './styles.scss'

export enum types {
  success = 'success',
  error = 'error',
  warning = 'warning',
}

const Notification: FunctionComponent<({ message?: string, hide?: boolean, type: types, children?: any })> = ({ message, hide, type, children }) => {
  const [show, setShow] = useState(false)

  const executeInterval = () => {
    const interval = setInterval(() => {
      setShow(true)
      clearInterval(interval)
    }, 500)

    return () => {
      return clearInterval(interval)
    }
  }

  useEffect(executeInterval, [])

  useEffect(executeInterval, [hide])

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

export default Notification
