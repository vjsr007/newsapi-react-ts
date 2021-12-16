import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import styles from './filterNav.scss'
import { lans, dates, sort } from '../../constants/constants'
import CustomLabel from '../CustomLabel/CustomLabel'
import { getSources } from '../../services/newsService'

const FilterNav = ({ totalResults, changeNews, setArticles, handleArticleError }) => {
  const [sources, setSources] = useState([])
  const [filters, setFilters] = useState({
    page: 1,
    sortBy: '',
  })
  const [tempFilters, setTempfilters] = useState(filters)

  useEffect(() => {
    getSources().then(data => setSources(data.sources))
  }, [])

  const handleChangeNews = () => {
    setArticles({})
    handleArticleError()
    changeNews(filters)
      .then(data => setArticles(data))
      .catch(error => {
        handleArticleError(error.message)
      })
  }

  useEffect(() => {
    handleChangeNews()
  }, [filters])

  const updateFilters = () => {
    setFilters({ ...filters, ...tempFilters })
  }

  const changePage = ({ page }) => {
    const newState = { ...filters, page }
    setFilters(newState)
    setTempfilters(newState)
  }

  const changeTopic = event => {
    setTempfilters({ ...tempFilters, q: event.target.value })
  }

  const changeSources = selectedOptions => {
    setTempfilters({ ...tempFilters, sources: selectedOptions.map(option => option).join(',') })
  }

  const changeSortBy = selectedOptions => {
    setTempfilters({ ...tempFilters, sortBy: selectedOptions[0] })
  }

  const changeLanguage = selectedOptions => {
    setTempfilters({ ...tempFilters, language: selectedOptions[0] })
  }

  const addDays = (date, days) => {
    const result = new Date(date)
    result.setDate(result.getDate() + days)
    return result
  }

  const formatDate = date => {
    const d = new Date(date)
    let month = `${d.getMonth() + 1}`
    let day = `${d.getDate()}`
    const year = d.getFullYear()

    if (month.length < 2) month = `0${month}`
    if (day.length < 2) day = `0${day}`

    return [year, month, day].join('-')
  }

  const getRange = range => {
    const today = new Date()
    const to = today.toISOString()
    switch (range) {
      case 'week':
        return { to, from: formatDate(addDays(today, -7).toISOString()) }
      case 'month':
        return { to, from: formatDate(addDays(today, -30).toISOString()) }
      default:
        return { to, from: formatDate(addDays(today, -1).toISOString()) }
    }
  }

  const changeDate = selectedOptions => {
    setTempfilters({ ...tempFilters, ...getRange(selectedOptions[0]) })
  }

  return (
    <div className={styles.component}>
      <div className={styles.header}>
        <label className={styles.title}>News API</label>
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
        <Pager numberOfItems={totalResults} onChange={changePage} />
        <CustomButton onClick={updateFilters} label="Search" />
      </div>
    </div>
  )
}

FilterNav.defaultProps = {
  totalResults: 0,
  changeNews: () => {},
  setArticles: () => {},
  handleArticleError: () => {},
}

FilterNav.propTypes = {
  totalResults: PropTypes.number,
  changeNews: PropTypes.func,
  setArticles: PropTypes.func,
  handleArticleError: PropTypes.func,
}

export default FilterNav
