import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useEffect, useState } from 'react';

import formatFileName from '../../helpers/fileHelpers';

type Props = {
  category: string;
};

export default function CategoryArticles({ category }: Props): ReactElement {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      const categoryFileName = formatFileName(category);

      try {
        const { default: data } = await import(
          `../../data/articlesByCategory/${categoryFileName}.json`
        );
        setArticles(data);
      } catch (e) {
        setArticles([]);
      }
    }

    loadArticles();
  }, [category]);

  if (!articles?.length) {
    return null;
  }

  return (
    <>
      <h3>Articles</h3>
      <ul>
        {articles.map(({ title, thumbnail }) => (
          <Link key={title} href={`/wiki/${encodeURIComponent(title)}`}>
            <li>
              <Image
                src={thumbnail}
                alt={title}
                width={150}
                height={150}
                objectFit="contain"
              />
              <div>{title}</div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
