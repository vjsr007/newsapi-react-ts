import React, { FunctionComponent } from 'react'

import ArticleContainer from '../ArticleContainer'
import CustomLoader, { loaders } from '../CustomLoader'
import Notification from '../Notification'
import { types } from '../Notification'
import { Everything } from '../../models/Everything'

import styles from './styles.scss'

const MainContent:FunctionComponent<({ data: Everything, error?: string | undefined })> = ({ data, error }) => (
  <div className={styles.component}>
    {data?.articles?.length > 0 ? (
      <ArticleContainer data={data} />
    ) : (
      <div className={styles.loader}>
        <CustomLoader defaultLoader={loaders.cube} />
      </div>
    )}
    <Notification hide={!error} message={error} type={types.warning} />
  </div>
)

MainContent.defaultProps = {
  data: {
    articles: [],
    totalResults: 0,
    status: '',
  },
  error: '',
}

export default MainContent
