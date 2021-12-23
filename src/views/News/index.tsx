import React, { useState } from 'react'

import FilterNav from '../../components/FilterNav'
import MainContent from '../../components/MainContent'
import { changeNews } from '../../services/newsService'

import { Everything, Request } from '../../models/Everything'

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

const News = () => {
  const [articles, setArticles] = useState<Everything>({} as Everything)
  const [error, setError] = useState<string | undefined>(undefined)
  const [filters, setFilters] = useState<Request>(initialFilterState)

  const handleArticleError = (message: string): void => {
    setError(message)
  }

  const handleChangeNews = async () => {
    setArticles({} as Everything)
    handleArticleError('')
    try {
      const response = await changeNews(filters)
      setArticles(response)
    } catch (error: any) {
      handleArticleError(error.message)
    }
  }

  return (
    <div className={styles.component}>
      <FilterNav
        totalResults={articles?.totalResults ?? 0}
        handleChangeNews={handleChangeNews}
        filters={filters}
        setFilters={setFilters}
      />
      <MainContent data={articles} error={error} />
    </div>
  )
}

export default News
