import React from 'react'

import FilterNav from '../../components/FilterNav'
import MainContent from '../../components/MainContent'

import styles from './styles.scss'
import useFetchNews from '../../hooks/useFetchNews'

const News = () => {
  const fetchNews = useFetchNews()
  
  return (
    <div className={styles.component}>
      <FilterNav fetchNews={fetchNews} />
      <MainContent data={fetchNews.articles} error={fetchNews.error} />
    </div>
  )
}

export default News
