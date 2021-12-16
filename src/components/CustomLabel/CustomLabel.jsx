import React from 'react'
import PropTypes from 'prop-types'

import styles from './customLabel.scss'

const CustomLabel = ({ label }) => <div className={styles.component}>{label}</div>

CustomLabel.defaultProps = {
  label: 'Label',
}

CustomLabel.propTypes = {
  label: PropTypes.string,
}

export default CustomLabel
