import React, { useState, useEffect, FunctionComponent } from 'react'

import styles from './styles.scss'

export enum enumAction {
  first = 'first',
  previous = 'previous',
  next = 'next',
  last = 'last',
}

const Pager:
  FunctionComponent<({ pageSize?: number, numberOfItems?: number, onChange: Function })> =
  ({ pageSize, numberOfItems, onChange }) => {
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
      onChange({ page })
    }, [page])

    const calculatePages = () => ((numberOfItems || 0) > 0 ? Math.ceil((numberOfItems || 0) / (pageSize || 20)) : 1)
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
    const goTo = (where: enumAction) => {
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
  onChange: () => { },
}

export default Pager
