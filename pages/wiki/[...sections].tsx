import Head from 'next/head';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import ArticleContent from '../../components/article/ArticleContent';
import { formatFileName, reverseFileName } from '../../helpers/fileHelpers';

export default function Article(): ReactElement {
  const router = useRouter();
  const { sections } = router.query;
  const nonEmptySections = (sections as string[])?.filter((a) => a) ?? [];

  if (!nonEmptySections.length) {
    return null;
  }

  const formatedArticle = formatFileName(nonEmptySections.join('/'));

  return (
    <>
      <Head>
        <title>
          {nonEmptySections.map((a) => reverseFileName(a)).join(' - ')}
        </title>
      </Head>
      <ArticleContent articleTitle={formatedArticle} />;
    </>
  );
}
