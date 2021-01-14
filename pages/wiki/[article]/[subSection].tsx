import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import ArticleContent from '../../../components/article/ArticleContent';

export default function Child(): ReactElement {
  const router = useRouter();
  const { article, subSection } = router.query;
  const formatedSubsection = subSection as string;

  if (!article || !subSection) {
    return null;
  }

  const formatedArticle = (article as string).split('_').join(' ');

  return (
    <>
      <Head>
        <title>
          {formatedArticle} - {formatedSubsection}
        </title>
      </Head>
      <ArticleContent
        articleTitle={formatedArticle.concat('++').concat(formatedSubsection)}
      />
    </>
  );
}
