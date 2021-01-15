import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import ArticleList from '../../components/article/ArticleList';
import CategoryList from '../../components/category/CategoryList';
import allSubCategories from '../../data/subCategories.json';
import categories from '../../data/categories.json';
import { ArticleItem } from '../../components/article/ArticleListItem';
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
  const { category } = router.query;
  const formatedCategory = reverseFileName(category as string);

  return (
    <>
      <Head>
        <title>{formatedCategory}</title>
      </Head>

      <h1>Category : {formatedCategory}</h1>

      <h3>Subcategories</h3>
      <CategoryList categories={subCategories} />

      <h3>Articles</h3>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: categories.map((category) => ({
    params: { category: formatFileName(category) },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
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
      subCategories: allSubCategories[params.category as string],
      articles: await loadArticles(params.category as string),
    },
  };
};
