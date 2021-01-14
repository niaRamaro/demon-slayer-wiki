import Head from 'next/head';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import ArticleContent from '../../../components/article/ArticleContent';

export default function Article(): ReactElement {
  const router = useRouter();
  const { article } = router.query;

  if (!article) {
    return null;
  }

  const formatedArticle = (article as string).split('_').join(' ');

  return (
    <>
      <Head>
        <title>{formatedArticle}</title>
      </Head>
      <ArticleContent articleTitle={formatedArticle} />;
    </>
  );
}
