import React, { useState } from 'react'

import FilterNav from '../../components/FilterNav'
import MainContent from '../../components/MainContent'
import { changeNews } from '../../services/newsService'

import { Everything } from '../../models/Everything'

import styles from './styles.scss'

const News = () => {
  const [articles, setArticles] = useState<Everything>({} as Everything)
  const [error, setError] = useState<string | undefined>(undefined)

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
