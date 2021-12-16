/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/sort-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './customInput.scss'

class CustomInputClass extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    console.log('componentDidUpdate')
    console.log('prevProps', prevProps)
    console.log('props', this.props)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { handleOnChange, defaultTitle, defaultPlaceholder } = this.props

    return (
      <input
        type="text"
        title={defaultTitle}
        placeholder={defaultPlaceholder}
        onChange={handleOnChange}
        className={styles.component}
      />
    )
  }
}

CustomInputClass.defaultProps = {
  handleOnChange: () => {},
  defaultTitle: 'input your text',
  defaultPlaceholder: 'input your text',
}

CustomInputClass.propTypes = {
  handleOnChange: PropTypes.func,
  defaultTitle: PropTypes.string,
  defaultPlaceholder: PropTypes.string,
}

export default CustomInputClass
