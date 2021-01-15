import Head from 'next/head';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import CategoryArticles from '../../components/category/CategoryArticles';
import SubCategories from '../../components/category/SubCategories';
import { reverseFileName } from '../../helpers/fileHelpers';

export default function Category(): ReactElement {
  const router = useRouter();
  const { category } = router.query;
  const formatedCategory = reverseFileName(category as string);

  return (
    <>
      <Head>
        <title>{formatedCategory}</title>
      </Head>

      <h1>Category : {formatedCategory}</h1>
      <SubCategories category={formatedCategory} />
      <CategoryArticles category={formatedCategory} />
    </>
  );
}
