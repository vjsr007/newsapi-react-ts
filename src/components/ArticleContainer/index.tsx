import React, { FunctionComponent } from 'react'

import { Everything } from '../../models/Everything'
import ArticleComponent from '../ArticleComponent'

import styles from './styles.scss'

const ArticleContainer: FunctionComponent<({ data: Everything })> = ({ data }) => (
  <div className={styles.component}>
    {data?.articles?.map((article, idx) => (
      <ArticleComponent key={`article${idx}`} item={article} />
    ))}
  </div>
)

ArticleContainer.defaultProps = {
  data: {} as Everything,
}

export default ArticleContainer
