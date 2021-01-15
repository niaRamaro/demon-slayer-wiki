import { ReactElement, useEffect, useState } from 'react';

import { formatFileName } from '../../helpers/fileHelpers';

type Props = {
  articleTitle: string;
};

type Article = {
  html: string;
};

export default function ArticleContent({ articleTitle }: Props): ReactElement {
  const [article, setArticle] = useState({} as Article);

  useEffect(() => {
    async function loadArticles() {
      const articleFileName = formatFileName(articleTitle);

      try {
        const { default: data } = await import(
          `../../data/articlesContent/${articleFileName}.json`
        );
        setArticle(data);
      } catch (e) {
        setArticle({} as Article);
      }
    }

    loadArticles();
  }, [articleTitle]);

  if (!article?.html) {
    return null;
  }

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: article.html }} />;
}
