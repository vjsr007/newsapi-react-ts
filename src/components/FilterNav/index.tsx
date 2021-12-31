import React, { FunctionComponent, useEffect, useState, ChangeEventHandler, ChangeEvent } from 'react'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import CustomLabel from '../CustomLabel'

import { lans, dates, sort } from '../../constants/constants'

import styles from './styles.scss'

const FilterNav:
  FunctionComponent<({ fetchNews: any })> =
  ({ fetchNews }) => {

    const {
      articles,
      sources,
      changePage,
      changeTopic,
      changeSources,
      changeSortBy,
      changeLanguage,
      changeDate,
      updateFilters
    } = fetchNews

    return (
      <div className={styles.component}>
        <div className={styles.header}>
          <label data-testid="title" className={styles.title}>News API</label>
          <label className={styles.subtitle}>Use filters to get articles</label>
        </div>
        <div className={styles.form}>
          <CustomLabel label="Topic" />
          <CustomInput onChange={changeTopic} />
          <CustomLabel label="Sources" />
          <Dropdown options={sources} multiSelect onChange={changeSources} />
          <CustomLabel label="Dates" />
          <Dropdown options={dates} onChange={changeDate} />
          <CustomLabel label="Languages" />
          <Dropdown options={lans} onChange={changeLanguage} />
          <CustomLabel label="Sort by" />
          <Dropdown options={sort} onChange={changeSortBy} />
          <Pager numberOfItems={articles.totalResults} onChange={changePage} />
          <CustomButton onClick={updateFilters} label="Search" />
        </div>
      </div>
    )
  }

FilterNav.defaultProps = {
  fetchNews: {
    articles: {}
  },
}

export default FilterNav
