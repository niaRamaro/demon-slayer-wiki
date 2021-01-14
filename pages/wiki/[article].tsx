import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import ArticleContent from '../../components/article/ArticleContent';

export default function Article(): ReactElement {
  const router = useRouter();
  const { article } = router.query;

  return <ArticleContent articleTitle={article as string} />;
}
