import React, { ChangeEventHandler, FunctionComponent } from 'react'

import styles from './styles.scss'

const CustomInput:
  FunctionComponent<({ onChange: ChangeEventHandler<HTMLInputElement>, defaultTitle?: string, defaultPlaceholder?: string })> =
  ({ onChange, defaultTitle, defaultPlaceholder }) => (
    <input
      type="text"
      title={defaultTitle}
      placeholder={defaultPlaceholder}
      onChange={onChange}
      className={styles.component}
    />
  )

CustomInput.defaultProps = {
  onChange: () => { },
  defaultTitle: 'input your text',
  defaultPlaceholder: 'input your text',
}

export default CustomInput
