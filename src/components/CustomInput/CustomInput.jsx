import React from 'react'
import PropTypes from 'prop-types'

import styles from './customInput.scss'

const CustomInput = ({ onChange, defaultTitle, defaultPlaceholder }) => (
  <input
    type="text"
    title={defaultTitle}
    placeholder={defaultPlaceholder}
    onChange={onChange}
    className={styles.component}
  />
)

CustomInput.defaultProps = {
  onChange: () => {},
  defaultTitle: 'input your text',
  defaultPlaceholder: 'input your text',
}

CustomInput.propTypes = {
  onChange: PropTypes.func,
  defaultTitle: PropTypes.string,
  defaultPlaceholder: PropTypes.string,
}

export default CustomInput
