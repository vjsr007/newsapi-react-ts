import React, { FunctionComponent } from 'react'
import { Article } from '../../models/Article';

import styles from './styles.scss'

const ArticleComponent: FunctionComponent<({ item: Article })> = ({ item }) => (
  <div data-testid="article" className={styles.component}>
    <div className={styles.header}>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.author}>{item.publishedAt}</div>
      <div className={styles.author}>{`By ${item?.author}` ?? ''}</div>
      <div className={styles.source}>{item?.source?.name ?? ''}</div>
    </div>
    <div className={styles.content}>
      <div className={styles.img_section}>
        <img className={styles.image} src={item.urlToImage} />
      </div>
      <div className={styles.article}>
        <div className={styles.text}>{item.description}</div>
        <a href={item.url} className={styles.text} target="_blank" rel="noreferrer">
          Go to article
        </a>
      </div>
    </div>
  </div>
);

ArticleComponent.defaultProps = {
  item: {} as Article,
}

export default ArticleComponent;
