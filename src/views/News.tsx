import React, { useState } from 'react'

import FilterNav from '../components/FilterNav'
import MainContent from '../components/MainContent'
import { changeNews } from '../services/newsService'

import { Article } from '../models/Article'

import styles from './news.scss'

const News = () => {
  const [articles, setArticles] = useState<Article>(new Article('', 0, []))
  const [error, setError] = useState<string | null>(null)

  const handleArticleError = (message:string) => {
    setError(message)
  }

  return (
    <div className={styles.component}>
      <FilterNav
        totalResults={articles?.totalResults ?? 0}
        changeNews={changeNews}
        setArticles={setArticles}
        handleArticleError={handleArticleError}
      />
      <MainContent data={articles} error={error} />
    </div>
  )
}

export default News
