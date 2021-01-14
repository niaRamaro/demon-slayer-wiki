import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import ArticleContent from '../../../components/article/ArticleContent';

export default function Child(): ReactElement {
  const router = useRouter();
  const { article, subSection } = router.query;

  if (!article || !subSection) {
    return null;
  }

  const formatedArticle = (article as string).split('_').join(' ');

  return (
    <ArticleContent
      articleTitle={formatedArticle.concat('++').concat(subSection as string)}
    />
  );
}
