import React, { FunctionComponent } from 'react'

import styles from './styles.scss'
import { Article } from '../../models/Article'
import ArticleComponent from '../ArticleComponent'

const ArticleContainer: FunctionComponent<({ data: Article })> = ({ data }) => (
  <div className={styles.component}>
    {data?.articles?.map((article, idx) => (
      <ArticleComponent key={`article${idx}`} item={article} />
    ))}
  </div>
)

ArticleContainer.defaultProps = {
  data: {} as Article,
}

export default ArticleContainer
