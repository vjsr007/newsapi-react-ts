import React, { ChangeEventHandler, Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.scss'

type CustomInputProps = { handleOnChange: ChangeEventHandler, defaultTitle: string, defaultPlaceholder: string };

class CustomInputClass extends Component<{ handleOnChange: ChangeEventHandler, defaultTitle: string, defaultPlaceholder: string }> {
  static defaultProps = {
    handleOnChange: () => {},
    defaultTitle: 'input your text',
    defaultPlaceholder: 'input your text',
  }
  
  static propTypes = {
    handleOnChange: PropTypes.func,
    defaultTitle: PropTypes.string,
    defaultPlaceholder: PropTypes.string,
  }

  constructor(props: CustomInputProps) {
    super(props)
  }

  componentDidUpdate(prevProps: CustomInputProps) {
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

export default CustomInputClass
