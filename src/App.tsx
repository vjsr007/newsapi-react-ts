import React from 'react'

import styles from './App.scss'
import ErrorBoundary from './components/ErrorBoundary'
import News from './views/News'

const App = () => (
  <div className={styles.component}>
    <ErrorBoundary>
      <News />
    </ErrorBoundary>
  </div>
)

export default App
