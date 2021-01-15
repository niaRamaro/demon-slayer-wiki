import Head from 'next/head';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import ArticleContent from '../../../components/article/ArticleContent';
import { formatFileName, reverseFileName } from '../../../helpers/fileHelpers';

export default function Child(): ReactElement {
  const router = useRouter();
  const { article, subSection } = router.query;

  if (!article || !subSection) {
    return null;
  }

  const fullFormatedArticle = formatFileName(`${article}/${subSection}`);

  return (
    <>
      <Head>
        <title>
          {reverseFileName(article as string)} -{' '}
          {reverseFileName(subSection as string)}
        </title>
      </Head>
      <ArticleContent articleTitle={fullFormatedArticle} />
    </>
  );
}
