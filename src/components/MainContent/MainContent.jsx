import React from 'react'
import PropTypes from 'prop-types'

import ArticleContainer from '../ArticleContainer'
import CustomLoader, { loaders } from '../CustomLoader'

import styles from './mainContent.scss'
import Notification from '../Notification'
import { types } from '../Notification/Notification'

const MainContent = ({ data, error }) => (
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
  data: {},
  error: null,
}

MainContent.propTypes = {
  data: PropTypes.object,
  error: PropTypes.string,
}

export default MainContent
