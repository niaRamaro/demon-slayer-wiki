import { ReactElement, useEffect, useState } from 'react';

import formatFileName from '../../helpers/fileHelpers';
import ArticleList from '../article/ArticleList';

type Props = {
  category: string;
};

export default function CategoryArticles({ category }: Props): ReactElement {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const categoryFileName = formatFileName(category);

      try {
        const { default: data } = await import(
          `../../data/articlesByCategory/${categoryFileName}.json`
        );
        setArticles(data);
      } catch (e) {
        setArticles([]);
      }
    }

    loadArticles();
  }, [category]);

  if (!articles?.length) {
    return null;
  }

  return (
    <>
      <h3>Articles</h3>
      <ArticleList articles={articles} />
    </>
  );
}
