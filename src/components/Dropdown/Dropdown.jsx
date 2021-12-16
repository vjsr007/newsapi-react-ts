import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './dropdown.scss'
import CustomLoader, { loaders } from '../CustomLoader'

const Dropdown = ({ options, defaultText, multiSelect, onChange }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState([])

  useEffect(() => {
    onChange(selected)
  }, [selected])

  const renderIcon = () =>
    options?.length > 0 ? (
      <i
        id="toggleIcon"
        className={open ? styles.icon_triangule_up : styles.icon_triangule_down}
        aria-hidden="true"
      />
    ) : (
      <CustomLoader defaultLoader={loaders.spin} />
    )

  const hide = ev => {
    ev.preventDefault()
    setOpen(false)
  }

  const toggle = () => {
    setOpen(!open)
  }

  const showPlaceholder = () => (selected?.length > 0 ? selected.join(', ') : defaultText)

  const selectOption = option => {
    if (multiSelect) {
      setSelected(
        selected?.some(id => option.id === id)
          ? selected?.filter(id => option.id !== id)
          : [...selected, option.id]
      )
    } else {
      setSelected([option.id])
      toggle()
    }
  }

  const getOptions = () => {
    if (!options) return ''
    return options?.map(option => (
      <div
        title={option.name}
        id={`option_${option.id}`}
        key={`option_${option.id}`}
        className={styles.option}
      >
        {multiSelect ? (
          <input
            className={styles.checkbox}
            type="checkbox"
            onMouseDown={ev => {
              ev.preventDefault()
            }}
            onChange={() => {
              selectOption(option)
            }}
            checked={selected?.some(id => option.id === id)}
            key={`checkbox_${option.id}`}
            id={`checkbox_${option.id}`}
          />
        ) : (
          ''
        )}
        <button
          type="button"
          id={`label_${option.id}`}
          onClick={ev => {
            selectOption(option)
            ev.preventDefault()
          }}
          onMouseDown={ev => {
            ev.preventDefault()
          }}
          htmlFor={`checkbox_${option.id}`}
          className={styles.name}
        >
          {option.name}
        </button>
      </div>
    ))
  }

  return (
    <div className={styles.component} onBlur={hide}>
      <button type="button" tabIndex={0} onClick={toggle}>
        <input
          type="text"
          className={styles.input}
          title={showPlaceholder()}
          placeholder={showPlaceholder()}
          readOnly
        />
        <div className={`${styles.button} ${styles.down}`}>{renderIcon()}</div>
      </button>
      <div className={`${styles.options} ${open ? styles.show : styles.hidden}`}>
        {getOptions(options)}
      </div>
    </div>
  )
}

Dropdown.defaultProps = {
  options: [],
  defaultText: 'Select your option',
  multiSelect: false,
  onChange: () => {},
}

Dropdown.propTypes = {
  options: PropTypes.array,
  defaultText: PropTypes.string,
  multiSelect: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Dropdown
