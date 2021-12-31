import React, { FunctionComponent, MouseEventHandler } from 'react'

import styles from './styles.scss'

const CustomButton: FunctionComponent<({ label: string, onClick: MouseEventHandler })> = ({ label, onClick }) => (
  <button type="button" onClick={onClick} className={styles.component}>
    <label>{label}</label>
  </button>
)

CustomButton.defaultProps = {
  label: 'Label',
  onClick: () => { },
}

export default CustomButton
