import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

import articles from '../../data/articles.json';
import { formatFileName, reverseFileName } from '../../helpers/fileHelpers';

type Props = {
  article: ArticleContent;
};

type ArticleContent = {
  html: string;
  categories: string[];
};

export default function Article({ article }: Props): ReactElement {
  const router = useRouter();
  const { sections } = router.query;
  const nonEmptySections = (sections as string[])?.filter((a) => a) ?? [];

  if (!article?.html) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          {nonEmptySections.map((a) => reverseFileName(a)).join(' - ')}
        </title>
      </Head>

      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: article.html }} />
    </>
  );
}

type PathParams = {
  sections: string[];
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => ({
  paths: articles.map((article) => ({
    params: { sections: article.split('/').map((a) => formatFileName(a)) },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, PathParams> = async ({
  params,
}) => {
  async function loadArticleContent(title: string): Promise<ArticleContent> {
    try {
      const { default: data } = await import(
        `../../data/articlesContent/${title}.json`
      );

      return data;
    } catch (e) {
      return {
        html: '',
        categories: [],
      };
    }
  }

  const title = formatFileName(params.sections.join('/'));

  return {
    props: {
      article: await loadArticleContent(title),
    },
  };
};
