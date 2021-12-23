import React, { FunctionComponent, useEffect, useState, ChangeEventHandler, ChangeEvent } from 'react'

import CustomInput from '../CustomInput'
import Dropdown from '../Dropdown'
import Pager from '../Pager'
import CustomButton from '../CustomButton'

import { Sources } from '../../models/Sources'
import { Source } from '../../models/Source'
import { Request } from '../../models/Everything'

import CustomLabel from '../CustomLabel'

import { lans, dates, sort } from '../../constants/constants'
import { getSources } from '../../services/newsService'

import styles from './styles.scss'
import { getRange } from '../../shared/utils'

const FilterNav:
  FunctionComponent<({ totalResults: number, handleChangeNews: Function, filters: Request, setFilters: Function })> =
  ({ totalResults, handleChangeNews, filters, setFilters }) => {
    const [sources, setSources] = useState<Source[]>([])
    const [tempFilters, setTempfilters] = useState<Request>(filters)

    useEffect(() => {
      getSources().then((data: Sources) => setSources(data.sources))
    }, [])

    useEffect(() => {
      handleChangeNews()
    }, [filters])

    const updateFilters = () => {
      setFilters({ ...filters, ...tempFilters })
    }

    const changePage = ({ page } : Request) => {
      if(page !== filters.page) {
        const newState = { ...filters, page }
        setFilters(newState)
        setTempfilters(newState)
      }
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

    const changeDate = (selectedOptions: string[]) => {
      setTempfilters({ ...tempFilters, ...getRange(selectedOptions[0]) })
    }

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
          <Pager numberOfItems={totalResults} onChange={changePage} />
          <CustomButton onClick={updateFilters} label="Search" />
        </div>
      </div>
    )
  }

FilterNav.defaultProps = {
  totalResults: 0,
  handleChangeNews: () => { },
  filters: {} as Request,
  setFilters: () => { },
}

export default FilterNav
