/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable default-case */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './pager.scss'

export const enumAction = {
  first: 'first',
  previous: 'previous',
  next: 'next',
  last: 'last',
}

const Pager = ({ pageSize, numberOfItems, onChange }) => {
  const [page, setPage] = useState(1)

  useEffect(() => {
    onChange({ page })
  }, [page])

  const calculatePages = () => (numberOfItems > 0 ? Math.ceil(numberOfItems / pageSize) : 1)
  const goToFirst = () => {
    setPage(1)
  }
  const goToPrevious = () => {
    setPage(page > 1 ? page - 1 : page)
  }
  const goToNext = () => {
    setPage(page < calculatePages() ? page + 1 : page)
  }
  const goToLast = () => {
    setPage(calculatePages())
  }
  const goTo = where => {
    switch (where) {
      case enumAction.first:
        goToFirst()
        break
      case enumAction.previous:
        goToPrevious()
        break
      case enumAction.next:
        goToNext()
        break
      case enumAction.last:
        goToLast()
        break
    }
  }

  return (
    <div className={styles.component}>
      <div id="btnFirst" title="first" onClick={() => goTo(enumAction.first)} className={styles.button}>{`<<`}</div>
      <div id="btnPrevious" title="previous" onClick={() => goTo(enumAction.previous)} className={styles.button}>{`<`}</div>
      <div id="page" title="current page" className={`${styles.button} ${styles.input}`}>
        {page}
      </div>
      <div id="btnNext" title="next" onClick={() => goTo(enumAction.next)} className={styles.button}>{`>`}</div>
      <div id="btnLast" title="last" onClick={() => goTo(enumAction.last)} className={styles.button}>{`>>`}</div>
    </div>
  )
}

Pager.defaultProps = {
  pageSize: 20,
  numberOfItems: 0,
  onChange: () => {},
}

Pager.propTypes = {
  pageSize: PropTypes.number,
  numberOfItems: PropTypes.number,
  onChange: PropTypes.func,
}

export default Pager
