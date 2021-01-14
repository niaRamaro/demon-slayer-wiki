import { ReactElement } from 'react';

import ArticleListItem, { ArticleItem } from './ArticleListItem';
import ListContainer from '../common/ListContainer';
import styles from './ArticleList.module.css';

type Props = {
  articles: ArticleItem[];
};

export default function ArticleList({ articles }: Props): ReactElement {
  return (
    <ListContainer>
      {articles.map((article) => (
        <div className={styles.article} key={article.title}>
          <ArticleListItem article={article} />
        </div>
      ))}
    </ListContainer>
  );
}
