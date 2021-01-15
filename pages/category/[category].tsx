import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import ArticleList from '../../components/article/ArticleList';
import CategoryList from '../../components/category/CategoryList';
import allSubCategories from '../../data/subCategories.json';
import categories from '../../data/categories.json';
import { ArticleItem } from '../../components/article/ArticleListItem';
import { SetPageNameContext } from '../../components/common/Layout';
import { formatFileName, reverseFileName } from '../../helpers/fileHelpers';

type Props = {
  subCategories: string[];
  articles: ArticleItem[];
};

export default function Category({
  subCategories,
  articles,
}: Props): ReactElement {
  const router = useRouter();
  const setPageName = useContext(SetPageNameContext);

  const { category } = router.query;
  const formatedCategory = reverseFileName(category as string);

  useEffect(() => {
    setPageName(`Category : ${formatedCategory}`);
  }, [subCategories, articles]);

  return (
    <>
      <Head>
        <title>{formatedCategory}</title>
      </Head>

      {subCategories?.length && (
        <>
          <h3>Subcategories</h3>
          <CategoryList categories={subCategories} />
        </>
      )}

      {articles?.length && (
        <>
          <h3>Articles</h3>
          <ArticleList articles={articles} />
        </>
      )}
    </>
  );
}

type PathParams = {
  category: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => ({
  paths: categories.map((category) => ({
    params: { category: formatFileName(category) },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, PathParams> = async ({
  params,
}) => {
  async function loadArticles(category: string) {
    const categoryFileName = formatFileName(category);

    try {
      const { default: data } = await import(
        `../../data/articlesByCategory/${categoryFileName}.json`
      );

      return data;
    } catch (e) {
      return [];
    }
  }

  return {
    props: {
      subCategories: allSubCategories[params.category] || null,
      articles: await loadArticles(params.category),
    },
  };
};
