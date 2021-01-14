import Head from 'next/head';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import CategoryArticles from '../../components/category/CategoryArticles';
import SubCategories from '../../components/category/SubCategories';

export default function Category(): ReactElement {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>

      <h1>Category : {category}</h1>
      <SubCategories category={category as string} />
      <CategoryArticles category={category as string} />
    </>
  );
}
