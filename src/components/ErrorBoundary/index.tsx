import React, { Component } from 'react'
import styles from './styles.scss'

export default class ErrorBoundary extends Component {

  state = { error: false };

  constructor(props: any) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <div className={styles.component}>
          <h1>Something went wrong.</h1>
          <div>
            <button onClick={() => this.setState({ error: false })}>Try again</button>
          </div>
        </div>
      )
    }
    return this.props.children;
  }
}