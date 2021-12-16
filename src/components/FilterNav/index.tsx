import React, { FunctionComponent, useEffect, useState, ChangeEventHandler, ChangeEvent } from 'react'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import { Sources } from '../../models/Sources'
import { Source } from '../../models/Source'
import { Everything, Request } from '../../models/Everything'
import CustomLabel from '../CustomLabel'

const { lans, dates, sort } = require('../../constants/constants')
const { getSources } = require('../../services/newsService')

import styles from './styles.scss'

const initialFilterState: Request = {
  page: 1,
  sortBy: '',
  language: '',
  pageSize: 10,
  q: '*',
  sources: '',
  domains: '',
  from: '',
  to: ''
}

enum rangeDates {
  week = 'week',
  month = 'month',
  year = 'year'
}

const FilterNav:
  FunctionComponent<({ totalResults: number, changeNews: Function, setArticles: Function, handleArticleError: Function })> =
  ({ totalResults, changeNews, setArticles, handleArticleError }) => {
    const [sources, setSources] = useState<Source[]>([])
    const [filters, setFilters] = useState<Request>(initialFilterState)
    const [tempFilters, setTempfilters] = useState<Request>(filters)

    useEffect(() => {
      getSources().then((data: Sources) => setSources(data.sources))
    }, [])

    const handleChangeNews = () => {
      setArticles({})
      handleArticleError()
      changeNews(filters)
        .then((data: Everything) => setArticles(data))
        .catch((error: Error) => {
          handleArticleError(error.message)
        })
    }

    useEffect(() => {
      handleChangeNews()
    }, [filters])

    const updateFilters = () => {
      setFilters({ ...filters, ...tempFilters })
    }

    const changePage = ({ page } : Request) => {
      const newState = { ...filters, page }
      setFilters(newState)
      setTempfilters(newState)
    }

    const changeTopic:ChangeEventHandler<HTMLInputElement> = (event: ChangeEvent<HTMLInputElement>) => {
      setTempfilters({ ...tempFilters, q: event.target.value })
    }

    const changeSources = (selectedOptions: string[]) => {
      setTempfilters({ ...tempFilters, sources: selectedOptions.map(option => option).join(',') })
    }

    const changeSortBy = (selectedOptions:  string[]) => {
      setTempfilters({ ...tempFilters, sortBy: selectedOptions[0] })
    }

    const changeLanguage = (selectedOptions: string[]) => {
      setTempfilters({ ...tempFilters, language: selectedOptions[0] })
    }

    const addDays = (date: Date, days: number) => {
      const result = new Date(date)
      result.setDate(result.getDate() + days)
      return result
    }

    const formatDate = (date: string) => {
      const d = new Date(date)
      let month = `${d.getMonth() + 1}`
      let day = `${d.getDate()}`
      const year = d.getFullYear()

      if (month.length < 2) month = `0${month}`
      if (day.length < 2) day = `0${day}`

      return [year, month, day].join('-')
    }

    const getRange = (range: string) => {
      const today: Date = new Date()
      const to = today.toISOString()
      switch (range) {
        case rangeDates.week:
          return { to, from: formatDate(addDays(today, -7).toISOString()) }
        case rangeDates.month:
          return { to, from: formatDate(addDays(today, -30).toISOString()) }
        default:
          return { to, from: formatDate(addDays(today, -1).toISOString()) }
      }
    }

    const changeDate = (selectedOptions: string[]) => {
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
  changeNews: () => { },
  setArticles: () => { },
  handleArticleError: () => { },
}

export default FilterNav